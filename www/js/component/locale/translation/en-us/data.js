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
    CHARACTER__Jade__Amplify_Blazing_Nitro_Kick: 'Amplify Blazing Nitro Kick',
    CHARACTER__Jade__Vanishing_Winds: 'Vanishing Winds',
    CHARACTER__Jade__Deadly_Assassin: 'Deadly Assassin',
    // Fatal Blow
    CHARACTER__Jade__Edenian_Knight: 'Edenian Knight',
    // Brutality
    CHARACTER__Jade__Clean_Sweep: 'Clean Sweep',
    CHARACTER__Jade__Flawless: 'Flawless',

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
