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

export const kitana: CharacterType = {
    id: 'kitana',
    imagePath: faceImagePath,
    name: 'CHARACTER__Kitana__NAME',
    move: {
        basicList: [
            {
                name: 'CHARACTER__Kitana__Blade_Jab',
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
                name: 'CHARACTER__Kitana__Back_Swipe',
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
                name: 'CHARACTER__Kitana__Low_Poke',
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
                name: 'CHARACTER__Kitana__Neck_Slice',
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
                name: 'CHARACTER__Kitana__Royal_Hand',
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
                name: 'CHARACTER__Kitana__Fan_Out',
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
                name: 'CHARACTER__Kitana__Rising_Power',
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
                name: 'CHARACTER__Kitana__Pretty_Kick',
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
                name: 'CHARACTER__Kitana__Quick_Flick',
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
                name: 'CHARACTER__Kitana__Heel_Poke',
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
                name: 'CHARACTER__Kitana__Spinning_Heel',
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
                name: 'CHARACTER__Kitana__Low_Slice',
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
                name: 'CHARACTER__Kitana__Fan_Stab',
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
                name: 'CHARACTER__Kitana__Punishing_Poke',
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
                name: 'CHARACTER__Kitana__Edenian_Strike',
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
                name: 'CHARACTER__Kitana__Bloody_Heel',
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
                name: 'CHARACTER__Kitana__Full_Slice',
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
                name: 'CHARACTER__Kitana__Flick_Kick',
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
                name: 'CHARACTER__Kitana__Step_Back',
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
                name: 'CHARACTER__Kitana__Fanning_Out',
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
                name: 'CHARACTER__Kitana__Step_Back',
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
                name: 'CHARACTER__Kitana__Fanning_Out',
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
                name: 'CHARACTER__Kitana__Learn_Respect',
                sequence: [i1n, i2n],
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
                name: 'CHARACTER__Kitana__Dark_Empress',
                sequence: [i1n, i2n, [down, i3n]],
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
                name: 'CHARACTER__Kitana__New_Power',
                sequence: [[back, i1n], i3n],
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
                name: 'CHARACTER__Kitana__No_Mercy',
                sequence: [[back, i1n], i3n, i1n],
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
                name: 'CHARACTER__Kitana__Purge_the_Weak',
                sequence: [[back, i1n], i4n],
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
                name: 'CHARACTER__Kitana__Dark_Deception',
                sequence: [[back, i1n], i4n, i2n],
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
                name: 'CHARACTER__Kitana__Fan_Tastic',
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
                name: 'CHARACTER__Kitana__Edenian_Dance',
                sequence: [i2n, i1n, i2n, i2n, i2n],
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
                name: 'CHARACTER__Kitana__Noble_Assault',
                sequence: [i2n, i1n, i4n, i3n, i4n],
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
                name: 'CHARACTER__Kitana__A_Royal_Welcome',
                sequence: [[back, i2n], i3n, i1n],
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
                name: 'CHARACTER__Kitana__Follow_Me',
                sequence: [[back, i2n], i3n, i1n, i3n, i4n, i3n],
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
                name: 'CHARACTER__Kitana__Dark_Empress_2',
                sequence: [[back, i2n], i3n, i1n, [down, i2n]],
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
                name: 'CHARACTER__Kitana__Leave_Now',
                sequence: [[ford, i2n], i2n, i2n, i2n],
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
                name: 'CHARACTER__Kitana__Follow_the_Leader',
                sequence: [[ford, i2n], i3n, i4n],
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
                name: 'CHARACTER__Kitana__Blood_Sacrifice',
                sequence: [i3n, i2n],
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
                name: 'CHARACTER__Kitana__Punishment',
                sequence: [i3n, i2n, i1n, i2n],
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
                name: 'CHARACTER__Kitana__Eternal_Damnation',
                sequence: [[back, i3n], i4n],
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
                sequence: [[iL1, iR2]],
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
