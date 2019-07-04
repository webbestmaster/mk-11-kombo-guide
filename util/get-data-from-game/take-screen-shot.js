// @flow

import screenShot from 'screenshot-desktop';

export async function takeScreenShot(filePath: string) {
    await screenShot({format: 'png', filename: `${filePath}.png`});
}

takeScreenShot('test1');
