// @flow

import type {ComboType} from '../move-type/combo-type';

export type CharacterMoveType = {|
    +basicList: Array<ComboType>,
    +jumpingAttackList: Array<ComboType>,
    +hopAttackList: Array<ComboType>,
    +getUpAttackList: Array<ComboType>,
    +flawlessBlockAttacksList: Array<ComboType>,
    +throwsList: Array<ComboType>,
    +rollEscapeList: Array<ComboType>,
    +airEscapeList: Array<ComboType>,
    +comboList: Array<ComboType>,
    +specialList: Array<ComboType>,
    +fatalBlowList: Array<ComboType>,
    +fatalityList: Array<ComboType>,
    +brutalityList: Array<ComboType>,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: string,
    +move: CharacterMoveType,
|};
