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

import pc1 from './image/pc/1.svg';
import pc2 from './image/pc/2.svg';
import pc3 from './image/pc/3.svg';
import pc4 from './image/pc/4.svg';
import pcL1 from './image/pc/l-1.svg';
import pcL2 from './image/pc/l-2.svg';
import pcR1 from './image/pc/r-1.svg';
import pcR2 from './image/pc/r-2.svg';

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
    [inputMoveMap.i1n]: pc1,
    [inputMoveMap.i2n]: pc2,
    [inputMoveMap.i3n]: pc3,
    [inputMoveMap.i4n]: pc4,
    [inputMoveMap.iL1]: pcL1,
    [inputMoveMap.iL2]: pcL2,
    [inputMoveMap.iR1]: pcR1,
    [inputMoveMap.iR2]: pcR2,
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
