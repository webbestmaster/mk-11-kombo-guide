// @flow

import keySender from 'node-key-sender';

keySender.setOption('globalDelayPressMillisec', 1000);

export function sendKeys(keys: string | Array<string>): Promise<mixed> {
    if (Array.isArray(keys)) {
        return keySender.sendKeys(keys);
    }

    if (keys.length === 1) {
        return keySender.sendKey(keys);
    }

    return keySender.sendText(keys);
}

sendKeys(['1', '2', '3', '4']);
