// @flow

/* global localStorage, navigator */

import {combineReducers} from 'redux';

import type {ActionDataType} from '../../redux-store-provider/type';

import type {LocaleNameType} from './const';
import {localeConst} from './const';

// eslint-disable-next-line complexity
function getLocaleName(): LocaleNameType {
    const savedLocaleName = localStorage.getItem(localeConst.key.localStorage.localeName);
    const localeNameList: Array<LocaleNameType> = localeConst.localeNameList;

    if (
        savedLocaleName === 'en-US'
        || savedLocaleName === 'ru-RU'
        || savedLocaleName === 'zh-CN'
        || savedLocaleName === 'zh-TW'
    ) {
        return savedLocaleName;
    }

    const navigatorLanguages = navigator.languages;

    if (!Array.isArray(navigatorLanguages)) {
        return localeConst.defaults.localeName;
    }

    let localeName = localeConst.defaults.localeName;

    navigatorLanguages.every(
        (deviceLocaleName: string): boolean => {
            if (localeNameList.includes(deviceLocaleName)) {
                localeName = deviceLocaleName;
                return false;
            }

            return true;
        }
    );

    return localeName;
}

const initialLocaleName = getLocaleName();

localStorage.setItem(localeConst.key.localStorage.localeName, initialLocaleName);

export type LocaleType = {|
    +name: LocaleNameType,
|};

type ReduceMapType = {|
    +name: (localeName: LocaleNameType, actionData: ActionDataType) => LocaleNameType,
|};

export const locale = combineReducers<ReduceMapType, LocaleType>({
    name: (localeName: LocaleNameType = initialLocaleName, actionData: ActionDataType): LocaleNameType => {
        if (actionData.type !== localeConst.action.type.setLocale) {
            return localeName;
        }

        if (typeof actionData.payload === 'undefined') {
            return localeName;
        }

        return actionData.payload.localeName;
    },
});
