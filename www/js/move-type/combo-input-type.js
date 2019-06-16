// @flow

type ComboInputDirectionType = 'u' | 'd' | 'b' | 'f' | 'uf' | 'df' | 'ub' | 'db';
type ComboInputMoveType = '1' | '2' | '3' | '4';
type ComboInputFrontType = 'l1' | 'l2' | 'r1' | 'r2';
type ComboInputAdditionalType = '+' | '|' | 'hold' | 'rapidly press' | 'rapidly' | ',';
export type ComboInputSingleType =
    | ComboInputDirectionType
    | ComboInputMoveType
    | ComboInputFrontType
    | ComboInputAdditionalType;

export const moveInputList: Array<ComboInputMoveType> = ['1', '2', '3', '4'];

export const directionInputList: Array<ComboInputDirectionType> = ['u', 'd', 'b', 'f', 'uf', 'df', 'ub', 'db'];

export const frontInputList: Array<ComboInputFrontType> = ['l1', 'l2', 'r1', 'r2'];

export const additionalInputList: Array<ComboInputAdditionalType> = ['+', '|', 'hold', 'rapidly press', 'rapidly', ','];

export const inputMoveMap: {[key: string]: ComboInputSingleType} = {
    // ComboInputDirectionType
    up: 'u',
    down: 'd',
    back: 'b',
    ford: 'f',
    upFord: 'uf',
    downFord: 'df',
    upBack: 'ub',
    downBack: 'db',

    // ComboInputMoveType
    i1n: '1',
    i2n: '2',
    i3n: '3',
    i4n: '4',
    iL1: 'l1',
    iL2: 'l2',
    iR1: 'r1',
    iR2: 'r2',

    // additional move icon
    plus: '+',
    ori: '|',
    hold: 'hold',
    rapidlyPress: 'rapidly press',
    rapidly: 'rapidly',
    comma: ',',
};
