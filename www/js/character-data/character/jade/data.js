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

export const jade: CharacterType = {
    id: 'jade',
    imagePath: faceImagePath,
    name: 'CHARACTER__Jade__NAME',
    abilityList: [],
    move: {
        basicList: [
            {
                name: 'CHARACTER__Jade__Quick_Slap',
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
                name: 'CHARACTER__Jade__Pole_Strike',
                sequence: [[back, i1n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Straight_Palm',
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
                name: 'CHARACTER__Jade__Palm_Bash',
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
                name: 'CHARACTER__Jade__Wiggle_Stick',
                sequence: [[back, i2n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Pole_Slam',
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
                name: 'CHARACTER__Jade__Rising_Staff',
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
                name: 'CHARACTER__Jade__Straight_Kick',
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
                name: 'CHARACTER__Jade__Side_Kick',
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
                name: 'CHARACTER__Jade__Knee_Breaker',
                sequence: [[ford, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Side_Heel',
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
                name: 'CHARACTER__Jade__Stiletto_Strike',
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
                name: 'CHARACTER__Jade__Takedown',
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
                name: 'CHARACTER__Jade__Edenian_Dance',
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
                name: 'CHARACTER__Jade__Pierced',
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
                name: 'CHARACTER__Jade__Edenian_Palm',
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
                name: 'CHARACTER__Jade__Pole_Bash',
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
                name: 'CHARACTER__Jade__Warrior_s_Heel',
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
                name: 'CHARACTER__Jade__Staff_Slam',
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
                name: 'CHARACTER__Jade__Edenian_Drill',
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
                name: 'CHARACTER__Jade__Glaiver_Saver',
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
                name: 'CHARACTER__Jade__Heavens_Heel',
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
                name: 'CHARACTER__Jade__Glaiver_Saver',
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
                name: 'CHARACTER__Jade__Heavens_Heel',
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
                name: 'CHARACTER__Jade__Simple_Seduction',
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
                name: 'CHARACTER__Jade__Baited',
                sequence: [i1n, i2n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Teaser',
                sequence: [[back, i1n], i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Edenian_Warrior',
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
                name: 'CHARACTER__Jade__Tiny_Dancer',
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
                name: 'CHARACTER__Jade__Ip_Girl',
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
                name: 'CHARACTER__Jade__Enchanted',
                sequence: [[back, i3n], i4n, i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Fatal_Attraction',
                sequence: [[back, i3n], i4n, i3n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Royal_Guard',
                sequence: [[ford, i3n], i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Edenian_Rush',
                sequence: [[ford, i3n], i4n, i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__Killer_Charisma',
                sequence: [i4n, i3n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Jade__My_Pleasure',
                sequence: [[ford, i4n], i1n],
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
                name: 'CHARACTER__Jade__Edenian_Knight',
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
