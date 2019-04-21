// @flow

import type {LangDataType} from '../type';
import {enUs} from '../en-us/data';

export const ruRu: LangDataType = {
    ...enUs,

    /* eslint-disable id-match, id-length */
    META__LANGUAGE_NAME: 'Русский',

    APP_NAME: 'MK11 Комбо Справочник',

    LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: 'Пожалуйста, войдите в систему или зарегистрируйтесь.',
    LOGIN_POPUP__INPUT_USERNAME: 'Логин',
    LOGIN_POPUP__INPUT_PASSWORD: 'Пароль',
    LOGIN_POPUP__BUTTON_LOGIN: 'Войти',
    LOGIN_POPUP__BUTTON_JOIN_NOW: 'Регистрация',
    LOGIN_POPUP__LINK_LOST_PASSWORD: 'Забыли пароль?',

    // spec symbols
    SPACE: ' ',
    /* eslint-enable id-match, id-length */
};
