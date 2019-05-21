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

export const kungLao: CharacterType = {
    id: 'kung-lao',
    imagePath: faceImagePath,
    name: 'CHARACTER__Kung_Lao__NAME',
    abilityList: [],
    move: {
        basicList: [
            {
                name: 'CHARACTER__Kung_Lao__Shaolin_Fist',
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
                name: 'CHARACTER__Kung_Lao__Step_Punch',
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
                name: 'CHARACTER__Kung_Lao__Low_Palm',
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
                name: 'CHARACTER__Kung_Lao__Straight_Poke',
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
                name: 'CHARACTER__Kung_Lao__Hat_Slice',
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
                name: 'CHARACTER__Kung_Lao__Rising_Rim',
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
                name: 'CHARACTER__Kung_Lao__High_Kick',
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
                name: 'CHARACTER__Kung_Lao__Dragon_Step',
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
                name: 'CHARACTER__Kung_Lao__Side_Kick',
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
                name: 'CHARACTER__Kung_Lao__Spin_Kick',
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
                name: 'CHARACTER__Kung_Lao__Sweeping_Razor',
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
                name: 'CHARACTER__Kung_Lao__Twin_Kicks',
                sequence: [[ford, i4n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Back_Kick',
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
                name: 'CHARACTER__Kung_Lao__Razor_Edge',
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
                name: 'CHARACTER__Kung_Lao__Shaolin_Strike',
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
                name: 'CHARACTER__Kung_Lao__Light_Kick',
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
                name: 'CHARACTER__Kung_Lao__Vicious_Slice',
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
                name: 'CHARACTER__Kung_Lao__Shaolin_Shalhoub',
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
                name: 'CHARACTER__Kung_Lao__Rising_Hat',
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
                name: 'CHARACTER__Kung_Lao__Slip_Kick',
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
                name: 'CHARACTER__Kung_Lao__Rising_Hat',
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
                name: 'CHARACTER__Kung_Lao__Slip_Kick',
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
                name: 'CHARACTER__Kung_Lao__Fist_Fury',
                sequence: [i1n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Order_of_Light',
                sequence: [i1n, i2n, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Fatal_Blow',
                sequence: [i1n, i2n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Monk_Dunk',
                sequence: [[ford, i1n], i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Lost_Soul',
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
                name: 'CHARACTER__Kung_Lao__Deadly_Path',
                sequence: [[ford, i1n], i3n, [up, i2n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Under_Control',
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
                name: 'CHARACTER__Kung_Lao__Double_Yang',
                sequence: [i2n, i1n, i2n, i1n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Kung_Tang',
                sequence: [i2n, i1n, i2n, i1n, i2n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Broken_Faith',
                sequence: [i2n, i1n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Disrespect',
                sequence: [[ford, i2n], i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Flowing_Water',
                sequence: [[ford, i2n], i1n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Plum_Flower',
                sequence: [i3n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Heavy_Mountain',
                sequence: [[back, i3n], i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Kung_Lao__Iron_Broom',
                sequence: [[back, i3n], i2n, i1n],
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
        fatalBlowList: [
            {
                name: 'CHARACTER__Kung_Lao__Beaten_and_Broken',
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
