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

export const moveTypeTranslationMap: {[key: MoveType]: LangKeyType} = {
    [moveTypeMap.low]: 'MOVE_TYPE__LOW',
    [moveTypeMap.mid]: 'MOVE_TYPE__MID',
    [moveTypeMap.high]: 'MOVE_TYPE__HIGH',
    [moveTypeMap.overhead]: 'MOVE_TYPE__OVERHEAD',
    [moveTypeMap.throwMove]: 'MOVE_TYPE__THROW',
    [moveTypeMap.unblockable]: 'MOVE_TYPE__UNBLOCKABLE',
    [moveTypeMap.notAvailableMove]: 'MOVE_TYPE__NOT_AVAILABLE',
};

type MoveDataType = {|
    +type: MoveType,
    +hitDamage: MayBeNaType<number>,
    +blockDamage: MayBeNaType<number>,
    +flawlessBlockDamage: MayBeNaType<number>,
|};

export type MoveFeatureType = 'invulnerability' | 'parry' | 'projectile';

export const moveFeatureMap: {[key: string]: MoveFeatureType} = {
    projectile: 'projectile',
    parry: 'parry',
    invul: 'invulnerability',
};

export type MoveFeatureDataType = {|
    +image: string,
    +name: LangKeyType,
|};

export const moveFeatureDataMap: {[key: MoveFeatureType]: MoveFeatureDataType} = {
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
};

export type ComboType = {|
    +name: LangKeyType,
    +sequence: Array<ComboInputType>,
    +description: LangKeyType | '',
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    +moveFeatureList: Array<MoveFeatureType>,
    +extendedComboList: Array<ComboType>,
|};

export type CharacterType = {|
    +id: string,
    +imagePath: string,
    +name: LangKeyType,
    +normalMoveList: Array<ComboType>,
    +comboMoveList: Array<ComboType>,
    +specialMoveList: Array<ComboType>,
|};
