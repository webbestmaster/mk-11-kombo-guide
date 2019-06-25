// @flow

/* global localStorage, PROJECT_ID */

import {settingConst} from '../../setting-const';

// eslint-disable-next-line id-match
export const localStorageFrameDataViewTypeKey = PROJECT_ID + '-frame-data-view-type';
export type FrameDataViewType = 'compact' | 'likeInGame';

export const frameDataViewTypeMap: {+[key: FrameDataViewType]: FrameDataViewType} = {
    compact: 'compact',
    likeInGame: 'likeInGame',
};

export type SetFrameDataViewTypeType = {|
    +type: 'setting__set-frame-data-view-type',
    +payload: {|
        +frameDataViewType: FrameDataViewType,
    |},
|};

export function setFrameDataViewType(frameDataViewType: FrameDataViewType): SetFrameDataViewTypeType {
    localStorage.setItem(localStorageFrameDataViewTypeKey, frameDataViewType);

    return {
        type: settingConst.action.type.setFrameDataViewType,
        payload: {
            frameDataViewType,
        },
    };
}
