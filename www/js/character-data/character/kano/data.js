// @flow

import type {CharacterType} from '../../character-type';
import {inputMoveMap, moveTypeMap, naValue, moveFeatureMap} from '../../character-type';
import {defaultMoveData} from '../../default/character-default-data';

import faceImagePath from './face.png';

const {
    // ComboInputDirectionType
    up,
    down,
    back,
    ford,
    upFord,
    downFord,
    upBack,
    downBack,
    // ComboInputMoveType
    i1n,
    i2n,
    i3n,
    i4n,
    iL1,
    iL2,
    iR1,
    iR2,
    // additional move icon
    plus,
    hold,
    ori,
} = inputMoveMap;

const {low, mid, high, overhead, throwMove, unblockable, notAvailableMove} = moveTypeMap;
const {invul, parry, projectile, projectileInvul} = moveFeatureMap;

export const kano: CharacterType = {
    id: 'kano',
    imagePath: faceImagePath,
    name: 'CHARACTER__Kano__NAME',
    move: {
        basicList: [
            {
                name: 'CHARACTER__Kano__Bloody_Knuckles',
                sequence: [i1n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Blade_Evade',
                sequence: [[back, i1n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Lunging_Brute',
                sequence: [[ford, i1n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Knee_Cutter',
                sequence: [[down, i1n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },

            {
                name: 'CHARACTER__Kano__Scarred',
                sequence: [i2n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Deadly_Graze',
                sequence: [[back, i2n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Dirty_Hit',
                sequence: [[ford, i2n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Black_Dragon_Bash',
                sequence: [[down, i2n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },

            {
                name: 'CHARACTER__Kano__High_Boot',
                sequence: [i3n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Enzuigiri',
                sequence: [[back, i3n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Under_Kick',
                sequence: [[ford, i3n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Low_Hinge',
                sequence: [[down, i3n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },

            {
                name: 'CHARACTER__Kano__Face_Breaker',
                sequence: [i4n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Donkey_Kick',
                sequence: [[back, i4n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Wheel_Kick',
                sequence: [[ford, i4n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Devo_Strike',
                sequence: [[down, i4n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        jumpingAttackList: [
            {
                name: 'CHARACTER__Kano__Bladed',
                sequence: [i1n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Outback_Bash',
                sequence: [i2n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Kangaroo_Kick',
                sequence: [i3n, ori, i4n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        hopAttackList: [
            {
                name: 'CHARACTER__Kano__G_day_Mate',
                sequence: [up, i1n, ori, up, i2n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Brutal_Heel',
                sequence: [up, i3n, ori, up, i3n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        getUpAttackList: [
            {
                name: 'CHARACTER__Kano__Cheeky_Swipes',
                sequence: [[up, i2n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Quick_Burn',
                sequence: [[up, i3n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        flawlessBlockAttacksList: [
            {
                name: 'CHARACTER__Kano__Cheeky_Swipes',
                sequence: [[up, i2n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Quick_Burn',
                sequence: [[up, i3n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        throwsList: defaultMoveData.throwList,
        rollEscapeList: defaultMoveData.rollEscapeList,
        airEscapeList: defaultMoveData.airEscapeList,
        comboList: [
            {
                name: 'CHARACTER__Kano__Come_a_Gutser',
                sequence: [i1n, i1n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Blood_Worth_Bottling',
                sequence: [i1n, i1n, i2n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Spewin',
                sequence: [[ford, i1n], i2n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Fair_Suck_of_the_Sav',
                sequence: [[ford, i1n], i2n, [back, i2n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Cut_Snake',
                sequence: [i2n, i2n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Piss_off',
                sequence: [i2n, i2n, i3n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Deadly_Digger',
                sequence: [i2n, i4n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Enough_yabber',
                sequence: [i2n, i4n, i1n],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
            {
                name: 'CHARACTER__Kano__Blown_Away',
                sequence: [[ford, i2n], up, [down, i4n]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        specialList: [
            {
                name: 'APP_NAME',
                sequence: [],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        abilityList: [
            {
                name: 'APP_NAME',
                sequence: [],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        fatalBlowList: [
            {
                name: 'APP_NAME',
                sequence: [[iL1, iR2]],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
        brutalityList: [
            {
                name: 'APP_NAME',
                sequence: [],
                description: null,
                moveData: {
                    hitDamage: naValue,
                    blockDamage: naValue,
                    flawlessBlockDamage: naValue,
                    type: notAvailableMove,
                },
                frameData: {
                    startUp: naValue,
                    active: naValue,
                    recover: naValue,
                    cancel: naValue,
                    hitAdvance: naValue,
                    blockAdvance: naValue,
                    flawlessBlockAdvance: naValue,
                },
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
            },
        ],
    },
};
