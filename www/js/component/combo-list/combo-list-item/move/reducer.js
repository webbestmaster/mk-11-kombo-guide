// @flow

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../../../redux-store-provider/type';

import type {PlatformNameType} from './action';
import {moveConst} from './move-const';
import {platformNameMap} from './action';

const defaultPlatformName: PlatformNameType = platformNameMap.universal;

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
