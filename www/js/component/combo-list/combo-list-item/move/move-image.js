// @flow

import {inputMoveMap} from '../../../../move-type/combo-input-type';

import arrowUp from './image/main/arrow-up.svg';
import arrowDown from './image/main/arrow-down.svg';
import arrowLeft from './image/main/arrow-left.svg';
import arrowRight from './image/main/arrow-right.svg';
import arrowUpLeft from './image/main/arrow-up-left.svg';
import arrowUpRight from './image/main/arrow-up-right.svg';
import arrowDownLeft from './image/main/arrow-down-left.svg';
import arrowDownRight from './image/main/arrow-down-right.svg';

import ps1 from './image/ps/1.png';
import ps2 from './image/ps/2.png';
import ps3 from './image/ps/3.png';
import ps4 from './image/ps/4.png';

const directionImageMap = {
    [inputMoveMap.up]: arrowUp,
    [inputMoveMap.down]: arrowDown,
    [inputMoveMap.back]: arrowLeft,
    [inputMoveMap.ford]: arrowRight,
    [inputMoveMap.upFord]: arrowUpRight,
    [inputMoveMap.downFord]: arrowDownRight,
    [inputMoveMap.upBack]: arrowUpLeft,
    [inputMoveMap.downBack]: arrowDownLeft,
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
    [inputMoveMap.i1n]: ps1,
    [inputMoveMap.i2n]: ps2,
    [inputMoveMap.i3n]: ps3,
    [inputMoveMap.i4n]: ps4,
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
