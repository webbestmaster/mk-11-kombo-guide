// @flow

/* global localStorage */

import type {ActionDataType} from '../../../../redux-store-provider/type';
import {settingConst} from '../../setting-const';

import type {PlatformNameType} from './action';
import {localStoragePlatformNameKey, platformNameMap} from './action';

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

export function platformName(
    name: PlatformNameType = getDefaultPlatformName(),
    actionData: ActionDataType
): PlatformNameType {
    if (actionData.type !== settingConst.action.type.setPlatformName) {
        return name;
    }

    if (typeof actionData.payload === 'undefined') {
        return name;
    }

    return actionData.payload.platformName;
}
