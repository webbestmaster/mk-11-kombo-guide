// @flow

/* global localStorage */

import type {ActionDataType} from '../../../../redux-store-provider/type';
import {settingConst} from '../../setting-const';

import type {ComboViewType} from './action';
import {localStorageComboViewTypeKey, comboViewTypeMap} from './action';

function getDefaultComboViewType(): ComboViewType {
    const savedComboViewType = localStorage.getItem(localStorageComboViewTypeKey);

    const {moreInfo, likeInGame} = comboViewTypeMap;

    switch (savedComboViewType) {
        case moreInfo:
            return moreInfo;
        case likeInGame:
            return likeInGame;
        default:
            return likeInGame;
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
