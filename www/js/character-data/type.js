// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'l' | 'r';
type ComboInputMoveType = '1' | '2' | '3' | '4';
type ComboInputCompoundMoveType = '1+2' | '2+4' | '4+3' | '3+1';
type ComboInputType = ComboInputDirectionType | ComboInputMoveType | ComboInputCompoundMoveType; // [[b,1], 2, [u, 2]] => b1, 2, u2

type NaType = 'N/A';
export const naValue: NaType = 'N/A';

export const input: {+[key: string]: ComboInputType} = {
    /* eslint-disable id-match, id-length */
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
    /* eslint-enable id-match, id-length */
};

type FrameDataType = {|
    +startUp: number | NaType,
    +active: number | NaType,
    +recover: number | NaType,
    +hitAdvance: number | NaType,
    +blockAdvance: number | NaType,
    +cancel: number | NaType,
|};

type ComboType = {|
    +sequence: Array<ComboInputType>,
    +variationList: Array<LangKeyType>,
    +frameData: FrameDataType,
|};

export type CharacterType = {|
    +imagePath: string,
    +name: LangKeyType,
    +description: LangKeyType,
    +comboList: Array<ComboType>,
|};
