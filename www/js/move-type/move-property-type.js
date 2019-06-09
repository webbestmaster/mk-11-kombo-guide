// @flow

import type {LangKeyType} from '../component/locale/translation/type';
import {trim} from '../lib/string-helper';

export type PropertyNameType =
    | 'invulnerable'
    | 'parry'
    | 'proj parry - all'
    | 'parry - high'
    | 'stance'
    | 'stun'
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
    | 'ranged - tracking'
    | 'teleport'
    | 'buff - resist'
    | 'buff - block damage'
    | 'buff - damage';

export const propertyNameMap: {+[key: string]: PropertyNameType} = {
    projectile: 'projectile',
    parry: 'parry',
    projParryAll: 'proj parry - all',
    parryHigh: 'parry - high',
    stance: 'stance',
    stun: 'stun',
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
    rangedTracking: 'ranged - tracking',
    teleport: 'teleport',
    buffResist: 'buff - resist',
    buffBlockDamage: 'buff - block damage',
    buffDamage: 'buff - damage',
};

export const propertyNameTranslationMap: {+[key: PropertyNameType]: LangKeyType} = {
    [propertyNameMap.projectile]: 'MOVE_PROPERTY__INVULNERABLE',
    [propertyNameMap.parry]: 'MOVE_PROPERTY__PARRY',
    [propertyNameMap.projParryAll]: 'MOVE_PROPERTY__PROJ_PARRY_ALL',
    [propertyNameMap.parryHigh]: 'MOVE_PROPERTY__PARRY_HIGH',
    [propertyNameMap.stance]: 'MOVE_PROPERTY__STANCE',
    [propertyNameMap.stun]: 'MOVE_PROPERTY__STUN',
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
    [propertyNameMap.rangedTracking]: 'MOVE_PROPERTY__RANGED_TRACKING',
    [propertyNameMap.teleport]: 'MOVE_PROPERTY__TELEPORT',
    [propertyNameMap.buffResist]: 'MOVE_PROPERTY__BUFF_RESIST',
    [propertyNameMap.buffBlockDamage]: 'MOVE_PROPERTY__BUFF_BLOCK_DAMAGE',
    [propertyNameMap.buffDamage]: 'MOVE_PROPERTY__BUFF_DAMAGE',
};

// eslint-disable-next-line complexity
export function ensurePropertyType(mayBePropertyName: string): PropertyNameType | null {
    const {
        projectile,
        parry,
        projParryAll,
        parryHigh,
        stance,
        stun,
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
        rangedTracking,
        teleport,
        buffResist,
        buffBlockDamage,
        buffDamage,
    } = propertyNameMap;
    const mayBePropertyNameLowCase = trim(mayBePropertyName).toLowerCase();

    switch (mayBePropertyNameLowCase) {
        case projectile:
            return projectile;
        case parry:
            return parry;
        case projParryAll:
            return projParryAll;
        case parryHigh:
            return parryHigh;
        case stance:
            return stance;
        case stun:
            return stun;
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
        case rangedTracking:
            return rangedTracking;
        case teleport:
            return teleport;
        case buffDamage:
            return buffDamage;
        case buffResist:
            return buffResist;
        case buffBlockDamage:
            return buffBlockDamage;
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
