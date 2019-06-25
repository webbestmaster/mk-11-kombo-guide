// @flow

/* global localStorage, PROJECT_ID */

import {settingConst} from '../../setting-const';

// eslint-disable-next-line id-match
export const localStorageComboViewTypeKey = PROJECT_ID + '-combo-view-type';
export type ComboViewType = 'standard' | 'compact';

export const comboViewTypeMap: {+[key: ComboViewType]: ComboViewType} = {
    standard: 'standard',
    compact: 'compact',
};

export type SetComboViewTypeType = {|
    +type: 'setting__set-combo-view-type',
    +payload: {|
        +comboViewType: ComboViewType,
    |},
|};

export function setComboViewType(comboViewType: ComboViewType): SetComboViewTypeType {
    localStorage.setItem(localStorageComboViewTypeKey, comboViewType);

    return {
        type: settingConst.action.type.setComboViewType,
        payload: {
            comboViewType,
        },
    };
}
