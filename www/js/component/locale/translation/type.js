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
    +COMBO_LIST__FATALITY: string,
    +COMBO_LIST__BRUTALITY: string,

    // move data
    +FRAME_DATA__MOVE_TYPE: string,
    +FRAME_DATA__HIT_DAMAGE: string,
    +FRAME_DATA__BLOCK_DAMAGE: string,
    +FRAME_DATA__FLAWLESS_BLOCK_DAMAGE: string,

    // frame data
    +FRAME_DATA__START_UP: string,
    +FRAME_DATA__ACTIVE: string,
    +FRAME_DATA__RECOVERY: string,
    +FRAME_DATA__CANCEL_ADVANTAGE: string,
    +FRAME_DATA__HIT_ADVANTAGE: string,
    +FRAME_DATA__BLOCK_ADVANTAGE: string,
    +FRAME_DATA__FLAWLESS_BLOCK_ADVANTAGE: string,
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
    +MOVE_PROPERTY__PROJ_PARRY_ALL: string,
    +MOVE_PROPERTY__PARRY_HIGH: string,
    +MOVE_PROPERTY__STANCE: string,
    +MOVE_PROPERTY__STUN: string,
    +MOVE_PROPERTY__PROJECTILE: string,
    +MOVE_PROPERTY__PROJECTILE_INVULNERABLE: string,
    +MOVE_PROPERTY__KRUSHING_BLOW: string,
    +MOVE_PROPERTY__BUFF: string,
    +MOVE_PROPERTY__DEBUFF: string,
    +MOVE_PROPERTY__RANGED: string,
    +MOVE_PROPERTY__CANCEL: string,
    +MOVE_PROPERTY__DELAY: string,
    +MOVE_PROPERTY__ARMOR: string,
    +MOVE_PROPERTY__ARMOR_ONE_HIT: string,
    +MOVE_PROPERTY__PROXIMITY: string,
    +MOVE_PROPERTY__RANGED_DIRECTABLE: string,
    +MOVE_PROPERTY__RANGED_TRACKING: string,
    +MOVE_PROPERTY__TELEPORT: string,
    +MOVE_PROPERTY__BUFF_RESIST: string,
    +MOVE_PROPERTY__BUFF_BLOCK_DAMAGE: string,
    +MOVE_PROPERTY__BUFF_DAMAGE: string,

    // setting page
    +SETTING__TITLE: string,
    +SETTING__CHOOSE_A_PLATFORM: string,
    +SETTING__REPORT_A_BUG: string,
    +SETTING__VIEW_SETTING__HEADER: string,
    +SETTING__SHOW_FLAWLESS_FRAME_DATA: string,
    +SETTING__FRAME_DATA_TABLE_TYPE: string,
    +SETTING__FRAME_DATA_TABLE__COMPACT: string,
    +SETTING__FRAME_DATA_TABLE__LIKE_IN_GAME: string,
    +SETTING__INPUT_DATA_ITEM_TYPE: string,
    +SETTING__INPUT_DATA_ITEM_TYPE__LIKE_IN_GAME: string,
    +SETTING__INPUT_DATA_ITEM_TYPE__MORE_INFO: string,

    // additional info
    +ADDITIONAL_INFO__PROPERTIES: string,
    +ADDITIONAL_INFO__VARIATION: string,
    +ADDITIONAL_INFO__DESCRIPTION: string,

    // spec symbols
    +SPACE: ' ',

    /* eslint-enable id-match, id-length  */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
