// @flow

import type {LangKeyType} from '../component/locale/translation/type';
import {trim} from '../lib/string-helper';

export type PropertyNameType =
    | 'invulnerable'
    | 'parry'
    | 'projectile'
    | 'projectile invulnerable'
    | 'krushing blow'
    | 'debuff'
    | 'ranged'
    | 'cancel'
    | 'delay'
    | 'armor'
    | 'armor - 1 hit'
    | 'proximity'
    | 'ranged - directable'
    | 'buff - damage';

export const propertyNameMap: {+[key: string]: PropertyNameType} = {
    projectile: 'projectile',
    parry: 'parry',
    invulnerable: 'invulnerable',
    projectileInvulnerable: 'projectile invulnerable',
    krushingBlow: 'krushing blow',
    debuff: 'debuff',
    ranged: 'ranged',
    delay: 'delay',
    cancel: 'cancel',
    armor: 'armor',
    armorOneHit: 'armor - 1 hit',
    proximity: 'proximity',
    rangedDirectable: 'ranged - directable',
    buffDamage: 'buff - damage',
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
    [propertyNameMap.delay]: 'MOVE_PROPERTY__DELAY',
    [propertyNameMap.armor]: 'MOVE_PROPERTY__ARMOR',
    [propertyNameMap.armorOneHit]: 'MOVE_PROPERTY__ARMOR_ONE_HIT',
    [propertyNameMap.proximity]: 'MOVE_PROPERTY__PROXIMITY',
    [propertyNameMap.rangedDirectable]: 'MOVE_PROPERTY__RANGED_DIRECTABLE',
    [propertyNameMap.buffDamage]: 'MOVE_PROPERTY__BUFF_DAMAGE',
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
        delay,
        armor,
        armorOneHit,
        proximity,
        rangedDirectable,
        buffDamage,
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
        case delay:
            return delay;
        case armor:
            return armor;
        case armorOneHit:
            return armorOneHit;
        case proximity:
            return proximity;
        case rangedDirectable:
            return rangedDirectable;
        case buffDamage:
            return buffDamage;
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
