// @flow

import type {Page, ElementHandle} from 'puppeteer';

import {getDataConst} from '../const';
import {isNotString, isString} from '../../../www/js/lib/is';
import type {
    CharacterMoveType,
    CharacterType,
    ComboInputType,
    ComboType,
    FrameDataType,
    MayBeNaType,
    MoveDataType,
    MoveType,
} from '../../../www/js/character-data/character-type';
import {trim} from '../helper';
import {ensureMoveType, moveTypeMap, naValue} from '../../../www/js/character-data/character-type';

export type CharacterDataType = {|
    +id: string,
    +name: string,
|};

export async function getCharacterList(page: Page): Promise<Array<CharacterDataType>> {
    await page.goto(getDataConst.url.root);
    const nodeList = await page.$$('#menu-characters a');
    const characterDataList = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const node of nodeList) {
        const hrefProperty = await (await node.getProperty('href')).jsonValue();
        const innerHtmlProperty = await (await node.getProperty('innerHTML')).jsonValue();

        if (isNotString(hrefProperty) || isNotString(innerHtmlProperty)) {
            throw new Error('hrefProperty and innerHtmlProperty should be a string');
        }

        const id = hrefProperty
            .split('/')
            .filter(Boolean)
            .pop();
        const name = innerHtmlProperty.trim();

        characterDataList.push({id, name});
    }

    return characterDataList;
}

export async function getCharacterData(characterId: string, page: Page): Promise<CharacterType> {
    await page.goto(`${getDataConst.url.root}/${characterId}`);
    const nameNode = await page.$('.inner-page-content-location .entry-title');

    if (!nameNode) {
        throw new Error('Can not find node with name');
    }

    const name = String(await (await nameNode.getProperty('innerHTML')).jsonValue());

    const character = {
        id: characterId,
        imagePath: './face.png',
        name,
        move: {
            basicList: [],
            jumpingAttackList: [],
            hopAttackList: [],
            getUpAttackList: [],
            flawlessBlockAttacksList: [],
            throwsList: [],
            rollEscapeList: [],
            airEscapeList: [],
            comboList: [],
            specialList: [],
            fatalBlowList: [],
            fatalityList: [],
            brutalityList: [],
        },
    };

    // parse basic
    await parseTable(character.move, page);

    // parse combo
    await page.goto(`${getDataConst.url.root}/${characterId}/?category=Kombo%20Attacks#1.2`);
    await parseTable(character.move, page);

    // parse special
    await page.goto(`${getDataConst.url.root}/${characterId}/?category=Special%20Moves#1.3`);
    await parseTable(character.move, page);

    // parse finishers
    await page.goto(`${getDataConst.url.root}/${characterId}/?category=Finishers#1.4`);
    await parseTable(character.move, page);

    return character;
}

// eslint-disable-next-line complexity
async function getStartPageComboList(characterMoveData: CharacterMoveType, page: Page): Promise<Array<ComboType>> {
    const pageNameNode = await page.$('#category .active');

    if (!pageNameNode) {
        throw new Error('Can not find node with page name');
    }
    const pageName = String(await (await pageNameNode.getProperty('innerHTML')).jsonValue());

    if (pageName === 'BASIC ATTACKS') {
        return characterMoveData.basicList;
    }

    if (pageName === 'KOMBO ATTACKS') {
        return characterMoveData.comboList;
    }

    if (pageName === 'SPECIAL MOVES') {
        return characterMoveData.specialList;
    }

    if (pageName === 'FINISHERS') {
        return characterMoveData.fatalityList;
    }

    throw new Error('Can not detect page name');
}

type RowDataHeaderType = {|
    +type: 'header',
    +text: string,
    +combo: null,
|};

type RowDataComboType = {|
    +type: 'combo',
    +text: string,
    +combo: ComboType,
|};

type RowDataType = RowDataHeaderType | RowDataComboType;

type NodeDataType = {|
    +html: string,
    +innerText: string,
    +innerTextList: Array<string>,
|};

