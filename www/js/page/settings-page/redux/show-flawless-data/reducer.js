// @flow

/* global localStorage */

import type {ActionDataType} from '../../../../redux-store-provider/type';
import {settingConst} from '../../setting-const';

import type {IsShowFlawlessDataType} from './action';
import {localStorageShowFlawlessDataKey} from './action';

function getDefaultIsShowFlawlessData(): IsShowFlawlessDataType {
    const savedDefaultPlatformName = localStorage.getItem(localStorageShowFlawlessDataKey);

    return Boolean(savedDefaultPlatformName);
}

export function isShowFlawlessData(
    isShowFlawlessDataValue: IsShowFlawlessDataType = getDefaultIsShowFlawlessData(),
    actionData: ActionDataType
): boolean {
    if (actionData.type !== settingConst.action.type.setShowFlawlessData) {
        return isShowFlawlessDataValue;
    }

    if (typeof actionData.payload === 'undefined') {
        return isShowFlawlessDataValue;
    }

    return actionData.payload.isShowFlawlessData;
}
