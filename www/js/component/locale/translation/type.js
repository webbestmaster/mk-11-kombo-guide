// @flow

export type LangDataType = {|
    /* eslint-disable id-match, id-length */
    +APP_NAME: string,
    +META__LANGUAGE_NAME: string,

    +LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: string,
    +LOGIN_POPUP__INPUT_USERNAME: string,
    +LOGIN_POPUP__INPUT_PASSWORD: string,
    +LOGIN_POPUP__BUTTON_LOGIN: string,
    +LOGIN_POPUP__BUTTON_JOIN_NOW: string,
    +LOGIN_POPUP__LINK_LOST_PASSWORD: string,

    // spec symbols
    +SPACE: ' ',

    // characters
    +CHARACTER__MOCK_UP_MAN__NAME: string,
    +CHARACTER__MOCK_UP_MAN__DESCRIPTION: string,
    +CHARACTER__MOCK_UP_MAN__VARIATION__KILLER: string,
    +CHARACTER__MOCK_UP_MAN__VARIATION__LOVER: string,
    +CHARACTER__MOCK_UP_MAN__VARIATION__MAN_WTH_GUN: string,

    /* eslint-enable id-match */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
