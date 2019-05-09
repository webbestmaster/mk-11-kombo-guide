// @flow

import type {ComboInputType, ComboType, FrameDataType, MayBeNaType, MoveFeatureType, MoveType} from '../character-type';
import {inputMoveMap, moveTypeMap, naValue, moveFeatureMap} from '../character-type';

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
const {invul, parry, projectile} = moveFeatureMap;

const defaultComboList: Array<ComboType> = [
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
];

const throwList: Array<ComboType> = [
    {
        name: 'DEFAULT_MOVE__TOWARD_THROW',
        sequence: [[ford, iL1], ori, [ford, i1n, i3n]],
        description: '',
        moveData: {
            type: notAvailableMove,
            hitDamage: naValue,
            blockDamage: naValue,
            flawlessBlockDamage: naValue,
        },
        frameData: {
            startUp: naValue,
            active: naValue,
            recover: naValue,
            hitAdvance: naValue,
            blockAdvance: naValue,
            flawlessBlockAdvance: naValue,
            cancel: naValue,
        },
        moveFeatureList: [],
        extendedComboList: [],
        crushingBlowCondition: null,
    },
    {
        name: 'DEFAULT_MOVE__BACK_THROW',
        sequence: [iL1, ori, [i1n, i3n]],
        description: '',
        moveData: {
            type: notAvailableMove,
            hitDamage: naValue,
            blockDamage: naValue,
            flawlessBlockDamage: naValue,
        },
        frameData: {
            startUp: naValue,
            active: naValue,
            recover: naValue,
            hitAdvance: naValue,
            blockAdvance: naValue,
            flawlessBlockAdvance: naValue,
            cancel: naValue,
        },
        moveFeatureList: [],
        extendedComboList: [],
        crushingBlowCondition: null,
    },
];

const rollEscapeList: Array<ComboType> = [
    {
        name: 'DEFAULT_MOVE__FORWARD_ROLL_ESCAPE',
        sequence: [[ford, iL2]],
        description: '',
        moveData: {
            type: notAvailableMove,
            hitDamage: naValue,
            blockDamage: naValue,
            flawlessBlockDamage: naValue,
        },
        frameData: {
            startUp: naValue,
            active: naValue,
            recover: naValue,
            hitAdvance: naValue,
            blockAdvance: naValue,
            flawlessBlockAdvance: naValue,
            cancel: naValue,
        },
        moveFeatureList: [],
        extendedComboList: [],
        crushingBlowCondition: null,
    },
    {
        name: 'DEFAULT_MOVE__AWAY_ROLL_ESCAPE',
        sequence: [[back, iL2]],
        description: '',
        moveData: {
            type: notAvailableMove,
            hitDamage: naValue,
            blockDamage: naValue,
            flawlessBlockDamage: naValue,
        },
        frameData: {
            startUp: naValue,
            active: naValue,
            recover: naValue,
            hitAdvance: naValue,
            blockAdvance: naValue,
            flawlessBlockAdvance: naValue,
            cancel: naValue,
        },
        moveFeatureList: [],
        extendedComboList: [],
        crushingBlowCondition: null,
    },
];

const airEscapeList: Array<ComboType> = [
    {
        name: 'DEFAULT_MOVE__AIR_BREAKAWAY',
        sequence: [[down, iR2]],
        description: '',
        moveData: {
            type: notAvailableMove,
            hitDamage: naValue,
            blockDamage: naValue,
            flawlessBlockDamage: naValue,
        },
        frameData: {
            startUp: naValue,
            active: naValue,
            recover: naValue,
            hitAdvance: naValue,
            blockAdvance: naValue,
            flawlessBlockAdvance: naValue,
            cancel: naValue,
        },
        moveFeatureList: [],
        extendedComboList: [],
        crushingBlowCondition: null,
    },
];

export const defaultMoveData: {+[key: string]: Array<ComboType>} = {
    throwList,
    rollEscapeList,
    airEscapeList,
};

const defaultBasicList: Array<ComboType> = [
    {
        name: 'APP_NAME',
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
        name: 'APP_NAME',
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
        name: 'APP_NAME',
        sequence: [[ford, i1n]],
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
        name: 'APP_NAME',
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
];

const jumpingAttackList: Array<ComboType> = [
    {
        name: 'APP_NAME',
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
        name: 'APP_NAME',
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
        name: 'APP_NAME',
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
];

const hopAttackList: Array<ComboType> = [
    {
        name: 'APP_NAME',
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
        name: 'APP_NAME',
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
];

const getUpAttackList: Array<ComboType> = [
    {
        name: 'APP_NAME',
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
        name: 'APP_NAME',
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
];
