// @flow

import {Page} from 'puppeteer';

import {getDataConst} from '../const';
import {isNotString} from '../../../www/js/lib/is';

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
