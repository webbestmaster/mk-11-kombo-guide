// @flow

// more info and method is here: https://www.npmjs.com/package/node-key-sender
// keycodes is here: https://www.npmjs.com/package/node-key-sender#list-of-key-codes

declare module 'node-key-sender' {
    declare type OptionKeyType =
        | 'globalDelayPressMillisec'
        | 'globalDelayBetweenMillisec'
        | 'startDelayMillisec'
        | 'caseCorrection';
    declare type OptionValueType = number | boolean;
    declare type AggregatedKeyboardLayoutType = {[key: string]: string};

    declare export default {
        setOption: (optionKey: OptionKeyType, optionValue: OptionValueType) => mixed,
        sendKey: (key: string) => Promise<mixed>,
        sendKeys: (keyList: Array<string>) => Promise<mixed>,
        sendText: (text: string) => Promise<mixed>,
        sendCombination: (keyList: Array<string>) => Promise<mixed>,
        aggregateKeyboardLayout: (aggregatedKeyboardLayout: AggregatedKeyboardLayoutType) => mixed,
    };
}
