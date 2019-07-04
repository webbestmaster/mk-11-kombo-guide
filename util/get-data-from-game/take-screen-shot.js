// @flow

import screenShot from 'screenshot-desktop';

import {waitTime} from '../wait';

const screenShotTimeOut = 100;

export async function takeScreenShot(filePath: string): Promise<string> {
    await waitTime(screenShotTimeOut);
    await screenShot({format: 'png', filename: filePath});
    await waitTime(screenShotTimeOut);

    return filePath;
}
