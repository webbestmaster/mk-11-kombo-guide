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
    +CHARACTER__Jacqui_Briggs__Quick_Jab: string,
    +CHARACTER__Jacqui_Briggs__Leaping_Bow: string,
    +CHARACTER__Jacqui_Briggs__Gut_Buster: string,
    +CHARACTER__Jacqui_Briggs__Straight_Jab: string,
    +CHARACTER__Jacqui_Briggs__Cyber_Hook: string,
    +CHARACTER__Jacqui_Briggs__Spec_Hop: string,
    +CHARACTER__Jacqui_Briggs__Gauntlet_Slam: string,
    +CHARACTER__Jacqui_Briggs__Rising_Gauntlet: string,
    +CHARACTER__Jacqui_Briggs__Side_Kick: string,
    +CHARACTER__Jacqui_Briggs__Toe_Jam: string,
    +CHARACTER__Jacqui_Briggs__Step_Kick: string,
    +CHARACTER__Jacqui_Briggs__Side_Strike: string,
    +CHARACTER__Jacqui_Briggs__Heel_Strike: string,
    +CHARACTER__Jacqui_Briggs__Mix_Up: string,
    +CHARACTER__Jacqui_Briggs__Roundhouse: string,
    +CHARACTER__Jacqui_Briggs__Sliding_Heel: string,
    // Jumping Attacks
    // CHARACTER__Jacqui_Briggs__Quick_Jab: 'Quick Jab',
    +CHARACTER__Jacqui_Briggs__Dirty_Jab: string,
    +CHARACTER__Jacqui_Briggs__Spinning_Heel: string,
    // Quick Jumping Attacks
    +CHARACTER__Jacqui_Briggs__Gauntlet_Punch: string,
    +CHARACTER__Jacqui_Briggs__Brutal_Heel: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Jacqui_Briggs__Cyber_Heel: string,
    +CHARACTER__Jacqui_Briggs__Quick_Reflex: string,
    // Combo Attacks
    +CHARACTER__Jacqui_Briggs__Kranked: string,
    +CHARACTER__Jacqui_Briggs__Ground_Recon: string,
    +CHARACTER__Jacqui_Briggs__United_We_Fall: string,
    +CHARACTER__Jacqui_Briggs__True_Hero: string,
    +CHARACTER__Jacqui_Briggs__Snake_Eater: string,
    +CHARACTER__Jacqui_Briggs__Trained_to_Kill: string,
    +CHARACTER__Jacqui_Briggs__Energy_Overdrive: string,
    +CHARACTER__Jacqui_Briggs__Danger_Zone: string,
    +CHARACTER__Jacqui_Briggs__Hawkeye: string,
    +CHARACTER__Jacqui_Briggs__In_the_Trenches: string,
    +CHARACTER__Jacqui_Briggs__Total_Overload: string,
    +CHARACTER__Jacqui_Briggs__Going_Ballistic: string,
    +CHARACTER__Jacqui_Briggs__All_for_One: string,
    +CHARACTER__Jacqui_Briggs__Justice_for_All: string,
    +CHARACTER__Jacqui_Briggs__Lost_Dog_Tags: string,
    +CHARACTER__Jacqui_Briggs__Fallin_Soldier: string,
    // Special Attacks
    +CHARACTER__Jacqui_Briggs__Shrapnel_Blast: string,
    +CHARACTER__Jacqui_Briggs__Air_Shrapnel_Blast: string,
    +CHARACTER__Jacqui_Briggs__Up_Shrapnel_Blast: string,
    +CHARACTER__Jacqui_Briggs__Bionic_Dash: string,
    +CHARACTER__Jacqui_Briggs__Grease_Kick: string,
    // Ability
    +CHARACTER__Jacqui_Briggs__Prototype_Rocket: string,
    +CHARACTER__Jacqui_Briggs__Grenade_Launcher: string,
    +CHARACTER__Jacqui_Briggs__Hyper_Knee: string,
    +CHARACTER__Jacqui_Briggs__Lethal_Clinch: string,
    +CHARACTER__Jacqui_Briggs__Air_Dive_Bomb: string,
    +CHARACTER__Jacqui_Briggs__Air_Ground_Pound: string,
    +CHARACTER__Jacqui_Briggs__Enhanced_Air_Blast: string,
    +CHARACTER__Jacqui_Briggs__Tech_Dome: string,
    +CHARACTER__Jacqui_Briggs__Cybernetic_Override: string,
    +CHARACTER__Jacqui_Briggs__Bionic_Bounce: string,
    +CHARACTER__Jacqui_Briggs__Robo_Grappler: string,
    // Fatal Blow
    +CHARACTER__Jacqui_Briggs__Wall_of_Justice: string,
    // Brutality
    +CHARACTER__Jacqui_Briggs__Next_Level_Shit: string,
    +CHARACTER__Jacqui_Briggs__Did_It_to_Yourself: string,

    // -> Jax Briggs
    +CHARACTER__Jax_Briggs__NAME: string,
    +CHARACTER__Jax_Briggs__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Jax_Briggs__Quick_Steel: string,
    +CHARACTER__Jax_Briggs__Power_Punch: string,
    +CHARACTER__Jax_Briggs__Knee_Jab: string,
    +CHARACTER__Jax_Briggs__Straight_Punch: string,
    +CHARACTER__Jax_Briggs__Head_Slammer: string,
    +CHARACTER__Jax_Briggs__Hammer_Hook: string,
    +CHARACTER__Jax_Briggs__Upper_Muscle: string,
    +CHARACTER__Jax_Briggs__Boot_Bash: string,
    +CHARACTER__Jax_Briggs__Knee_Shatter: string,
    +CHARACTER__Jax_Briggs__Steel_Toe: string,
    +CHARACTER__Jax_Briggs__Side_Strike: string,
    +CHARACTER__Jax_Briggs__Get_Back: string,
    +CHARACTER__Jax_Briggs__Ankle_Breaker: string,
    +CHARACTER__Jax_Briggs__Fur_Knee: string,
    +CHARACTER__Jax_Briggs__Step_Back: string,
    // Jumping Attacks
    +CHARACTER__Jax_Briggs__Leaping_Fist: string,
    +CHARACTER__Jax_Briggs__Double_Damage: string,
    +CHARACTER__Jax_Briggs__Hit_with_a_Size_12: string,
    // Quick Jumping Attacks
    +CHARACTER__Jax_Briggs__Ground_Smash: string,
    +CHARACTER__Jax_Briggs__S_F_Stomp: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Jax_Briggs__Krushing_Backhand: string,
    +CHARACTER__Jax_Briggs__Ground_Slam: string,
    // Combo Attacks
    +CHARACTER__Jax_Briggs__The_Briggs: string,
    +CHARACTER__Jax_Briggs__Active_Duty: string,
    +CHARACTER__Jax_Briggs__Quick_Drill: string,
    +CHARACTER__Jax_Briggs__Outranked: string,
    +CHARACTER__Jax_Briggs__Get_In_Line: string,
    +CHARACTER__Jax_Briggs__Breakdown: string,
    +CHARACTER__Jax_Briggs__Won_t_Back_Down: string,
    +CHARACTER__Jax_Briggs__Boot_Kamp: string,
    +CHARACTER__Jax_Briggs__Sleep__Bitch: string,
    +CHARACTER__Jax_Briggs__Last_Chance: string,
    +CHARACTER__Jax_Briggs__America_Strong: string,
    +CHARACTER__Jax_Briggs__Get_Outta_Here: string,
    // Special Attacks
    +CHARACTER__Jax_Briggs__Gotcha_Grab: string,
    +CHARACTER__Jax_Briggs__Thumper: string,
    +CHARACTER__Jax_Briggs__Up_Thumper: string,
    +CHARACTER__Jax_Briggs__Heat_Missile: string,
    +CHARACTER__Jax_Briggs__Heating_Up: string,
    +CHARACTER__Jax_Briggs__Ground_Pound: string,
    // Ability
    +CHARACTER__Jax_Briggs__Duck_and_Weave: string,
    +CHARACTER__Jax_Briggs__Quad_Grab: string,
    +CHARACTER__Jax_Briggs__Buckshot: string,
    +CHARACTER__Jax_Briggs__Lethal_Clap: string,
    +CHARACTER__Jax_Briggs__Briggs_Barricade: string,
    +CHARACTER__Jax_Briggs__Ripped: string,
    +CHARACTER__Jax_Briggs__Burning_Hammer: string,
    +CHARACTER__Jax_Briggs__Ground_Shatter: string,
    +CHARACTER__Jax_Briggs__Expert_Grappler: string,
    +CHARACTER__Jax_Briggs__Enhanced_Advanced_Force: string,
    // Fatal Blow
    +CHARACTER__Jax_Briggs__Honorable_Discharge: string,
    // Brutality
    +CHARACTER__Jax_Briggs__Slow_Clap: string,
    +CHARACTER__Jax_Briggs__Awww_Yeah: string,

    // -> Johnny Cage
    +CHARACTER__Johnny_Cage__NAME: string,
    +CHARACTER__Johnny_Cage__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Johnny_Cage__First_Take: string,
    +CHARACTER__Johnny_Cage__Low_Jab: string,
    +CHARACTER__Johnny_Cage__Hollywood_Haymaker: string,
    +CHARACTER__Johnny_Cage__Axe_Kick: string,
    +CHARACTER__Johnny_Cage__Blazin_Backhand: string,
    +CHARACTER__Johnny_Cage__Upper_Cutter: string,
    +CHARACTER__Johnny_Cage__Sudden_Violence: string,
    +CHARACTER__Johnny_Cage__HWAAAAA: string,
    +CHARACTER__Johnny_Cage__Massive_Strike: string,
    +CHARACTER__Johnny_Cage__Low_Boot: string,
    +CHARACTER__Johnny_Cage__Fight_Dirty: string,
    +CHARACTER__Johnny_Cage__Box_Office_Hit: string,
    +CHARACTER__Johnny_Cage__Arcing_Knee: string,
    +CHARACTER__Johnny_Cage__Breaking_Bad: string,
    // Jumping Attacks
    +CHARACTER__Johnny_Cage__Straight_Fame: string,
    +CHARACTER__Johnny_Cage__Hooked: string,
    +CHARACTER__Johnny_Cage__Cool_Flick: string,
    // Quick Jumping Attacks
    +CHARACTER__Johnny_Cage__Something_Punchy: string,
    +CHARACTER__Johnny_Cage__Cool_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Johnny_Cage__Rise_and_Shine: string,
    +CHARACTER__Johnny_Cage__Dizzy_Knee: string,
    // Combo Attacks
    +CHARACTER__Johnny_Cage__Stand_In: string,
    +CHARACTER__Johnny_Cage__Post_Credits: string,
    +CHARACTER__Johnny_Cage__Fix_It_In_Post: string,
    +CHARACTER__Johnny_Cage__Comedy_and_Tragedy: string,
    +CHARACTER__Johnny_Cage__Bad_Scripts: string,
    +CHARACTER__Johnny_Cage__Silent_but_Deadly: string,
    +CHARACTER__Johnny_Cage__The_Gist_of_my_Fist: string,
    +CHARACTER__Johnny_Cage__Almost_Famous: string,
    +CHARACTER__Johnny_Cage__Sell_Out: string,
    +CHARACTER__Johnny_Cage__Cage_Match: string,
    +CHARACTER__Johnny_Cage__Director_s_Cut: string,
    +CHARACTER__Johnny_Cage__Kind_of_a_Big_Deal: string,
    +CHARACTER__Johnny_Cage__No_Autographs: string,
    +CHARACTER__Johnny_Cage__Making_Headlines: string,
    +CHARACTER__Johnny_Cage__Tear_Jerker: string,
    +CHARACTER__Johnny_Cage__Wing_Man: string,
    // Special Attacks
    +CHARACTER__Johnny_Cage__Straight_Forceball: string,
    +CHARACTER__Johnny_Cage__Nut_Punch: string,
    +CHARACTER__Johnny_Cage__Flippy_Kick: string,
    +CHARACTER__Johnny_Cage__Shadow_Kick: string,
    // Ability
    +CHARACTER__Johnny_Cage__Pissed_Off: string,
    +CHARACTER__Johnny_Cage__Mime_Time: string,
    +CHARACTER__Johnny_Cage__Low_Forceball: string,
    +CHARACTER__Johnny_Cage__High_Forceball: string,
    +CHARACTER__Johnny_Cage__Brass_Knuckles: string,
    +CHARACTER__Johnny_Cage__Throwing_Shades: string,
    +CHARACTER__Johnny_Cage__Say_Cheese: string,
    +CHARACTER__Johnny_Cage__Rising_Star: string,
    +CHARACTER__Johnny_Cage__Caged_Rage: string,
    +CHARACTER__Johnny_Cage__Stunt_Double: string,
    // Fatal Blow
    +CHARACTER__Johnny_Cage__The_Award_Goes_To: string,
    // Brutality
    +CHARACTER__Johnny_Cage__The_Klassic: string,
    // CHARACTER__Johnny_Cage__The_Award_Goes_To: 'The Award Goes To',

    // -> Kabal
    +CHARACTER__Kabal__NAME: string,
    +CHARACTER__Kabal__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Kabal__Straight_Jab: string,
    +CHARACTER__Kabal__Hook_Strike: string,
    +CHARACTER__Kabal__Knee_Buckle: string,
    +CHARACTER__Kabal__Hard_Cross: string,
    +CHARACTER__Kabal__Swinging_Hooks: string,
    +CHARACTER__Kabal__Hook_Jab: string,
    +CHARACTER__Kabal__Rising_Fist: string,
    +CHARACTER__Kabal__Straight_Boot: string,
    +CHARACTER__Kabal__Heel_Strike: string,
    +CHARACTER__Kabal__Side_Kick: string,
    +CHARACTER__Kabal__Spin_Kick: string,
    +CHARACTER__Kabal__Sweeping_Hooks: string,
    +CHARACTER__Kabal__Deadly_Knee: string,
    +CHARACTER__Kabal__Hook_Swipe: string,
    // Jumping Attacks
    +CHARACTER__Kabal__Black_Dragon_Bash: string,
    +CHARACTER__Kabal__Blade_Jab: string,
    +CHARACTER__Kabal__Flick_Kick: string,
    // Quick Jumping Attacks
    +CHARACTER__Kabal__Hammering_Hooks: string,
    +CHARACTER__Kabal__Brute_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Kabal__Hook_Spin: string,
    +CHARACTER__Kabal__Hook_Punch: string,
    // Combo Attacks
    +CHARACTER__Kabal__Last_Breath: string,
    +CHARACTER__Kabal__Hooks_And_Blood_Splatter: string,
    +CHARACTER__Kabal__Eviscerated: string,
    +CHARACTER__Kabal__Extermination_Squad: string,
    +CHARACTER__Kabal__Scary_Face: string,
    +CHARACTER__Kabal__Vapor_Trails: string,
    +CHARACTER__Kabal__Sandman: string,
    +CHARACTER__Kabal__Kabal_s_Deep: string,
    +CHARACTER__Kabal__Maimed_and_Mangled: string,
    +CHARACTER__Kabal__Left_for_Dead: string,
    // Special Attacks
    +CHARACTER__Kabal__Buzzsaw: string,
    +CHARACTER__Kabal__Nomad_Dash: string,
    +CHARACTER__Kabal__Hook_Slam: string,
    // Ability
    +CHARACTER__Kabal__Rolling_Buzzsaw: string,
    +CHARACTER__Kabal__Air_Straight_Buzzin: string,
    +CHARACTER__Kabal__Low_Hook_Grab: string,
    +CHARACTER__Kabal__Low_Spinner: string,
    +CHARACTER__Kabal__Hook_Grab: string,
    +CHARACTER__Kabal__Nomad_Spin: string,
    +CHARACTER__Kabal__Air_Slight_Gas: string,
    +CHARACTER__Kabal__Flash_Parry: string,
    +CHARACTER__Kabal__Extended_Hook: string,
    +CHARACTER__Kabal__Gas_Blast: string,
    +CHARACTER__Kabal__Dash_Cancel: string,
    // Fatal Blow
    +CHARACTER__Kabal__Off_the_Hook: string,
    // Brutality
    +CHARACTER__Kabal__The_Klassic: string,
    +CHARACTER__Kabal__Spin_Me_Right_Round: string,
    +CHARACTER__Kabal__Rollin__Through: string,
    +CHARACTER__Kabal__Nowhere_to_Run: string,

    // -> Kano
    +CHARACTER__Kano__NAME: string,
    +CHARACTER__Kano__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Kano__Bloody_Knuckles: string,
    +CHARACTER__Kano__Blade_Evade: string,
    +CHARACTER__Kano__Lunging_Brute: string,
    +CHARACTER__Kano__Knee_Cutter: string,
    +CHARACTER__Kano__Scarred: string,
    +CHARACTER__Kano__Deadly_Graze: string,
    +CHARACTER__Kano__Dirty_Hit: string,
    +CHARACTER__Kano__Black_Dragon_Bash: string,
    +CHARACTER__Kano__High_Boot: string,
    +CHARACTER__Kano__Enzuigiri: string,
    +CHARACTER__Kano__Under_Kick: string,
    +CHARACTER__Kano__Low_Hinge: string,
    +CHARACTER__Kano__Face_Breaker: string,
    +CHARACTER__Kano__Donkey_Kick: string,
    +CHARACTER__Kano__Wheel_Kick: string,
    +CHARACTER__Kano__Devo_Strike: string,
    // Jumping Attacks
    +CHARACTER__Kano__Bladed: string,
    +CHARACTER__Kano__Outback_Bash: string,
    +CHARACTER__Kano__Kangaroo_Kick: string,
    // Quick Jumping Attacks
    +CHARACTER__Kano__G_day_Mate: string,
    +CHARACTER__Kano__Brutal_Heel: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Kano__Cheeky_Swipes: string,
    +CHARACTER__Kano__Quick_Burn: string,
    // Combo Attacks
    +CHARACTER__Kano__Come_a_Gutser: string,
    +CHARACTER__Kano__Blood_Worth_Bottling: string,
    +CHARACTER__Kano__Spewin_: string,
    +CHARACTER__Kano__Fair_Suck_of_the_Sav: string,
    +CHARACTER__Kano__Cut_Snake: string,
    +CHARACTER__Kano__Deadly_Digger: string,
    +CHARACTER__Kano__Blow_Away: string,
    // Special Attacks
    +CHARACTER__Kano__Blade_Saw: string,
    +CHARACTER__Kano__Black_Dragon_Ball: string,
    +CHARACTER__Kano__Air_Black_Dragon_Ball: string,
    // Ability
    +CHARACTER__Kano__Optic_Blast: string,
    +CHARACTER__Kano__Bio_Magnetic_Pull: string,
    +CHARACTER__Kano__Bio_Magnetic_Trap: string,
    +CHARACTER__Kano__Lumbar_Check: string,
    +CHARACTER__Kano__Vege_Mighty: string,
    +CHARACTER__Kano__Snake_Bite: string,
    +CHARACTER__Kano__Rack_Off: string,
    +CHARACTER__Kano__Molotov_Cocktail: string,
    +CHARACTER__Kano__Chemical_Burn: string,
    +CHARACTER__Kano__Manhandled: string,
    // Fatal Blow
    +CHARACTER__Kano__NOT_HERE_TO_F_CK_SPIDERS: string,
    // Brutality
    +CHARACTER__Kano__The_Klassic: string,
    +CHARACTER__Kano__Not_Lookin_Good: string,
    +CHARACTER__Kano__Look_What_I_found: string,

    // -> Kitana
    +CHARACTER__Kitana__NAME: string,
    +CHARACTER__Kitana__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Kitana__Blade_Jab: string,
    +CHARACTER__Kitana__Back_Swipe: string,
    +CHARACTER__Kitana__Low_Poke: string,
    +CHARACTER__Kitana__Neck_Slice: string,
    +CHARACTER__Kitana__Royal_Hand: string,
    +CHARACTER__Kitana__Fan_Out: string,
    +CHARACTER__Kitana__Rising_Power: string,
    +CHARACTER__Kitana__Pretty_Kick: string,
    +CHARACTER__Kitana__Quick_Flick: string,
    +CHARACTER__Kitana__Heel_Poke: string,
    +CHARACTER__Kitana__Spinning_Heel: string,
    +CHARACTER__Kitana__Low_Slice: string,
    +CHARACTER__Kitana__Fan_Stab: string,
    // Jumping Attacks
    +CHARACTER__Kitana__Punishing_Poke: string,
    +CHARACTER__Kitana__Edenian_Strike: string,
    +CHARACTER__Kitana__Bloody_Heel: string,
    // Quick Jumping Attacks
    +CHARACTER__Kitana__Full_Slice: string,
    +CHARACTER__Kitana__Flick_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Kitana__Step_Back: string,
    +CHARACTER__Kitana__Fanning_Out: string,
    // Combo Attacks
    +CHARACTER__Kitana__Learn_Respect: string,
    +CHARACTER__Kitana__Dark_Empress: string,
    +CHARACTER__Kitana__New_Power: string,
    +CHARACTER__Kitana__No_Mercy: string,
    +CHARACTER__Kitana__Purge_the_Weak: string,
    +CHARACTER__Kitana__Dark_Deception: string,
    +CHARACTER__Kitana__Fan_Tastic: string,
    +CHARACTER__Kitana__Edenian_Dance: string,
    +CHARACTER__Kitana__Noble_Assault: string,
    +CHARACTER__Kitana__A_Royal_Welcome: string,
    +CHARACTER__Kitana__Follow_Me: string,
    +CHARACTER__Kitana__Leave_Now: string,
    +CHARACTER__Kitana__Follow_the_Leader: string,
    +CHARACTER__Kitana__Blood_Sacrifice: string,
    +CHARACTER__Kitana__Punishment: string,
    +CHARACTER__Kitana__Eternal_Damnation: string,
    // Special Attacks
    +CHARACTER__Kitana__Fan_Toss: string,
    +CHARACTER__Kitana__Air_Fan_Toss: string,
    +CHARACTER__Kitana__Fan_Lift: string,
    +CHARACTER__Kitana__Quick_Execution: string,
    +CHARACTER__Kitana__Air_Square_Wave: string,
    // Ability
    +CHARACTER__Kitana__Fan_Nado: string,
    +CHARACTER__Kitana__Air_Piercing_Dagger: string,
    +CHARACTER__Kitana__Upward_Fan_Toss: string,
    +CHARACTER__Kitana__Low_Fan_Toss: string,
    +CHARACTER__Kitana__Dancing_Fans: string,
    +CHARACTER__Kitana__Air_Fan_Flutter: string,
    +CHARACTER__Kitana__Retreating_and_Advancing_Fan_Flutter: string,
    +CHARACTER__Kitana__Edenian_Twist: string,
    +CHARACTER__Kitana__Ground_War: string,
    +CHARACTER__Kitana__Half_Blood_Stance: string,
    +CHARACTER__Kitana__Edenian_Fade: string,
    +CHARACTER__Kitana__Royal_Protection: string,
    +CHARACTER__Kitana__Edenian_Razors: string,
    // Fatal Blow
    +CHARACTER__Kitana__DEADLY_GAME: string,
    // Brutality
    +CHARACTER__Kitana__The_Klassic: string,
    +CHARACTER__Kitana__Punished: string,

    // -> Kollector
    +CHARACTER__Kollector__NAME: string,
    +CHARACTER__Kollector__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Kollector__Claw_Swipe: string,
    +CHARACTER__Kollector__Raising_Hell: string,
    +CHARACTER__Kollector__Sickle_Slice: string,
    +CHARACTER__Kollector__Bloody_Nails: string,
    +CHARACTER__Kollector__Lantern_Burst: string,
    +CHARACTER__Kollector__Lantern_Slam: string,
    +CHARACTER__Kollector__Knee_Breaker: string,
    +CHARACTER__Kollector__Rising_Claws: string,
    +CHARACTER__Kollector__Violent_Heel: string,
    +CHARACTER__Kollector__Death_Spin: string,
    +CHARACTER__Kollector__Koruppted_Kick: string,
    +CHARACTER__Kollector__Leg_Check: string,
    +CHARACTER__Kollector__Malice_Mace: string,
    +CHARACTER__Kollector__Tax_Burden: string,
    +CHARACTER__Kollector__Mace_Drop: string,
    +CHARACTER__Kollector__Low_Mace: string,
    // Jumping Attacks
    +CHARACTER__Kollector__Punishing_Strike: string,
    +CHARACTER__Kollector__Kura_Slam: string,
    +CHARACTER__Kollector__Kura_Heel: string,
    // Quick Jumping Attacks
    +CHARACTER__Kollector__Menacing_Fist: string,
    +CHARACTER__Kollector__Debt_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Kollector__Flailing_Mace: string,
    +CHARACTER__Kollector__Rising_Flames: string,
    // Combo Attacks
    +CHARACTER__Kollector__Blood_Money: string,
    +CHARACTER__Kollector__Price_to_Pay: string,
    +CHARACTER__Kollector__The_Enforcer: string,
    +CHARACTER__Kollector__Chaotic_Magic: string,
    +CHARACTER__Kollector__Ill_Gotten_Gains: string,
    +CHARACTER__Kollector__Slice_and_Dice: string,
    +CHARACTER__Kollector__Debt_is_Paid: string,
    +CHARACTER__Kollector__Mine_Mine_Mine: string,
    +CHARACTER__Kollector__Play_for_Souls: string,
    +CHARACTER__Kollector__Pillaged: string,
    +CHARACTER__Kollector__Taxed: string,
    +CHARACTER__Kollector__Lie_and_Cheat: string,
    +CHARACTER__Kollector__Greed: string,
    +CHARACTER__Kollector__Take_It_All: string,
    +CHARACTER__Kollector__Paid_in_Full: string,
    +CHARACTER__Kollector__With_Interest: string,
    +CHARACTER__Kollector__Take_and_Deny: string,
    +CHARACTER__Kollector__No_Collateral: string,
    +CHARACTER__Kollector__Ravages_of_Time: string,
    // Special Attacks
    +CHARACTER__Kollector__Demonic_Mace: string,
    +CHARACTER__Kollector__Shotel_Fury: string,
    +CHARACTER__Kollector__Damned_Bola: string,
    +CHARACTER__Kollector__Relic_Absorb: string,
    // Ability
    +CHARACTER__Kollector__Up_Demonic_Mace: string,
    +CHARACTER__Kollector__Relic_Lure: string,
    +CHARACTER__Kollector__Demonic_Clutch: string,
    +CHARACTER__Kollector__War_Quoit_Toss: string,
    +CHARACTER__Kollector__Bag_Bomb: string,
    +CHARACTER__Kollector__Vial_of_Sorrow: string,
    +CHARACTER__Kollector__Demonic_Comet: string,
    +CHARACTER__Kollector__Fade_Out: string,
    // Fatal Blow
    +CHARACTER__Kollector__A_SLIGHT_DONATION: string,
    // Brutality
    +CHARACTER__Kollector__The_Klassic: string,
    +CHARACTER__Kollector__Should_Have_Paid: string,

    // -> Kotal Kahn
    +CHARACTER__Kotal_Kahn__NAME: string,
    +CHARACTER__Kotal_Kahn__DESCRIPTION: string,
    // Basic Attacks
    +CHARACTER__Kotal_Kahn__Bloody_Knuckles: string,
    +CHARACTER__Kotal_Kahn__Royal_Backhand: string,
    +CHARACTER__Kotal_Kahn__Low_Swipe: string,
    +CHARACTER__Kotal_Kahn__Temple_Punch: string,
    +CHARACTER__Kotal_Kahn__Macuahuitl_Swipe: string,
    +CHARACTER__Kotal_Kahn__Blade_Push: string,
    +CHARACTER__Kotal_Kahn__Rising_Kahn: string,
    +CHARACTER__Kotal_Kahn__Flick_Kick: string,
    +CHARACTER__Kotal_Kahn__Knee_Shatter: string,
    +CHARACTER__Kotal_Kahn__Side_Strike: string,
    +CHARACTER__Kotal_Kahn__Heavy_Blade: string,
    +CHARACTER__Kotal_Kahn__Mace_Sweep: string,
    +CHARACTER__Kotal_Kahn__Brutal_Boot: string,
    +CHARACTER__Kotal_Kahn__Warrior_Spin: string,
    // Jumping Attacks
    +CHARACTER__Kotal_Kahn__Reaching_Fist: string,
    +CHARACTER__Kotal_Kahn__Hammer_Slam: string,
    +CHARACTER__Kotal_Kahn__Straight_Kick: string,
    // Quick Jumping Attacks
    +CHARACTER__Kotal_Kahn__Coatl_Slam: string,
    +CHARACTER__Kotal_Kahn__Kritical_Kick: string,
    // Getup Attacks / Flawless Block Attacks
    +CHARACTER__Kotal_Kahn__Rising_Mehtizquia: string,
    +CHARACTER__Kotal_Kahn__Tonatiuh_Blast: string,
    // Combo Attacks
    +CHARACTER__Kotal_Kahn__Tlamanalo: string,
    +CHARACTER__Kotal_Kahn__Soleil: string,
    +CHARACTER__Kotal_Kahn__Tenchalli_Bash: string,
    +CHARACTER__Kotal_Kahn__Cuazquia: string,
    +CHARACTER__Kotal_Kahn__Metzli: string,
    +CHARACTER__Kotal_Kahn__Impitzoyo: string,
    +CHARACTER__Kotal_Kahn__Coatl_Strikes: string,
    +CHARACTER__Kotal_Kahn__Tlaneltocaz: string,
    +CHARACTER__Kotal_Kahn__Mahuiztiquez: string,
    +CHARACTER__Kotal_Kahn__Tonaltzintli: string,
    +CHARACTER__Kotal_Kahn__Mehtizquia: string,
    +CHARACTER__Kotal_Kahn__Xolotl: string,
    +CHARACTER__Kotal_Kahn__Melahuac: string,
    // Special Attacks
    +CHARACTER__Kotal_Kahn__Coatl_Parry: string,
    +CHARACTER__Kotal_Kahn__Mehtizquia_Cut: string,
    +CHARACTER__Kotal_Kahn__Yeyecame_Disk: string,
    +CHARACTER__Kotal_Kahn__Xolal_Quake: string,
    +CHARACTER__Kotal_Kahn__Tonatiuh_Beam: string,
    // Ability
    +CHARACTER__Kotal_Kahn__Grand_Discus: string,
    +CHARACTER__Kotal_Kahn__Directed_Rays: string,
    +CHARACTER__Kotal_Kahn__Tonatiuh_Burst: string,
    +CHARACTER__Kotal_Kahn__Amocualli_Totem: string,
    +CHARACTER__Kotal_Kahn__Teoyohtica_Totem: string,
    +CHARACTER__Kotal_Kahn__Chicahtoc_Totem: string,
    +CHARACTER__Kotal_Kahn__Eztli_Totem: string,
    +CHARACTER__Kotal_Kahn__Huehhueyi: string,
    +CHARACTER__Kotal_Kahn__God_Ray: string,
    +CHARACTER__Kotal_Kahn__Tecuani_Maul: string,
    +CHARACTER__Kotal_Kahn__Air_Tecuani_Pounce: string,
    +CHARACTER__Kotal_Kahn__Kahn_Cut: string,
    // Fatal Blow
    +CHARACTER__Kotal_Kahn__PINNED_DOWN: string,
    // Brutality
    +CHARACTER__Kotal_Kahn__The_Klassic: string,
    +CHARACTER__Kotal_Kahn__Back_Stabber: string,

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
