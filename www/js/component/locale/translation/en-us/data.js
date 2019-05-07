// @flow

import type {LangDataType} from '../type';

const theKlassic = 'The Klassic';

export const enUs: LangDataType = {
    /* eslint-disable id-match, id-length, camelcase, sonarjs/no-duplicate-string */
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
    CHARACTER_DATA__TOP_MENU__ABILITY: 'Ability',
    CHARACTER_DATA__TOP_MENU__BRUTALITY: 'Brutality',

    // combo list
    COMBO_LIST__JUMPING_ATTACKS: 'Jumping Attacks',
    COMBO_LIST__HOP_ATTACKS: 'Hop Attacks',
    COMBO_LIST__GETUP_ATTACKS: 'Getup Attacks',
    COMBO_LIST__FLAWLESS_BLOCK_ATTACKS: 'Flawless Block Attacks',
    COMBO_LIST__THROWS: 'Throws',
    COMBO_LIST__ROLL_ESCAPES: 'Roll Escapes',
    COMBO_LIST__AIR_ESCAPE: 'Air Escape',
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
    CHARACTER__Cassie_Cage__Justice_Jab: 'Justice Jab',
    CHARACTER__Cassie_Cage__Low_Shot: 'Low Shot',
    CHARACTER__Cassie_Cage__Straight_Punch: 'Straight Punch',
    CHARACTER__Cassie_Cage__Quick_Hook: 'Quick Hook',
    CHARACTER__Cassie_Cage__Throwin_Bows: 'Throwin\' Bows',
    CHARACTER__Cassie_Cage__Backhand: 'Backhand',
    CHARACTER__Cassie_Cage__Bloody_Knuckles: 'Bloody Knuckles',
    CHARACTER__Cassie_Cage__High_Kick_3: 'High Kick	3',
    CHARACTER__Cassie_Cage__Glow_Burst: 'Glow Burst',
    CHARACTER__Cassie_Cage__Spin_Kick: 'Spin Kick',
    CHARACTER__Cassie_Cage__Side_Kick: 'Side Kick',
    CHARACTER__Cassie_Cage__Roundhouse: 'Roundhouse',
    CHARACTER__Cassie_Cage__Cunning_Sweep: 'Cunning Sweep',
    CHARACTER__Cassie_Cage__Flick_Kick: 'Flick Kick',
    CHARACTER__Cassie_Cage__Steel_Toe: 'Steel Toe',
    // Jumping Attacks
    CHARACTER__Cassie_Cage__Cage_Jab: 'Cage Jab',
    CHARACTER__Cassie_Cage__Double_Axe_Handle: 'Double Axe Handle',
    CHARACTER__Cassie_Cage__Army_Boot: 'Army Boot',
    // Quick Jumping Attacks
    CHARACTER__Cassie_Cage__Dive_Bomb: 'Dive Bomb',
    CHARACTER__Cassie_Cage__Kombat_Kick: 'Kombat Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Cassie_Cage__Flip_Kick: 'Flip Kick',
    CHARACTER__Cassie_Cage__Nut_Punch: 'Nut Punch',
    // Combo Attacks
    CHARACTER__Cassie_Cage__Double_Down: 'Double Down',
    CHARACTER__Cassie_Cage__Whip_It_Good: 'Whip It Good',
    CHARACTER__Cassie_Cage__Belly_Buster: 'Belly Buster',
    CHARACTER__Cassie_Cage__Active_Duty: 'Active Duty',
    CHARACTER__Cassie_Cage__Hot_Take: 'Hot Take',
    CHARACTER__Cassie_Cage__Hooks_And_Hammers: 'Hooks And Hammers',
    CHARACTER__Cassie_Cage__Assaulted: 'Assaulted',
    CHARACTER__Cassie_Cage__The_Rushdown: 'The Rushdown',
    CHARACTER__Cassie_Cage__No_Breaks: 'No Breaks',
    CHARACTER__Cassie_Cage__Keepin_It_Classy: 'Keepin\' It Classy',
    CHARACTER__Cassie_Cage__Shocker: 'Shocker',
    CHARACTER__Cassie_Cage__Marching_Orders: 'Marching Orders',
    CHARACTER__Cassie_Cage__Military_Dance: 'Military Dance',
    CHARACTER__Cassie_Cage__Heavy_Hitter: 'Heavy Hitter',
    CHARACTER__Cassie_Cage__Poppin_Bubbles: 'Poppin\' Bubbles',
    CHARACTER__Cassie_Cage__One_in_the_Chamber: 'One in the Chamber',
    // Special Attacks
    CHARACTER__Cassie_Cage__Dual_Wielding: 'Dual Wielding',
    CHARACTER__Cassie_Cage__Ball_Buster: 'Ball Buster',
    CHARACTER__Cassie_Cage__Up_Glow_Kick: 'Up Glow Kick',
    // Ability
    CHARACTER__Cassie_Cage__Control_BLB_118: 'Control BLB-118',
    CHARACTER__Cassie_Cage___Air__Bullet_Barrage: '(Air) Bullet Barrage',
    CHARACTER__Cassie_Cage__Kneecappin: 'Kneecappin',
    CHARACTER__Cassie_Cage__Flippin_Out: 'Flippin\' Out',
    CHARACTER__Cassie_Cage__Shoulder_Charge: 'Shoulder Charge',
    CHARACTER__Cassie_Cage__Flying_Glow_Kick: 'Flying Glow Kick',
    CHARACTER__Cassie_Cage__Air_BLB_118_Advance: 'Air BLB-118 Advance',
    CHARACTER__Cassie_Cage__BLB_118_Bullet_Ricochet: 'BLB-118 Bullet Ricochet',
    CHARACTER__Cassie_Cage__BLB_118_Energy_Bounce: 'BLB-118 Energy Bounce',
    CHARACTER__Cassie_Cage__BLB_118_Energy_Burst: 'BLB-118 Energy Burst',
    CHARACTER__Cassie_Cage__BLB_118_Bitchin_Bubble: 'BLB-118 Bitchin\' Bubble',
    // Fatal Blow
    CHARACTER__Cassie_Cage__PISSED_AF: 'PISSED AF',
    // Brutality
    CHARACTER__Cassie_Cage__The_Klassic: theKlassic,
    CHARACTER__Cassie_Cage__Make_It_Pop: 'Make It Pop',

    // -> Cetrion
    CHARACTER__Cetrion__NAME: 'Cetrion',
    CHARACTER__Cetrion__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Cetrion__Heavens_Wind: 'Heavens Wind',
    CHARACTER__Cetrion__Tendril_Slap: 'Tendril Slap',
    CHARACTER__Cetrion__Low_Wind: 'Low Wind',
    CHARACTER__Cetrion__Quick_Combustion: 'Quick Combustion',
    CHARACTER__Cetrion__Turning_Wave: 'Turning Wave',
    CHARACTER__Cetrion__Rising_God_Palm: 'Rising God Palm',
    CHARACTER__Cetrion__Vapor_Push: 'Vapor Push',
    CHARACTER__Cetrion__Energy_Swipe: 'Energy Swipe',
    CHARACTER__Cetrion__Krystal_Kick: 'Krystal Kick',
    CHARACTER__Cetrion__Krushing_Heel: 'Krushing Heel',
    CHARACTER__Cetrion__Rising_Volcano: 'Rising Volcano',
    CHARACTER__Cetrion__Krystal_Heel: 'Krystal Heel',
    // Jumping Attacks
    CHARACTER__Cetrion__Quick_Gust: 'Quick Gust',
    CHARACTER__Cetrion__Burning_Palm: 'Burning Palm',
    CHARACTER__Cetrion__Balance_Spin: 'Balance Spin',
    // Quick Jumping Attacks
    CHARACTER__Cetrion__Boulder_Slam: 'Boulder Slam',
    CHARACTER__Cetrion__Heel_Spike: 'Heel Spike',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Cetrion__Geo_Strike: 'Geo Strike',
    CHARACTER__Cetrion__World_Ender: 'World Ender',
    // Combo Attacks
    CHARACTER__Cetrion__Violent_Gust: 'Violent Gust',
    CHARACTER__Cetrion__Wind_Storm: 'Wind Storm',
    CHARACTER__Cetrion__Imminent_Eruption: 'Imminent Eruption',
    CHARACTER__Cetrion__Natures_Wrath: 'Natures Wrath',
    CHARACTER__Cetrion__Seismic_Energy: 'Seismic Energy',
    CHARACTER__Cetrion__Blaze: 'Blaze',
    CHARACTER__Cetrion__Fire_Nado: 'Fire-Nado',
    CHARACTER__Cetrion__Fire_and_Brimstone: 'Fire and Brimstone',
    CHARACTER__Cetrion__Natural_Ending: 'Natural Ending',
    CHARACTER__Cetrion__Unlimited_Potential: 'Unlimited Potential',
    CHARACTER__Cetrion__Lifecycle: 'Lifecycle',
    // Special Attacks
    CHARACTER__Cetrion__Natural_Barrier: 'Natural Barrier',
    CHARACTER__Cetrion__Far_Natural_Barrier: 'Far Natural Barrier',
    CHARACTER__Cetrion__Hell_s_Wrath: 'Hell\'s Wrath',
    CHARACTER__Cetrion__Close_Hell_s_Wrath: 'Close Hell\'s Wrath',
    CHARACTER__Cetrion__Far_Hell_s_Wrath: 'Far Hell\'s Wrath',
    CHARACTER__Cetrion__Air_Hell_s_Wrath: '(Air) Hell\'s Wrath',
    CHARACTER__Cetrion__Air_Close_Hell_s_Wrath: '(Air) Close Hell\'s Wrath',
    CHARACTER__Cetrion__Air_Far_Hell_s_Wrath: '(Air) Far Hell\'s Wrath',
    CHARACTER__Cetrion__Tendril_Pull: 'Tendril Pull',
    // Ability
    CHARACTER__Cetrion__Earthquake: 'Earthquake',
    CHARACTER__Cetrion__Air_Bullet_Barrage: '(Air) Bullet Barrage',
    CHARACTER__Cetrion__Kneecappin: 'Kneecappin',
    CHARACTER__Cetrion__Flippin_Out: 'Flippin\' Out',
    CHARACTER__Cetrion__Shoulder_Charge: 'Shoulder Charge',
    CHARACTER__Cetrion__Flying_Glow_Kick: 'Flying Glow Kick',
    CHARACTER__Cetrion__Air_BLB_118_Advance: 'Air BLB-118 Advance',
    CHARACTER__Cetrion__BLB_118_Bullet_Ricochet: 'BLB-118 Bullet Ricochet',
    CHARACTER__Cetrion__BLB_118_Energy_Bounce: 'BLB-118 Energy Bounce',
    CHARACTER__Cetrion__BLB_118_Energy_Burst: 'BLB-118 Energy Burst',
    CHARACTER__Cetrion__BLB_118_Bitchin_Bubble: 'BLB-118 Bitchin\' Bubble',
    // Fatal Blow
    CHARACTER__Cetrion__Weeping_Willow: 'Weeping Willow',
    // Brutality
    CHARACTER__Cetrion__The_Klassic: theKlassic,
    CHARACTER__Cetrion__Splitting_Apart: 'Splitting Apart',

    // -> D'vorah
    CHARACTER__D_Vorah__NAME: 'D\'Vorah',
    CHARACTER__D_Vorah__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__D_Vorah__Pupa_Poke: 'Pupa Poke',
    CHARACTER__D_Vorah__Low_Sting: 'Low Sting',
    CHARACTER__D_Vorah__Bug_Bash: 'Bug Bash',
    CHARACTER__D_Vorah__Bludgeoned: 'Bludgeoned',
    CHARACTER__D_Vorah__Killer_Strike: 'Killer Strike',
    CHARACTER__D_Vorah__Swatted: 'Swatted',
    CHARACTER__D_Vorah__Larva_Tarsus: 'Larva Tarsus',
    CHARACTER__D_Vorah__Ovi_Posi_Poke: 'Ovi Posi Poke',
    CHARACTER__D_Vorah__Low_Tarsus_Strike: 'Low Tarsus Strike',
    CHARACTER__D_Vorah__Cocoon_Kick: 'Cocoon Kick',
    CHARACTER__D_Vorah__Spinning_Web: 'Spinning Web',
    CHARACTER__D_Vorah__Brood_Slam: 'Brood Slam',
    CHARACTER__D_Vorah__Slight_Sting: 'Slight Sting',
    // Jumping Attacks
    CHARACTER__D_Vorah__Deadly_Sting: 'Deadly Sting',
    CHARACTER__D_Vorah__Poisonous_Touch: 'Poisonous Touch',
    CHARACTER__D_Vorah__Beetle_Kick: 'Beetle Kick',
    // Quick Jumping Attacks
    CHARACTER__D_Vorah__Piercing_Ovipositors: 'Piercing Ovipositors',
    CHARACTER__D_Vorah__Hardened_Heel: 'Hardened Heel',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__D_Vorah__Swarm_Burst: 'Swarm Burst',
    CHARACTER__D_Vorah__Quick_Strike: 'Quick Strike',
    // Combo Attacks
    CHARACTER__D_Vorah__Yellow_Jacket: 'Yellow Jacket',
    CHARACTER__D_Vorah__Black_Widow: 'Black Widow',
    CHARACTER__D_Vorah__Bot_Fly: 'Bot Fly',
    CHARACTER__D_Vorah__Assassin_Bug: 'Assassin Bug',
    CHARACTER__D_Vorah__Wandering_Spider: 'Wandering Spider',
    CHARACTER__D_Vorah__Siafu: 'Siafu',
    CHARACTER__D_Vorah__Bugging_Out: 'Bugging Out',
    CHARACTER__D_Vorah__Killer_Bee: 'Killer Bee',
    CHARACTER__D_Vorah__Lonomia: 'Lonomia',
    // Special Attacks
    CHARACTER__D_Vorah__Fireflies: 'Fireflies',
    CHARACTER__D_Vorah__Ground_Swarm: 'Ground Swarm',
    CHARACTER__D_Vorah__Close_Ground_Swarm: 'Close Ground Swarm',
    CHARACTER__D_Vorah__Far_Ground_Swarm: 'Far Ground Swarm',
    CHARACTER__D_Vorah__Very_Far_Ground_Swarm: 'Very Far Ground Swarm',
    CHARACTER__D_Vorah__Infested: 'Infested',
    CHARACTER__D_Vorah__Swarm: 'Swarm',
    CHARACTER__D_Vorah__Katipo_Rush: 'Katipo Rush',
    // Ability
    CHARACTER__D_Vorah__Deadly_Swarm: 'Deadly Swarm',
    CHARACTER__D_Vorah__Super_Swarm: 'Super Swarm',
    CHARACTER__D_Vorah__Air_Fly_By: '(Air) Fly By',
    CHARACTER__D_Vorah__Air_Ticking_Time_Bug: '(Air) Ticking Time Bug',
    CHARACTER__D_Vorah__Widow_s_Kiss: 'Widow\'s Kiss',
    CHARACTER__D_Vorah__Bombardier_Beetl: 'Bombardier Beetl',
    CHARACTER__D_Vorah__Strepsiptera: 'Strepsiptera',
    CHARACTER__D_Vorah__Flippin_Out: 'Flippin\' Out',
    CHARACTER__D_Vorah__Parasite: 'Parasite',
    CHARACTER__D_Vorah__Mother_Bug: 'Mother Bug',
    // Fatal Blow
    // CHARACTER__D_Vorah__Buggin_Out: 'Buggin\' Out',
    // Brutality
    CHARACTER__D_Vorah__The_Klassic: theKlassic,
    CHARACTER__D_Vorah__Buggin_Out: 'Buggin\' Out',

    // -> Erron Black
    CHARACTER__Erron_Black__NAME: 'Erron Black',
    CHARACTER__Erron_Black__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Erron_Black__Straight_Punch: 'Straight Punch',
    CHARACTER__Erron_Black__Spinning_Revolver: 'Spinning Revolver',
    CHARACTER__Erron_Black__Dusty_Knuckles: 'Dusty Knuckles',
    CHARACTER__Erron_Black__Bounty_Bash: 'Bounty Bash',
    CHARACTER__Erron_Black__Grip_Slam: 'Grip Slam',
    CHARACTER__Erron_Black__Shoulder_Shimmy: 'Shoulder Shimmy',
    CHARACTER__Erron_Black__Rising_Outlaw: 'Rising Outlaw',
    CHARACTER__Erron_Black__Boot_Flick: 'Boot Flick',
    CHARACTER__Erron_Black__Saloon_Strike: 'Saloon Strike',
    CHARACTER__Erron_Black__Low_Boot: 'Low Boot',
    CHARACTER__Erron_Black__Spinning_Spur: 'Spinning Spur',
    CHARACTER__Erron_Black__Low_Spur: 'Low Spur',
    CHARACTER__Erron_Black__Boot_Drop: 'Boot Drop',
    CHARACTER__Erron_Black__Sandy_Sole: 'Sandy Sole',
    // Jumping Attacks
    CHARACTER__Erron_Black__Swinging_Pistol: 'Swinging Pistol',
    CHARACTER__Erron_Black__Hammer_Fist: 'Hammer Fist',
    CHARACTER__Erron_Black__Quick_Flick: 'Quick Flick',
    // Quick Jumping Attacks
    CHARACTER__Erron_Black__Tumbleweed: 'Tumbleweed',
    CHARACTER__Erron_Black__Drop_Kick: 'Drop Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Erron_Black__Quick_Shot: 'Quick Shot',
    CHARACTER__Erron_Black__Pocket_Sand: 'Pocket Sand',
    // Combo Attacks
    CHARACTER__Erron_Black__High_Noon: 'High Noon',
    CHARACTER__Erron_Black__Into_the_Badlands: 'Into the Badlands',
    CHARACTER__Erron_Black__Violent_Ends: 'Violent Ends',
    CHARACTER__Erron_Black__Deal_in_Lead: 'Deal in Lead',
    CHARACTER__Erron_Black__On_The_Shoot: 'On The Shoot',
    CHARACTER__Erron_Black__At_The_Dooooor: 'At The Dooooor',
    CHARACTER__Erron_Black__Dead_Man_s_Hand: 'Dead Man\'s Hand',
    CHARACTER__Erron_Black__Keep_em_Honest: 'Keep\'em Honest',
    // Special Attacks
    CHARACTER__Erron_Black__Zaterrean_Spit: 'Zaterrean Spit',
    CHARACTER__Erron_Black__Close_Zaterrean_Spit: 'Close Zaterrean Spit',
    CHARACTER__Erron_Black__Rattle_Snake_Slide: 'Rattle Snake Slide',
    CHARACTER__Erron_Black__Locked_And_Loaded: 'Locked And Loaded',
    // Ability
    CHARACTER__Erron_Black__Enhanced_Locked_and_Loaded: 'Enhanced Locked and Loaded',
    CHARACTER__Erron_Black__Outworld_Gunslinger: 'Outworld Gunslinger',
    CHARACTER__Erron_Black__Acid_Pour: 'Acid Pour',
    CHARACTER__Erron_Black__Cattle_Toss: 'Cattle Toss',
    CHARACTER__Erron_Black__Up_Peacemaker: 'Up Peacemaker',
    CHARACTER__Erron_Black__Down_Peacemaker: 'Down Peacemaker',
    CHARACTER__Erron_Black__Scud_Shot: 'Scud Shot',
    CHARACTER__Erron_Black__TNT_Toss: 'TNT Toss',
    CHARACTER__Erron_Black__Netherbeast_Trap: 'Netherbeast Trap',
    CHARACTER__Erron_Black__Enhanced_Rattle_Snake_Slide: 'Enhanced Rattle Snake Slide',
    // Fatal Blow
    CHARACTER__Erron_Black__Ghost_Koins: 'Ghost Koins',
    // Brutality
    CHARACTER__Erron_Black__The_Klassic: theKlassic,
    CHARACTER__Erron_Black__Is_Something_Burning: 'Is Something Burning?',

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

    /* eslint-enable id-match, id-length, camelcase, sonarjs/no-duplicate-string */
};
