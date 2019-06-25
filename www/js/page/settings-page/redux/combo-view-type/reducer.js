// @flow

/* global localStorage */

import type {ActionDataType} from '../../../../redux-store-provider/type';
import {settingConst} from '../../setting-const';

import type {ComboViewType} from './action';
import {localStorageComboViewTypeKey, comboViewTypeMap} from './action';

function getDefaultComboViewType(): ComboViewType {
    const savedComboViewType = localStorage.getItem(localStorageComboViewTypeKey);

    const {standard, compact} = comboViewTypeMap;

    switch (savedComboViewType) {
        case standard:
            return standard;
        case compact:
            return compact;
        default:
            return standard;
    }
}

export function comboViewType(
    comboViewTypeValue: ComboViewType = getDefaultComboViewType(),
    actionData: ActionDataType
): ComboViewType {
    if (actionData.type !== settingConst.action.type.setComboViewType) {
        return comboViewTypeValue;
    }

    if (typeof actionData.payload === 'undefined') {
        return comboViewTypeValue;
    }

    return actionData.payload.comboViewType;
}
