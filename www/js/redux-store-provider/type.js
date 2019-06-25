// @flow

import type {SetLocaleType} from '../component/locale/action';
import type {OnResizeType, OnSetIsScrollEnableType} from '../component/system/action';
import type {SetPopupStateType, SetUserType} from '../component/auth/action';
import type {SetPlatformTypeType} from '../page/settings-page/redux/platform-name/action';
import type {SetShowFlawlessDataType} from '../page/settings-page/redux/show-flawless-data/action';
import type {SetComboViewTypeType} from '../page/settings-page/redux/combo-view-type/action';
import type {SetFrameDataViewTypeType} from '../page/settings-page/redux/frame-data-view-type/action';

type DefaultActionDataType = {|type: string|};

export type ActionDataType =
    | OnResizeType
    | SetUserType
    | SetLocaleType
    | SetPopupStateType
    | OnSetIsScrollEnableType
    | SetPlatformTypeType
    | SetShowFlawlessDataType
    | SetComboViewTypeType
    | SetFrameDataViewTypeType
    | DefaultActionDataType;
