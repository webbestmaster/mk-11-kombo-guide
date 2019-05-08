// @flow

import type {ComboInputSingleType} from '../../../../character-data/character-type';

import type {PlatformNameType} from './action';
import {platformNameMap} from './action';
import {imageInputMapPs, imageInputMapUniversal, imageInputMapXBox} from './move-image';

export function getImagePath(platformName: PlatformNameType, inputType: ComboInputSingleType): string {
    switch (platformName) {
        case platformNameMap.universal:
            return imageInputMapUniversal[inputType];

        case platformNameMap.playStation:
            return imageInputMapPs[inputType];

        case platformNameMap.xBox:
            return imageInputMapXBox[inputType];

        default:
            throw new Error('Can not get image!');
    }
}
