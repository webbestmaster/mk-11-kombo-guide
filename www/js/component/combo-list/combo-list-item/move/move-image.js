// @flow

import {inputMoveMap} from '../../../../character-data/character-type';

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
import uniL1 from './image/universal/l-1.svg';
import uniL2 from './image/universal/l-2.svg';
import uniR1 from './image/universal/r-1.svg';
import uniR2 from './image/universal/r-2.svg';

import ps1 from './image/ps/1.svg';
import ps2 from './image/ps/2.svg';
import ps3 from './image/ps/3.svg';
import ps4 from './image/ps/4.svg';
import psL1 from './image/ps/l-1.svg';
import psL2 from './image/ps/l-2.svg';
import psR1 from './image/ps/r-1.svg';
import psR2 from './image/ps/r-2.svg';

import xBox1 from './image/xbox/1.svg';
import xBox2 from './image/xbox/2.svg';
import xBox3 from './image/xbox/3.svg';
import xBox4 from './image/xbox/4.svg';
import xBoxL1 from './image/xbox/l-1.svg';
import xBoxL2 from './image/xbox/l-2.svg';
import xBoxR1 from './image/xbox/r-1.svg';
import xBoxR2 from './image/xbox/r-2.svg';

import signPlus from './image/main/sign-plus.svg';
import signOr from './image/main/sign-or.svg';
import signHold from './image/main/sign-hold.svg';

/*
export type InputImageMapType = {|
    // ComboInputDirectionType
    +iUp: string,
    +iDn: string,
    +iLt: string,
    +iRt: string,
    +iUpRt: string,
    +iDnRt: string,
    +iUpLt: string,
    +iDnLt: string,

    // ComboInputMoveType
    +i1n: string,
    +i2n: string,
    +i3n: string,
    +i4n: string,
|};
*/

const directionImageMap = {
    [inputMoveMap.iUp]: arrowUp,
    [inputMoveMap.iDn]: arrowDown,
    [inputMoveMap.iLt]: arrowLeft,
    [inputMoveMap.iRt]: arrowRight,
    [inputMoveMap.iUpRt]: arrowUpRight,
    [inputMoveMap.iDnRt]: arrowDownRight,
    [inputMoveMap.iUpLt]: arrowUpLeft,
    [inputMoveMap.iDnLt]: arrowDownLeft,
    [inputMoveMap.ori]: signOr,
    [inputMoveMap.hold]: signHold,
};

const additionalImageMap = {
    [inputMoveMap.plus]: signPlus,
};

const mainImageMap = {
    ...directionImageMap,
    ...additionalImageMap,
};

export const imageInputMapPc = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: uni1,
    [inputMoveMap.i2n]: uni2,
    [inputMoveMap.i3n]: uni3,
    [inputMoveMap.i4n]: uni4,
    [inputMoveMap.iL1]: uniL1,
    [inputMoveMap.iL2]: uniL2,
    [inputMoveMap.iR1]: uniR1,
    [inputMoveMap.iR2]: uniR2,
};

export const imageInputMapPs = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: ps1,
    [inputMoveMap.i2n]: ps2,
    [inputMoveMap.i3n]: ps3,
    [inputMoveMap.i4n]: ps4,
    [inputMoveMap.iL1]: psL1,
    [inputMoveMap.iL2]: psL2,
    [inputMoveMap.iR1]: psR1,
    [inputMoveMap.iR2]: psR2,
};

export const imageInputMapXBox = {
    ...mainImageMap,

    // ComboInputMoveType
    [inputMoveMap.i1n]: xBox1,
    [inputMoveMap.i2n]: xBox2,
    [inputMoveMap.i3n]: xBox3,
    [inputMoveMap.i4n]: xBox4,
    [inputMoveMap.iL1]: xBoxL1,
    [inputMoveMap.iL2]: xBoxL2,
    [inputMoveMap.iR1]: xBoxR1,
    [inputMoveMap.iR2]: xBoxR2,
};
