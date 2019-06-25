// @flow

import type {ComboInputSingleType} from '../../../../move-type/combo-input-type';
import type {PlatformNameType} from '../../../../page/settings-page/redux/platform-name/action';
import {platformNameMap} from '../../../../page/settings-page/redux/platform-name/action';

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
