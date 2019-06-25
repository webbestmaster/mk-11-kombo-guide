// @flow

import type {SetLocaleType} from '../component/locale/action';
import type {OnResizeType, OnSetIsScrollEnableType} from '../component/system/action';
import type {SetPopupStateType, SetUserType} from '../component/auth/action';
import type {SetPlatformTypeType} from '../page/settings-page/redux/platform-name/action';
import type {SetShowFlawlessDataType} from '../page/settings-page/redux/show-flawless-data/action';

type DefaultActionDataType = {|type: string|};

export type ActionDataType =
    | DefaultActionDataType
    | OnResizeType
    | SetUserType
    | SetLocaleType
    | SetPopupStateType
    | OnSetIsScrollEnableType
    | SetPlatformTypeType
    | SetShowFlawlessDataType;
