// @flow

import {promises as fsPromises} from 'fs';

// eslint-disable-next-line max-len
import type {MoveDataTabNameType} from '../get-data-from-screen-shot/parse-screen-shot/get-move-data-tab/get-move-data-tab';

import {waitTime} from '../wait';
import {exec} from '../exec';

import {takeScreenShot} from './take-screen-shot';
import {pressDown, shiftTab} from './send-keys';

const directoryList: Array<MoveDataTabNameType> = ['basic', 'combo', 'special', 'finisher'];
const rootDirectoryPath = './game-screen-shots';

function getScreenShotPath(directoryName: MoveDataTabNameType, screenShotIndex: number): string {
    return rootDirectoryPath + '/' + directoryName + '/' + String(screenShotIndex).padStart(2, '0') + '.png';
}

async function collectTabScreenShot(directoryName: MoveDataTabNameType) {
    if (directoryList.indexOf(directoryName) !== 0) {
        await shiftTab();
        await waitTime(100);
    }

    // eslint-disable-next-line no-loops/no-loops
    for (let screenShotIndex = 0; screenShotIndex <= 3; screenShotIndex += 1) {
        await takeScreenShot(getScreenShotPath(directoryName, screenShotIndex));
        await waitTime(100);

        await pressDown();
        await waitTime(100);
    }
}

async function collectScreenShotList() {
    await exec('rm -rf ' + rootDirectoryPath);
    await fsPromises.mkdir(rootDirectoryPath);

    // eslint-disable-next-line no-loops/no-loops
    for (const directoryName of directoryList) {
        await fsPromises.mkdir(rootDirectoryPath + '/' + directoryName);
        await collectTabScreenShot(directoryName);
    }
}

collectScreenShotList();
