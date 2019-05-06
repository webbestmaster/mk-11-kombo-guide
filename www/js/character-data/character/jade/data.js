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

export const jade: CharacterType = {
    id: 'jade',
    imagePath: faceImagePath,
    name: 'CHARACTER__Jade__NAME',
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
            },
        ],
    },
};
