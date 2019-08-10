// @flow

import {promises as fsPromises} from 'fs';

import {takeScreenShot} from './take-screen-shot';

const directory = {
    root: './game-screen-shots',
    list: ['basic', 'combo', 'spec', 'finish'],
};

async function collectScreenShotList() {
    await fsPromises.mkdir(directory.root);

    // eslint-disable-next-line no-loops/no-loops
    for (const directoryName of directory.list) {
        await fsPromises.mkdir(directory.root + '/' + directoryName);
        await takeScreenShot(directory.root + '/' + directoryName + '/1.png');
    }
}

collectScreenShotList();
