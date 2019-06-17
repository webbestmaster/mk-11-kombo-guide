// @flow

/* global localStorage, PROJECT_ID */

import {moveConst} from './move-const';
// eslint-disable-next-line id-match
export const localStoragePlatformNameKey = PROJECT_ID + '-platform-name';

export type PlatformNameType = 'universal' | 'playStation' | 'xBox';

export const platformNameMap: {+[key: PlatformNameType]: PlatformNameType} = {
    universal: 'universal',
    playStation: 'playStation',
    xBox: 'xBox',
};

export type SetPlatformTypeType = {|
    +type: 'move__set-platform-type',
    +payload: {|
        +platformName: PlatformNameType,
    |},
|};

export function setPlatformType(platformName: PlatformNameType): SetPlatformTypeType {
    localStorage.setItem(localStoragePlatformNameKey, platformName);

    return {
        type: moveConst.action.type.setPlatformType,
        payload: {
            platformName,
        },
    };
}
