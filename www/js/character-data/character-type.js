// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'l' | 'r';
type ComboInputMoveType = '1' | '2' | '3' | '4';
type ComboInputCompoundMoveType = '1+2' | '2+4' | '4+3' | '3+1';
type ComboInputType = ComboInputDirectionType | ComboInputMoveType | ComboInputCompoundMoveType; // [[b,1], 2, [u, 2]] => b1, 2, u2

type NaType = 'N/A';
export const naValue: NaType = 'N/A';

type MayBeNaType<BasicType> = BasicType | NaType;

export const inputMoveMap: {+[key: string]: ComboInputType} = {
    // ComboInputDirectionType
    iUp: 'u',
    iDn: 'd',
    iLt: 'l',
    iRt: 'r',

    // ComboInputMoveType
    i1n: '1',
    i2n: '2',
    i3n: '3',
    i4n: '4',

    // ComboInputCompoundMoveType
    i12: '1+2',
    i24: '2+4',
    i43: '4+3',
    i31: '3+1',
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
    +sequence: Array<ComboInputType | [ComboInputType, ComboInputType]>,
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    // +availableForVariationList: Array<LangKeyType> | null,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: LangKeyType,
    // +description: LangKeyType,
    +normalMoveList: Array<ComboType>,
    +comboMoveList: Array<ComboType>,
    +specialMoveList: Array<ComboType>,
    // +variationList: Array<LangKeyType>,
|};
