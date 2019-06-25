// @flow

/* global localStorage, PROJECT_ID */

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../redux-store-provider/type';

import type {PlatformNameType} from './redux/platform-name/action';
import {platformName} from './redux/platform-name/reducer';
import type {IsShowFlawlessDataType} from './redux/show-flawless-data/action';
import {isShowFlawlessData} from './redux/show-flawless-data/reducer';
import type {ComboViewType} from './redux/combo-view-type/action';
import {comboViewType} from './redux/combo-view-type/reducer';
import type {FrameDataViewType} from './redux/frame-data-view-type/action';
import {frameDataViewType} from './redux/frame-data-view-type/reducer';

export type SettingType = {|
    +platformName: PlatformNameType,
    +isShowFlawlessData: IsShowFlawlessDataType,
    +comboViewType: ComboViewType,
    +frameDataViewType: FrameDataViewType,
|};

type ReduceMapType = {|
    +platformName: (name: PlatformNameType, actionData: ActionDataType) => PlatformNameType,
    +isShowFlawlessData: (
        isShowFlawlessData: IsShowFlawlessDataType,
        actionData: ActionDataType,
    ) => IsShowFlawlessDataType,
    +comboViewType: (comboViewType: ComboViewType, actionData: ActionDataType) => ComboViewType,
    +frameDataViewType: (frameDataViewType: FrameDataViewType, actionData: ActionDataType) => FrameDataViewType,
|};

export const setting = combineReducers<ReduceMapType, SettingType>({
    platformName,
    isShowFlawlessData,
    comboViewType,
    frameDataViewType,
});
