// @flow

/* global localStorage, PROJECT_ID */

import {settingConst} from './setting-const';

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

// export const localStorageShowFlawlessDataKey = PROJECT_ID + '-flawless-data';
export type SetShowFlawlessDataType = {|
    +type: 'setting__set-show-flawless-data',
    +payload: {|
        +isShowFlawlessData: boolean,
    |},
|};

export function setShowFlawlessData(isShowFlawlessData: boolean): SetShowFlawlessDataType {
    // localStorage.setItem(localStorageShowFlawlessDataKey, isShowFlawlessData ? '1' : '0');

    return {
        type: settingConst.action.type.setShowFlawlessData,
        payload: {
            isShowFlawlessData,
        },
    };
}
