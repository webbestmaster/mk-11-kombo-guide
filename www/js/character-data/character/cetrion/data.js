// @flow

import type {CharacterType} from '../../character-type';
import {inputMoveMap, moveTypeMap, naValue, moveFeatureMap} from '../../character-type';
import {defaultMoveData} from '../../default/character-default-data';
import {getMoveData, getFrameData} from '../../helper';

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

export const cetrion: CharacterType = {
    id: 'cetrion',
    imagePath: faceImagePath,
    name: 'CHARACTER__Cetrion__NAME',
    abilityList: [],
    move: {
        basicList: [
            {
                name: 'CHARACTER__Cetrion__Heavens_Wind',
                sequence: [i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Tendril_Slap',
                sequence: [[ford, i1n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Low_Wind',
                sequence: [[down, i1n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },

            {
                name: 'CHARACTER__Cetrion__Quick_Combustion',
                sequence: [i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Turning_Wave',
                sequence: [[ford, i2n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Rising_God_Palm',
                sequence: [[down, i2n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },

            {
                name: 'CHARACTER__Cetrion__Vapor_Push',
                sequence: [i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Energy_Swipe',
                sequence: [[back, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Krystal_Kick',
                sequence: [[down, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },

            {
                name: 'CHARACTER__Cetrion__Krushing_Heel',
                sequence: [i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Rising_Volcano',
                sequence: [[back, i4n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Krystal_Heel',
                sequence: [[down, i4n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        jumpingAttackList: [
            {
                name: 'CHARACTER__Cetrion__Quick_Gust',
                sequence: [i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Burning_Palm',
                sequence: [i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Balance_Spin',
                sequence: [i3n, ori, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        hopAttackList: [
            {
                name: 'CHARACTER__Cetrion__Boulder_Slam',
                sequence: [up, i1n, ori, up, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Heel_Spike',
                sequence: [up, i3n, ori, up, i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        getUpAttackList: [
            {
                name: 'CHARACTER__Cetrion__Geo_Strike',
                sequence: [[up, i2n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__World_Ender',
                sequence: [[up, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        flawlessBlockAttacksList: [
            {
                name: 'CHARACTER__Cetrion__Geo_Strike',
                sequence: [[up, i2n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__World_Ender',
                sequence: [[up, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        throwsList: defaultMoveData.throwList,
        rollEscapeList: defaultMoveData.rollEscapeList,
        airEscapeList: defaultMoveData.airEscapeList,
        comboList: [
            {
                name: 'CHARACTER__Cetrion__Violent_Gust',
                sequence: [i1n, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Wind_Storm',
                sequence: [i1n, i1n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Imminent_Eruption',
                sequence: [i1n, i1n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Natures_Wrath',
                sequence: [[ford, i1n], i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Seismic_Energy',
                sequence: [[ford, i1n], i3n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Blaze',
                sequence: [i2n, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Fire_Nado',
                sequence: [i2n, i1n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Fire_and_Brimstone',
                sequence: [i2n, i1n, i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Natural_Ending',
                sequence: [[ford, i2n], i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Unlimited_Potential',
                sequence: [[ford, i2n], i3n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Lifecycle',
                sequence: [[back, i3n], i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        specialList: [
            {
                name: 'CHARACTER__Cetrion__Natural_Barrier',
                sequence: [down, back, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Far_Natural_Barrier',
                sequence: [down, back, i1n, ford],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Hell_s_Wrath',
                sequence: [down, ford, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Close_Hell_s_Wrath',
                sequence: [down, ford, i1n, back],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Far_Hell_s_Wrath',
                sequence: [down, ford, i1n, ford],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Air_Hell_s_Wrath',
                sequence: [down, ford, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Air_Close_Hell_s_Wrath',
                sequence: [down, ford, i1n, back],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Air_Far_Hell_s_Wrath',
                sequence: [down, ford, i1n, ford],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Cetrion__Tendril_Pull',
                sequence: [down, back, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__AMPLIFY',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                ],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        fatalBlowList: [
            {
                name: 'CHARACTER__Cetrion__Weeping_Willow',
                sequence: [[iL1, iR2]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
        brutalityList: [
            {
                name: 'APP_NAME',
                sequence: [],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
        ],
    },
};
