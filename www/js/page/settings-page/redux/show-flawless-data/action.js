// @flow

/* global localStorage, PROJECT_ID */

import {settingConst} from '../../setting-const';

// eslint-disable-next-line id-match
export const localStorageShowFlawlessDataKey = PROJECT_ID + '-is-show-flawless-data';
export type IsShowFlawlessDataType = boolean;

export type SetShowFlawlessDataType = {|
    +type: 'setting__set-is-show-flawless-data',
    +payload: {|
        +isShowFlawlessData: IsShowFlawlessDataType,
    |},
|};

export function setShowFlawlessData(isShowFlawlessData: IsShowFlawlessDataType): SetShowFlawlessDataType {
    localStorage.setItem(localStorageShowFlawlessDataKey, isShowFlawlessData ? '1' : '');

    return {
        type: settingConst.action.type.setShowFlawlessData,
        payload: {
            isShowFlawlessData,
        },
    };
}
