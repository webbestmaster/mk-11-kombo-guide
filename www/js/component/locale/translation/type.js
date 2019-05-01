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

    // character data
    +CHARACTER_DATA__TOP_MENU__BASIC: string,
    +CHARACTER_DATA__TOP_MENU__COMBO: string,
    +CHARACTER_DATA__TOP_MENU__SPECIAL: string,

    // frame data
    +FRAME_DATA__MOVE_TYPE: string,
    +FRAME_DATA__HIT_DAMAGE: string,
    +FRAME_DATA__BLOCK_DAMAGE: string,
    +FRAME_DATA__FLAWLESS_BLOCK_DAMAGE: string,
    +FRAME_DATA__START_UP: string,
    +FRAME_DATA__ACTIVE: string,
    +FRAME_DATA__RECOVER: string,
    +FRAME_DATA__BLOCK_ADVANTAGE: string,
    +FRAME_DATA__FLAWLESS_BLOCK_ADVANTAGE: string,
    +FRAME_DATA__HIT_ADVANTAGE: string,
    +FRAME_DATA__CANCEL: string,

    // characters
    +CHARACTER__MOCK_UP_MAN__NAME: string,
    /* eslint-enable id-match */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
