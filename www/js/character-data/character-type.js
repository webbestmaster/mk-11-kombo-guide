// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'l' | 'r' | 'ur' | 'dr' | 'ul' | 'dl';
type ComboInputMoveType = '1' | '2' | '3' | '4' | 'l1' | 'l2' | 'r1' | 'r2';
type ComboInputAdditionalType = '+' | 'or' | 'hold';
export type ComboInputSingleType = ComboInputDirectionType | ComboInputMoveType | ComboInputAdditionalType;
export type ComboInputType =
    | ComboInputSingleType
    | [ComboInputSingleType, ComboInputSingleType]
    | [ComboInputSingleType, ComboInputSingleType, ComboInputSingleType];

type NaType = 'N/A';
export const naValue: NaType = 'N/A';

export type MayBeNaType<BasicType> = BasicType | NaType;

export type InputMoveMapType = {|
    // ComboInputDirectionType
    +iUp: 'u',
    +iDn: 'd',
    +iLt: 'l',
    +iRt: 'r',
    +iUpRt: 'ur',
    +iDnRt: 'dr',
    +iUpLt: 'ul',
    +iDnLt: 'dl',

    // ComboInputMoveType
    +i1n: '1',
    +i2n: '2',
    +i3n: '3',
    +i4n: '4',
    +iL1: 'l1',
    +iL2: 'l2',
    +iR1: 'r1',
    +iR2: 'r2',

    // additional move icon
    +plus: '+',
    +ori: 'or',
    +hold: 'hold',
|};

export const inputMoveMap: InputMoveMapType = {
    // ComboInputDirectionType
    iUp: 'u',
    iDn: 'd',
    iLt: 'l',
    iRt: 'r',
    iUpRt: 'ur',
    iDnRt: 'dr',
    iUpLt: 'ul',
    iDnLt: 'dl',

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
    ori: 'or',
    hold: 'hold',
};

type FrameDataType = {|
    +startUp: MayBeNaType<number>,
    +active: MayBeNaType<number>,
    +recover: MayBeNaType<number>,
    +hitAdvance: MayBeNaType<number>,
    +blockAdvance: MayBeNaType<number>,
    +flawlessBlockAdvance: MayBeNaType<number>,
    +cancel: MayBeNaType<number>,
|};

export type MoveType = MayBeNaType<'low' | 'mid' | 'high' | 'overhead' | 'throw' | 'unblockable'>;

export const moveTypeMap: {+[key: string]: MoveType} = {
    low: 'low',
    mid: 'mid',
    hgh: 'high',
    ovh: 'overhead',
    thr: 'throw',
    unb: 'unblockable',
    nta: naValue,
};

export const moveTypeTranslationMap: {[key: MoveType | NaType]: LangKeyType} = {
    [moveTypeMap.low]: 'MOVE_TYPE__LOW',
    [moveTypeMap.mid]: 'MOVE_TYPE__MID',
    [moveTypeMap.hgh]: 'MOVE_TYPE__HIGH',
    [moveTypeMap.ovh]: 'MOVE_TYPE__OVERHEAD',
    [moveTypeMap.thr]: 'MOVE_TYPE__THROW',
    [moveTypeMap.unb]: 'MOVE_TYPE__UNBLOCKABLE',
    [moveTypeMap.nta]: 'MOVE_TYPE__NOT_AVAILABLE',
};

type MoveDataType = {|
    +type: MoveType,
    +hitDamage: MayBeNaType<number>,
    +blockDamage: MayBeNaType<number>,
    +flawlessBlockDamage: MayBeNaType<number>,
|};

export type ComboType = {|
    +name: LangKeyType,
    +sequence: Array<ComboInputType>,
    +description: LangKeyType | '',
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    +extendedList: Array<ComboType>,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: LangKeyType,
    +normalMoveList: Array<ComboType>,
    +comboMoveList: Array<ComboType>,
    +specialMoveList: Array<ComboType>,
|};
