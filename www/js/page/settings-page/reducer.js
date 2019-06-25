// @flow

/* global localStorage, PROJECT_ID */

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../redux-store-provider/type';

import type {PlatformNameType} from './redux/platform-name/action';
import type {IsShowFlawlessDataType} from './redux/show-flawless-data/action';
import {platformName} from './redux/platform-name/reducer';
import {isShowFlawlessData} from './redux/show-flawless-data/reducer';

export type SettingType = {|
    +platformName: PlatformNameType,
    +isShowFlawlessData: IsShowFlawlessDataType,
|};

type ReduceMapType = {|
    +platformName: (name: PlatformNameType, actionData: ActionDataType) => PlatformNameType,
    +isShowFlawlessData: (
        isShowFlawlessData: IsShowFlawlessDataType,
        actionData: ActionDataType,
    ) => IsShowFlawlessDataType,
|};

export const setting = combineReducers<ReduceMapType, SettingType>({
    platformName,
    isShowFlawlessData,
});
