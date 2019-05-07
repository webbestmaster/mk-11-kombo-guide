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
    +CHARACTER__Cetrion__Heavens_Wind: string,
    +CHARACTER__Cetrion__Tendril_Slap: string,
    +CHARACTER__Cetrion__Low_Wind: string,
    +CHARACTER__Cetrion__Quick_Combustion: string,
    +CHARACTER__Cetrion__Turning_Wave: string,
    +CHARACTER__Cetrion__Rising_God_Palm: string,
    +CHARACTER__Cetrion__Vapor_Push: string,
    +CHARACTER__Cetrion__Energy_Swipe: string,
    +CHARACTER__Cetrion__Krystal_Kick: string,
    +CHARACTER__Cetrion__Krushing_Heel: string,
    +CHARACTER__Cetrion__Rising_Volcano: string,
    +CHARACTER__Cetrion__Krystal_Heel: string,
    // Jumping Attacks
    +CHARACTER__Cetrion__Quick_Gust: string,
    +CHARACTER__Cetrion__Burning_Palm: string,
    +CHARACTER__Cetrion__Balance_Spin: string,
    // Quick Jumping Attacks
    +CHARACTER__Cetrion__Boulder_Slam: string,
    +CHARACTER__Cetrion__Heel_Spike: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Cetrion__Geo_Strike: string,
    +CHARACTER__Cetrion__World_Ender: string,
    // Combo Attacks
    +CHARACTER__Cetrion__Violent_Gust: string,
    +CHARACTER__Cetrion__Wind_Storm: string,
    +CHARACTER__Cetrion__Imminent_Eruption: string,
    +CHARACTER__Cetrion__Natures_Wrath: string,
    +CHARACTER__Cetrion__Seismic_Energy: string,
    +CHARACTER__Cetrion__Blaze: string,
    +CHARACTER__Cetrion__Fire_Nado: string,
    +CHARACTER__Cetrion__Fire_and_Brimstone: string,
    +CHARACTER__Cetrion__Natural_Ending: string,
    +CHARACTER__Cetrion__Unlimited_Potential: string,
    +CHARACTER__Cetrion__Lifecycle: string,
    // Special Attacks
    +CHARACTER__Cetrion__Natural_Barrier: string,
    +CHARACTER__Cetrion__Far_Natural_Barrier: string,
    +CHARACTER__Cetrion__Hell_s_Wrath: string,
    +CHARACTER__Cetrion__Close_Hell_s_Wrath: string,
    +CHARACTER__Cetrion__Far_Hell_s_Wrath: string,
    +CHARACTER__Cetrion__Air_Hell_s_Wrath: string,
    +CHARACTER__Cetrion__Air_Close_Hell_s_Wrath: string,
    +CHARACTER__Cetrion__Air_Far_Hell_s_Wrath: string,
    +CHARACTER__Cetrion__Tendril_Pull: string,
    // Ability
    +CHARACTER__Cetrion__Earthquake: string,
    +CHARACTER__Cetrion__Air_Bullet_Barrage: string,
    +CHARACTER__Cetrion__Kneecappin: string,
    +CHARACTER__Cetrion__Flippin_Out: string,
    +CHARACTER__Cetrion__Shoulder_Charge: string,
    +CHARACTER__Cetrion__Flying_Glow_Kick: string,
    +CHARACTER__Cetrion__Air_BLB_118_Advance: string,
    +CHARACTER__Cetrion__BLB_118_Bullet_Ricochet: string,
    +CHARACTER__Cetrion__BLB_118_Energy_Bounce: string,
    +CHARACTER__Cetrion__BLB_118_Energy_Burst: string,
    +CHARACTER__Cetrion__BLB_118_Bitchin_Bubble: string,
    // Fatal Blow
    +CHARACTER__Cetrion__Weeping_Willow: string,
    // Brutality
    +CHARACTER__Cetrion__The_Klassic: string,
    +CHARACTER__Cetrion__Splitting_Apart: string,

    // -> D'vorah
    +CHARACTER__D_Vorah__NAME: string,
    +CHARACTER__D_Vorah__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__D_Vorah__Pupa_Poke: string,
    +CHARACTER__D_Vorah__Low_Sting: string,
    +CHARACTER__D_Vorah__Bug_Bash: string,
    +CHARACTER__D_Vorah__Bludgeoned: string,
    +CHARACTER__D_Vorah__Killer_Strike: string,
    +CHARACTER__D_Vorah__Swatted: string,
    +CHARACTER__D_Vorah__Larva_Tarsus: string,
    +CHARACTER__D_Vorah__Ovi_Posi_Poke: string,
    +CHARACTER__D_Vorah__Low_Tarsus_Strike: string,
    +CHARACTER__D_Vorah__Cocoon_Kick: string,
    +CHARACTER__D_Vorah__Spinning_Web: string,
    +CHARACTER__D_Vorah__Brood_Slam: string,
    +CHARACTER__D_Vorah__Slight_Sting: string,
    // Jumping Attacks
    +CHARACTER__D_Vorah__Deadly_Sting: string,
    +CHARACTER__D_Vorah__Poisonous_Touch: string,
    +CHARACTER__D_Vorah__Beetle_Kick: string,
    // Quick Jumping Attacks
    +CHARACTER__D_Vorah__Piercing_Ovipositors: string,
    +CHARACTER__D_Vorah__Hardened_Heel: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__D_Vorah__Swarm_Burst: string,
    +CHARACTER__D_Vorah__Quick_Strike: string,
    // Combo Attacks
    +CHARACTER__D_Vorah__Yellow_Jacket: string,
    +CHARACTER__D_Vorah__Black_Widow: string,
    +CHARACTER__D_Vorah__Bot_Fly: string,
    +CHARACTER__D_Vorah__Assassin_Bug: string,
    +CHARACTER__D_Vorah__Wandering_Spider: string,
    +CHARACTER__D_Vorah__Siafu: string,
    +CHARACTER__D_Vorah__Bugging_Out: string,
    +CHARACTER__D_Vorah__Killer_Bee: string,
    +CHARACTER__D_Vorah__Lonomia: string,
    // Special Attacks
    +CHARACTER__D_Vorah__Fireflies: string,
    +CHARACTER__D_Vorah__Ground_Swarm: string,
    +CHARACTER__D_Vorah__Close_Ground_Swarm: string,
    +CHARACTER__D_Vorah__Far_Ground_Swarm: string,
    +CHARACTER__D_Vorah__Very_Far_Ground_Swarm: string,
    +CHARACTER__D_Vorah__Infested: string,
    +CHARACTER__D_Vorah__Swarm: string,
    +CHARACTER__D_Vorah__Katipo_Rush: string,
    // Ability
    +CHARACTER__D_Vorah__Deadly_Swarm: string,
    +CHARACTER__D_Vorah__Super_Swarm: string,
    +CHARACTER__D_Vorah__Air_Fly_By: string,
    +CHARACTER__D_Vorah__Air_Ticking_Time_Bug: string,
    +CHARACTER__D_Vorah__Widow_s_Kiss: string,
    +CHARACTER__D_Vorah__Bombardier_Beetl: string,
    +CHARACTER__D_Vorah__Strepsiptera: string,
    +CHARACTER__D_Vorah__Flippin_Out: string,
    +CHARACTER__D_Vorah__Parasite: string,
    +CHARACTER__D_Vorah__Mother_Bug: string,
    // Fatal Blow
    // +CHARACTER__D_Vorah__Buggin_Out: string,
    // Brutality
    +CHARACTER__D_Vorah__The_Klassic: string,
    +CHARACTER__D_Vorah__Buggin_Out: string,

    // -> Erron Black
    +CHARACTER__Erron_Black__NAME: string,
    +CHARACTER__Erron_Black__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Erron_Black__Straight_Punch: string,
    +CHARACTER__Erron_Black__Spinning_Revolver: string,
    +CHARACTER__Erron_Black__Dusty_Knuckles: string,
    +CHARACTER__Erron_Black__Bounty_Bash: string,
    +CHARACTER__Erron_Black__Grip_Slam: string,
    +CHARACTER__Erron_Black__Shoulder_Shimmy: string,
    +CHARACTER__Erron_Black__Rising_Outlaw: string,
    +CHARACTER__Erron_Black__Boot_Flick: string,
    +CHARACTER__Erron_Black__Saloon_Strike: string,
    +CHARACTER__Erron_Black__Low_Boot: string,
    +CHARACTER__Erron_Black__Spinning_Spur: string,
    +CHARACTER__Erron_Black__Low_Spur: string,
    +CHARACTER__Erron_Black__Boot_Drop: string,
    +CHARACTER__Erron_Black__Sandy_Sole: string,
    // Jumping Attacks
    +CHARACTER__Erron_Black__Swinging_Pistol: string,
    +CHARACTER__Erron_Black__Hammer_Fist: string,
    +CHARACTER__Erron_Black__Quick_Flick: string,
    // Quick Jumping Attacks
    +CHARACTER__Erron_Black__Tumbleweed: string,
    +CHARACTER__Erron_Black__Drop_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Erron_Black__Quick_Shot: string,
    +CHARACTER__Erron_Black__Pocket_Sand: string,
    // Combo Attacks
    +CHARACTER__Erron_Black__High_Noon: string,
    +CHARACTER__Erron_Black__Into_the_Badlands: string,
    +CHARACTER__Erron_Black__Violent_Ends: string,
    +CHARACTER__Erron_Black__Deal_in_Lead: string,
    +CHARACTER__Erron_Black__On_The_Shoot: string,
    +CHARACTER__Erron_Black__At_The_Dooooor: string,
    +CHARACTER__Erron_Black__Dead_Man_s_Hand: string,
    +CHARACTER__Erron_Black__Keep_em_Honest: string,
    // Special Attacks
    +CHARACTER__Erron_Black__Zaterrean_Spit: string,
    +CHARACTER__Erron_Black__Close_Zaterrean_Spit: string,
    +CHARACTER__Erron_Black__Rattle_Snake_Slide: string,
    +CHARACTER__Erron_Black__Locked_And_Loaded: string,
    // Ability
    +CHARACTER__Erron_Black__Enhanced_Locked_and_Loaded: string,
    +CHARACTER__Erron_Black__Outworld_Gunslinger: string,
    +CHARACTER__Erron_Black__Acid_Pour: string,
    +CHARACTER__Erron_Black__Cattle_Toss: string,
    +CHARACTER__Erron_Black__Up_Peacemaker: string,
    +CHARACTER__Erron_Black__Down_Peacemaker: string,
    +CHARACTER__Erron_Black__Scud_Shot: string,
    +CHARACTER__Erron_Black__TNT_Toss: string,
    +CHARACTER__Erron_Black__Netherbeast_Trap: string,
    +CHARACTER__Erron_Black__Enhanced_Rattle_Snake_Slide: string,
    // Fatal Blow
    +CHARACTER__Erron_Black__Ghost_Koins: string,
    // Brutality
    +CHARACTER__Erron_Black__The_Klassic: string,
    +CHARACTER__Erron_Black__Is_Something_Burning: string,

    // -> Frost
    +CHARACTER__Frost__NAME: string,
    +CHARACTER__Frost__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Frost__Cold_Punch: string,
    +CHARACTER__Frost__Headbutt: string,
    +CHARACTER__Frost__Frigid_Palm: string,
    +CHARACTER__Frost__Arctic_Strike: string,
    +CHARACTER__Frost__Icy_Maul: string,
    +CHARACTER__Frost__Blade_Lunge: string,
    +CHARACTER__Frost__Frosted_Uppercut: string,
    +CHARACTER__Frost__Hinged_Kick: string,
    +CHARACTER__Frost__Strong_Step: string,
    +CHARACTER__Frost__Chest_Cold: string,
    +CHARACTER__Frost__Chin_Breaker: string,
    +CHARACTER__Frost__Polar_Pound: string,
    +CHARACTER__Frost__Serrated: string,
    // Jumping Attacks
    +CHARACTER__Frost__Frosty_Burst: string,
    +CHARACTER__Frost__Auger_Spin: string,
    +CHARACTER__Frost__Chill_Toe: string,
    // Quick Jumping Attacks
    +CHARACTER__Frost__Auger_Slam: string,
    +CHARACTER__Frost__Nano_Strike: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Frost__Core_Burst: string,
    +CHARACTER__Frost__Ice_Spike: string,
    // Combo Attacks
    +CHARACTER__Frost__Seeking_Control: string,
    +CHARACTER__Frost__Blood_Sweat_and_Circuits: string,
    +CHARACTER__Frost__Frozen_in_Time: string,
    +CHARACTER__Frost__Freezer_Burn: string,
    +CHARACTER__Frost__Blizzard: string,
    +CHARACTER__Frost__Power_Hunger_Kunoichi: string,
    +CHARACTER__Frost__No_Humility: string,
    +CHARACTER__Frost__One_True_Warrioress: string,
    +CHARACTER__Frost__Winter_Winds: string,
    +CHARACTER__Frost__Out_Cold: string,
    +CHARACTER__Frost__Icy_Tomb: string,
    +CHARACTER__Frost__Freezing_Point: string,
    +CHARACTER__Frost__Avalanche: string,
    +CHARACTER__Frost__Reborn: string,
    +CHARACTER__Frost__Ice_Olated: string,
    // Special Attacks
    +CHARACTER__Frost__Blade_Spin: string,
    +CHARACTER__Frost__Kryo_Stance: string,
    +CHARACTER__Frost__Cyber_Head: string,
    // Ability
    +CHARACTER__Frost__Ice_Auger: string,
    +CHARACTER__Frost__Burrowing_Auger: string,
    +CHARACTER__Frost__Cryogenic_Crown: string,
    +CHARACTER__Frost__Core_Trap: string,
    +CHARACTER__Frost__Core_Overload: string,
    +CHARACTER__Frost__Auger_Lunge: string,
    +CHARACTER__Frost__Arctic_Barrage: string,
    +CHARACTER__Frost__Air_Icequake: string,
    +CHARACTER__Frost__Glacier_Calving: string,
    +CHARACTER__Frost__Microburst: string,
    // Fatal Blow
    +CHARACTER__Frost__Terminal_Burrowing: string,
    // Brutality
    +CHARACTER__Frost__The_Klassic: string,
    +CHARACTER__Frost__Bleeding_Out: string,

    // -> Geras
    +CHARACTER__Geras__NAME: string,
    +CHARACTER__Geras__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Geras__Straight_Jab: string,
    +CHARACTER__Geras__Shoulder_Charg: string,
    +CHARACTER__Geras__Knee_Bash: string,
    +CHARACTER__Geras__Heavy_Fist: string,
    +CHARACTER__Geras__Sledge_Hammer: string,
    +CHARACTER__Geras__Body_Buster: string,
    +CHARACTER__Geras__Rising_Gauntlet: string,
    +CHARACTER__Geras__Straight_Boot: string,
    +CHARACTER__Geras__Strong_Step: string,
    +CHARACTER__Geras__Gauntlet_Slam: string,
    +CHARACTER__Geras__Chrono_Kick: string,
    +CHARACTER__Geras__Time_Sweeper: string,
    +CHARACTER__Geras__Pounding_Sand: string,
    // Jumping Attacks
    +CHARACTER__Geras__Quick_Jab: string,
    +CHARACTER__Geras__Elbow_Drop: string,
    +CHARACTER__Geras__Time_Splash: string,
    +CHARACTER__Geras__Titan_Toe: string,
    // Quick Jumping Attacks
    +CHARACTER__Geras__Timequake: string,
    +CHARACTER__Geras__Heavy_Knee: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Geras__Titan_Charge: string,
    +CHARACTER__Geras__Sand_Storm: string,
    // Combo Attacks
    +CHARACTER__Geras__Without_Beginning: string,
    +CHARACTER__Geras__Without_End: string,
    +CHARACTER__Geras__Out_of_Time: string,
    +CHARACTER__Geras__External_Hate: string,
    +CHARACTER__Geras__Xuid_n_Guid: string,
    +CHARACTER__Geras__Time_Immemorial: string,
    +CHARACTER__Geras__The_Undying: string,
    +CHARACTER__Geras__Timeless: string,
    +CHARACTER__Geras__The_Deathless_Giant: string,
    +CHARACTER__Geras__Matter_of_Time: string,
    +CHARACTER__Geras__Sand_Blaster: string,
    +CHARACTER__Geras__Dangerous_Chronology: string,
    +CHARACTER__Geras__Ripple_in_Time: string,
    // Special Attacks
    +CHARACTER__Geras__Temporal_Advantage: string,
    +CHARACTER__Geras__Sand_Trap: string,
    +CHARACTER__Geras__Close_Sand_Trap: string,
    +CHARACTER__Geras__Far_Sand_Trap: string,
    +CHARACTER__Geras__Very_Far_Sand_Trap: string,
    +CHARACTER__Geras__Titan_Tackle: string,
    +CHARACTER__Geras__Big_Fist: string,
    // Ability
    +CHARACTER__Geras__Quick_Sand: string,
    +CHARACTER__Geras__Gauntlet_of_the_Ages: string,
    +CHARACTER__Geras__Bed_of_Spikes: string,
    +CHARACTER__Geras__Shifting_Sands: string,
    +CHARACTER__Geras__Lost_Time_n_Spare_Time: string,
    +CHARACTER__Geras__Sand_Simulacrum: string,
    +CHARACTER__Geras__Reawakened: string,
    +CHARACTER__Geras__Reverse_Time: string,
    +CHARACTER__Geras__Stepping_it_Back: string,
    +CHARACTER__Geras__Sand_Pillar: string,
    // Fatal Blow
    +CHARACTER__Geras__Stasis_Assault: string,
    // Brutality
    +CHARACTER__Geras__Pulled_Apart: string,
    +CHARACTER__Geras__Sinking_Feeling: string,

    // -> Jade
    +CHARACTER__Jade__NAME: string,
    +CHARACTER__Jade__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Jade__Quick_Slap: string,
    +CHARACTER__Jade__Pole_Strike: string,
    +CHARACTER__Jade__Straight_Palm: string,
    +CHARACTER__Jade__Palm_Bash: string,
    +CHARACTER__Jade__Wiggle_Stick: string,
    +CHARACTER__Jade__Pole_Slam: string,
    +CHARACTER__Jade__Rising_Staff: string,
    +CHARACTER__Jade__Straight_Kick: string,
    +CHARACTER__Jade__Side_Kick: string,
    +CHARACTER__Jade__Knee_Breaker: string,
    +CHARACTER__Jade__Side_Heel: string,
    +CHARACTER__Jade__Stiletto_Strike: string,
    +CHARACTER__Jade__Takedown: string,
    +CHARACTER__Jade__Edenian_Dance: string,
    +CHARACTER__Jade__Pierced: string,
    // Jumping Attacks
    +CHARACTER__Jade__Edenian_Palm: string,
    +CHARACTER__Jade__Pole_Bash: string,
    +CHARACTER__Jade__Warrior_s_Heel: string,
    // Quick Jumping Attacks
    +CHARACTER__Jade__Staff_Slam: string,
    +CHARACTER__Jade__Edenian_Drill: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Jade__Glaiver_Saver: string,
    +CHARACTER__Jade__Heavens_Heel: string,
    // Combo Attacks
    +CHARACTER__Jade__Simple_Seduction: string,
    +CHARACTER__Jade__Baited: string,
    +CHARACTER__Jade__Teaser: string,
    +CHARACTER__Jade__Edenian_Warrior: string,
    +CHARACTER__Jade__Tiny_Dancer: string,
    +CHARACTER__Jade__Poll_Dance: string,
    +CHARACTER__Jade__Enchanted: string,
    +CHARACTER__Jade__Fatal_Attraction: string,
    +CHARACTER__Jade__Royal_Guard: string,
    +CHARACTER__Jade__Edenian_Rush: string,
    +CHARACTER__Jade__Killer_Charisma: string,
    +CHARACTER__Jade__My_Pleasure: string,
    // Special Attacks
    +CHARACTER__Jade__Razor_Rang: string,
    +CHARACTER__Jade__Dodging_Shadows: string,
    +CHARACTER__Jade__Temptation: string,
    +CHARACTER__Jade__Dead_Butterfly: string,
    +CHARACTER__Jade__Blazing_Nitro_Kick: string,
    // Ability
    +CHARACTER__Jade__Air_Razor_Rang: string,
    +CHARACTER__Jade__Upward_Razor_Rang: string,
    +CHARACTER__Jade__Delia_s_Dance: string,
    +CHARACTER__Jade__Divine_Forces: string,
    +CHARACTER__Jade__Pole_Vault: string,
    +CHARACTER__Jade__Pole_Vault_Cancel: string,
    +CHARACTER__Jade__Edenian_Spark: string,
    +CHARACTER__Jade__Amplify_Blazing_Nitro_Kick: string,
    +CHARACTER__Jade__Vanishing_Winds: string,
    +CHARACTER__Jade__Deadly_Assassin: string,
    // Fatal Blow
    +CHARACTER__Jade__Edenian_Knight: string,
    // Brutality
    +CHARACTER__Jade__Clean_Sweep: string,
    +CHARACTER__Jade__Flawless: string,

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
