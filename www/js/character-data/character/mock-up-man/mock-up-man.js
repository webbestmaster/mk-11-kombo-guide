// @flow

import type {CharacterType} from '../../character-type';

import type {LangKeyType} from '../../../component/locale/translation/type';
import {inputMoveMap, moveTypeMap, naValue, moveFeatureMap} from '../../character-type';

import mockUpMapImagePath from './image/face.png';

const {
    // ComboInputDirectionType
    iUp,
    iDn,
    iLt,
    iRt,
    iUpRt,
    iDnRt,
    iUpLt,
    iDnLt,
    // ComboInputMoveType
    i1n,
    i2n,
    i3n,
    i4n,
    // additional move icon
    plus,
    hold,
    ori,
} = inputMoveMap;

const {low, mid, high, overhead, throwMove, unblockable, notAvailableMove} = moveTypeMap;
const {invul, parry, projectile} = moveFeatureMap;

export const mockUpMan: CharacterType = {
    id: 'mock-up-man',
    imagePath: mockUpMapImagePath,
    name: 'CHARACTER__MOCK_UP_MAN__NAME',
    normalMoveList: [
        {
            name: 'CHARACTER__MOCK_UP_MAN__NAME',
            sequence: [iDn, i2n, [iUpRt, iUpRt], i3n],
            description: 'CHARACTER__MOCK_UP_MAN__DESCRIPTION',
            moveData: {
                type: notAvailableMove,
                hitDamage: naValue,
                blockDamage: 20,
                flawlessBlockDamage: 1,
            },
            frameData: {
                startUp: 15,
                active: 5,
                recover: naValue,
                hitAdvance: 14,
                blockAdvance: -6,
                flawlessBlockAdvance: -10,
                cancel: 30,
            },
            moveFeatureList: [parry],
            extendedComboList: [
                {
                    name: 'CHARACTER__MOCK_UP_MAN__NAME',
                    sequence: [iDn, i3n],
                    description: 'CHARACTER__MOCK_UP_MAN__DESCRIPTION',
                    moveData: {
                        type: high,
                        hitDamage: naValue,
                        blockDamage: 2,
                        flawlessBlockDamage: 10,
                    },
                    frameData: {
                        startUp: 15,
                        active: 5,
                        recover: naValue,
                        hitAdvance: 1,
                        blockAdvance: 6,
                        flawlessBlockAdvance: 10,
                        cancel: 3,
                    },
                    extendedComboList: [],
                    moveFeatureList: [invul],
                },
            ],
        },
    ],
    comboMoveList: [],
    specialMoveList: [],
};
