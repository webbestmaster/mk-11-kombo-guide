// @flow

import keySender from 'node-key-sender';

const globalDelayPressMillisec = 100;

keySender.setOption('globalDelayPressMillisec', globalDelayPressMillisec);

export function sendKeys(keys: string | Array<string>): Promise<mixed> {
    if (Array.isArray(keys)) {
        return keySender.sendKeys(keys);
    }

    if (keys.length === 1) {
        return keySender.sendKey(keys);
    }

    return keySender.sendText(keys);
}

export function pressDown(): Promise<mixed> {
    return keySender.sendKey('S');
}

export function shiftTab(): Promise<mixed> {
    return keySender.sendKey('R');
}
