// @flow

import type {Browser, InterceptedRequest, Page} from 'puppeteer';

import {runSystem} from './exec/run-system';
import {getCharacterList} from './exec/character';

(async () => {
    const {page, browser} = await runSystem();
    const characterDataList = await getCharacterList(page);

    console.log('---> character-list:');
    console.log(characterDataList);
})();
