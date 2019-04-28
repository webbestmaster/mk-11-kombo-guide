// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'l' | 'r' | 'ur' | 'dr' | 'ul' | 'dl';
type ComboInputMoveType = '1' | '2' | '3' | '4';
type ComboInputAdditionalType = '+';
export type ComboInputSingleType = ComboInputDirectionType | ComboInputMoveType | ComboInputAdditionalType;
export type ComboInputType =
    | ComboInputSingleType
    | [ComboInputSingleType, ComboInputSingleType]
    | [ComboInputSingleType, ComboInputSingleType, ComboInputSingleType];

type NaType = 'N/A';
export const naValue: NaType = 'N/A';

type MayBeNaType<BasicType> = BasicType | NaType;

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

    // additional move icon
    +plus: '+',
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

    // additional move icon
    plus: '+',
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

type MoveType = 'low' | 'mid' | 'high' | 'overhead' | 'throw' | 'unblockable';

export const moveTypeMap: {+[key: string]: MoveType} = {
    low: 'low',
    mid: 'mid',
    hgh: 'high',
    ovh: 'overhead',
    thr: 'throw',
    unb: 'unblockable',
};

type MoveDataType = {|
    +type: MayBeNaType<MoveType>,
    +hitDamage: MayBeNaType<number>,
    +blockDamage: MayBeNaType<number>,
    +flawlessBlockDamage: MayBeNaType<number>,
|};

export type ComboType = {|
    +name: LangKeyType,
    +sequence: Array<ComboInputType>,
    +moveData: MoveDataType,
    +frameData: FrameDataType,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: LangKeyType,
    +normalMoveList: Array<ComboType>,
    +comboMoveList: Array<ComboType>,
    +specialMoveList: Array<ComboType>,
|};
