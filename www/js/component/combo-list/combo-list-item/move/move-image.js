// @flow

import {inputMoveMap} from '../../../../move-type/combo-input-type';

const directionImageMap = {
    [inputMoveMap.up]: '3',
    [inputMoveMap.down]: '4',
    [inputMoveMap.back]: '2',
    [inputMoveMap.ford]: '1',
    [inputMoveMap.upFord]: '5',
    [inputMoveMap.downFord]: '6',
    [inputMoveMap.upBack]: '7',
    [inputMoveMap.downBack]: '8',
};

const mainImageMap = {
    ...directionImageMap,
};

export const imageInputMapUniversal = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: '1',
    [inputMoveMap.i2n]: '2',
    [inputMoveMap.i3n]: '3',
    [inputMoveMap.i4n]: '4',
    [inputMoveMap.iL1]: 'TH',
    [inputMoveMap.iL2]: 'SS',
    [inputMoveMap.iR1]: 'IN',
    [inputMoveMap.iR2]: 'BL',
};

export const imageInputMapPs = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: 'S',
    [inputMoveMap.i2n]: 'T',
    [inputMoveMap.i3n]: 'X',
    [inputMoveMap.i4n]: 'C',
    [inputMoveMap.iL1]: 'L1',
    [inputMoveMap.iL2]: 'L2',
    [inputMoveMap.iR1]: 'R1',
    [inputMoveMap.iR2]: 'R2',
};

export const imageInputMapXBox = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: 'X',
    [inputMoveMap.i2n]: 'Y',
    [inputMoveMap.i3n]: 'A',
    [inputMoveMap.i4n]: 'B',
    [inputMoveMap.iL1]: 'LB',
    [inputMoveMap.iL2]: 'LT',
    [inputMoveMap.iR1]: 'RB',
    [inputMoveMap.iR2]: 'RT',
};
