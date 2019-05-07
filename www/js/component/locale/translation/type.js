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
    +CHARACTER_DATA__TOP_MENU__ABILITY: string,
    +CHARACTER_DATA__TOP_MENU__BRUTALITY: string,

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
    +CHARACTER__Baraka__Spiked_Cross: string,
    +CHARACTER__Baraka__Low_Stab: string,
    +CHARACTER__Baraka__Straight_Shank: string,
    +CHARACTER__Baraka__Warrior_Strike: string,
    +CHARACTER__Baraka__Lunging_Blades: string,
    +CHARACTER__Baraka__Blade_Swipe: string,
    +CHARACTER__Baraka__Rising_Blades: string,
    +CHARACTER__Baraka__Hinge_Kick: string,
    +CHARACTER__Baraka__Foot_Stomp: string,
    +CHARACTER__Baraka__Low_Poke: string,
    +CHARACTER__Baraka__Low_Shank: string,
    +CHARACTER__Baraka__Big_Leg: string,
    +CHARACTER__Baraka__Leg_Chop: string,
    +CHARACTER__Baraka__Knee_Lunge: string,
    +CHARACTER__Baraka__Side_Kick: string,
    // Jumping Attacks
    +CHARACTER__Baraka__Hangry_Jab: string,
    +CHARACTER__Baraka__Sinister_Shank: string,
    +CHARACTER__Baraka__Sinister_Slice: string,
    +CHARACTER__Baraka__Drop_Kick: string,
    // Quick Jumping Attacks
    +CHARACTER__Baraka__Bladed_Doom: string,
    +CHARACTER__Baraka__Karbrac_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Baraka__Fatal_Strike: string,
    +CHARACTER__Baraka__Karbrac_Stab: string,
    // Combo Attacks
    +CHARACTER__Baraka__Easy_Kill: string,
    +CHARACTER__Baraka__Mangled: string,
    +CHARACTER__Baraka__Bloodthirsty: string,
    +CHARACTER__Baraka__Outworld_Bash: string,
    +CHARACTER__Baraka__Splintered: string,
    +CHARACTER__Baraka__Painful_Swipes: string,
    +CHARACTER__Baraka__Bloody_Mess: string,
    +CHARACTER__Baraka__Tarkatan_Rush: string,
    +CHARACTER__Baraka__Kutting_Loose: string,
    +CHARACTER__Baraka__Doom_Kicks: string,
    // Special Attacks
    +CHARACTER__Baraka__Blade_Spark: string,
    +CHARACTER__Baraka__Chop_Chop: string,
    +CHARACTER__Baraka__War_Banner: string,
    // Ability
    +CHARACTER__Baraka__Baraka_Barrage: string,
    +CHARACTER__Baraka__Blood_Lunge: string,
    +CHARACTER__Baraka__Spine_Burst: string,
    +CHARACTER__Baraka__Leg_Kabob: string,
    +CHARACTER__Baraka__Gutted: string,
    +CHARACTER__Baraka__Blade_Charge: string,
    +CHARACTER__Baraka__War_Banner_Bash: string,
    +CHARACTER__Baraka__Staked: string,
    +CHARACTER__Baraka__War_Banner_Charge: string,
    +CHARACTER__Baraka__Baraka_Serker: string,
    // Fatal Blow
    +CHARACTER__Baraka__Skewered: string,
    // Brutality
    +CHARACTER__Baraka__FOOD: string,
    +CHARACTER__Baraka__Split_in_Two: string,
    +CHARACTER__Baraka__Tastes_Like_Fear: string,
    +CHARACTER__Baraka__Food_For_The_Warriors: string,

    // -> Cassie Cage
    +CHARACTER__Cassie_Cage__NAME: string,
    +CHARACTER__Cassie_Cage__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Cassie_Cage__Justice_Jab: string,
    +CHARACTER__Cassie_Cage__Low_Shot: string,
    +CHARACTER__Cassie_Cage__Straight_Punch: string,
    +CHARACTER__Cassie_Cage__Quick_Hook: string,
    +CHARACTER__Cassie_Cage__Throwin_Bows: string,
    +CHARACTER__Cassie_Cage__Backhand: string,
    +CHARACTER__Cassie_Cage__Bloody_Knuckles: string,
    +CHARACTER__Cassie_Cage__High_Kick_3: string,
    +CHARACTER__Cassie_Cage__Glow_Burst: string,
    +CHARACTER__Cassie_Cage__Spin_Kick: string,
    +CHARACTER__Cassie_Cage__Side_Kick: string,
    +CHARACTER__Cassie_Cage__Roundhouse: string,
    +CHARACTER__Cassie_Cage__Cunning_Sweep: string,
    +CHARACTER__Cassie_Cage__Flick_Kick: string,
    +CHARACTER__Cassie_Cage__Steel_Toe: string,
    // Jumping Attacks
    +CHARACTER__Cassie_Cage__Cage_Jab: string,
    +CHARACTER__Cassie_Cage__Double_Axe_Handle: string,
    +CHARACTER__Cassie_Cage__Army_Boot: string,
    // Quick Jumping Attacks
    +CHARACTER__Cassie_Cage__Dive_Bomb: string,
    +CHARACTER__Cassie_Cage__Kombat_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Cassie_Cage__Flip_Kick: string,
    +CHARACTER__Cassie_Cage__Nut_Punch: string,
    // Combo Attacks
    +CHARACTER__Cassie_Cage__Double_Down: string,
    +CHARACTER__Cassie_Cage__Whip_It_Good: string,
    +CHARACTER__Cassie_Cage__Belly_Buster: string,
    +CHARACTER__Cassie_Cage__Active_Duty: string,
    +CHARACTER__Cassie_Cage__Hot_Take: string,
    +CHARACTER__Cassie_Cage__Hooks_And_Hammers: string,
    +CHARACTER__Cassie_Cage__Assaulted: string,
    +CHARACTER__Cassie_Cage__The_Rushdown: string,
    +CHARACTER__Cassie_Cage__No_Breaks: string,
    +CHARACTER__Cassie_Cage__Keepin_It_Classy: string,
    +CHARACTER__Cassie_Cage__Shocker: string,
    +CHARACTER__Cassie_Cage__Marching_Orders: string,
    +CHARACTER__Cassie_Cage__Military_Dance: string,
    +CHARACTER__Cassie_Cage__Heavy_Hitter: string,
    +CHARACTER__Cassie_Cage__Poppin_Bubbles: string,
    +CHARACTER__Cassie_Cage__One_in_the_Chamber: string,
    // Special Attacks
    +CHARACTER__Cassie_Cage__Dual_Wielding: string,
    +CHARACTER__Cassie_Cage__Ball_Buster: string,
    +CHARACTER__Cassie_Cage__Up_Glow_Kick: string,
    // Ability
    +CHARACTER__Cassie_Cage__Control_BLB_118: string,
    +CHARACTER__Cassie_Cage___Air__Bullet_Barrage: string,
    +CHARACTER__Cassie_Cage__Kneecappin: string,
    +CHARACTER__Cassie_Cage__Flippin_Out: string,
    +CHARACTER__Cassie_Cage__Shoulder_Charge: string,
    +CHARACTER__Cassie_Cage__Flying_Glow_Kick: string,
    +CHARACTER__Cassie_Cage__Air_BLB_118_Advance: string,
    +CHARACTER__Cassie_Cage__BLB_118_Bullet_Ricochet: string,
    +CHARACTER__Cassie_Cage__BLB_118_Energy_Bounce: string,
    +CHARACTER__Cassie_Cage__BLB_118_Energy_Burst: string,
    +CHARACTER__Cassie_Cage__BLB_118_Bitchin_Bubble: string,
    // Fatal Blow
    +CHARACTER__Cassie_Cage__PISSED_AF: string,
    // Brutality
    +CHARACTER__Cassie_Cage__The_Klassic: string,
    +CHARACTER__Cassie_Cage__Make_It_Pop: string,

    // -> Cetrion
    +CHARACTER__Cetrion__NAME: string,
    +CHARACTER__Cetrion__DESCRIPTION: string,
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality
    +CHARACTER__Cetrion__The_Klassic: string,
    +CHARACTER__Cetrion__Splitting_Apart: string,

    // -> D'vorah
    +CHARACTER__D_Vorah__NAME: string,
    +CHARACTER__D_Vorah__DESCRIPTION: string,
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
    +CHARACTER__Erron_Black__NAME: string,
    +CHARACTER__Erron_Black__DESCRIPTION: string,
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
    +CHARACTER__Frost__NAME: string,
    +CHARACTER__Frost__DESCRIPTION: string,
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
    +CHARACTER__Geras__NAME: string,
    +CHARACTER__Geras__DESCRIPTION: string,
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
    +CHARACTER__Jade__NAME: string,
    +CHARACTER__Jade__DESCRIPTION: string,
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
    +CHARACTER__Jacqui_Briggs__NAME: string,
    +CHARACTER__Jacqui_Briggs__DESCRIPTION: string,
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
    +CHARACTER__Jax_Briggs__NAME: string,
    +CHARACTER__Jax_Briggs__DESCRIPTION: string,
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
    +CHARACTER__Johnny_Cage__NAME: string,
    +CHARACTER__Johnny_Cage__DESCRIPTION: string,
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
    +CHARACTER__Kabal__NAME: string,
    +CHARACTER__Kabal__DESCRIPTION: string,
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
    +CHARACTER__Kano__NAME: string,
    +CHARACTER__Kano__DESCRIPTION: string,
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
    +CHARACTER__Kollector__NAME: string,
    +CHARACTER__Kollector__DESCRIPTION: string,
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
    +CHARACTER__Kotal_Kahn__NAME: string,
    +CHARACTER__Kotal_Kahn__DESCRIPTION: string,
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
    +CHARACTER__Kitana__NAME: string,
    +CHARACTER__Kitana__DESCRIPTION: string,
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
    +CHARACTER__Kung_Lao__NAME: string,
    +CHARACTER__Kung_Lao__DESCRIPTION: string,
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
    +CHARACTER__Liu_Kang__NAME: string,
    +CHARACTER__Liu_Kang__DESCRIPTION: string,
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
    +CHARACTER__Noob_Saibot__NAME: string,
    +CHARACTER__Noob_Saibot__DESCRIPTION: string,
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
    +CHARACTER__Raiden__NAME: string,
    +CHARACTER__Raiden__DESCRIPTION: string,
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
    +CHARACTER__Scorpion__Air_Sin_Blade: string,
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
    +CHARACTER__Shao_Kahn__NAME: string,
    +CHARACTER__Shao_Kahn__DESCRIPTION: string,
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
    +CHARACTER__Sonya_Blade__NAME: string,
    +CHARACTER__Sonya_Blade__DESCRIPTION: string,
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
    +CHARACTER__Sub_Zero__NAME: string,
    +CHARACTER__Sub_Zero__DESCRIPTION: string,
    // Basic Attacks
    // Jumping Attacks
    // Quick Jumping Attacks
    // Getup Attacks / Flawless Block Attacks
    // Combo Attacks
    // Special Attacks
    // Ability
    // Fatal Blow
    // Brutality

    /* eslint-enable id-match */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
