// @flow

import type {CharacterType} from '../../character-type';

import type {LangKeyType} from '../../../component/locale/translation/type';
import {inputMoveMap, moveTypeMap, naValue} from '../../character-type';

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
} = inputMoveMap;

export const mockUpMan: CharacterType = {
    id: 'mock-up-man',
    imagePath: mockUpMapImagePath,
    name: 'CHARACTER__MOCK_UP_MAN__NAME',
    normalMoveList: [
        {
            name: 'CHARACTER__MOCK_UP_MAN__NAME',
            sequence: [iDn, i2n, [iUpRt, iUpRt], i3n],
            moveData: {
                type: moveTypeMap.low,
                hitDamage: naValue,
                blockDamage: 20,
                flawlessBlockDamage: 1,
            },
            frameData: {
                startUp: 15,
                active: 5,
                recover: 36,
                hitAdvance: 14,
                blockAdvance: -6,
                flawlessBlockAdvance: -10,
                cancel: 30,
            },
        },
    ],
    comboMoveList: [],
    specialMoveList: [],
};
