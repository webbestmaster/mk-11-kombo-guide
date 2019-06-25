// @flow

/* global localStorage */

import type {ActionDataType} from '../../../../redux-store-provider/type';
import {settingConst} from '../../setting-const';

import type {FrameDataViewType} from './action';
import {localStorageFrameDataViewTypeKey, frameDataViewTypeMap} from './action';

function getDefaultFrameDataViewType(): FrameDataViewType {
    const savedFrameDataViewType = localStorage.getItem(localStorageFrameDataViewTypeKey);

    const {compact, likeInGame} = frameDataViewTypeMap;

    switch (savedFrameDataViewType) {
        case compact:
            return compact;
        case likeInGame:
            return likeInGame;
        default:
            return compact;
    }
}

export function frameDataViewType(
    frameDataViewTypeValue: FrameDataViewType = getDefaultFrameDataViewType(),
    actionData: ActionDataType
): FrameDataViewType {
    if (actionData.type !== settingConst.action.type.setFrameDataViewType) {
        return frameDataViewTypeValue;
    }

    if (typeof actionData.payload === 'undefined') {
        return frameDataViewTypeValue;
    }

    return actionData.payload.frameDataViewType;
}
