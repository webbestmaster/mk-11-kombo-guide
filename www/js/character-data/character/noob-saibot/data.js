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

export const noobSaibot: CharacterType = {
    id: 'noob-saibot',
    imagePath: faceImagePath,
    name: 'CHARACTER__Noob_Saibot__NAME',
    move: {
        basicList: [
            {
                name: 'CHARACTER__Noob_Saibot__Heavy_Knuckles',
                sequence: [i1n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Shadow_Poke',
                sequence: [[back, i1n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Knee_Hook',
                sequence: [[down, i1n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Straight_Fist',
                sequence: [i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Dark_Push',
                sequence: [[back, i2n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Turning_Chop',
                sequence: [[ford, i2n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Rising_Sickle',
                sequence: [[down, i2n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Straight_Kick',
                sequence: [i3n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Shadow_Slice',
                sequence: [[back, i3n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__High_Kick',
                sequence: [[ford, i3n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Boot_Slide',
                sequence: [[down, i3n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Dark_Heel',
                sequence: [i4n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Sickle_Sweep',
                sequence: [[back, i4n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Sneaky_Saibot',
                sequence: [[ford, i4n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Sickle_Strike',
                sequence: [[down, i4n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Dark_Jab',
                sequence: [i1n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Sickle_Swipe',
                sequence: [i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Wraith_Kick',
                sequence: [i3n, ori, i4n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Sickle_Slam',
                sequence: [up, i1n, ori, up, i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Spinning_Wraith',
                sequence: [up, i3n, ori, up, i3n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Slick_Sickle',
                sequence: [[up, i2n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Wraith_Boot',
                sequence: [[up, i3n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Slick_Sickle',
                sequence: [[up, i2n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Wraith_Boot',
                sequence: [[up, i3n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Creeping_Shadow',
                sequence: [i1n, i1n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Empty_Grave',
                sequence: [i1n, i1n, i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Tormented_Souls',
                sequence: [i1n, i1n, i3n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__As_One',
                sequence: [[back, i1n], [i1n, i3n]],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__For_The_Brotherhood',
                sequence: [[back, i1n], [i1n, i3n], i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Total_Darkness',
                sequence: [i2n, i1n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Resurrected',
                sequence: [i2n, i1n, i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Fade_To_Black',
                sequence: [[ford, i2n], i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Evil_Within',
                sequence: [[ford, i2n], i2n, i1n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Wailing_Wraith',
                sequence: [[ford, i2n], i2n, i1n, i2n],
                description: '',
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
                name: 'CHARACTER__Noob_Saibot__Sinister_Silhouette',
                sequence: [[back, i3n], [i1n, i3n]],
                description: '',
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
                description: '',
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
                description: '',
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
                sequence: [],
                description: '',
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
                description: '',
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
