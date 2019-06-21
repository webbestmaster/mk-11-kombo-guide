// @flow

import type {AuthType} from '../component/auth/reducer';
import type {LocaleType} from '../component/locale/reducer';
import type {SystemType} from '../component/system/reducer/root';
import type {SettingType} from '../page/settings-page/reducer';

export {auth} from '../component/auth/reducer';
export {locale} from '../component/locale/reducer';
export {system} from '../component/system/reducer/root';
export {setting} from '../page/settings-page/reducer';

export type GlobalStateType = {|
    +auth: AuthType,
    +locale: LocaleType,
    +system: SystemType,
    +setting: SettingType,
|};
