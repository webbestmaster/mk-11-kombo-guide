// @flow

import type {Browser, InterceptedRequest, Page} from 'puppeteer';

import {runSystem} from './exec/run-system';
import {getCharacterData, getCharacterList} from './exec/character';
import {writeCharacterFile} from './helper';

(async () => {
    const {page, browser} = await runSystem();
    // TODO: uncomment me
    // const characterDataList = await getCharacterList(page);
    const characterDataList = [(await getCharacterList(page))[3]];

    console.log('---> character-list:');
    console.log(characterDataList);

    // eslint-disable-next-line no-loops/no-loops
    for (const characterDataInList of characterDataList) {
        console.log(`---> ${characterDataInList.id} - BEGIN`);
        const characterData = await getCharacterData(characterDataInList.id, page);

        await writeCharacterFile(characterData);
        console.log(`---> ${characterDataInList.id} - DONE`);
    }

    await browser.close();
})();
