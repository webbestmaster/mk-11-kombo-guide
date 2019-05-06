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
    +CHARACTER_DATA__TOP_MENU__BRUTALITY: string,

    // combo list
    +COMBO_LIST__JUMPING_ATTACKS: string,
    +COMBO_LIST__HOP_ATTACKS: string,
    +COMBO_LIST__GETUP_ATTACKS: string,
    +COMBO_LIST__FLAWLESS_BLOCK_ATTACKS: string,
    +COMBO_LIST__THROWS: string,
    +COMBO_LIST__ROLL_ESCAPES: string,
    +COMBO_LIST__AIR_ESCAPE: string,
    +COMBO_LIST__ABILITY: string,
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
    +FRAME_DATA__ADDITIONALLY: string,
    +FRAME_DATA__NOT_AVAILABLE_VALUE: string,

    // move type
    +MOVE_TYPE__LOW: string,
    +MOVE_TYPE__MID: string,
    +MOVE_TYPE__HIGH: string,
    +MOVE_TYPE__OVERHEAD: string,
    +MOVE_TYPE__THROW: string,
    +MOVE_TYPE__UNBLOCKABLE: string,
    +MOVE_TYPE__NOT_AVAILABLE: string,

    // move feature
    +MOVE_FEATURE__PARRY: string,
    +MOVE_FEATURE__INVULNERABLE: string,
    +MOVE_FEATURE__PROJECTILE: string,
    +MOVE_FEATURE__PROJECTILE_INVULNERABLE: string,

    // default move
    +DEFAULT_MOVE__TOWARD_THROW: string,
    +DEFAULT_MOVE__BACK_THROW: string,
    +DEFAULT_MOVE__FORWARD_ROLL_ESCAPE: string,
    +DEFAULT_MOVE__AWAY_ROLL_ESCAPE: string,
    +DEFAULT_MOVE__AIR_BREAKAWAY: string,

    // setting page
    +SETTING__TITLE: string,
    +SETTING__SELECT_PLATFORM: string,

    // characters
    // -> Baraka
    +CHARACTER__Baraka__NAME: string,
    +CHARACTER__Baraka__DESCRIPTION: string,
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Cassie Cage
    +CHARACTER__Cassie_Cage__NAME: string,
    +CHARACTER__Cassie_Cage__DESCRIPTION: string,

    // -> Cetrion
    +CHARACTER__Cetrion__NAME: string,
    +CHARACTER__Cetrion__DESCRIPTION: string,

    // -> D'vorah
    +CHARACTER__D_vorah__NAME: string,
    +CHARACTER__D_vorah__DESCRIPTION: string,

    // -> Erron Black
    +CHARACTER__Erron_Black__NAME: string,
    +CHARACTER__Erron_Black__DESCRIPTION: string,

    // -> Frost
    +CHARACTER__Frost__NAME: string,
    +CHARACTER__Frost__DESCRIPTION: string,

    // -> Geras
    +CHARACTER__Geras__NAME: string,
    +CHARACTER__Geras__DESCRIPTION: string,

    // -> Jade
    +CHARACTER__Jade__NAME: string,
    +CHARACTER__Jade__DESCRIPTION: string,

    // -> Jacqui Briggs
    +CHARACTER__Jacqui_Briggs__NAME: string,
    +CHARACTER__Jacqui_Briggs__DESCRIPTION: string,

    // -> Jax Briggs
    +CHARACTER__Jax_Briggs__NAME: string,
    +CHARACTER__Jax_Briggs__DESCRIPTION: string,

    // -> Johnny Cage
    +CHARACTER__Johnny_Cage__NAME: string,
    +CHARACTER__Johnny_Cage__DESCRIPTION: string,

    // -> Kabal
    +CHARACTER__Kabal__NAME: string,
    +CHARACTER__Kabal__DESCRIPTION: string,

    // -> Kano
    +CHARACTER__Kano__NAME: string,
    +CHARACTER__Kano__DESCRIPTION: string,

    // -> Kollector
    +CHARACTER__Kollector__NAME: string,
    +CHARACTER__Kollector__DESCRIPTION: string,

    // -> Kotal Kahn
    +CHARACTER__Kotal_Kahn__NAME: string,
    +CHARACTER__Kotal_Kahn__DESCRIPTION: string,

    // -> Kitana
    +CHARACTER__Kitana__NAME: string,
    +CHARACTER__Kitana__DESCRIPTION: string,

    // -> Kung Lao
    +CHARACTER__Kung_Lao__NAME: string,
    +CHARACTER__Kung_Lao__DESCRIPTION: string,

    // -> Liu Kang
    +CHARACTER__Liu_Kang__NAME: string,
    +CHARACTER__Liu_Kang__DESCRIPTION: string,

    // -> Noob Saibot
    +CHARACTER__Noob_Saibot__NAME: string,
    +CHARACTER__Noob_Saibot__DESCRIPTION: string,

    // -> Raiden
    +CHARACTER__Raiden__NAME: string,
    +CHARACTER__Raiden__DESCRIPTION: string,

    // -> Scorpion
    +CHARACTER__Scorpion__NAME: string,
    +CHARACTER__Scorpion__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Scorpion__Straight_Punch: string,
    +CHARACTER__Scorpion__Gut_Slice: string,
    +CHARACTER__Scorpion__Low_Jab: string,
    +CHARACTER__Scorpion__Specter_Strike: string,
    +CHARACTER__Scorpion__Rising_Cut: string,
    +CHARACTER__Scorpion__Rising_Spear: string,
    +CHARACTER__Scorpion__Hinge_Kick: string,
    +CHARACTER__Scorpion__Flip_Kick: string,
    +CHARACTER__Scorpion__Flick_Kick: string,
    +CHARACTER__Scorpion__Side_Strike: string,
    +CHARACTER__Scorpion__Step_Kick: string,
    +CHARACTER__Scorpion__Scorpion_Sting: string,
    +CHARACTER__Scorpion__Shin_Strike: string,
    +CHARACTER__Scorpion__Quick_Kick: string,
    // Jumping Attacks
    +CHARACTER__Scorpion__Hell_Hook: string,
    +CHARACTER__Scorpion__Straight_Stab: string,
    +CHARACTER__Scorpion__Devil_Kick: string,
    // Quick Jumping Attacks
    +CHARACTER__Scorpion__Spear_Stab: string,
    +CHARACTER__Scorpion__Corckscrew_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Scorpion__Rising_Blade: string,
    +CHARACTER__Scorpion__Spear_Slice: string,
    // Combo Attacks
    +CHARACTER__Scorpion__The_Damned: string,
    +CHARACTER__Scorpion__Torment: string,
    +CHARACTER__Scorpion__Eternal_Vengeance: string,
    +CHARACTER__Scorpion__Haunted: string,
    +CHARACTER__Scorpion__The_Killing: string,
    +CHARACTER__Scorpion__Banished: string,
    +CHARACTER__Scorpion__Dark_Soul: string,
    +CHARACTER__Scorpion__Fallen_Ashes: string,
    +CHARACTER__Scorpion__Inner_Demon: string,
    +CHARACTER__Scorpion__Soulless: string,
    // Special Attacks
    +CHARACTER__Scorpion__Spear: string,
    +CHARACTER__Scorpion__Hell_Port: string,
    +CHARACTER__Scorpion__Air_Hell_Port: string,
    // Ability
    +CHARACTER__Scorpion__Hell_Flame: string,
    +CHARACTER__Scorpion__Demon_Breath: string,
    +CHARACTER__Scorpion__Demon_Dash: string,
    +CHARACTER__Scorpion__Death_Spin: string,
    +CHARACTER__Scorpion__Death_Spear_Kombo: string,
    +CHARACTER__Scorpion___Air__Sin_Blade: string,
    +CHARACTER__Scorpion__Burning_Spear: string,
    +CHARACTER__Scorpion__Misery_Blade: string,
    +CHARACTER__Scorpion__Demon_Slam: string,
    +CHARACTER__Scorpion__Hell_Port_Cancel: string,
    // Fatal Blow
    +CHARACTER__Scorpion__Get_Over_Here: string,
    // Brutality
    +CHARACTER__Scorpion__Ashes: string,
    +CHARACTER__Scorpion__Burn: string,

    // -> Skarlet
    +CHARACTER__Skarlet__NAME: string,
    +CHARACTER__Skarlet__DESCRIPTION: string,

    // -> Shao Kahn
    +CHARACTER__Shao_Kahn__NAME: string,
    +CHARACTER__Shao_Kahn__DESCRIPTION: string,

    // -> Sonya Blade
    +CHARACTER__Sonya_Blade__NAME: string,
    +CHARACTER__Sonya_Blade__DESCRIPTION: string,

    // -> Sub-Zero
    +CHARACTER__Sub_Zero__NAME: string,
    +CHARACTER__Sub_Zero__DESCRIPTION: string,

    /* eslint-enable id-match */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
