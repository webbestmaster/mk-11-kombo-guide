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

export const geras: CharacterType = {
    id: 'geras',
    imagePath: faceImagePath,
    name: 'CHARACTER__Geras__NAME',
    abilityList: [],
    move: {
        basicList: [
            {
                name: 'CHARACTER__Geras__Straight_Jab',
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
                name: 'CHARACTER__Geras__Shoulder_Charg',
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
                name: 'CHARACTER__Geras__Knee_Bash',
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
                name: 'CHARACTER__Geras__Heavy_Fist',
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
                name: 'CHARACTER__Geras__Sledge_Hammer',
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
                name: 'CHARACTER__Geras__Body_Buster',
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
                name: 'CHARACTER__Geras__Rising_Gauntlet',
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
                name: 'CHARACTER__Geras__Straight_Boot',
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
                name: 'CHARACTER__Geras__Strong_Step',
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
                name: 'CHARACTER__Geras__Gauntlet_Slam',
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
                name: 'CHARACTER__Geras__Chrono_Kick',
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
                name: 'CHARACTER__Geras__Time_Sweeper',
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
                name: 'CHARACTER__Geras__Pounding_Sand',
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
                name: 'CHARACTER__Geras__Quick_Jab',
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
                name: 'CHARACTER__Geras__Elbow_Drop',
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
                name: 'CHARACTER__Geras__Time_Splash',
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
                name: 'CHARACTER__Geras__Titan_Toe',
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
                name: 'CHARACTER__Geras__Timequake',
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
                name: 'CHARACTER__Geras__Heavy_Knee',
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
                name: 'CHARACTER__Geras__Titan_Charge',
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
                name: 'CHARACTER__Geras__Sand_Storm',
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
                name: 'CHARACTER__Geras__Titan_Charge',
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
                name: 'CHARACTER__Geras__Sand_Storm',
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
                name: 'CHARACTER__Geras__Without_Beginning',
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
                name: 'CHARACTER__Geras__Without_End',
                sequence: [i1n, i1n, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Out_of_Time',
                sequence: [i1n, i1n, i1n, [i1n, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__External_Hate',
                sequence: [[ford, i1n], [i1n, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Xuid_n_Guid',
                sequence: [[ford, i1n], [i1n, i3n], i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Time_Immemorial',
                sequence: [i2n, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__The_Undying',
                sequence: [i2n, i4n, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Timeless',
                sequence: [[back, i2n], i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__The_Deathless_Giant',
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
                name: 'CHARACTER__Geras__Matter_of_Time',
                sequence: [[ford, i2n], i1n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Sand_Blaster',
                sequence: [[ford, i2n], i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Dangerous_Chronology',
                sequence: [[ford, i2n], i2n, [i1n, i3n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Geras__Ripple_in_Time',
                sequence: [[ford, i3n], i2n],
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
                name: 'CHARACTER__Geras__Stasis_Assault',
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
