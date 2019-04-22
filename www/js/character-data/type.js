// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'l' | 'r';
type ComboInputMoveType = '1' | '2' | '3' | '4';
type ComboInputCompoundMoveType = '1+2' | '2+4' | '4+3' | '3+1';
type ComboInputType = ComboInputDirectionType | ComboInputMoveType | ComboInputCompoundMoveType; // [[b,1], 2, [u, 2]] => b1, 2, u2

type NaType = 'N/A';
export const naValue: NaType = 'N/A';

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
    +startUp: number | NaType,
    +active: number | NaType,
    +recover: number | NaType,
    +hitAdvance: number | NaType,
    +blockAdvance: number | NaType,
    +cancel: number | NaType,
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
    +type: MoveType | NaType,
    +hitDamage: number | NaType,
    +blockDamage: number | NaType,
|};

type ComboType = {|
    +sequence: Array<ComboInputType | [ComboInputType, ComboInputType]>,
    +variationList: Array<LangKeyType>,
    +frameData: FrameDataType,
    +moveData: MoveDataType,
    +availableForVariationList: Array<LangKeyType>,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: LangKeyType,
    +description: LangKeyType,
    +normalMoveList: Array<ComboType>,
    +comboList: Array<ComboType>,
    +specialMoveList: Array<ComboType>,
    +variationList: Array<LangKeyType>,
|};
