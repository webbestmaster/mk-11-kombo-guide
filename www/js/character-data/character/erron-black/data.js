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

export const erronBlack: CharacterType = {
    id: 'erron-black',
    imagePath: faceImagePath,
    name: 'CHARACTER__Erron_Black__NAME',
    abilityList: [],
    move: {
        basicList: [
            {
                name: 'CHARACTER__Erron_Black__Straight_Punch',
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
                name: 'CHARACTER__Erron_Black__Spinning_Revolver',
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
                name: 'CHARACTER__Erron_Black__Dusty_Knuckles',
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
                name: 'CHARACTER__Erron_Black__Bounty_Bash',
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
                name: 'CHARACTER__Erron_Black__Grip_Slam',
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
                name: 'CHARACTER__Erron_Black__Shoulder_Shimmy',
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
                name: 'CHARACTER__Erron_Black__Rising_Outlaw',
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
                name: 'CHARACTER__Erron_Black__Boot_Flick',
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
                name: 'CHARACTER__Erron_Black__Saloon_Strike',
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
                name: 'CHARACTER__Erron_Black__Low_Boot',
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
                name: 'CHARACTER__Erron_Black__Spinning_Spur',
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
                name: 'CHARACTER__Erron_Black__Low_Spur',
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
                name: 'CHARACTER__Erron_Black__Boot_Drop',
                sequence: [[ford, i4n]],
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
                name: 'CHARACTER__Erron_Black__Sandy_Sole',
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
                name: 'CHARACTER__Erron_Black__Swinging_Pistol',
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
                name: 'CHARACTER__Erron_Black__Hammer_Fist',
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
                name: 'CHARACTER__Erron_Black__Quick_Flick',
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
                name: 'CHARACTER__Erron_Black__Tumbleweed',
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
                name: 'CHARACTER__Erron_Black__Drop_Kick',
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
                name: 'CHARACTER__Erron_Black__Quick_Shot',
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
                name: 'CHARACTER__Erron_Black__Pocket_Sand',
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
                name: 'CHARACTER__Erron_Black__Quick_Shot',
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
                name: 'CHARACTER__Erron_Black__Pocket_Sand',
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
                name: 'CHARACTER__Erron_Black__High_Noon',
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
                name: 'CHARACTER__Erron_Black__Into_the_Badlands',
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
                name: 'CHARACTER__Erron_Black__Violent_Ends',
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
                name: 'CHARACTER__Erron_Black__Deal_in_Lead',
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
                name: 'CHARACTER__Erron_Black__On_The_Shoot',
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
                name: 'CHARACTER__Erron_Black__At_The_Dooooor',
                sequence: [[back, i2n], i2n, i2n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Erron_Black__Dead_Man_s_Hand',
                sequence: [[back, i2n], [up, i4n]],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Erron_Black__Keep_em_Honest',
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
                name: 'CHARACTER__Erron_Black__Zaterrean_Spit',
                sequence: [down, back, i1n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Erron_Black__Close_Zaterrean_Spit',
                sequence: [down, back, i1n, back],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [],
                crushingBlowCondition: null,
                abilityName: null,
            },
            {
                name: 'CHARACTER__Erron_Black__Rattle_Snake_Slide',
                sequence: [back, ford, i3n],
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
                name: 'CHARACTER__Erron_Black__Locked_And_Loaded',
                sequence: [back, ford, i4n],
                description: null,
                moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                moveFeatureList: [],
                extendedComboList: [
                    {
                        name: 'COMBO_CONTINUE__CANCEL',
                        sequence: [iL2],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                    {
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
                        sequence: [hold, i2n],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                    {
                        name: 'COMBO_CONTINUE__CANCEL',
                        sequence: [iR1],
                        description: null,
                        moveData: getMoveData(naValue, naValue, naValue, notAvailableMove),
                        frameData: getFrameData(naValue, naValue, naValue, naValue, naValue, naValue, naValue),
                        moveFeatureList: [],
                        extendedComboList: [],
                        crushingBlowCondition: null,
                        abilityName: null,
                    },
                    {
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
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
                        name: 'COMBO_CONTINUE__CANCEL',
                        sequence: [hold, i4n],
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
                name: 'CHARACTER__Erron_Black__Ghost_Koins',
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
