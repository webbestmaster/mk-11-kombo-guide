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
    CHARACTER__Cassie_Cage__High_Kick: 'High Kick',
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
    CHARACTER__Frost__Cold_Punch: 'Cold Punch',
    CHARACTER__Frost__Headbutt: 'Headbutt',
    CHARACTER__Frost__Frigid_Palm: 'Frigid Palm',
    CHARACTER__Frost__Arctic_Strike: 'Arctic Strike',
    CHARACTER__Frost__Icy_Maul: 'Icy Maul',
    CHARACTER__Frost__Blade_Lunge: 'Blade Lunge',
    CHARACTER__Frost__Frosted_Uppercut: 'Frosted Uppercut',
    CHARACTER__Frost__Hinged_Kick: 'Hinged Kick',
    CHARACTER__Frost__Strong_Step: 'Strong Step',
    CHARACTER__Frost__Chest_Cold: 'Chest Cold',
    CHARACTER__Frost__Chin_Breaker: 'Chin Breaker',
    CHARACTER__Frost__Polar_Pound: 'Polar Pound',
    CHARACTER__Frost__Serrated: 'Serrated',
    // Jumping Attacks
    CHARACTER__Frost__Frosty_Burst: 'Frosty Burst',
    CHARACTER__Frost__Auger_Spin: 'Auger Spin',
    CHARACTER__Frost__Chill_Toe: 'Chill Toe',
    // Quick Jumping Attacks
    CHARACTER__Frost__Auger_Slam: 'Auger Slam',
    CHARACTER__Frost__Nano_Strike: 'Nano Strike',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Frost__Core_Burst: 'Core Burst',
    CHARACTER__Frost__Ice_Spike: 'Ice Spike',
    // Combo Attacks
    CHARACTER__Frost__Seeking_Control: 'Seeking Control',
    CHARACTER__Frost__Blood_Sweat_and_Circuits: 'Blood Sweat and Circuits',
    CHARACTER__Frost__Frozen_in_Time: 'Frozen in Time',
    CHARACTER__Frost__Freezer_Burn: 'Freezer Burn',
    CHARACTER__Frost__Blizzard: 'Blizzard',
    CHARACTER__Frost__Power_Hunger_Kunoichi: 'Power Hunger Kunoichi',
    CHARACTER__Frost__No_Humility: 'No Humility',
    CHARACTER__Frost__One_True_Warrioress: 'One True Warrioress',
    CHARACTER__Frost__Winter_Winds: 'Winter Winds',
    CHARACTER__Frost__Out_Cold: 'Out Cold',
    CHARACTER__Frost__Icy_Tomb: 'Icy Tomb',
    CHARACTER__Frost__Freezing_Point: 'Freezing Point',
    CHARACTER__Frost__Avalanche: 'Avalanche',
    CHARACTER__Frost__Reborn: 'Reborn',
    CHARACTER__Frost__Ice_Olated: 'Ice-Olated',
    // Special Attacks
    CHARACTER__Frost__Blade_Spin: 'Blade Spin',
    CHARACTER__Frost__Kryo_Stance: 'Kryo Stance',
    CHARACTER__Frost__Cyber_Head: 'Cyber-Head',
    // Ability
    CHARACTER__Frost__Ice_Auger: 'Ice Auger',
    CHARACTER__Frost__Burrowing_Auger: 'Burrowing Auger',
    CHARACTER__Frost__Cryogenic_Crown: 'Cryogenic Crown',
    CHARACTER__Frost__Core_Trap: 'Core Trap',
    CHARACTER__Frost__Core_Overload: 'Core Overload',
    CHARACTER__Frost__Auger_Lunge: 'Auger Lunge',
    CHARACTER__Frost__Arctic_Barrage: 'Arctic Barrage',
    CHARACTER__Frost__Air_Icequake: '(Air) Icequake',
    CHARACTER__Frost__Glacier_Calving: 'Glacier Calving',
    CHARACTER__Frost__Microburst: 'Microburst',
    // Fatal Blow
    CHARACTER__Frost__Terminal_Burrowing: 'Terminal Burrowing',
    // Brutality
    CHARACTER__Frost__The_Klassic: theKlassic,
    CHARACTER__Frost__Bleeding_Out: 'Bleeding Out',

    // -> Geras
    CHARACTER__Geras__NAME: 'Geras',
    CHARACTER__Geras__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Geras__Straight_Jab: 'Straight Jab',
    CHARACTER__Geras__Shoulder_Charg: 'Shoulder Charg',
    CHARACTER__Geras__Knee_Bash: 'Knee Bash',
    CHARACTER__Geras__Heavy_Fist: 'Heavy Fist',
    CHARACTER__Geras__Sledge_Hammer: 'Sledge Hammer',
    CHARACTER__Geras__Body_Buster: 'Body Buster',
    CHARACTER__Geras__Rising_Gauntlet: 'Rising Gauntlet',
    CHARACTER__Geras__Straight_Boot: 'Straight Boot',
    CHARACTER__Geras__Strong_Step: 'Strong Step',
    CHARACTER__Geras__Gauntlet_Slam: 'Gauntlet Slam',
    CHARACTER__Geras__Chrono_Kick: 'Chrono Kick',
    CHARACTER__Geras__Time_Sweeper: 'Time Sweeper',
    CHARACTER__Geras__Pounding_Sand: 'Pounding Sand',
    // Jumping Attacks
    CHARACTER__Geras__Quick_Jab: 'Quick Jab',
    CHARACTER__Geras__Elbow_Drop: 'Elbow Drop',
    CHARACTER__Geras__Time_Splash: 'Time Splash',
    CHARACTER__Geras__Titan_Toe: 'Titan Toe',
    // Quick Jumping Attacks
    CHARACTER__Geras__Timequake: 'Timequake',
    CHARACTER__Geras__Heavy_Knee: 'Heavy Knee',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Geras__Titan_Charge: 'Titan Charge',
    CHARACTER__Geras__Sand_Storm: 'Sand Storm',
    // Combo Attacks
    CHARACTER__Geras__Without_Beginning: 'Without Beginning',
    CHARACTER__Geras__Without_End: 'Without End',
    CHARACTER__Geras__Out_of_Time: 'Out of Time',
    CHARACTER__Geras__External_Hate: 'External Hate',
    CHARACTER__Geras__Xuid_n_Guid: 'Xuid & Guid',
    CHARACTER__Geras__Time_Immemorial: 'Time Immemorial',
    CHARACTER__Geras__The_Undying: 'The Undying',
    CHARACTER__Geras__Timeless: 'Timeless',
    CHARACTER__Geras__The_Deathless_Giant: 'The Deathless Giant',
    CHARACTER__Geras__Matter_of_Time: 'Matter of Time',
    CHARACTER__Geras__Sand_Blaster: 'Sand Blaster',
    CHARACTER__Geras__Dangerous_Chronology: 'Dangerous Chronology',
    CHARACTER__Geras__Ripple_in_Time: 'Ripple in Time',
    // Special Attacks
    CHARACTER__Geras__Temporal_Advantage: 'Temporal Advantage',
    CHARACTER__Geras__Sand_Trap: 'Sand Trap',
    CHARACTER__Geras__Close_Sand_Trap: 'Close Sand Trap',
    CHARACTER__Geras__Far_Sand_Trap: 'Far Sand Trap',
    CHARACTER__Geras__Very_Far_Sand_Trap: 'Very Far Sand Trap',
    CHARACTER__Geras__Titan_Tackle: 'Titan Tackle',
    CHARACTER__Geras__Big_Fist: 'Big Fist',
    // Ability
    CHARACTER__Geras__Quick_Sand: 'Quick Sand',
    CHARACTER__Geras__Gauntlet_of_the_Ages: 'Gauntlet of the Ages',
    CHARACTER__Geras__Bed_of_Spikes: 'Bed of Spikes',
    CHARACTER__Geras__Shifting_Sands: 'Shifting Sands',
    CHARACTER__Geras__Lost_Time_n_Spare_Time: 'Lost Time & Spare Time',
    CHARACTER__Geras__Sand_Simulacrum: 'Sand Simulacrum',
    CHARACTER__Geras__Reawakened: 'Reawakened',
    CHARACTER__Geras__Reverse_Time: 'Reverse Time',
    CHARACTER__Geras__Stepping_it_Back: 'Stepping it Back',
    CHARACTER__Geras__Sand_Pillar: 'Sand Pillar',
    // Fatal Blow
    CHARACTER__Geras__Stasis_Assault: 'Stasis Assault',
    // Brutality
    CHARACTER__Geras__Pulled_Apart: 'Pulled Apart',
    CHARACTER__Geras__Sinking_Feeling: 'Sinking Feeling',

    // -> Jacqui Briggs
    CHARACTER__Jacqui_Briggs__NAME: 'Jacqui Briggs',
    CHARACTER__Jacqui_Briggs__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Jacqui_Briggs__Quick_Jab: 'Quick Jab',
    CHARACTER__Jacqui_Briggs__Leaping_Bow: 'Leaping Bow',
    CHARACTER__Jacqui_Briggs__Gut_Buster: 'Gut Buster',
    CHARACTER__Jacqui_Briggs__Straight_Jab: 'Straight Jab',
    CHARACTER__Jacqui_Briggs__Cyber_Hook: 'Cyber Hook',
    CHARACTER__Jacqui_Briggs__Spec_Hop: 'Spec Hop',
    CHARACTER__Jacqui_Briggs__Gauntlet_Slam: 'Gauntlet Slam',
    CHARACTER__Jacqui_Briggs__Rising_Gauntlet: 'Rising Gauntlet',
    CHARACTER__Jacqui_Briggs__Side_Kick: 'Side Kick',
    CHARACTER__Jacqui_Briggs__Toe_Jam: 'Toe Jam',
    CHARACTER__Jacqui_Briggs__Step_Kick: 'Step Kick',
    CHARACTER__Jacqui_Briggs__Side_Strike: 'Side Strike',
    CHARACTER__Jacqui_Briggs__Heel_Strike: 'Heel Strike',
    CHARACTER__Jacqui_Briggs__Mix_Up: 'Mix Up',
    CHARACTER__Jacqui_Briggs__Roundhouse: 'Roundhouse',
    CHARACTER__Jacqui_Briggs__Sliding_Heel: 'Sliding Heel',
    // Jumping Attacks
    CHARACTER__Jacqui_Briggs__Elbow_Jab: 'Elbow Jab',
    CHARACTER__Jacqui_Briggs__Dirty_Jab: 'Dirty Jab',
    CHARACTER__Jacqui_Briggs__Spinning_Heel: 'Spinning Heel',
    // Quick Jumping Attacks
    CHARACTER__Jacqui_Briggs__Gauntlet_Punch: 'Gauntlet Punch',
    CHARACTER__Jacqui_Briggs__Brutal_Heel: 'Brutal Heel',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Jacqui_Briggs__Cyber_Heel: 'Cyber Heel',
    CHARACTER__Jacqui_Briggs__Quick_Reflex: 'Quick Reflex',
    // Combo Attacks
    CHARACTER__Jacqui_Briggs__Kranked: 'Kranked',
    CHARACTER__Jacqui_Briggs__Ground_Recon: 'Ground Recon',
    CHARACTER__Jacqui_Briggs__United_We_Fall: 'United We Fall',
    CHARACTER__Jacqui_Briggs__True_Hero: 'True Hero',
    CHARACTER__Jacqui_Briggs__Snake_Eater: 'Snake Eater',
    CHARACTER__Jacqui_Briggs__Trained_to_Kill: 'Trained to Kill',
    CHARACTER__Jacqui_Briggs__Energy_Overdrive: 'Energy Overdrive',
    CHARACTER__Jacqui_Briggs__Danger_Zone: 'Danger Zone',
    CHARACTER__Jacqui_Briggs__Hawkeye: 'Hawkeye',
    CHARACTER__Jacqui_Briggs__In_the_Trenches: 'In the Trenches',
    CHARACTER__Jacqui_Briggs__Total_Overload: 'Total Overload',
    CHARACTER__Jacqui_Briggs__Going_Ballistic: 'Going Ballistic',
    CHARACTER__Jacqui_Briggs__All_for_One: 'All for One',
    CHARACTER__Jacqui_Briggs__Justice_for_All: 'Justice for All',
    CHARACTER__Jacqui_Briggs__Lost_Dog_Tags: 'Lost Dog Tags',
    CHARACTER__Jacqui_Briggs__Fallin_Soldier: 'Fallin Soldier',
    // Special Attacks
    CHARACTER__Jacqui_Briggs__Shrapnel_Blast: 'Shrapnel Blast',
    CHARACTER__Jacqui_Briggs__Air_Shrapnel_Blast: '(Air) Shrapnel Blast',
    CHARACTER__Jacqui_Briggs__Up_Shrapnel_Blast: 'Up Shrapnel Blast',
    CHARACTER__Jacqui_Briggs__Bionic_Dash: 'Bionic Dash',
    CHARACTER__Jacqui_Briggs__Grease_Kick: 'Grease Kick',
    // Ability
    CHARACTER__Jacqui_Briggs__Prototype_Rocket: 'Prototype Rocket',
    CHARACTER__Jacqui_Briggs__Grenade_Launcher: 'Grenade Launcher',
    CHARACTER__Jacqui_Briggs__Hyper_Knee: 'Hyper Knee',
    CHARACTER__Jacqui_Briggs__Lethal_Clinch: 'Lethal Clinch',
    CHARACTER__Jacqui_Briggs__Air_Dive_Bomb: '(Air) Dive Bomb',
    CHARACTER__Jacqui_Briggs__Air_Ground_Pound: '(Air) Ground Pound',
    CHARACTER__Jacqui_Briggs__Enhanced_Air_Blast: 'Enhanced Air Blast',
    CHARACTER__Jacqui_Briggs__Tech_Dome: 'Tech-Dome',
    CHARACTER__Jacqui_Briggs__Cybernetic_Override: 'Cybernetic Override',
    CHARACTER__Jacqui_Briggs__Bionic_Bounce: 'Bionic Bounce',
    CHARACTER__Jacqui_Briggs__Robo_Grappler: 'Robo-Grappler',
    // Fatal Blow
    CHARACTER__Jacqui_Briggs__Wall_of_Justice: 'Wall of Justice',
    // Brutality
    CHARACTER__Jacqui_Briggs__Next_Level_Shit: 'Next Level Shit',
    CHARACTER__Jacqui_Briggs__Did_It_to_Yourself: 'Did It to Yourself',

    // -> Jade
    CHARACTER__Jade__NAME: 'Jade',
    CHARACTER__Jade__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Jade__Quick_Slap: 'Quick Slap',
    CHARACTER__Jade__Pole_Strike: 'Pole Strike',
    CHARACTER__Jade__Straight_Palm: 'Straight Palm',
    CHARACTER__Jade__Palm_Bash: 'Palm Bash',
    CHARACTER__Jade__Wiggle_Stick: 'Wiggle Stick',
    CHARACTER__Jade__Pole_Slam: 'Pole Slam',
    CHARACTER__Jade__Rising_Staff: 'Rising Staff',
    CHARACTER__Jade__Straight_Kick: 'Straight Kick',
    CHARACTER__Jade__Side_Kick: 'Side Kick',
    CHARACTER__Jade__Knee_Breaker: 'Knee Breaker',
    CHARACTER__Jade__Side_Heel: 'Side Heel',
    CHARACTER__Jade__Stiletto_Strike: 'Stiletto Strike',
    CHARACTER__Jade__Takedown: 'Takedown',
    CHARACTER__Jade__Edenian_Dance: 'Edenian Dance',
    CHARACTER__Jade__Pierced: 'Pierced',
    // Jumping Attacks
    CHARACTER__Jade__Edenian_Palm: 'Edenian Palm',
    CHARACTER__Jade__Pole_Bash: 'Pole Bash',
    CHARACTER__Jade__Warrior_s_Heel: 'Warrior\'s Heel',
    // Quick Jumping Attacks
    CHARACTER__Jade__Staff_Slam: 'Staff Slam',
    CHARACTER__Jade__Edenian_Drill: 'Edenian Drill',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Jade__Glaiver_Saver: 'Glaiver Saver',
    CHARACTER__Jade__Heavens_Heel: 'Heavens Heel',
    // Combo Attacks
    CHARACTER__Jade__Simple_Seduction: 'Simple Seduction',
    CHARACTER__Jade__Baited: 'Baited',
    CHARACTER__Jade__Teaser: 'Teaser',
    CHARACTER__Jade__Edenian_Warrior: 'Edenian Warrior',
    CHARACTER__Jade__Tiny_Dancer: 'Tiny Dancer',
    CHARACTER__Jade__Poll_Dance: 'Poll Dance',
    CHARACTER__Jade__Enchanted: 'Enchanted',
    CHARACTER__Jade__Fatal_Attraction: 'Fatal Attraction',
    CHARACTER__Jade__Royal_Guard: 'Royal Guard',
    CHARACTER__Jade__Edenian_Rush: 'Edenian Rush',
    CHARACTER__Jade__Killer_Charisma: 'Killer Charisma',
    CHARACTER__Jade__My_Pleasure: 'My Pleasure',
    // Special Attacks
    CHARACTER__Jade__Razor_Rang: 'Razor-Rang',
    CHARACTER__Jade__Dodging_Shadows: 'Dodging Shadows',
    CHARACTER__Jade__Temptation: 'Temptation',
    CHARACTER__Jade__Dead_Butterfly: 'Dead Butterfly',
    CHARACTER__Jade__Blazing_Nitro_Kick: 'Blazing Nitro Kick',
    // Ability
    CHARACTER__Jade__Air_Razor_Rang: '(Air) Razor-Rang',
    CHARACTER__Jade__Upward_Razor_Rang: 'Upward Razor-Rang',
    CHARACTER__Jade__Delia_s_Dance: 'Delia\'s Dance',
    CHARACTER__Jade__Divine_Forces: 'Divine Forces',
    CHARACTER__Jade__Pole_Vault: 'Pole Vault',
    CHARACTER__Jade__Pole_Vault_Cancel: 'Pole Vault Cancel',
    CHARACTER__Jade__Edenian_Spark: 'Edenian Spark',
    CHARACTER__Jade__Vanishing_Winds: 'Vanishing Winds',
    CHARACTER__Jade__Deadly_Assassin: 'Deadly Assassin',
    // Fatal Blow
    CHARACTER__Jade__Edenian_Knight: 'Edenian Knight',
    // Brutality
    CHARACTER__Jade__Clean_Sweep: 'Clean Sweep',
    CHARACTER__Jade__Flawless: 'Flawless',

    // -> Jax Briggs
    CHARACTER__Jax_Briggs__NAME: 'Jax Briggs',
    CHARACTER__Jax_Briggs__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Jax_Briggs__Quick_Steel: 'Quick Steel',
    CHARACTER__Jax_Briggs__Power_Punch: 'Power Punch',
    CHARACTER__Jax_Briggs__Knee_Jab: 'Knee Jab',
    CHARACTER__Jax_Briggs__Straight_Punch: 'Straight Punch',
    CHARACTER__Jax_Briggs__Head_Slammer: 'Head Slammer',
    CHARACTER__Jax_Briggs__Hammer_Hook: 'Hammer Hook',
    CHARACTER__Jax_Briggs__Upper_Muscle: 'Upper Muscle',
    CHARACTER__Jax_Briggs__Boot_Bash: 'Boot Bash',
    CHARACTER__Jax_Briggs__Knee_Shatter: 'Knee Shatter',
    CHARACTER__Jax_Briggs__Steel_Toe: 'Steel Toe',
    CHARACTER__Jax_Briggs__Side_Strike: 'Side Strike',
    CHARACTER__Jax_Briggs__Get_Back: 'Get Back',
    CHARACTER__Jax_Briggs__Ankle_Breaker: 'Ankle Breaker',
    CHARACTER__Jax_Briggs__Fur_Knee: 'Fur-Knee',
    CHARACTER__Jax_Briggs__Step_Back: 'Step Back',
    // Jumping Attacks
    CHARACTER__Jax_Briggs__Leaping_Fist: 'Leaping Fist',
    CHARACTER__Jax_Briggs__Double_Damage: 'Double Damage',
    CHARACTER__Jax_Briggs__Hit_with_a_Size_12: 'Hit with a Size 12',
    // Quick Jumping Attacks
    CHARACTER__Jax_Briggs__Ground_Smash: 'Ground Smash',
    CHARACTER__Jax_Briggs__S_F_Stomp: 'S.F. Stomp',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Jax_Briggs__Krushing_Backhand: 'Krushing Backhand',
    CHARACTER__Jax_Briggs__Ground_Slam: 'Ground Slam',
    // Combo Attacks
    CHARACTER__Jax_Briggs__The_Briggs: 'The Briggs',
    CHARACTER__Jax_Briggs__Active_Duty: 'Active Duty',
    CHARACTER__Jax_Briggs__Quick_Drill: 'Quick Drill',
    CHARACTER__Jax_Briggs__Outranked: 'Outranked',
    CHARACTER__Jax_Briggs__Get_In_Line: 'Get In Line',
    CHARACTER__Jax_Briggs__Breakdown: 'Breakdown',
    CHARACTER__Jax_Briggs__Won_t_Back_Down: 'Won\'t Back Down',
    CHARACTER__Jax_Briggs__Boot_Kamp: 'Boot Kamp',
    CHARACTER__Jax_Briggs__Sleep__Bitch: 'Sleep, Bitch',
    CHARACTER__Jax_Briggs__Last_Chance: 'Last Chance',
    CHARACTER__Jax_Briggs__America_Strong: 'America Strong',
    CHARACTER__Jax_Briggs__Get_Outta_Here: 'Get Outta Here',
    // Special Attacks
    CHARACTER__Jax_Briggs__Gotcha_Grab: 'Gotcha Grab',
    CHARACTER__Jax_Briggs__Thumper: 'Thumper',
    CHARACTER__Jax_Briggs__Up_Thumper: 'Up Thumper',
    CHARACTER__Jax_Briggs__Heat_Missile: 'Heat Missile',
    CHARACTER__Jax_Briggs__Heating_Up: 'Heating Up',
    CHARACTER__Jax_Briggs__Ground_Pound: 'Ground Pound',
    // Ability
    CHARACTER__Jax_Briggs__Duck_and_Weave: 'Duck and Weave',
    CHARACTER__Jax_Briggs__Quad_Grab: 'Quad Grab',
    CHARACTER__Jax_Briggs__Buckshot: 'Buckshot',
    CHARACTER__Jax_Briggs__Lethal_Clap: 'Lethal Clap',
    CHARACTER__Jax_Briggs__Briggs_Barricade: 'Briggs Barricade',
    CHARACTER__Jax_Briggs__Ripped: 'Ripped',
    CHARACTER__Jax_Briggs__Burning_Hammer: 'Burning Hammer',
    CHARACTER__Jax_Briggs__Ground_Shatter: 'Ground Shatter',
    CHARACTER__Jax_Briggs__Expert_Grappler: 'Expert Grappler',
    CHARACTER__Jax_Briggs__Enhanced_Advanced_Force: 'Enhanced Advanced Force',
    // Fatal Blow
    CHARACTER__Jax_Briggs__Honorable_Discharge: 'Honorable Discharge',
    // Brutality
    CHARACTER__Jax_Briggs__Slow_Clap: 'Slow Clap',
    CHARACTER__Jax_Briggs__Awww_Yeah: 'Awww Yeah',

    // -> Johnny Cage
    CHARACTER__Johnny_Cage__NAME: 'Johnny Cage',
    CHARACTER__Johnny_Cage__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Johnny_Cage__First_Take: 'First Take',
    CHARACTER__Johnny_Cage__Low_Jab: 'Low Jab',
    CHARACTER__Johnny_Cage__Hollywood_Haymaker: 'Hollywood Haymaker',
    CHARACTER__Johnny_Cage__Axe_Kick: 'Axe Kick',
    CHARACTER__Johnny_Cage__Blazin_Backhand: 'Blazin\' Backhand',
    CHARACTER__Johnny_Cage__Upper_Cutter: 'Upper Cutter',
    CHARACTER__Johnny_Cage__Sudden_Violence: 'Sudden Violence',
    CHARACTER__Johnny_Cage__HWAAAAA: 'HWAAAAA',
    CHARACTER__Johnny_Cage__Massive_Strike: 'Massive Strike',
    CHARACTER__Johnny_Cage__Low_Boot: 'Low Boot',
    CHARACTER__Johnny_Cage__Fight_Dirty: 'Fight Dirty',
    CHARACTER__Johnny_Cage__Box_Office_Hit: 'Box Office Hit',
    CHARACTER__Johnny_Cage__Arcing_Knee: 'Arcing Knee',
    CHARACTER__Johnny_Cage__Breaking_Bad: 'Breaking Bad',
    // Jumping Attacks
    CHARACTER__Johnny_Cage__Straight_Fame: 'Straight Fame',
    CHARACTER__Johnny_Cage__Hooked: 'Hooked',
    CHARACTER__Johnny_Cage__Cool_Flick: 'Cool Flick',
    // Quick Jumping Attacks
    CHARACTER__Johnny_Cage__Something_Punchy: 'Something Punchy',
    CHARACTER__Johnny_Cage__Cool_Kick: 'Cool Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Johnny_Cage__Rise_and_Shine: 'Rise and Shine',
    CHARACTER__Johnny_Cage__Dizzy_Knee: 'Dizzy Knee',
    // Combo Attacks
    CHARACTER__Johnny_Cage__Stand_In: 'Stand-In',
    CHARACTER__Johnny_Cage__Post_Credits: 'Post Credits',
    CHARACTER__Johnny_Cage__Fix_It_In_Post: 'Fix It In Post',
    CHARACTER__Johnny_Cage__Comedy_and_Tragedy: 'Comedy and Tragedy',
    CHARACTER__Johnny_Cage__Bad_Scripts: 'Bad Scripts',
    CHARACTER__Johnny_Cage__Silent_but_Deadly: 'Silent but Deadly',
    CHARACTER__Johnny_Cage__The_Gist_of_my_Fist: 'The Gist of my Fist',
    CHARACTER__Johnny_Cage__Almost_Famous: 'Almost Famous',
    CHARACTER__Johnny_Cage__Sell_Out: 'Sell Out',
    CHARACTER__Johnny_Cage__Cage_Match: 'Cage Match',
    CHARACTER__Johnny_Cage__Director_s_Cut: 'Director\'s Cut',
    CHARACTER__Johnny_Cage__Kind_of_a_Big_Deal: 'Kind of a Big Deal',
    CHARACTER__Johnny_Cage__No_Autographs: 'No Autographs',
    CHARACTER__Johnny_Cage__Making_Headlines: 'Making Headlines',
    CHARACTER__Johnny_Cage__Tear_Jerker: 'Tear Jerker',
    CHARACTER__Johnny_Cage__Wing_Man: 'Wing Man',
    // Special Attacks
    CHARACTER__Johnny_Cage__Straight_Forceball: 'Straight Forceball',
    CHARACTER__Johnny_Cage__Nut_Punch: 'Nut Punch',
    CHARACTER__Johnny_Cage__Flippy_Kick: 'Flippy Kick',
    CHARACTER__Johnny_Cage__Shadow_Kick: 'Shadow Kick',
    // Ability
    CHARACTER__Johnny_Cage__Pissed_Off: 'Pissed Off',
    CHARACTER__Johnny_Cage__Mime_Time: 'Mime Time',
    CHARACTER__Johnny_Cage__Low_Forceball: 'Low Forceball',
    CHARACTER__Johnny_Cage__High_Forceball: 'High Forceball',
    CHARACTER__Johnny_Cage__Brass_Knuckles: 'Brass Knuckles',
    CHARACTER__Johnny_Cage__Throwing_Shades: 'Throwing Shades',
    CHARACTER__Johnny_Cage__Say_Cheese: 'Say Cheese',
    CHARACTER__Johnny_Cage__Rising_Star: 'Rising Star',
    CHARACTER__Johnny_Cage__Caged_Rage: 'Caged Rage',
    CHARACTER__Johnny_Cage__Stunt_Double: 'Stunt Double',
    // Fatal Blow
    CHARACTER__Johnny_Cage__The_Award_Goes_To: 'The Award Goes To',
    // Brutality
    CHARACTER__Johnny_Cage__The_Klassic: theKlassic,
    // CHARACTER__Johnny_Cage__The_Award_Goes_To: 'The Award Goes To',

    // -> Kabal
    CHARACTER__Kabal__NAME: 'Kabal',
    CHARACTER__Kabal__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Kabal__Straight_Jab: 'Straight Jab',
    CHARACTER__Kabal__Hook_Strike: 'Hook Strike',
    CHARACTER__Kabal__Knee_Buckle: 'Knee Buckle',
    CHARACTER__Kabal__Hard_Cross: 'Hard Cross',
    CHARACTER__Kabal__Swinging_Hooks: 'Swinging Hooks',
    CHARACTER__Kabal__Hook_Jab: 'Hook Jab',
    CHARACTER__Kabal__Rising_Fist: 'Rising Fist',
    CHARACTER__Kabal__Straight_Boot: 'Straight Boot',
    CHARACTER__Kabal__Heel_Strike: 'Heel Strike',
    CHARACTER__Kabal__Side_Kick: 'Side Kick',
    CHARACTER__Kabal__Spin_Kick: 'Spin Kick',
    CHARACTER__Kabal__Sweeping_Hooks: 'Sweeping Hooks',
    CHARACTER__Kabal__Deadly_Knee: 'Deadly Knee',
    CHARACTER__Kabal__Hook_Swipe: 'Hook Swipe',
    // Jumping Attacks
    CHARACTER__Kabal__Black_Dragon_Bash: 'Black Dragon Bash',
    CHARACTER__Kabal__Blade_Jab: 'Blade Jab',
    CHARACTER__Kabal__Flick_Kick: 'Flick Kick',
    // Quick Jumping Attacks
    CHARACTER__Kabal__Hammering_Hooks: 'Hammering Hooks',
    CHARACTER__Kabal__Brute_Kick: 'Brute Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Kabal__Hook_Spin: 'Hook Spin',
    CHARACTER__Kabal__Hook_Punch: 'Hook Punch',
    // Combo Attacks
    CHARACTER__Kabal__Last_Breath: 'Last Breath',
    CHARACTER__Kabal__Hooks_And_Blood_Splatter: 'Hooks And Blood Splatter',
    CHARACTER__Kabal__Eviscerated: 'Eviscerated',
    CHARACTER__Kabal__Extermination_Squad: 'Extermination Squad',
    CHARACTER__Kabal__Scary_Face: 'Scary Face',
    CHARACTER__Kabal__Vapor_Trails: 'Vapor Trails',
    CHARACTER__Kabal__Sandman: 'Sandman',
    CHARACTER__Kabal__Kabal_s_Deep: 'Kabal\'s Deep',
    CHARACTER__Kabal__Maimed_and_Mangled: 'Maimed and Mangled',
    CHARACTER__Kabal__Left_for_Dead: 'Left for Dead',
    // Special Attacks
    CHARACTER__Kabal__Buzzsaw: 'Buzzsaw',
    CHARACTER__Kabal__Nomad_Dash: 'Nomad Dash',
    CHARACTER__Kabal__Hook_Slam: 'Hook Slam',
    // Ability
    CHARACTER__Kabal__Rolling_Buzzsaw: 'Rolling Buzzsaw',
    CHARACTER__Kabal__Air_Straight_Buzzin: '(Air) Straight Buzzin\'',
    CHARACTER__Kabal__Low_Hook_Grab: 'Low Hook Grab',
    CHARACTER__Kabal__Low_Spinner: 'Low Spinner',
    CHARACTER__Kabal__Hook_Grab: 'Hook Grab',
    CHARACTER__Kabal__Nomad_Spin: 'Nomad Spin',
    CHARACTER__Kabal__Air_Slight_Gas: '(Air) Slight Gas',
    CHARACTER__Kabal__Flash_Parry: 'Flash Parry',
    CHARACTER__Kabal__Extended_Hook: 'Extended Hook',
    CHARACTER__Kabal__Gas_Blast: 'Gas Blast',
    CHARACTER__Kabal__Dash_Cancel: 'Dash Cancel',
    // Fatal Blow
    CHARACTER__Kabal__Off_the_Hook: 'Off the Hook',
    // Brutality
    CHARACTER__Kabal__The_Klassic: theKlassic,
    CHARACTER__Kabal__Spin_Me_Right_Round: 'Spin Me Right Round',
    CHARACTER__Kabal__Rollin__Through: 'Rollin\' Through',
    CHARACTER__Kabal__Nowhere_to_Run: 'Nowhere to Run',

    // -> Kano
    CHARACTER__Kano__NAME: 'Kano',
    CHARACTER__Kano__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Kano__Bloody_Knuckles: 'Bloody Knuckles',
    CHARACTER__Kano__Blade_Evade: 'Blade Evade',
    CHARACTER__Kano__Lunging_Brute: 'Lunging Brute',
    CHARACTER__Kano__Knee_Cutter: 'Knee Cutter',
    CHARACTER__Kano__Scarred: 'Scarred',
    CHARACTER__Kano__Deadly_Graze: 'Deadly Graze',
    CHARACTER__Kano__Dirty_Hit: 'Dirty Hit',
    CHARACTER__Kano__Black_Dragon_Bash: 'Black Dragon Bash',
    CHARACTER__Kano__High_Boot: 'High Boot',
    CHARACTER__Kano__Enzuigiri: 'Enzuigiri',
    CHARACTER__Kano__Under_Kick: 'Under Kick',
    CHARACTER__Kano__Low_Hinge: 'Low Hinge',
    CHARACTER__Kano__Face_Breaker: 'Face Breaker',
    CHARACTER__Kano__Donkey_Kick: 'Donkey Kick',
    CHARACTER__Kano__Wheel_Kick: 'Wheel Kick',
    CHARACTER__Kano__Devo_Strike: 'Devo Strike',
    // Jumping Attacks
    CHARACTER__Kano__Bladed: 'Bladed',
    CHARACTER__Kano__Outback_Bash: 'Outback Bash',
    CHARACTER__Kano__Kangaroo_Kick: 'Kangaroo Kick',
    // Quick Jumping Attacks
    CHARACTER__Kano__G_day_Mate: 'G\'day Mate',
    CHARACTER__Kano__Brutal_Heel: 'Brutal Heel',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Kano__Cheeky_Swipes: 'Cheeky Swipes',
    CHARACTER__Kano__Quick_Burn: 'Quick Burn',
    // Combo Attacks
    CHARACTER__Kano__Come_a_Gutser: 'Come a Gutser',
    CHARACTER__Kano__Blood_Worth_Bottling: 'Blood Worth Bottling',
    CHARACTER__Kano__Spewin_: 'Spewin\'',
    CHARACTER__Kano__Fair_Suck_of_the_Sav: 'Fair Suck of the Sav',
    CHARACTER__Kano__Cut_Snake: 'Cut Snake',
    CHARACTER__Kano__Deadly_Digger: 'Deadly Digger',
    CHARACTER__Kano__Blow_Away: 'Blow Away',
    // Special Attacks
    CHARACTER__Kano__Blade_Saw: 'Blade Saw',
    CHARACTER__Kano__Black_Dragon_Ball: 'Black Dragon Ball',
    CHARACTER__Kano__Air_Black_Dragon_Ball: '(Air) Black Dragon Ball',
    // Ability
    CHARACTER__Kano__Optic_Blast: 'Optic Blast',
    CHARACTER__Kano__Bio_Magnetic_Pull: 'Bio-Magnetic Pull',
    CHARACTER__Kano__Bio_Magnetic_Trap: 'Bio-Magnetic Trap',
    CHARACTER__Kano__Lumbar_Check: 'Lumbar Check',
    CHARACTER__Kano__Vege_Mighty: 'Vege-Mighty',
    CHARACTER__Kano__Snake_Bite: 'Snake Bite',
    CHARACTER__Kano__Rack_Off: 'Rack Off',
    CHARACTER__Kano__Molotov_Cocktail: 'Molotov Cocktail',
    CHARACTER__Kano__Chemical_Burn: 'Chemical Burn',
    CHARACTER__Kano__Manhandled: 'Manhandled',
    // Fatal Blow
    CHARACTER__Kano__NOT_HERE_TO_F_CK_SPIDERS: 'NOT HERE TO F#CK SPIDERS',
    // Brutality
    CHARACTER__Kano__The_Klassic: theKlassic,
    CHARACTER__Kano__Not_Lookin_Good: 'Not Lookin\' Good',
    CHARACTER__Kano__Look_What_I_found: 'Look What I found',

    // -> Kitana
    CHARACTER__Kitana__NAME: 'Kitana',
    CHARACTER__Kitana__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Kitana__Blade_Jab: 'Blade Jab',
    CHARACTER__Kitana__Back_Swipe: 'Back Swipe',
    CHARACTER__Kitana__Low_Poke: 'Low Poke',
    CHARACTER__Kitana__Neck_Slice: 'Neck Slice',
    CHARACTER__Kitana__Royal_Hand: 'Royal Hand',
    CHARACTER__Kitana__Fan_Out: 'Fan Out',
    CHARACTER__Kitana__Rising_Power: 'Rising Power',
    CHARACTER__Kitana__Pretty_Kick: 'Pretty Kick',
    CHARACTER__Kitana__Quick_Flick: 'Quick Flick',
    CHARACTER__Kitana__Heel_Poke: 'Heel Poke',
    CHARACTER__Kitana__Spinning_Heel: 'Spinning Heel',
    CHARACTER__Kitana__Low_Slice: 'Low Slice',
    CHARACTER__Kitana__Fan_Stab: 'Fan Stab',
    // Jumping Attacks
    CHARACTER__Kitana__Punishing_Poke: 'Punishing Poke',
    CHARACTER__Kitana__Edenian_Strike: 'Edenian Strike',
    CHARACTER__Kitana__Bloody_Heel: 'Bloody Heel',
    // Quick Jumping Attacks
    CHARACTER__Kitana__Full_Slice: 'Full Slice',
    CHARACTER__Kitana__Flick_Kick: 'Flick Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Kitana__Step_Back: 'Step Back',
    CHARACTER__Kitana__Fanning_Out: 'Fanning Out',
    // Combo Attacks
    CHARACTER__Kitana__Learn_Respect: 'Learn Respect',
    CHARACTER__Kitana__Dark_Empress: 'Dark Empress',
    CHARACTER__Kitana__New_Power: 'New Power',
    CHARACTER__Kitana__No_Mercy: 'No Mercy',
    CHARACTER__Kitana__Purge_the_Weak: 'Purge the Weak',
    CHARACTER__Kitana__Dark_Deception: 'Dark Deception',
    CHARACTER__Kitana__Fan_Tastic: 'Fan-Tastic',
    CHARACTER__Kitana__Edenian_Dance: 'Edenian Dance',
    CHARACTER__Kitana__Noble_Assault: 'Noble Assault',
    CHARACTER__Kitana__A_Royal_Welcome: 'A Royal Welcome',
    CHARACTER__Kitana__Follow_Me: 'Follow Me',
    CHARACTER__Kitana__Leave_Now: 'Leave Now',
    CHARACTER__Kitana__Follow_the_Leader: 'Follow the Leader',
    CHARACTER__Kitana__Blood_Sacrifice: 'Blood Sacrifice',
    CHARACTER__Kitana__Punishment: 'Punishment',
    CHARACTER__Kitana__Eternal_Damnation: 'Eternal Damnation',
    // Special Attacks
    CHARACTER__Kitana__Fan_Toss: 'Fan Toss',
    CHARACTER__Kitana__Air_Fan_Toss: '(Air) Fan Toss',
    CHARACTER__Kitana__Fan_Lift: 'Fan Lift',
    CHARACTER__Kitana__Quick_Execution: 'Quick Execution',
    CHARACTER__Kitana__Air_Square_Wave: '(Air) Square Wave',
    // Ability
    CHARACTER__Kitana__Fan_Nado: 'Fan-Nado',
    CHARACTER__Kitana__Air_Piercing_Dagger: '(Air) Piercing Dagger',
    CHARACTER__Kitana__Upward_Fan_Toss: 'Upward Fan Toss',
    CHARACTER__Kitana__Low_Fan_Toss: 'Low Fan Toss',
    CHARACTER__Kitana__Dancing_Fans: 'Dancing Fans',
    CHARACTER__Kitana__Air_Fan_Flutter: '(Air) Fan Flutter',
    CHARACTER__Kitana__Retreating_and_Advancing_Fan_Flutter: 'Retreating and Advancing Fan Flutter',
    CHARACTER__Kitana__Edenian_Twist: 'Edenian Twist',
    CHARACTER__Kitana__Ground_War: 'Ground War',
    CHARACTER__Kitana__Half_Blood_Stance: 'Half Blood Stance',
    CHARACTER__Kitana__Edenian_Fade: 'Edenian Fade',
    CHARACTER__Kitana__Royal_Protection: 'Royal Protection',
    CHARACTER__Kitana__Edenian_Razors: 'Edenian Razors',
    // Fatal Blow
    CHARACTER__Kitana__DEADLY_GAME: 'DEADLY GAME',
    // Brutality
    CHARACTER__Kitana__The_Klassic: theKlassic,
    CHARACTER__Kitana__Punished: 'Punished',

    // -> Kollector
    CHARACTER__Kollector__NAME: 'Kollector',
    CHARACTER__Kollector__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Kollector__Claw_Swipe: 'Claw Swipe',
    CHARACTER__Kollector__Raising_Hell: 'Raising Hell',
    CHARACTER__Kollector__Sickle_Slice: 'Sickle Slice',
    CHARACTER__Kollector__Bloody_Nails: 'Bloody Nails',
    CHARACTER__Kollector__Lantern_Burst: 'Lantern Burst',
    CHARACTER__Kollector__Lantern_Slam: 'Lantern Slam',
    CHARACTER__Kollector__Knee_Breaker: 'Knee Breaker',
    CHARACTER__Kollector__Rising_Claws: 'Rising Claws',
    CHARACTER__Kollector__Violent_Heel: 'Violent Heel',
    CHARACTER__Kollector__Death_Spin: 'Death Spin',
    CHARACTER__Kollector__Koruppted_Kick: 'Koruppted Kick',
    CHARACTER__Kollector__Leg_Check: 'Leg Check',
    CHARACTER__Kollector__Malice_Mace: 'Malice Mace',
    CHARACTER__Kollector__Tax_Burden: 'Tax Burden',
    CHARACTER__Kollector__Mace_Drop: 'Mace Drop',
    CHARACTER__Kollector__Low_Mace: 'Low Mace',
    // Jumping Attacks
    CHARACTER__Kollector__Punishing_Strike: 'Punishing Strike',
    CHARACTER__Kollector__Kura_Slam: 'Kura Slam',
    CHARACTER__Kollector__Kura_Heel: 'Kura Heel',
    // Quick Jumping Attacks
    CHARACTER__Kollector__Menacing_Fist: 'Menacing Fist',
    CHARACTER__Kollector__Debt_Kick: 'Debt Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Kollector__Flailing_Mace: 'Flailing Mace',
    CHARACTER__Kollector__Rising_Flames: 'Rising Flames',
    // Combo Attacks
    CHARACTER__Kollector__Blood_Money: 'Blood Money',
    CHARACTER__Kollector__Price_to_Pay: 'Price to Pay',
    CHARACTER__Kollector__The_Enforcer: 'The Enforcer',
    CHARACTER__Kollector__Chaotic_Magic: 'Chaotic Magic',
    CHARACTER__Kollector__Ill_Gotten_Gains: 'Ill-Gotten Gains',
    CHARACTER__Kollector__Slice_and_Dice: 'Slice and Dice',
    CHARACTER__Kollector__Debt_is_Paid: 'Debt is Paid',
    CHARACTER__Kollector__Mine_Mine_Mine: 'Mine Mine Mine',
    CHARACTER__Kollector__Play_for_Souls: 'Play for Souls',
    CHARACTER__Kollector__Pillaged: 'Pillaged',
    CHARACTER__Kollector__Taxed: 'Taxed',
    CHARACTER__Kollector__Lie_and_Cheat: 'Lie and Cheat',
    CHARACTER__Kollector__Greed: 'Greed',
    CHARACTER__Kollector__Take_It_All: 'Take It All',
    CHARACTER__Kollector__Paid_in_Full: 'Paid in Full',
    CHARACTER__Kollector__With_Interest: 'With Interest',
    CHARACTER__Kollector__Take_and_Deny: 'Take and Deny',
    CHARACTER__Kollector__No_Collateral: 'No Collateral',
    CHARACTER__Kollector__Ravages_of_Time: 'Ravages of Time',
    // Special Attacks
    CHARACTER__Kollector__Demonic_Mace: 'Demonic Mace',
    CHARACTER__Kollector__Shotel_Fury: 'Shotel Fury',
    CHARACTER__Kollector__Damned_Bola: 'Damned Bola',
    CHARACTER__Kollector__Relic_Absorb: 'Relic Absorb',
    // Ability
    CHARACTER__Kollector__Up_Demonic_Mace: 'Up Demonic Mace',
    CHARACTER__Kollector__Relic_Lure: 'Relic Lure',
    CHARACTER__Kollector__Demonic_Clutch: 'Demonic Clutch',
    CHARACTER__Kollector__War_Quoit_Toss: 'War-Quoit Toss',
    CHARACTER__Kollector__Bag_Bomb: 'Bag Bomb',
    CHARACTER__Kollector__Vial_of_Sorrow: 'Vial of Sorrow',
    CHARACTER__Kollector__Demonic_Comet: 'Demonic Comet',
    CHARACTER__Kollector__Fade_Out: 'Fade Out',
    // Fatal Blow
    CHARACTER__Kollector__A_SLIGHT_DONATION: 'A SLIGHT DONATION',
    // Brutality
    CHARACTER__Kollector__The_Klassic: theKlassic,
    CHARACTER__Kollector__Should_Have_Paid: 'Should Have Paid',

    // -> Kotal Kahn
    CHARACTER__Kotal_Kahn__NAME: 'Kotal Kahn',
    CHARACTER__Kotal_Kahn__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Kotal_Kahn__Bloody_Knuckles: 'Bloody Knuckles',
    CHARACTER__Kotal_Kahn__Royal_Backhand: 'Royal Backhand',
    CHARACTER__Kotal_Kahn__Low_Swipe: 'Low Swipe',
    CHARACTER__Kotal_Kahn__Temple_Punch: 'Temple Punch',
    CHARACTER__Kotal_Kahn__Macuahuitl_Swipe: 'Macuahuitl Swipe',
    CHARACTER__Kotal_Kahn__Blade_Push: 'Blade Push',
    CHARACTER__Kotal_Kahn__Rising_Kahn: 'Rising Kahn',
    CHARACTER__Kotal_Kahn__Flick_Kick: 'Flick Kick',
    CHARACTER__Kotal_Kahn__Knee_Shatter: 'Knee Shatter',
    CHARACTER__Kotal_Kahn__Side_Strike: 'Side Strike',
    CHARACTER__Kotal_Kahn__Heavy_Blade: 'Heavy Blade',
    CHARACTER__Kotal_Kahn__Mace_Sweep: 'Mace Sweep',
    CHARACTER__Kotal_Kahn__Brutal_Boot: 'Brutal Boot',
    CHARACTER__Kotal_Kahn__Warrior_Spin: 'Warrior Spin',
    // Jumping Attacks
    CHARACTER__Kotal_Kahn__Reaching_Fist: 'Reaching Fist',
    CHARACTER__Kotal_Kahn__Hammer_Slam: 'Hammer Slam',
    CHARACTER__Kotal_Kahn__Straight_Kick: 'Straight Kick',
    // Quick Jumping Attacks
    CHARACTER__Kotal_Kahn__Coatl_Slam: 'Coatl Slam',
    CHARACTER__Kotal_Kahn__Kritical_Kick: 'Kritical Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Kotal_Kahn__Rising_Mehtizquia: 'Rising Mehtizquia',
    CHARACTER__Kotal_Kahn__Tonatiuh_Blast: 'Tonatiuh Blast',
    // Combo Attacks
    CHARACTER__Kotal_Kahn__Tlamanalo: 'Tlamanalo',
    CHARACTER__Kotal_Kahn__Soleil: 'Soleil',
    CHARACTER__Kotal_Kahn__Tenchalli_Bash: 'Tenchalli Bash',
    CHARACTER__Kotal_Kahn__Cuazquia: 'Cuazquia',
    CHARACTER__Kotal_Kahn__Metzli: 'Metzli',
    CHARACTER__Kotal_Kahn__Impitzoyo: 'Impitzoyo',
    CHARACTER__Kotal_Kahn__Coatl_Strikes: 'Coatl Strikes',
    CHARACTER__Kotal_Kahn__Tlaneltocaz: 'Tlaneltocaz',
    CHARACTER__Kotal_Kahn__Mahuiztiquez: 'Mahuiztiquez',
    CHARACTER__Kotal_Kahn__Tonaltzintli: 'Tonaltzintli',
    CHARACTER__Kotal_Kahn__Mehtizquia: 'Mehtizquia',
    CHARACTER__Kotal_Kahn__Xolotl: 'Xolotl',
    CHARACTER__Kotal_Kahn__Melahuac: 'Melahuac',
    // Special Attacks
    CHARACTER__Kotal_Kahn__Coatl_Parry: 'Coatl Parry',
    CHARACTER__Kotal_Kahn__Mehtizquia_Cut: 'Mehtizquia Cut',
    CHARACTER__Kotal_Kahn__Yeyecame_Disk: 'Yeyecame Disk',
    CHARACTER__Kotal_Kahn__Xolal_Quake: 'Xolal Quake',
    CHARACTER__Kotal_Kahn__Tonatiuh_Beam: 'Tonatiuh Beam',
    // Ability
    CHARACTER__Kotal_Kahn__Grand_Discus: 'Grand Discus',
    CHARACTER__Kotal_Kahn__Directed_Rays: 'Directed Rays',
    CHARACTER__Kotal_Kahn__Tonatiuh_Burst: 'Tonatiuh Burst',
    CHARACTER__Kotal_Kahn__Amocualli_Totem: 'Amocualli Totem',
    CHARACTER__Kotal_Kahn__Teoyohtica_Totem: 'Teoyohtica Totem',
    CHARACTER__Kotal_Kahn__Chicahtoc_Totem: 'Chicahtoc Totem',
    CHARACTER__Kotal_Kahn__Eztli_Totem: 'Eztli Totem',
    CHARACTER__Kotal_Kahn__Huehhueyi: 'Huehhueyi',
    CHARACTER__Kotal_Kahn__God_Ray: 'God Ray',
    CHARACTER__Kotal_Kahn__Tecuani_Maul: 'Tecuani Maul',
    CHARACTER__Kotal_Kahn__Air_Tecuani_Pounce: '(Air) Tecuani Pounce',
    CHARACTER__Kotal_Kahn__Kahn_Cut: 'Kahn-Cut',
    // Fatal Blow
    CHARACTER__Kotal_Kahn__PINNED_DOWN: 'PINNED DOWN',
    // Brutality
    CHARACTER__Kotal_Kahn__The_Klassic: theKlassic,
    CHARACTER__Kotal_Kahn__Back_Stabber: 'Back Stabber',

    // -> Kung Lao
    CHARACTER__Kung_Lao__NAME: 'Kung Lao',
    CHARACTER__Kung_Lao__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Kung_Lao__Shaolin_Fist: 'Shaolin Fist',
    CHARACTER__Kung_Lao__Step_Punch: 'Step Punch',
    CHARACTER__Kung_Lao__Low_Palm: 'Low Palm',
    CHARACTER__Kung_Lao__Straight_Poke: 'Straight Poke',
    CHARACTER__Kung_Lao__Hat_Slice: 'Hat Slice',
    CHARACTER__Kung_Lao__Rising_Rim: 'Rising Rim',
    CHARACTER__Kung_Lao__High_Kick: 'High Kick',
    CHARACTER__Kung_Lao__Dragon_Step: 'Dragon Step',
    CHARACTER__Kung_Lao__Side_Kick: 'Side Kick',
    CHARACTER__Kung_Lao__Spin_Kick: 'Spin Kick',
    CHARACTER__Kung_Lao__Sweeping_Razor: 'Sweeping Razor',
    CHARACTER__Kung_Lao__Twin_Kicks: 'Twin Kicks',
    CHARACTER__Kung_Lao__Back_Kick: 'Back Kick',
    // Jumping Attacks
    CHARACTER__Kung_Lao__Razor_Edge: 'Razor Edge',
    CHARACTER__Kung_Lao__Shaolin_Strike: 'Shaolin Strike',
    CHARACTER__Kung_Lao__Light_Kick: 'Light Kick',
    // Quick Jumping Attacks
    CHARACTER__Kung_Lao__Vicious_Slice: 'Vicious Slice',
    CHARACTER__Kung_Lao__Shaolin_Shalhoub: 'Shaolin Shalhoub',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Kung_Lao__Rising_Hat: 'Rising Hat',
    CHARACTER__Kung_Lao__Slip_Kick: 'Slip Kick',
    // Combo Attacks
    CHARACTER__Kung_Lao__Fist_Fury: 'Fist Fury',
    CHARACTER__Kung_Lao__Order_of_Light: 'Order of Light',
    CHARACTER__Kung_Lao__Fatal_Blow: 'Fatal Blow',
    CHARACTER__Kung_Lao__Monk_Dunk: 'Monk Dunk',
    CHARACTER__Kung_Lao__Lost_Soul: 'Lost Soul',
    CHARACTER__Kung_Lao__Deadly_Path: 'Deadly Path',
    CHARACTER__Kung_Lao__Under_Control: 'Under Control',
    CHARACTER__Kung_Lao__Double_Yang: 'Double Yang',
    CHARACTER__Kung_Lao__Kung_Tang: 'Kung Tang',
    CHARACTER__Kung_Lao__Broken_Faith: 'Broken Faith',
    CHARACTER__Kung_Lao__Disrespect: 'Disrespect',
    CHARACTER__Kung_Lao__Flowing_Water: 'Flowing Water',
    CHARACTER__Kung_Lao__Plum_Flower: 'Plum Flower',
    CHARACTER__Kung_Lao__Heavy_Mountain: 'Heavy Mountain',
    CHARACTER__Kung_Lao__Iron_Broom: 'Iron Broom',
    // Special Attacks
    CHARACTER__Kung_Lao__Spin: 'Spin',
    CHARACTER__Kung_Lao__Hat_Toss: 'Hat Toss',
    CHARACTER__Kung_Lao__Air_Shaolin_Drop: '(Air) Shaolin Drop',
    CHARACTER__Kung_Lao__Teleport: 'Teleport',
    // Ability
    CHARACTER__Kung_Lao__Guided_Hat: 'Guided Hat',
    CHARACTER__Kung_Lao__Possessed_Hat: 'Possessed Hat',
    CHARACTER__Kung_Lao__Z_Hat: 'Z Hat',
    CHARACTER__Kung_Lao__Buzz_Saw: 'Buzz Saw',
    CHARACTER__Kung_Lao__Vortex: 'Vortex',
    CHARACTER__Kung_Lao__Air_Teleport: '(Air) Teleport',
    CHARACTER__Kung_Lao__Spiritual_Guidance: 'Spiritual Guidance',
    CHARACTER__Kung_Lao__Orbiting_Hat: 'Orbiting Hat',
    CHARACTER__Kung_Lao__Omega_Hat: 'Omega Hat',
    CHARACTER__Kung_Lao__Hat_Possession: 'Hat Possession',
    // Fatal Blow
    CHARACTER__Kung_Lao__Beaten_and_Broken: 'Beaten and Broken',
    // Brutality
    CHARACTER__Kung_Lao__The_Klassic: theKlassic,
    CHARACTER__Kung_Lao__Not_Holding_Back: 'Not Holding Back',

    // -> Liu Kang
    CHARACTER__Liu_Kang__NAME: 'Liu Kang',
    CHARACTER__Liu_Kang__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Liu_Kang__Power_Punch: 'Power Punch',
    CHARACTER__Liu_Kang__Silent_Chop: 'Silent Chop',
    CHARACTER__Liu_Kang__Low_Backhand: 'Low Backhand',
    CHARACTER__Liu_Kang__Chosen_Strike: 'Chosen Strike',
    CHARACTER__Liu_Kang__Nunchaku_Strike: 'Nunchaku Strike',
    CHARACTER__Liu_Kang__Kontei_Slam: 'Kontei Slam',
    CHARACTER__Liu_Kang__Rising_Chaku: 'Rising Chaku',
    CHARACTER__Liu_Kang__Dragon_Kick: 'Dragon Kick',
    CHARACTER__Liu_Kang__Quick_Step: 'Quick Step',
    CHARACTER__Liu_Kang__Double_Dragon_Kick: 'Double Dragon Kick',
    CHARACTER__Liu_Kang__Crouching_Kick: 'Crouching Kick',
    CHARACTER__Liu_Kang__Shaolin_Spin: 'Shaolin Spin',
    CHARACTER__Liu_Kang__Chaku_Sweep: 'Chaku Sweep',
    CHARACTER__Liu_Kang__Lotus_Strikes: 'Lotus Strikes',
    CHARACTER__Liu_Kang__Dragon_s_Tail: 'Dragon\'s Tail',
    // Jumping Attacks
    CHARACTER__Liu_Kang__Fist_of_the_Lotus: 'Fist of the Lotus',
    CHARACTER__Liu_Kang__Dragon_Claw: 'Dragon Claw',
    CHARACTER__Liu_Kang__Heavy_Heel: 'Heavy Heel',
    // Quick Jumping Attacks
    CHARACTER__Liu_Kang__One_Ince_Punch: 'One Ince Punch',
    CHARACTER__Liu_Kang__Flame_Stomp: 'Flame Stomp',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Liu_Kang__Rising_Dragon: 'Rising Dragon',
    CHARACTER__Liu_Kang__Game_of_Death: 'Game of Death',
    // Combo Attacks
    CHARACTER__Liu_Kang__Total_Destruction: 'Total Destruction',
    CHARACTER__Liu_Kang__Twin_Lotus: 'Twin Lotus',
    CHARACTER__Liu_Kang__Dark_Orders: 'Dark Orders',
    CHARACTER__Liu_Kang__The_Time_has_Come: 'The Time has Come',
    CHARACTER__Liu_Kang__Done_Listening: 'Done Listening',
    CHARACTER__Liu_Kang__Lost_Soul: 'Lost Soul',
    CHARACTER__Liu_Kang__No_Loyalty: 'No Loyalty',
    CHARACTER__Liu_Kang__A_Quick_End: 'A Quick End',
    CHARACTER__Liu_Kang__This_Will_Hurt: 'This Will Hurt',
    CHARACTER__Liu_Kang__Dragon_s_Breath: 'Dragon\'s Breath',
    CHARACTER__Liu_Kang__Shaolin_Warrior: 'Shaolin Warrior',
    CHARACTER__Liu_Kang__Chinese_Warrior: 'Chinese Warrior',
    // Special Attacks
    CHARACTER__Liu_Kang__Fireball: 'Fireball',
    CHARACTER__Liu_Kang__Air_Fireball: '(Air) Fireball',
    CHARACTER__Liu_Kang__Flying_Dragon_Kick: 'Flying Dragon Kick',
    CHARACTER__Liu_Kang__Bicycle_Kick: 'Bicycle Kick',
    // Ability
    CHARACTER__Liu_Kang__Shaolin_Stance: 'Shaolin Stance',
    CHARACTER__Liu_Kang__Energy_Parry: 'Energy Parry',
    CHARACTER__Liu_Kang__Nunchaku_Stance: 'Nunchaku Stance',
    CHARACTER__Liu_Kang__Low_Fireball: 'Low Fireball',
    CHARACTER__Liu_Kang__Dragon_Fire: 'Dragon Fire',
    CHARACTER__Liu_Kang__Dragon_s_Gifts: 'Dragon\'s Gifts',
    CHARACTER__Liu_Kang__Dragon_Parry: 'Dragon Parry',
    CHARACTER__Liu_Kang__Kusari_Slam: 'Kusari Slam',
    CHARACTER__Liu_Kang__Shaolin_Vanish: 'Shaolin Vanish',
    // Fatal Blow
    CHARACTER__Liu_Kang__Enter_the_Dragon: 'Enter the Dragon',
    // Brutality
    CHARACTER__Liu_Kang__The_Klassic: theKlassic,
    CHARACTER__Liu_Kang__Get_Chucked: 'Get Chucked',
    CHARACTER__Liu_Kang__One_Inch_Death_Strike: 'One Inch Death Strike',

    // -> Noob Saibot
    CHARACTER__Noob_Saibot__NAME: 'Noob Saibot',
    CHARACTER__Noob_Saibot__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Noob_Saibot__Heavy_Knuckles: 'Heavy Knuckles',
    CHARACTER__Noob_Saibot__Shadow_Poke: 'Shadow Poke',
    CHARACTER__Noob_Saibot__Knee_Hook: 'Knee Hook',
    CHARACTER__Noob_Saibot__Straight_Fist: 'Straight Fist',
    CHARACTER__Noob_Saibot__Dark_Push: 'Dark Push',
    CHARACTER__Noob_Saibot__Turning_Chop: 'Turning Chop',
    CHARACTER__Noob_Saibot__Rising_Sickle: 'Rising Sickle',
    CHARACTER__Noob_Saibot__Straight_Kick: 'Straight Kick',
    CHARACTER__Noob_Saibot__Shadow_Slice: 'Shadow Slice',
    CHARACTER__Noob_Saibot__High_Kick: 'High Kick',
    CHARACTER__Noob_Saibot__Boot_Slide: 'Boot Slide',
    CHARACTER__Noob_Saibot__Dark_Heel: 'Dark Heel',
    CHARACTER__Noob_Saibot__Sickle_Sweep: 'Sickle Sweep',
    CHARACTER__Noob_Saibot__Sneaky_Saibot: 'Sneaky Saibot',
    CHARACTER__Noob_Saibot__Sickle_Strike: 'Sickle Strike',
    // Jumping Attacks
    CHARACTER__Noob_Saibot__Dark_Jab: 'Dark Jab',
    CHARACTER__Noob_Saibot__Sickle_Swipe: 'Sickle Swipe',
    CHARACTER__Noob_Saibot__Wraith_Kick: 'Wraith Kick',
    // Quick Jumping Attacks
    CHARACTER__Noob_Saibot__Sickle_Slam: 'Sickle Slam',
    CHARACTER__Noob_Saibot__Spinning_Wraith: 'Spinning Wraith',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Noob_Saibot__Slick_Sickle: 'Slick Sickle',
    CHARACTER__Noob_Saibot__Wraith_Boot: 'Wraith Boot',
    // Combo Attacks
    CHARACTER__Noob_Saibot__Creeping_Shadow: 'Creeping Shadow',
    CHARACTER__Noob_Saibot__Empty_Grave: 'Empty Grave',
    CHARACTER__Noob_Saibot__Tormented_Souls: 'Tormented Souls',
    CHARACTER__Noob_Saibot__As_One: 'As One',
    CHARACTER__Noob_Saibot__For_The_Brotherhood: 'For The Brotherhood',
    CHARACTER__Noob_Saibot__Total_Darkness: 'Total Darkness',
    CHARACTER__Noob_Saibot__Resurrected: 'Resurrected',
    CHARACTER__Noob_Saibot__Fade_To_Black: 'Fade To Black',
    CHARACTER__Noob_Saibot__Evil_Within: 'Evil Within',
    CHARACTER__Noob_Saibot__Wailing_Wraith: 'Wailing Wraith',
    CHARACTER__Noob_Saibot__Sinister_Silhouette: 'Sinister Silhouette',
    // Special Attacks
    CHARACTER__Noob_Saibot__Shadow_Tackle: 'Shadow Tackle',
    CHARACTER__Noob_Saibot__Rising_Shadow_Kick: 'Rising Shadow Kick',
    CHARACTER__Noob_Saibot__Tele_Slam: 'Tele-Slam',
    // Ability
    CHARACTER__Noob_Saibot__Ghost_Ball: 'Ghost Ball',
    CHARACTER__Noob_Saibot__Spirit_Ball: 'Spirit Ball',
    CHARACTER__Noob_Saibot__Sickle_Snag: 'Sickle Snag',
    CHARACTER__Noob_Saibot__Air_Tele_Slam: '(Air) Tele-Slam',
    CHARACTER__Noob_Saibot__Shadow_Portals: 'Shadow Portals',
    CHARACTER__Noob_Saibot__Shadow_Slide: 'Shadow Slide',
    CHARACTER__Noob_Saibot__Shadow_Strike: 'Shadow Strike',
    CHARACTER__Noob_Saibot__Air_Shadow_Dive: '(Air) Shadow Dive',
    CHARACTER__Noob_Saibot__Air_Sickle_Port: '(Air) Sickle Port',
    // Fatal Blow
    CHARACTER__Noob_Saibot__Together_Again: 'Together Again',
    // Brutality
    CHARACTER__Noob_Saibot__The_Klassic: theKlassic,
    CHARACTER__Noob_Saibot__Decapper: 'Decapper',

    // -> Raiden
    CHARACTER__Raiden__NAME: 'Raiden',
    CHARACTER__Raiden__DESCRIPTION: '',
    // Basic Attacks
    CHARACTER__Raiden__Heavy_palm: 'Heavy palm',
    CHARACTER__Raiden__God_fist: 'God fist',
    CHARACTER__Raiden__High_poke: 'High poke',
    CHARACTER__Raiden__Side_strike: 'Side strike',
    CHARACTER__Raiden__Straight_shock: 'Straight shock',
    CHARACTER__Raiden__Hammer_fists: 'Hammer fists',
    CHARACTER__Raiden__Heavy_storm: 'Heavy storm',
    CHARACTER__Raiden__Rising_lighting: 'Rising lighting',
    CHARACTER__Raiden__Chop_kick: 'Chop kick',
    CHARACTER__Raiden__Crawling_storm: 'Crawling storm',
    CHARACTER__Raiden__Flick_kick: 'Flick kick',
    CHARACTER__Raiden__Low_boot: 'Low boot',
    CHARACTER__Raiden__High_strike: 'High strike',
    CHARACTER__Raiden__Spinning_heel: 'Spinning heel',
    CHARACTER__Raiden__Thunder_knee: 'Thunder knee',
    CHARACTER__Raiden__Sweeping_storm: 'Sweeping storm',
    // Jumping Attacks
    CHARACTER__Raiden__God_Strike: 'God Strike',
    CHARACTER__Raiden__Light_shock: 'Light shock',
    CHARACTER__Raiden__Lighting_kick: 'Lighting kick',
    // Quick Jumping Attacks
    CHARACTER__Raiden__Lighting_hammer: 'Lighting hammer',
    CHARACTER__Raiden__Heavy_thunder: 'Heavy thunder',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Raiden__Shocker: 'Shocker',
    CHARACTER__Raiden__Electric_current: 'Electric current',
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
    CHARACTER__Skarlet__Quick_Prick: 'Quick Prick',
    CHARACTER__Skarlet__Slick_Scimitar: 'Slick Scimitar',
    CHARACTER__Skarlet__Silent_Stab: 'Silent Stab',
    CHARACTER__Skarlet__Slicing_Scimitar: 'Slicing Scimitar',
    CHARACTER__Skarlet__Scythe_Slam: 'Scythe Slam',
    CHARACTER__Skarlet__Whip_Snap: 'Whip Snap',
    CHARACTER__Skarlet__Kutter: 'Kutter',
    CHARACTER__Skarlet__Krack_The_Whip: 'Krack The Whip',
    CHARACTER__Skarlet__Spear_Stab: 'Spear Stab',
    CHARACTER__Skarlet__Spear_Strike: 'Spear Strike',
    CHARACTER__Skarlet__Snap_Kick: 'Snap Kick',
    CHARACTER__Skarlet__Reaching_Whip: 'Reaching Whip',
    CHARACTER__Skarlet__Gut_Buster: 'Gut Buster',
    CHARACTER__Skarlet__Spinning_Scythe: 'Spinning Scythe',
    // Jumping Attacks
    CHARACTER__Skarlet__Bleeding_Dagger: 'Bleeding Dagger',
    CHARACTER__Skarlet__Downward_Stab: 'Downward Stab',
    CHARACTER__Skarlet__Blood_Kick: 'Blood Kick',
    // Quick Jumping Attacks
    CHARACTER__Skarlet__Punishing_Spear: 'Punishing Spear',
    CHARACTER__Skarlet__Krimson_Kick: 'Krimson Kick',
    // Getup Attacks / Flawless Block Attacks
    CHARACTER__Skarlet__Bloody_Boots: 'Bloody Boots',
    CHARACTER__Skarlet__Side_Slice: 'Side Slice',
    // Combo Attacks
    CHARACTER__Skarlet__Redrum: 'Redrum',
    CHARACTER__Skarlet__Marrow_Massacre: 'Marrow Massacre',
    CHARACTER__Skarlet__Thicker_than_Water: 'Thicker than Water',
    CHARACTER__Skarlet__Komplete_Karnage: 'Komplete Karnage',
    CHARACTER__Skarlet__The_End_Is_Nigh: 'The End Is Nigh',
    CHARACTER__Skarlet__Quick_Tranfusion: 'Quick Tranfusion',
    CHARACTER__Skarlet__Simple_Slaughter: 'Simple Slaughter',
    CHARACTER__Skarlet__Koagulation: 'Koagulation',
    CHARACTER__Skarlet__Bleeding: 'Bleeding',
    // Special Attacks
    CHARACTER__Skarlet__Bloodshot: 'Bloodshot',
    CHARACTER__Skarlet__Blood_Ball: 'Blood Ball',
    CHARACTER__Skarlet__Blood_Spatter: 'Blood Spatter',
    CHARACTER__Skarlet__Blood_Trail: 'Blood Trail',
    CHARACTER__Skarlet__Blood_Tentacle: 'Blood Tentacle',
    CHARACTER__Skarlet__Klose_Blood_Tentacle: 'Klose Blood Tentacle',
    CHARACTER__Skarlet__Far_Blood_Tentacle: 'Far Blood Tentacle',
    CHARACTER__Skarlet__Very_Far_Blood_Tentacle: 'Very Far Blood Tentacle',
    // Ability
    CHARACTER__Skarlet__Dagger_Dance: 'Dagger Dance',
    CHARACTER__Skarlet__Bloodport: 'Bloodport',
    CHARACTER__Skarlet__Cell_Siphon: 'Cell Siphon',
    CHARACTER__Skarlet__Boiling_Point: 'Boiling Point',
    CHARACTER__Skarlet__Retch_Rebution: 'Retch-Rebution',
    CHARACTER__Skarlet__Killer_Clot: 'Killer Clot',
    CHARACTER__Skarlet__Blood_Ritual: 'Blood Ritual',
    CHARACTER__Skarlet__Krimson_Shield: 'Krimson Shield',
    CHARACTER__Skarlet__Red_Mist: 'Red Mist',
    CHARACTER__Skarlet__Red_Rain: 'Red Rain',
    CHARACTER__Skarlet__Blood_Flow: 'Blood Flow',
    // Fatal Blow
    CHARACTER__Skarlet__Bloody_Fun: 'Bloody Fun',
    // Brutality
    CHARACTER__Skarlet__The_Klassic: theKlassic,

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
