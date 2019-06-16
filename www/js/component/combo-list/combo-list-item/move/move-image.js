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

import uni1 from './image/universal/1.svg';
import uni2 from './image/universal/2.svg';
import uni3 from './image/universal/3.svg';
import uni4 from './image/universal/4.svg';

import ps1 from './image/ps/1.png';
import ps2 from './image/ps/2.png';
import ps3 from './image/ps/3.png';
import ps4 from './image/ps/4.png';

import xBox1 from './image/xbox/1.png';
import xBox2 from './image/xbox/2.png';
import xBox3 from './image/xbox/3.png';
import xBox4 from './image/xbox/4.png';

/*
import signPlus from './image/main/sign-plus.svg';
import signOr from './image/main/sign-or.svg';
import signHold from './image/main/sign-hold.svg';
import singRapidlyPress from './image/main/sign-rapidly-press.svg';
import singRapidly from './image/main/sign-rapidly.svg';
import signComma from './image/main/sign-comma.svg';
*/

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

/*
const additionalImageMap = {
    [inputMoveMap.plus]: signPlus,
    [inputMoveMap.ori]: signOr,
    [inputMoveMap.hold]: signHold,
    [inputMoveMap.comma]: signComma,
    [inputMoveMap.rapidlyPress]: singRapidlyPress,
    [inputMoveMap.rapidly]: singRapidly,
};
*/

const mainImageMap = {
    ...directionImageMap,
    // ...additionalImageMap,
};

export const imageInputMapUniversal = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: uni1,
    [inputMoveMap.i2n]: uni2,
    [inputMoveMap.i3n]: uni3,
    [inputMoveMap.i4n]: uni4,
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
    [inputMoveMap.i1n]: xBox1,
    [inputMoveMap.i2n]: xBox2,
    [inputMoveMap.i3n]: xBox3,
    [inputMoveMap.i4n]: xBox4,
    [inputMoveMap.iL1]: 'LB',
    [inputMoveMap.iL2]: 'LT',
    [inputMoveMap.iR1]: 'RB',
    [inputMoveMap.iR2]: 'RT',
};
