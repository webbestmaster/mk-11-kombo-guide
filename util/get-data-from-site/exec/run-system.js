// @flow

import puppeteer, {Browser, InterceptedRequest, Page} from 'puppeteer';

import {getDataConst} from '../const';

function blockImageRequest(interceptedRequest: InterceptedRequest) {
    if (interceptedRequest.resourceType() === 'image') {
        interceptedRequest.abort();
        return;
    }
    interceptedRequest.continue();
}

export async function runSystem(): Promise<{page: Page, browser: Browser}> {
    const {width, height} = getDataConst.window.size;

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        args: [
            `--window-size=${width},${height}`,
            '--window-position=0,0',
            '--disable-infobars',
            '--allow-insecure-localhost',
            '--disable-gpu',
        ],
    });

    const [page] = await browser.pages();

    await page.setRequestInterception(true);

    page.on<InterceptedRequest>('request', blockImageRequest);

    await page.setViewport({width, height});

    return {page, browser};
}
