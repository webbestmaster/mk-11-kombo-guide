// @flow

import type {Browser, InterceptedRequest, Page} from 'puppeteer';

import {runSystem} from './exec/run-system';
import {getCharacterData, getCharacterList} from './exec/character';

(async () => {
    const {page, browser} = await runSystem();
    // TODO: uncomment me
    // const characterDataList = await getCharacterList(page);
    const characterDataList = [{id: 'baraka', name: 'some name'}];

    console.log('---> character-list:');
    console.log(characterDataList);

    // eslint-disable-next-line no-loops/no-loops
    for (const characterDataInList of characterDataList) {
        const characterData = await getCharacterData(characterDataInList.id, page);

        console.log(characterData);
    }
})();
