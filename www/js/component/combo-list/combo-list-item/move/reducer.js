// @flow

/* global localStorage, PROJECT_ID */

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../../../redux-store-provider/type';

import type {PlatformNameType} from './action';
import {moveConst} from './move-const';
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

const defaultPlatformName: PlatformNameType = getDefaultPlatformName();

export type PlatformType = {|
    +name: PlatformNameType,
|};

type ReduceMapType = {|
    +name: (name: PlatformNameType, actionData: ActionDataType) => PlatformNameType,
|};

export const platform = combineReducers<ReduceMapType, PlatformType>({
    name: (name: PlatformNameType = defaultPlatformName, actionData: ActionDataType): PlatformNameType => {
        if (actionData.type !== moveConst.action.type.setPlatformType) {
            return name;
        }

        if (typeof actionData.payload === 'undefined') {
            return name;
        }

        return actionData.payload.platformName;
    },
});
