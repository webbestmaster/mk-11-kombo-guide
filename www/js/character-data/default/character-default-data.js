// @flow

import type {ComboInputType, ComboType, FrameDataType, MayBeNaType, MoveFeatureType, MoveType} from '../character-type';
import type {LangKeyType} from '../../component/locale/translation/type';

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
    },
];

export const defaultMoveData: {+[key: string]: Array<ComboType>} = {
    throwList,
    rollEscapeList,
    airEscapeList,
};
