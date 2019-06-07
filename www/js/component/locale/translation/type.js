// @flow

// use locale :)

export type LangDataType = {|
    /* eslint-disable id-match, id-length */

    +APP_NAME: string,
    +META__LANGUAGE_NAME: string,

    // character data
    +CHARACTER_DATA__TOP_MENU__BASIC: string,
    +CHARACTER_DATA__TOP_MENU__COMBO: string,
    +CHARACTER_DATA__TOP_MENU__SPECIAL: string,
    +CHARACTER_DATA__TOP_MENU__FINISHER: string,

    // combo list
    +COMBO_LIST__JUMPING_ATTACKS: string,
    +COMBO_LIST__HOP_ATTACKS: string,
    +COMBO_LIST__GETUP_ATTACKS: string,
    +COMBO_LIST__FLAWLESS_BLOCK_ATTACKS: string,
    +COMBO_LIST__THROWS: string,
    +COMBO_LIST__ROLL_ESCAPES: string,
    +COMBO_LIST__AIR_ESCAPE: string,
    +COMBO_LIST__FATAL_BLOW: string,

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
    +FRAME_DATA__NOT_AVAILABLE_FRAME_DATA: string,

    // move type
    +MOVE_TYPE__LOW: string,
    +MOVE_TYPE__MID: string,
    +MOVE_TYPE__HIGH: string,
    +MOVE_TYPE__OVERHEAD: string,
    +MOVE_TYPE__THROW: string,
    +MOVE_TYPE__UNBLOCKABLE: string,
    +MOVE_TYPE__NOT_AVAILABLE_MOVE_TYPE: string,

    // move property name
    +MOVE_PROPERTY__INVULNERABLE: string,
    +MOVE_PROPERTY__PARRY: string,
    +MOVE_PROPERTY__PROJECTILE: string,
    +MOVE_PROPERTY__PROJECTILE_INVULNERABLE: string,
    +MOVE_PROPERTY__KRUSHING_BLOW: string,
    +MOVE_PROPERTY__DEBUFF: string,
    +MOVE_PROPERTY__RANGED: string,
    +MOVE_PROPERTY__CANCEL: string,
    +MOVE_PROPERTY__ARMOR: string,

    // setting page
    +SETTING__TITLE: string,
    +SETTING__SELECT_PLATFORM: string,

    // spec symbols
    +SPACE: ' ',

    /* eslint-enable id-match, id-length  */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
