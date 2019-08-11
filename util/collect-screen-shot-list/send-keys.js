// @flow

import {exec, type ExecResultType} from '../exec';

export function pressDown(): Promise<ExecResultType> {
    console.log('pressDown');
    return exec('go run ./util/collect-screen-shot-list/press-key.go down');
}

export function shiftTab(): Promise<ExecResultType> {
    console.log('shiftTab');
    return exec('go run ./util/collect-screen-shot-list/press-key.go switch-tab');
}
