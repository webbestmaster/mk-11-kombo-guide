// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'l' | 'r';
type ComboInputMoveType = '1' | '2' | '3' | '4';
type ComboInputCompoundMoveType = '1+2' | '2+3' | '3+4' | '1+4';
type ComboInputType = ComboInputDirectionType | ComboInputMoveType | ComboInputCompoundMoveType; // [[b,1], 2, [u, 2]] => b1, 2, u2

type NaType = 'N/A';
export const naValue: NaType = 'N/A';

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
