// @flow

import type {LangKeyType} from '../component/locale/translation/type';
import {trim} from '../../../util/get-data/helper';

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

// eslint-disable-next-line complexity
export function ensureMoveType(mayBeMoveType: string): MoveType {
    const {low, mid, high, overhead, throwMove, unblockable, notAvailableMove} = moveTypeMap;
    const mayBeMoveTypeLowCase = trim(mayBeMoveType).toLowerCase();

    switch (mayBeMoveTypeLowCase) {
        case low:
            return low;
        case mid:
            return mid;
        case high:
            return high;
        case overhead:
            return overhead;
        case throwMove:
            return throwMove;
        case unblockable:
            return unblockable;
        case '':
        case notAvailableMove:
            return notAvailableMove;
        default:
            console.error(`Can not detect move type: '${mayBeMoveType}' -> '${mayBeMoveTypeLowCase}'`);
    }

    throw new Error('Can not detect move type');
}

export function ensureNumberType(bayBeNumberType: string): number {
    const parsedNumber = parseFloat(trim(bayBeNumberType));

    if (Number.isNaN(parsedNumber)) {
        throw new TypeError(`Can not use parseFloat for: '${bayBeNumberType}'`);
    }

    return parsedNumber;
}

export function ensureVariationType(variationName: string): string | null {
    const variationNameTrimmed = trim(variationName);

    if (variationNameTrimmed === '') {
        return null;
    }

    return variationNameTrimmed;
}

export function ensureDescriptionType(description: string): Array<string> {
    return description
        .split(/<br\s*?\/?>/gi)
        .map(trim)
        .map((part: string): string => part.replace(/^•/g, '').replace(/\.$/g, ''))
        .map(trim)
        .filter(Boolean);
}

export type PropertyNameType =
    | 'invulnerable'
    | 'parry'
    | 'projectile'
    | 'projectile invulnerable'
    | 'krushing blow'
    | 'debuff'
    | 'ranged'
    | 'cancel'
    | 'armor';

export const propertyNameMap: {+[key: string]: PropertyNameType} = {
    projectile: 'projectile',
    parry: 'parry',
    invulnerable: 'invulnerable',
    projectileInvulnerable: 'projectile invulnerable',
    krushingBlow: 'krushing blow',
    debuff: 'debuff',
    ranged: 'ranged',
    cancel: 'cancel',
    armor: 'armor',
};

export const propertyNameTranslationMap: {+[key: PropertyNameType]: LangKeyType} = {
    [propertyNameMap.projectile]: 'MOVE_PROPERTY__INVULNERABLE',
    [propertyNameMap.parry]: 'MOVE_PROPERTY__PARRY',
    [propertyNameMap.invulnerable]: 'MOVE_PROPERTY__PROJECTILE',
    [propertyNameMap.projectileInvulnerable]: 'MOVE_PROPERTY__PROJECTILE_INVULNERABLE',
    [propertyNameMap.krushingBlow]: 'MOVE_PROPERTY__KRUSHING_BLOW',
    [propertyNameMap.debuff]: 'MOVE_PROPERTY__DEBUFF',
    [propertyNameMap.ranged]: 'MOVE_PROPERTY__RANGED',
    [propertyNameMap.cancel]: 'MOVE_PROPERTY__CANCEL',
    [propertyNameMap.armor]: 'MOVE_PROPERTY__ARMOR',
};

// eslint-disable-next-line complexity
export function ensurePropertyType(mayBePropertyName: string): PropertyNameType | null {
    const {
        projectile,
        parry,
        invulnerable,
        projectileInvulnerable,
        krushingBlow,
        debuff,
        ranged,
        cancel,
        armor,
    } = propertyNameMap;
    const mayBePropertyNameLowCase = trim(mayBePropertyName).toLowerCase();

    switch (mayBePropertyNameLowCase) {
        case projectile:
            return projectile;
        case parry:
            return parry;
        case invulnerable:
            return invulnerable;
        case projectileInvulnerable:
            return projectileInvulnerable;
        case krushingBlow:
            return krushingBlow;
        case debuff:
            return debuff;
        case ranged:
            return ranged;
        case cancel:
            return cancel;
        case armor:
            return armor;
        case '':
            return null;
        default:
            console.error(`Can not detect property name: '${mayBePropertyName}' -> '${mayBePropertyNameLowCase}'`);
    }

    throw new Error('Can not detect property name');
}

export function ensurePropertyListType(propertyList: Array<string>): Array<PropertyNameType> {
    return propertyList.map(ensurePropertyType).filter(Boolean);
}

export const moveTypeTranslationMap: {+[key: MoveType]: LangKeyType} = {
    [moveTypeMap.low]: 'MOVE_TYPE__LOW',
    [moveTypeMap.mid]: 'MOVE_TYPE__MID',
    [moveTypeMap.high]: 'MOVE_TYPE__HIGH',
    [moveTypeMap.overhead]: 'MOVE_TYPE__OVERHEAD',
    [moveTypeMap.throwMove]: 'MOVE_TYPE__THROW',
    [moveTypeMap.unblockable]: 'MOVE_TYPE__UNBLOCKABLE',
    [moveTypeMap.notAvailableMove]: 'MOVE_TYPE__NOT_AVAILABLE_MOVE_TYPE',
};

export type MoveDataType = {|
    +hitDamage: MayBeNaType<number>,
    +blockDamage: MayBeNaType<number>,
    +flawlessBlockDamage: MayBeNaType<number>,
    +type: MoveType,
|};

export type MoveFeatureDataType = {|
    +image: string,
    +name: LangKeyType,
|};

export type ComboType = {|
    +name: string,
    +sequence: Array<ComboInputType>,
    +description: Array<string>,
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    +deepLevel: 0 | 1,
    +variation: string | null,
    +propertyList: Array<PropertyNameType>,
|};

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
