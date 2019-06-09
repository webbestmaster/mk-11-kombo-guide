// @flow

import {trim} from '../lib/string-helper';

import type {ComboInputSingleType} from './combo-input-type';
import {inputMoveMap} from './combo-input-type';

const downPlusBlockString = 'd+block';

const {
    iR1,
    iR2,
    iL1,
    iL2,
    upFord,
    upBack,
    downFord,
    downBack,
    hold,
    ori,
    comma,
    plus,
    up,
    down,
    back,
    ford,
    i1n,
    i2n,
    i3n,
    i4n,
    rapidly,
} = inputMoveMap;

const inputList = [
    'amp',
    'block',
    'throw',
    'ss',
    'rapidly press',
    'u+f',
    'u+b',
    'd+f',
    'd+b',
    'f+u',
    'b+u',
    'f+d',
    'b+d',
    'hold',
    'or',
    '+',
    ',',
    'u',
    'd',
    'b',
    'f',
    '1',
    '2',
    '3',
    '4',
];

const inputMap = {
    amp: iR1,
    block: iR2,
    'throw': iL1,
    // eslint-disable-next-line id-length
    ss: iL2,
    'rapidly press': rapidly,

    'u+f': upFord,
    'u+b': upBack,
    'd+f': downFord,
    'd+b': downBack,

    'f+u': upFord,
    'b+u': upBack,
    'f+d': downFord,
    'b+d': downBack,

    hold,
    // eslint-disable-next-line id-length
    or: ori,
    '+': plus,
    ',': comma,

    // eslint-disable-next-line id-length
    u: up,
    // eslint-disable-next-line id-length
    d: down,
    // eslint-disable-next-line id-length
    b: back,
    // eslint-disable-next-line id-length
    f: ford,

    '1': i1n,
    '2': i2n,
    '3': i3n,
    '4': i4n,
};

export function getSequence(rawSequence: string, accum: Array<ComboInputSingleType>): Array<ComboInputSingleType> {
    const normalizedString = trim(rawSequence).toLowerCase();

    if (normalizedString === '') {
        return accum;
    }

    if (normalizedString.startsWith(downPlusBlockString)) {
        accum.push(down, plus, iR2);
        return getSequence(normalizedString.replace(downPlusBlockString, ''), accum);
    }

    // eslint-disable-next-line no-loops/no-loops
    for (const input of inputList) {
        if (normalizedString.startsWith(input)) {
            accum.push(inputMap[input]);
            return getSequence(normalizedString.replace(input, ''), accum);
        }
    }

    throw new Error(`Can not detect input: '${normalizedString}'`);
}

// test
console.log('Start getSequence test');
console.assert(getSequence('1', []).join() === [i1n].join());
console.assert(getSequence('B+3,1,2', []).join() === [back, plus, i3n, comma, i1n, comma, i2n].join());
console.assert(
    getSequence('Throw+F or F+1+3', []).join() === [iL1, plus, ford, ori, ford, plus, i1n, plus, i3n].join()
);
console.log('End getSequence test');
