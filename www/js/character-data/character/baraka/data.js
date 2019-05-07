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

export const baraka: CharacterType = {
    id: 'baraka',
    imagePath: faceImagePath,
    name: 'CHARACTER__Baraka__NAME',
    move: {
        basicList: [
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
        jumpingAttackList: [
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
        hopAttackList: [
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
        getUpAttackList: [
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
        flawlessBlockAttacksList: [
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
        throwsList: defaultMoveData.throwList,
        rollEscapeList: defaultMoveData.rollEscapeList,
        airEscapeList: defaultMoveData.airEscapeList,
        comboList: [
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
