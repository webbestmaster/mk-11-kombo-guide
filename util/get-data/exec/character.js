// @flow

import {Page} from 'puppeteer';

import {getDataConst} from '../const';
import {isNotString} from '../../../www/js/lib/is';
import type {CharacterType, ComboType} from '../../../www/js/character-data/character-type';

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

export async function getCharacterData(characterId: string, page: Page): Promise<{}> {
    await page.goto(`${getDataConst.url.root}/${characterId}`);
    const nameNode = await page.$('.inner-page-content-location .entry-title');

    if (!nameNode) {
        throw new Error('Can not find node with name');
    }

    const name = await (await nameNode.getProperty('innerHTML')).jsonValue();

    const character = {
        id: characterId,
        imagePath: './face.png',
        name,
        abilityList: [],
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
            brutalityList: [],
        },
    };

    console.log(character);

    return {};
}
