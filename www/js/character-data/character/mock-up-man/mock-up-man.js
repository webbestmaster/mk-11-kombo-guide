// @flow

import type {CharacterType} from '../../type';

import mockUpMapImagePath from './mock-up-man.jpeg';

export const mockUpMan: CharacterType = {
    id: 'mock-up-man',
    imagePath: mockUpMapImagePath,
    name: 'CHARACTER__MOCK_UP_MAN__NAME',
    description: 'CHARACTER__MOCK_UP_MAN__DESCRIPTION',
    normalMoveList: [],
    comboList: [],
    specialMoveList: [],
    variationList: [
        'CHARACTER__MOCK_UP_MAN__VARIATION__KILLER',
        'CHARACTER__MOCK_UP_MAN__VARIATION__LOVER',
        'CHARACTER__MOCK_UP_MAN__VARIATION__MAN_WTH_GUN',
    ],
};
