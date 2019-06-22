// @flow

/* global localStorage, PROJECT_ID */

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../redux-store-provider/type';

import type {PlatformNameType} from './action';
import {localStoragePlatformNameKey, localStorageShowFlawlessDataKey, platformNameMap} from './action';
import {settingConst} from './setting-const';

function getDefaultPlatformName(): PlatformNameType {
    const savedDefaultPlatformName = localStorage.getItem(localStoragePlatformNameKey);

    const {playStation, xBox, universal} = platformNameMap;

    switch (savedDefaultPlatformName) {
        case universal:
            return universal;
        case playStation:
            return playStation;
        case xBox:
            return xBox;
        default:
            return universal;
    }
}

function getDefaultIsShowFlawlessData(): boolean {
    const savedDefaultPlatformName = localStorage.getItem(localStorageShowFlawlessDataKey);

    return Boolean(savedDefaultPlatformName);
}

export type SettingType = {|
    +platformName: PlatformNameType,
    +isShowFlawlessData: boolean,
|};

type ReduceMapType = {|
    +platformName: (name: PlatformNameType, actionData: ActionDataType) => PlatformNameType,
    +isShowFlawlessData: (isShowFlawlessData: boolean, actionData: ActionDataType) => boolean,
|};

export const setting = combineReducers<ReduceMapType, SettingType>({
    platformName: (name: PlatformNameType = getDefaultPlatformName(), actionData: ActionDataType): PlatformNameType => {
        if (actionData.type !== settingConst.action.type.setPlatformName) {
            return name;
        }

        if (typeof actionData.payload === 'undefined') {
            return name;
        }

        return actionData.payload.platformName;
    },
    isShowFlawlessData: (
        isShowFlawlessData: boolean = getDefaultIsShowFlawlessData(),
        actionData: ActionDataType
    ): boolean => {
        if (actionData.type !== settingConst.action.type.setShowFlawlessData) {
            return isShowFlawlessData;
        }

        if (typeof actionData.payload === 'undefined') {
            return isShowFlawlessData;
        }

        return actionData.payload.isShowFlawlessData;
    },
});
