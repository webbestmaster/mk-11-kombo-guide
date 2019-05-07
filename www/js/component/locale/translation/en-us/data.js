// @flow

import type {LangDataType} from '../type';

export const enUs: LangDataType = {
    /* eslint-disable id-match, id-length, camelcase */
    META__LANGUAGE_NAME: 'English',

    APP_NAME: 'MK11 Kombo Reference',

    LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: 'Please log in or join now.',
    LOGIN_POPUP__INPUT_USERNAME: 'Username',
    LOGIN_POPUP__INPUT_PASSWORD: 'Password',
    LOGIN_POPUP__BUTTON_LOGIN: 'Login',
    LOGIN_POPUP__BUTTON_JOIN_NOW: 'Join now',
    LOGIN_POPUP__LINK_LOST_PASSWORD: 'Lost Password?',

    // spec symbols
    SPACE: ' ',

    // character data
    CHARACTER_DATA__TOP_MENU__BASIC: 'Basic',
    CHARACTER_DATA__TOP_MENU__COMBO: 'Kombo',
    CHARACTER_DATA__TOP_MENU__SPECIAL: 'Special',
    CHARACTER_DATA__TOP_MENU__BRUTALITY: 'Brutality',

    // combo list
    COMBO_LIST__JUMPING_ATTACKS: 'Jumping Attacks',
    COMBO_LIST__HOP_ATTACKS: 'Hop Attacks',
    COMBO_LIST__GETUP_ATTACKS: 'Getup Attacks',
    COMBO_LIST__FLAWLESS_BLOCK_ATTACKS: 'Flawless Block Attacks',
    COMBO_LIST__THROWS: 'Throws',
    COMBO_LIST__ROLL_ESCAPES: 'Roll Escapes',
    COMBO_LIST__AIR_ESCAPE: 'Air Escape',
    COMBO_LIST__ABILITY: 'Ability',
    COMBO_LIST__FATAL_BLOW: 'Fatal Blow',

    // frame data
    FRAME_DATA__MOVE_TYPE: 'Move type',
    FRAME_DATA__HIT_DAMAGE: 'Hit damage',
    FRAME_DATA__BLOCK_DAMAGE: 'Block damage',
    FRAME_DATA__FLAWLESS_BLOCK_DAMAGE: 'Flawless block damage',
    FRAME_DATA__START_UP: 'Start-up',
    FRAME_DATA__ACTIVE: 'Active',
    FRAME_DATA__RECOVER: 'Recover',
    FRAME_DATA__BLOCK_ADVANTAGE: 'Block advantage',
    FRAME_DATA__FLAWLESS_BLOCK_ADVANTAGE: 'Flawless block advantage',
    FRAME_DATA__HIT_ADVANTAGE: 'Hit advantage',
    FRAME_DATA__CANCEL: 'Cancel',
    FRAME_DATA__ADDITIONALLY: 'Additionally',
    FRAME_DATA__NOT_AVAILABLE_VALUE: 'N/A Value',

    // move type
    MOVE_TYPE__LOW: 'Low',
    MOVE_TYPE__MID: 'Mid',
    MOVE_TYPE__HIGH: 'High',
    MOVE_TYPE__OVERHEAD: 'Overhead',
    MOVE_TYPE__THROW: 'Throw',
    MOVE_TYPE__UNBLOCKABLE: 'Unblockable',
    MOVE_TYPE__NOT_AVAILABLE: 'N/A Type',

    // move feature
    MOVE_FEATURE__PARRY: 'Parry',
    MOVE_FEATURE__INVULNERABLE: 'Invulnerable',
    MOVE_FEATURE__PROJECTILE: 'Projectile',
    MOVE_FEATURE__PROJECTILE_INVULNERABLE: 'Projectile invulnerable',

    // default move
    DEFAULT_MOVE__TOWARD_THROW: 'Toward Throw',
    DEFAULT_MOVE__BACK_THROW: 'Back Throw',
    DEFAULT_MOVE__FORWARD_ROLL_ESCAPE: 'Forward Roll Escape',
    DEFAULT_MOVE__AWAY_ROLL_ESCAPE: 'Away Roll Escape',
    DEFAULT_MOVE__AIR_BREAKAWAY: '(Air) Breakaway',

    // setting page
    SETTING__TITLE: 'Settings',
    SETTING__SELECT_PLATFORM: 'Select platform',

    // characters
    // -> Baraka
    CHARACTER__Baraka__NAME: 'Baraka',
    CHARACTER__Baraka__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Baraka__Spiked_Cross: 'Spiked Cross',
    CHARACTER__Baraka__Low_Stab: 'Low Stab',
    CHARACTER__Baraka__Straight_Shank: 'Straight Shank',
    CHARACTER__Baraka__Warrior_Strike: 'Warrior Strike',
    CHARACTER__Baraka__Lunging_Blades: 'Lunging Blades',
    CHARACTER__Baraka__Blade_Swipe: 'Blade Swipe',
    CHARACTER__Baraka__Rising_Blades: 'Rising Blades',
    CHARACTER__Baraka__Hinge_Kick: 'Hinge Kick',
    CHARACTER__Baraka__Foot_Stomp: 'Foot Stomp',
    CHARACTER__Baraka__Low_Poke: 'Low Poke',
    CHARACTER__Baraka__Low_Shank: 'Low Shank',
    CHARACTER__Baraka__Big_Leg: 'Big Leg',
    CHARACTER__Baraka__Leg_Chop: 'Leg Chop',
    CHARACTER__Baraka__Knee_Lunge: 'Knee Lunge',
    CHARACTER__Baraka__Side_Kick: 'Side Kick',
    // Jumping Attacks
    CHARACTER__Baraka__Hangry_Jab: 'Hangry Jab',
    CHARACTER__Baraka__Sinister_Shank: 'Sinister Shank',
    CHARACTER__Baraka__Sinister_Slice: 'Sinister Slice',
    CHARACTER__Baraka__Drop_Kick: 'Drop Kick',
    // Quick Jumping Attacks
    CHARACTER__Baraka__Bladed_Doom: 'Bladed Doom',
    CHARACTER__Baraka__Karbrac_Kick: 'Karbrac Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Baraka__Fatal_Strike: 'Fatal Strike',
    CHARACTER__Baraka__Karbrac_Stab: 'Karbrac Stab',
    // Combo Attacks
    CHARACTER__Baraka__Easy_Kill: 'Easy Kill',
    CHARACTER__Baraka__Mangled: 'Mangled',
    CHARACTER__Baraka__Bloodthirsty: 'Bloodthirsty',
    CHARACTER__Baraka__Outworld_Bash: 'Outworld Bash',
    CHARACTER__Baraka__Splintered: 'Splintered',
    CHARACTER__Baraka__Painful_Swipes: 'Painful Swipes',
    CHARACTER__Baraka__Bloody_Mess: 'Bloody Mess',
    CHARACTER__Baraka__Tarkatan_Rush: 'Tarkatan Rush',
    CHARACTER__Baraka__Kutting_Loose: 'Kutting Loose',
    CHARACTER__Baraka__Doom_Kicks: 'Doom Kicks',
    // Special Attacks
    CHARACTER__Baraka__Blade_Spark: 'Blade Spark',
    CHARACTER__Baraka__Chop_Chop: 'Chop Chop',
    CHARACTER__Baraka__War_Banner: 'War Banner',
    // Ability
    CHARACTER__Baraka__Baraka_Barrage: 'Baraka Barrage',
    CHARACTER__Baraka__Blood_Lunge: 'Blood Lunge',
    CHARACTER__Baraka__Spine_Burst: 'Spine Burst',
    CHARACTER__Baraka__Leg_Kabob: 'Leg Kabob',
    CHARACTER__Baraka__Gutted: 'Gutted',
    CHARACTER__Baraka__Blade_Charge: 'Blade Charge',
    CHARACTER__Baraka__War_Banner_Bash: 'War Banner Bash',
    CHARACTER__Baraka__Staked: 'Staked',
    CHARACTER__Baraka__War_Banner_Charge: 'War Banner Charge',
    CHARACTER__Baraka__Baraka_Serker: 'Baraka-Serker',
    // Fatal Blow
    CHARACTER__Baraka__Skewered: 'Skewered',
    // Brutality
    CHARACTER__Baraka__FOOD: 'FOOD',
    CHARACTER__Baraka__Split_in_Two: 'Split in Two',
    CHARACTER__Baraka__Tastes_Like_Fear: 'Tastes Like Fear',
    CHARACTER__Baraka__Food_For_The_Warriors: 'Food For The Warriors',

    // -> Cassie Cage
    CHARACTER__Cassie_Cage__NAME: 'Cassie Cage',
    CHARACTER__Cassie_Cage__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Cetrion
    CHARACTER__Cetrion__NAME: 'Cetrion',
    CHARACTER__Cetrion__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> D'vorah
    CHARACTER__D_Vorah__NAME: 'D\'Vorah',
    CHARACTER__D_Vorah__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Erron Black
    CHARACTER__Erron_Black__NAME: 'Erron Black',
    CHARACTER__Erron_Black__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Frost
    CHARACTER__Frost__NAME: 'Frost',
    CHARACTER__Frost__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Geras
    CHARACTER__Geras__NAME: 'Geras',
    CHARACTER__Geras__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Jade
    CHARACTER__Jade__NAME: 'Jade',
    CHARACTER__Jade__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Jacqui Briggs
    CHARACTER__Jacqui_Briggs__NAME: 'Jacqui Briggs',
    CHARACTER__Jacqui_Briggs__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Jax Briggs
    CHARACTER__Jax_Briggs__NAME: 'Jax Briggs',
    CHARACTER__Jax_Briggs__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Johnny Cage
    CHARACTER__Johnny_Cage__NAME: 'Johnny Cage',
    CHARACTER__Johnny_Cage__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Kabal
    CHARACTER__Kabal__NAME: 'Kabal',
    CHARACTER__Kabal__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Kano
    CHARACTER__Kano__NAME: 'Kano',
    CHARACTER__Kano__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Kollector
    CHARACTER__Kollector__NAME: 'Kollector',
    CHARACTER__Kollector__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Kotal Kahn
    CHARACTER__Kotal_Kahn__NAME: 'Kotal Kahn',
    CHARACTER__Kotal_Kahn__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Kitana
    CHARACTER__Kitana__NAME: 'Kitana',
    CHARACTER__Kitana__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Kung Lao
    CHARACTER__Kung_Lao__NAME: 'Kung Lao',
    CHARACTER__Kung_Lao__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Liu Kang
    CHARACTER__Liu_Kang__NAME: 'Liu Kang',
    CHARACTER__Liu_Kang__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Noob Saibot
    CHARACTER__Noob_Saibot__NAME: 'Noob Saibot',
    CHARACTER__Noob_Saibot__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Raiden
    CHARACTER__Raiden__NAME: 'Raiden',
    CHARACTER__Raiden__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Scorpion
    CHARACTER__Scorpion__NAME: 'Scorpion',
    CHARACTER__Scorpion__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Scorpion__Straight_Punch: 'Straight Punch',
    CHARACTER__Scorpion__Gut_Slice: 'Gut Slice',
    CHARACTER__Scorpion__Low_Jab: 'Low Jab',
    CHARACTER__Scorpion__Specter_Strike: 'Specter Strike',
    CHARACTER__Scorpion__Rising_Cut: 'Rising Cut',
    CHARACTER__Scorpion__Rising_Spear: 'Rising Spear',
    CHARACTER__Scorpion__Hinge_Kick: 'Hinge Kick',
    CHARACTER__Scorpion__Flip_Kick: 'Flip Kick',
    CHARACTER__Scorpion__Flick_Kick: 'Flick Kick',
    CHARACTER__Scorpion__Side_Strike: 'Side Strike',
    CHARACTER__Scorpion__Step_Kick: 'Step Kick',
    CHARACTER__Scorpion__Scorpion_Sting: 'Scorpion Sting',
    CHARACTER__Scorpion__Shin_Strike: 'Shin Strike',
    CHARACTER__Scorpion__Quick_Kick: 'Quick Kick',
    // Jumping Attacks
    CHARACTER__Scorpion__Hell_Hook: 'Hell Hook',
    CHARACTER__Scorpion__Straight_Stab: 'Straight Stab',
    CHARACTER__Scorpion__Devil_Kick: 'Devil Kick',
    // Quick Jumping Attacks
    CHARACTER__Scorpion__Spear_Stab: 'Spear Stab',
    CHARACTER__Scorpion__Corckscrew_Kick: 'Corckscrew Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Scorpion__Rising_Blade: 'Rising Blade',
    CHARACTER__Scorpion__Spear_Slice: 'Spear Slice',
    // Combo Attacks
    CHARACTER__Scorpion__The_Damned: 'The Damned',
    CHARACTER__Scorpion__Torment: 'Torment',
    CHARACTER__Scorpion__Eternal_Vengeance: 'Eternal Vengeance',
    CHARACTER__Scorpion__Haunted: 'Haunted',
    CHARACTER__Scorpion__The_Killing: 'The Killing',
    CHARACTER__Scorpion__Banished: 'Banished',
    CHARACTER__Scorpion__Dark_Soul: 'Dark Soul',
    CHARACTER__Scorpion__Fallen_Ashes: 'Fallen Ashes',
    CHARACTER__Scorpion__Inner_Demon: 'Inner Demon',
    CHARACTER__Scorpion__Soulless: 'Soulless',
    // Special Attacks
    CHARACTER__Scorpion__Spear: 'Spear',
    CHARACTER__Scorpion__Hell_Port: 'Hell Port',
    CHARACTER__Scorpion__Air_Hell_Port: '(Air) Hell Port',
    // Ability
    CHARACTER__Scorpion__Hell_Flame: 'Hell Flame',
    CHARACTER__Scorpion__Demon_Breath: 'Demon Breath',
    CHARACTER__Scorpion__Demon_Dash: 'Demon Dash',
    CHARACTER__Scorpion__Death_Spin: 'Death Spin',
    CHARACTER__Scorpion__Death_Spear_Kombo: 'Death Spear Kombo',
    CHARACTER__Scorpion__Air_Sin_Blade: '(Air) Sin Blade',
    CHARACTER__Scorpion__Burning_Spear: 'Burning Spear',
    CHARACTER__Scorpion__Misery_Blade: 'Misery Blade',
    CHARACTER__Scorpion__Demon_Slam: 'Demon Slam',
    CHARACTER__Scorpion__Hell_Port_Cancel: 'Hell Port Cancel',
    // Fatal Blow
    CHARACTER__Scorpion__Get_Over_Here: 'Get Over Here',
    // Brutality
    CHARACTER__Scorpion__Ashes: 'Ashes',
    CHARACTER__Scorpion__Burn: 'Burn',

    // -> Skarlet
    CHARACTER__Skarlet__NAME: 'Skarlet',
    CHARACTER__Skarlet__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Shao Kahn
    CHARACTER__Shao_Kahn__NAME: 'Shao Kahn',
    CHARACTER__Shao_Kahn__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Sonya Blade
    CHARACTER__Sonya_Blade__NAME: 'Sonya Blade',
    CHARACTER__Sonya_Blade__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    // -> Sub-Zero
    CHARACTER__Sub_Zero__NAME: 'Sub-Zero',
    CHARACTER__Sub_Zero__DESCRIPTION: '',
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    /* eslint-enable id-match, id-length, camelcase */
};
