// @flow

import type {LangKeyType} from '../component/locale/translation/type';

type ComboInputDirectionType = 'u' | 'd' | 'b' | 'f' | 'uf' | 'df' | 'ub' | 'db';
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
    +up: 'u',
    +down: 'd',
    +back: 'b',
    +ford: 'f',
    +upFord: 'uf',
    +downFord: 'df',
    +upBack: 'ub',
    +downBack: 'db',

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
    ori: 'or',
    hold: 'hold',
};

export type FrameDataType = {|
    +startUp: MayBeNaType<number>,
    +active: MayBeNaType<number>,
    +recover: MayBeNaType<number>,
    +cancel: MayBeNaType<number>,
    +hitAdvance: MayBeNaType<number>,
    +blockAdvance: MayBeNaType<number>,
    +flawlessBlockAdvance: MayBeNaType<number>,
|};

export type MoveType = 'low' | 'mid' | 'high' | 'overhead' | 'throw' | 'unblockable' | 'N/A Move';

export const moveTypeMap: {+[key: string]: MoveType} = {
    low: 'low',
    mid: 'mid',
    high: 'high',
    overhead: 'overhead',
    throwMove: 'throw',
    unblockable: 'unblockable',
    notAvailableMove: 'N/A Move',
};

export const moveTypeTranslationMap: {+[key: MoveType]: LangKeyType} = {
    [moveTypeMap.low]: 'MOVE_TYPE__LOW',
    [moveTypeMap.mid]: 'MOVE_TYPE__MID',
    [moveTypeMap.high]: 'MOVE_TYPE__HIGH',
    [moveTypeMap.overhead]: 'MOVE_TYPE__OVERHEAD',
    [moveTypeMap.throwMove]: 'MOVE_TYPE__THROW',
    [moveTypeMap.unblockable]: 'MOVE_TYPE__UNBLOCKABLE',
    [moveTypeMap.notAvailableMove]: 'MOVE_TYPE__NOT_AVAILABLE',
};

type MoveDataType = {|
    +hitDamage: MayBeNaType<number>,
    +blockDamage: MayBeNaType<number>,
    +flawlessBlockDamage: MayBeNaType<number>,
    +type: MoveType,
|};

export type MoveFeatureType = 'invulnerable' | 'parry' | 'projectile' | 'projectile invulnerable';

export const moveFeatureMap: {+[key: string]: MoveFeatureType} = {
    projectile: 'projectile',
    parry: 'parry',
    invul: 'invulnerable',
    projectileInvul: 'projectile invulnerable',
};

export type MoveFeatureDataType = {|
    +image: string,
    +name: LangKeyType,
|};

export const moveFeatureDataMap: {+[key: MoveFeatureType]: MoveFeatureDataType} = {
    [moveFeatureMap.projectile]: {
        image: 'image projectile path',
        name: 'MOVE_FEATURE__PROJECTILE',
    },
    [moveFeatureMap.parry]: {
        image: 'image parry path',
        name: 'MOVE_FEATURE__PARRY',
    },
    [moveFeatureMap.invul]: {
        image: 'image invul path',
        name: 'MOVE_FEATURE__INVULNERABLE',
    },
    [moveFeatureMap.projectileInvul]: {
        image: 'image projectile-invul path',
        name: 'MOVE_FEATURE__PROJECTILE_INVULNERABLE',
    },
};

type AbilityType = {|
    +name: LangKeyType | null,
|};

export type ComboType = {|
    +name: LangKeyType,
    +sequence: Array<ComboInputType>,
    +description: LangKeyType | null,
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    +moveFeatureList: Array<MoveFeatureType>,
    +extendedComboList: Array<ComboType>,
    +crushingBlowCondition: LangKeyType | null,
    // +ability: AbilityType | null,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: LangKeyType,
    +move: {
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
        +abilityList: Array<ComboType>,
        +fatalBlowList: Array<ComboType>,
        +brutalityList: Array<ComboType>,
    },
|};
