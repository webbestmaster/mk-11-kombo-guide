// @flow

/* global localStorage, PROJECT_ID */

import {settingConst} from '../../setting-const';

// eslint-disable-next-line id-match
export const localStoragePlatformNameKey = PROJECT_ID + '-platform-name';
export type PlatformNameType = 'universal' | 'playStation' | 'xBox';

export const platformNameMap: {+[key: PlatformNameType]: PlatformNameType} = {
    universal: 'universal',
    playStation: 'playStation',
    xBox: 'xBox',
};

export type SetPlatformTypeType = {|
    +type: 'setting__set-platform-name',
    +payload: {|
        +platformName: PlatformNameType,
    |},
|};

export function setPlatformName(platformName: PlatformNameType): SetPlatformTypeType {
    localStorage.setItem(localStoragePlatformNameKey, platformName);

    return {
        type: settingConst.action.type.setPlatformName,
        payload: {
            platformName,
        },
    };
}
