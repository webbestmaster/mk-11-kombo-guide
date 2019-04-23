// @flow

import type {CharacterType} from '../../character-type';

import type {LangKeyType} from '../../../component/locale/translation/type';
import {inputMoveMap, moveTypeMap, naValue} from '../../character-type';

import mockUpMapImagePath from './mock-up-man.jpeg';

const {
    // ComboInputDirectionType
    iUp,
    iDn,
    iLt,
    iRt,
    // ComboInputMoveType
    i1n,
    i2n,
    i3n,
    i4n,
    // ComboInputCompoundMoveType
    i12,
    i24,
    i43,
    i31,
} = inputMoveMap;

export const mockUpMan: CharacterType = {
    id: 'mock-up-man',
    imagePath: mockUpMapImagePath,
    name: 'CHARACTER__MOCK_UP_MAN__NAME',
    description: 'CHARACTER__MOCK_UP_MAN__DESCRIPTION',
    normalMoveList: [
        {
            name: 'CHARACTER__MOCK_UP_MAN__NAME',
            sequence: [iDn, i2n],
            moveData: {
                type: moveTypeMap.low,
                hitDamage: naValue,
                blockDamage: 20,
            },
            frameData: {
                startUp: 15,
                active: 5,
                recover: 36,
                hitAdvance: 14,
                blockAdvance: -6,
                cancel: 30,
            },
            availableForVariationList: ['CHARACTER__MOCK_UP_MAN__NAME'],
        },
    ],
    comboList: [],
    specialMoveList: [],
    variationList: [
        'CHARACTER__MOCK_UP_MAN__VARIATION__KILLER',
        'CHARACTER__MOCK_UP_MAN__VARIATION__LOVER',
        'CHARACTER__MOCK_UP_MAN__VARIATION__MAN_WTH_GUN',
    ],
};