async function getNodeData(rowNode: ElementHandle): Promise<NodeDataType> {
    const html = String(await (await rowNode.getProperty('outerHTML')).jsonValue());
    const innerText = String(await (await rowNode.getProperty('innerText')).jsonValue());
    const innerTextList = innerText
        .split('\n')
        .map(trim)
        .filter(Boolean);

    return {
        html,
        innerText,
        innerTextList,
    };
}

async function getCombo(rowNode: ElementHandle): Promise<ComboType> {
    const {html, innerTextList} = await getNodeData(rowNode);
    const comboName = innerTextList[0];

    const matchedHTML = html.replace(/\s+/g, ' ').match(/'[\S\s]*?'/g);

    if (matchedHTML === null) {
        throw new Error('Can not match html');
    }

    const rawData = matchedHTML.map((value: string): string => value.replace('\'', '').replace(/'$/g, ''));

    const [hitDamage, blockDamage, flawlessBlockDamage, moveType] = rawData;

    console.log(rawData);

    return {
        name: comboName,
        sequence: [],
        description: null,
        deepLevel: 0, // usual combo or subCombo
        moveData: {
            hitDamage: Number.isNaN(parseFloat(hitDamage)) ? naValue : parseFloat(hitDamage),
            blockDamage: Number.isNaN(parseFloat(blockDamage)) ? naValue : parseFloat(blockDamage),
            flawlessBlockDamage: Number.isNaN(parseFloat(flawlessBlockDamage))
                ? naValue
                : parseFloat(flawlessBlockDamage),
            type: ensureMoveType(moveType),
        },
        frameData: {
            startUp: naValue,
            active: naValue,
            recover: naValue,
            cancel: naValue,
            hitAdvance: naValue,
            blockAdvance: naValue,
            flawlessBlockAdvance: naValue,
        },
    };
}

async function parseRow(rowNode: ElementHandle): Promise<RowDataType> {
    const {innerTextList} = await getNodeData(rowNode);

    // detect header
    if (innerTextList.length === 1) {
        return {
            type: 'header',
            text: innerTextList[0],
            combo: null,
        };
    }

    // detect combo
    if (innerTextList.length === 2) {
        const comboName = innerTextList[0];
        const comboInput = innerTextList[1];

        return {
            type: 'combo',
            text: comboName + ' - ' + comboInput,
            combo: await getCombo(rowNode),
        };
    }

    throw new Error('Can not parse row');
}

// eslint-disable-next-line complexity
async function parseTable(characterMoveData: CharacterMoveType, page: Page) {
    const rowNodeList = await page.$$('#move_list tr');

    let comboList = await getStartPageComboList(characterMoveData, page);

    // eslint-disable-next-line no-loops/no-loops
    for (const rowNode of rowNodeList) {
        const rowData = await parseRow(rowNode);
        const {type, text} = rowData;

        if (type === 'header') {
            switch (text) {
                case 'JUMPING ATTACKS':
                    comboList = characterMoveData.jumpingAttackList;
                    break;
                case 'HOP ATTACKS':
                    comboList = characterMoveData.hopAttackList;
                    break;
                case 'GETUP ATTACKS':
                    comboList = characterMoveData.getUpAttackList;
                    break;
                case 'FLAWLESS BLOCK ATTACKS':
                    comboList = characterMoveData.flawlessBlockAttacksList;
                    break;
                case 'THROWS':
                    comboList = characterMoveData.throwsList;
                    break;
                case 'ROLL ESCAPES':
                    comboList = characterMoveData.throwsList;
                    break;
                case 'AIR ESCAPE':
                    comboList = characterMoveData.airEscapeList;
                    break;
                case 'FATAL BLOW':
                    comboList = characterMoveData.fatalBlowList;
                    break;
                case 'FATALITIES':
                    // Do nothing fatalities already defined by getStartPageComboList
                    break;
                case 'BRUTALITIES':
                    comboList = characterMoveData.brutalityList;
                    break;
                default:
                    throw new Error('Can not parse header');
            }
        }

        const {combo} = rowData;

        if (combo) {
            comboList.push(combo);
        }
    }
}
