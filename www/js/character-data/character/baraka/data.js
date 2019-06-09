// @flow

/* eslint-disable sonarjs/no-duplicate-string, max-len */

// WARNING: generated file!

import faceImagePath from './face.png';

export const baraka = {
    id: 'baraka',
    imagePath: faceImagePath,
    name: 'Baraka',
    move: {
        basicList: [
            {
                name: 'Spiked Cross',
                sequence: ['1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 2, blockDamage: 0.3, flawlessBlockDamage: 0.0003, type: 'high'},
                frameData: {
                    startUp: 7,
                    active: 2,
                    recover: 18,
                    cancel: 14,
                    hitAdvance: 16,
                    blockAdvance: -3,
                    flawlessBlockAdvance: -3,
                },
            },
            {
                name: 'Low Stab',
                sequence: ['d', '+', '1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 2, blockDamage: 0.3, flawlessBlockDamage: 0.0003, type: 'mid'},
                frameData: {
                    startUp: 7,
                    active: 2,
                    recover: 13,
                    cancel: 11,
                    hitAdvance: 10,
                    blockAdvance: -3,
                    flawlessBlockAdvance: -3,
                },
            },
            {
                name: 'Low Stab',
                sequence: ['df', '+', '1'],
                description: [],
                deepLevel: 0,
                variation: 'Marauder',
                propertyList: [],
                moveData: {hitDamage: 2, blockDamage: 0.3, flawlessBlockDamage: 0.0003, type: 'mid'},
                frameData: {
                    startUp: 8,
                    active: 2,
                    recover: 13,
                    cancel: 12,
                    hitAdvance: 17,
                    blockAdvance: -3,
                    flawlessBlockAdvance: -3,
                },
            },
            {
                name: 'Warrior Strike',
                sequence: ['2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'high'},
                frameData: {
                    startUp: 10,
                    active: 2,
                    recover: 24,
                    cancel: 16,
                    hitAdvance: 6,
                    blockAdvance: -9,
                    flawlessBlockAdvance: -9,
                },
            },
            {
                name: 'Lunging Blades',
                sequence: ['b', '+', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'overhead'},
                frameData: {
                    startUp: 28,
                    active: 3,
                    recover: 29,
                    cancel: 0,
                    hitAdvance: 38,
                    blockAdvance: -5,
                    flawlessBlockAdvance: -10,
                },
            },
            {
                name: 'Blade Swipe',
                sequence: ['f', '+', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'high'},
                frameData: {
                    startUp: 8,
                    active: 2,
                    recover: 34,
                    cancel: 13,
                    hitAdvance: 11,
                    blockAdvance: -9,
                    flawlessBlockAdvance: -9,
                },
            },
            {
                name: 'Rising Blades',
                sequence: ['d', '+', '2'],
                description: ['KRUSHING BLOW:', 'Triggers if this ATTACK KOUNTERS or PUNISHES a HIGH ATTACK'],
                deepLevel: 0,
                variation: null,
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 14, blockDamage: 2.1, flawlessBlockDamage: 0.0021, type: 'high'},
                frameData: {
                    startUp: 10,
                    active: 3,
                    recover: 41,
                    cancel: 0,
                    hitAdvance: 30,
                    blockAdvance: -7,
                    flawlessBlockAdvance: -17,
                },
            },
            {
                name: 'Hinge Kick',
                sequence: ['3'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'high'},
                frameData: {
                    startUp: 10,
                    active: 2,
                    recover: 32,
                    cancel: 17,
                    hitAdvance: 10,
                    blockAdvance: -7,
                    flawlessBlockAdvance: -7,
                },
            },
            {
                name: 'Foot Stomp',
                sequence: ['b', '+', '3'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'low'},
                frameData: {
                    startUp: 14,
                    active: 2,
                    recover: 22,
                    cancel: 18,
                    hitAdvance: 14,
                    blockAdvance: -7,
                    flawlessBlockAdvance: -7,
                },
            },
            {
                name: 'Low Poke',
                sequence: ['d', '+', '3'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 1, blockDamage: 0.15, flawlessBlockDamage: 0.0002, type: 'low'},
                frameData: {
                    startUp: 7,
                    active: 3,
                    recover: 13,
                    cancel: 13,
                    hitAdvance: 14,
                    blockAdvance: -4,
                    flawlessBlockAdvance: -4,
                },
            },
            {
                name: 'Low Shank',
                sequence: ['df', '+', '3'],
                description: [],
                deepLevel: 0,
                variation: 'Marauder',
                propertyList: [],
                moveData: {hitDamage: 1, blockDamage: 0.15, flawlessBlockDamage: 0.0002, type: 'low'},
                frameData: {
                    startUp: 8,
                    active: 2,
                    recover: 14,
                    cancel: 15,
                    hitAdvance: 11,
                    blockAdvance: -4,
                    flawlessBlockAdvance: -4,
                },
            },
            {
                name: 'Big Leg',
                sequence: ['4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'high'},
                frameData: {
                    startUp: 10,
                    active: 2,
                    recover: 21,
                    cancel: 11,
                    hitAdvance: 15,
                    blockAdvance: 4,
                    flawlessBlockAdvance: 4,
                },
            },
            {
                name: 'Leg Chop',
                sequence: ['b', '+', '4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'low'},
                frameData: {
                    startUp: 14,
                    active: 2,
                    recover: 22,
                    cancel: 0,
                    hitAdvance: 27,
                    blockAdvance: -2,
                    flawlessBlockAdvance: -7,
                },
            },
            {
                name: 'Knee Lunge',
                sequence: ['f', '+', '4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'mid'},
                frameData: {
                    startUp: 12,
                    active: 5,
                    recover: 24,
                    cancel: 18,
                    hitAdvance: 3,
                    blockAdvance: -2,
                    flawlessBlockAdvance: -2,
                },
            },
            {
                name: 'Side Kick',
                sequence: ['d', '+', '4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'low'},
                frameData: {
                    startUp: 15,
                    active: 2,
                    recover: 14,
                    cancel: 17,
                    hitAdvance: 25,
                    blockAdvance: 1,
                    flawlessBlockAdvance: 1,
                },
            },
        ],
        jumpingAttackList: [
            {
                name: 'Hungry Jab',
                sequence: ['1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'mid'},
                frameData: {
                    startUp: 8,
                    active: 6,
                    recover: 31,
                    cancel: 0,
                    hitAdvance: -1,
                    blockAdvance: -13,
                    flawlessBlockAdvance: -13,
                },
            },
            {
                name: 'Sinister Shank',
                sequence: ['d', '+', '1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'mid'},
                frameData: {
                    startUp: 8,
                    active: 6,
                    recover: 16,
                    cancel: 0,
                    hitAdvance: 7,
                    blockAdvance: -5,
                    flawlessBlockAdvance: -5,
                },
            },
            {
                name: 'Sinister Slice',
                sequence: ['2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'mid'},
                frameData: {
                    startUp: 7,
                    active: 2,
                    recover: 31,
                    cancel: 0,
                    hitAdvance: 9,
                    blockAdvance: -3,
                    flawlessBlockAdvance: -8,
                },
            },
            {
                name: 'Dropkick',
                sequence: ['3', 'or', '4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 9, blockDamage: 1.35, flawlessBlockDamage: 0.0014, type: 'mid'},
                frameData: {
                    startUp: 8,
                    active: 7,
                    recover: 31,
                    cancel: 0,
                    hitAdvance: 27,
                    blockAdvance: -8,
                    flawlessBlockAdvance: -13,
                },
            },
        ],
        hopAttackList: [
            {
                name: 'Bladed Doom',
                sequence: ['u', ',', '1', 'or', 'u', ',', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 9, blockDamage: 1.35, flawlessBlockDamage: 0.0014, type: 'overhead'},
                frameData: {
                    startUp: 9,
                    active: 5,
                    recover: 29,
                    cancel: 0,
                    hitAdvance: 38,
                    blockAdvance: -12,
                    flawlessBlockAdvance: -17,
                },
            },
            {
                name: 'Karbrac Kick',
                sequence: ['u', ',', '3', 'or', 'u', ',', '4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 9, blockDamage: 1.35, flawlessBlockDamage: 0.0014, type: 'overhead'},
                frameData: {
                    startUp: 10,
                    active: 4,
                    recover: 30,
                    cancel: 0,
                    hitAdvance: 38,
                    blockAdvance: -12,
                    flawlessBlockAdvance: -17,
                },
            },
        ],
        getUpAttackList: [
            {
                name: 'Fatal Strike',
                sequence: ['u', '+', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'mid'},
                frameData: {
                    startUp: 11,
                    active: 3,
                    recover: 26,
                    cancel: 0,
                    hitAdvance: 50,
                    blockAdvance: -12,
                    flawlessBlockAdvance: -12,
                },
            },
            {
                name: 'Karbrac Stab',
                sequence: ['u', '+', '3'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: ['invulnerable'],
                moveData: {hitDamage: 9, blockDamage: 1.35, flawlessBlockDamage: 0.0014, type: 'mid'},
                frameData: {
                    startUp: 11,
                    active: 3,
                    recover: 22,
                    cancel: 0,
                    hitAdvance: 14,
                    blockAdvance: -3,
                    flawlessBlockAdvance: -8,
                },
            },
        ],
        flawlessBlockAttacksList: [
            {
                name: 'Fatal Strike',
                sequence: ['u', '+', '2'],
                description: [
                    'Can only be performed after connecting a FLAWLESS BLOCK',
                    'Costs 1 bar of Defensive Meter and Offensive Meter',
                ],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'mid'},
                frameData: {
                    startUp: 11,
                    active: 3,
                    recover: 26,
                    cancel: 0,
                    hitAdvance: 50,
                    blockAdvance: -12,
                    flawlessBlockAdvance: -12,
                },
            },
            {
                name: 'Karbrac Stab',
                sequence: ['u', '+', '3'],
                description: [
                    'Can only be performed after connecting a FLAWLESS BLOCK',
                    'Costs 1 bar of Defensive Meter and Offensive Meter',
                ],
                deepLevel: 0,
                variation: null,
                propertyList: ['invulnerable'],
                moveData: {hitDamage: 9, blockDamage: 1.35, flawlessBlockDamage: 0.0014, type: 'mid'},
                frameData: {
                    startUp: 11,
                    active: 3,
                    recover: 22,
                    cancel: 0,
                    hitAdvance: 14,
                    blockAdvance: -3,
                    flawlessBlockAdvance: -8,
                },
            },
        ],
        throwsList: [
            {
                name: 'Toward Throw',
                sequence: ['l1', '+', 'f', 'or', 'f', '+', '1', '+', '3'],
                description: ['KRUSHING BLOW:', 'Triggers if opponent failed THROW ESCAPE during the previous THROW'],
                deepLevel: 0,
                variation: null,
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 14, blockDamage: 0, flawlessBlockDamage: 0, type: 'throw'},
                frameData: {
                    startUp: 10,
                    active: 2,
                    recover: 34,
                    cancel: 0,
                    hitAdvance: 18,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Back Throw',
                sequence: ['l1', 'or', '1', '+', '3'],
                description: ['KRUSHING BLOW:', 'Triggers if opponent failed THROW ESCAPE during the previous THROW'],
                deepLevel: 0,
                variation: null,
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 14, blockDamage: 0, flawlessBlockDamage: 0, type: 'throw'},
                frameData: {
                    startUp: 10,
                    active: 2,
                    recover: 34,
                    cancel: 0,
                    hitAdvance: 18,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
        ],
        rollEscapeList: [
            {
                name: 'Forward Roll Escape',
                sequence: ['f', '+', 'l2'],
                description: ['Uses 1 bar of Defensive Meter to perform Forward Roll Escape'],
                deepLevel: 0,
                variation: null,
                propertyList: ['invulnerable'],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 2,
                    active: 0,
                    recover: 5,
                    cancel: 30,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Away Roll Escape',
                sequence: ['b', '+', 'l2'],
                description: ['Uses 1 bar of Defensive Meter to perform Away Roll Escape'],
                deepLevel: 0,
                variation: null,
                propertyList: ['invulnerable'],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 2,
                    active: 0,
                    recover: 5,
                    cancel: 30,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
        ],
        airEscapeList: [
            {
                name: '(Air) Breakaway',
                sequence: ['d', '+', 'r2'],
                description: ['Uses 2 bars of Defensive Meter to perform (Air) Breakaway'],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
        ],
        comboList: [
            {
                name: 'Easy Kill',
                sequence: ['1', ',', '1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'mid'},
                frameData: {
                    startUp: 9,
                    active: 2,
                    recover: 21,
                    cancel: 15,
                    hitAdvance: 6,
                    blockAdvance: -2,
                    flawlessBlockAdvance: -2,
                },
            },
            {
                name: 'Mangled',
                sequence: ['1', ',', '1', ',', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 5, blockDamage: 0.75, flawlessBlockDamage: 0.0008, type: 'mid'},
                frameData: {
                    startUp: 17,
                    active: 2,
                    recover: 34,
                    cancel: 19,
                    hitAdvance: 2,
                    blockAdvance: 1,
                    flawlessBlockAdvance: 1,
                },
            },
            {
                name: 'Bloodthirsty',
                sequence: ['1', ',', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'mid'},
                frameData: {
                    startUp: 15,
                    active: 3,
                    recover: 26,
                    cancel: 18,
                    hitAdvance: 10,
                    blockAdvance: -7,
                    flawlessBlockAdvance: -7,
                },
            },
            {
                name: 'Outworld Bash',
                sequence: ['1', ',', '2', ',', '2'],
                description: ['KRUSHING BLOW:', 'Triggers if this KOMBO ATTACK is a PUNISH'],
                deepLevel: 0,
                variation: null,
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'overhead'},
                frameData: {
                    startUp: 23,
                    active: 2,
                    recover: 29,
                    cancel: 0,
                    hitAdvance: 20,
                    blockAdvance: -4,
                    flawlessBlockAdvance: -4,
                },
            },
            {
                name: 'Splintered',
                sequence: ['2', ',', '1', '+', '3'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'mid'},
                frameData: {
                    startUp: 18,
                    active: 2,
                    recover: 24,
                    cancel: 0,
                    hitAdvance: 49,
                    blockAdvance: 1,
                    flawlessBlockAdvance: 1,
                },
            },
            {
                name: 'Painful Swipes',
                sequence: ['f', '+', '2', ',', '1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'mid'},
                frameData: {
                    startUp: 8,
                    active: 3,
                    recover: 27,
                    cancel: 15,
                    hitAdvance: 5,
                    blockAdvance: -8,
                    flawlessBlockAdvance: -8,
                },
            },
            {
                name: 'Bloody Mess',
                sequence: ['f', '+', '2', ',', '1', ',', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'mid'},
                frameData: {
                    startUp: 21,
                    active: 1,
                    recover: 25,
                    cancel: 0,
                    hitAdvance: 46,
                    blockAdvance: 1,
                    flawlessBlockAdvance: -4,
                },
            },
            {
                name: 'Tarkatan Rush',
                sequence: ['b', '+', '3', ',', '1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 3, blockDamage: 0.45, flawlessBlockDamage: 0.0005, type: 'mid'},
                frameData: {
                    startUp: 14,
                    active: 2,
                    recover: 29,
                    cancel: 17,
                    hitAdvance: 8,
                    blockAdvance: -4,
                    flawlessBlockAdvance: -4,
                },
            },
            {
                name: 'Cutting Loose',
                sequence: ['b', '+', '3', ',', '1', ',', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'overhead'},
                frameData: {
                    startUp: 20,
                    active: 2,
                    recover: 31,
                    cancel: 0,
                    hitAdvance: 37,
                    blockAdvance: -6,
                    flawlessBlockAdvance: -6,
                },
            },
            {
                name: 'Doom Kicks',
                sequence: ['f', '+', '4', ',', '4'],
                description: ['KRUSHING BLOW:', 'Triggers if this KOMBAT ATTACK is a COUNTER or PUNISH'],
                deepLevel: 0,
                variation: null,
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 7, blockDamage: 1.05, flawlessBlockDamage: 0.0011, type: 'mid'},
                frameData: {
                    startUp: 6,
                    active: 3,
                    recover: 33,
                    cancel: 0,
                    hitAdvance: 18,
                    blockAdvance: -7,
                    flawlessBlockAdvance: -7,
                },
            },
        ],
        specialList: [
            {
                name: 'Blade Spark',
                sequence: ['d', 'b', '1'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: ['projectile'],
                moveData: {hitDamage: 7, blockDamage: 1.88, flawlessBlockDamage: 0.0019, type: 'high'},
                frameData: {
                    startUp: 16,
                    active: 0,
                    recover: 0,
                    cancel: 26,
                    hitAdvance: 4,
                    blockAdvance: -18,
                    flawlessBlockAdvance: -18,
                },
            },
            {
                name: 'Amplify',
                sequence: ['r1'],
                description: [],
                deepLevel: 1,
                variation: null,
                propertyList: ['projectile'],
                moveData: {hitDamage: 7, blockDamage: 1.88, flawlessBlockDamage: 0.0019, type: 'mid'},
                frameData: {
                    startUp: 14,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 8,
                    blockAdvance: -15,
                    flawlessBlockAdvance: -15,
                },
            },
            {
                name: 'Blood Lunge',
                sequence: ['b', 'f', '2'],
                description: ['KRUSHING BLOW:', 'Triggers if the opponent is hit during GETUP ROLL'],
                deepLevel: 0,
                variation: 'Bone Picker',
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 12, blockDamage: 0, flawlessBlockDamage: 0.0014, type: 'throw'},
                frameData: {
                    startUp: 17,
                    active: 2,
                    recover: 32,
                    cancel: 0,
                    hitAdvance: 18,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Chop Chop',
                sequence: ['d', 'b', '3'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 20.81, blockDamage: 10.83, flawlessBlockDamage: 0.0025, type: 'mid'},
                frameData: {
                    startUp: 13,
                    active: 78,
                    recover: 31,
                    cancel: 0,
                    hitAdvance: 9,
                    blockAdvance: -17,
                    flawlessBlockAdvance: -17,
                },
            },
            {
                name: 'Extend',
                sequence: ['rapidly', '3'],
                description: [],
                deepLevel: 1,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Amplify',
                sequence: ['r1'],
                description: [],
                deepLevel: 1,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Further Amplify',
                sequence: ['r1'],
                description: [],
                deepLevel: 1,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Spine Burst',
                sequence: ['d', 'b', '3'],
                description: [],
                deepLevel: 0,
                variation: 'Bone Picker',
                propertyList: [],
                moveData: {hitDamage: 9, blockDamage: 2.13, flawlessBlockDamage: 0.0021, type: 'high'},
                frameData: {
                    startUp: 9,
                    active: 16,
                    recover: 18,
                    cancel: 0,
                    hitAdvance: 34,
                    blockAdvance: -7,
                    flawlessBlockAdvance: -7,
                },
            },
            {
                name: 'Gutted',
                sequence: ['b', 'f', '4'],
                description: ['KRUSHING BLOW:', 'Triggers in a KOMBO of 9 or more'],
                deepLevel: 0,
                variation: 'Marauder',
                propertyList: [],
                moveData: {hitDamage: 12, blockDamage: 1.37, flawlessBlockDamage: 0.0014, type: 'mid'},
                frameData: {
                    startUp: 14,
                    active: 2,
                    recover: 27,
                    cancel: 86,
                    hitAdvance: 43,
                    blockAdvance: -18,
                    flawlessBlockAdvance: -18,
                },
            },
            {
                name: 'Amplify',
                sequence: ['r1'],
                description: [],
                deepLevel: 1,
                variation: 'Marauder',
                propertyList: ['krushing blow'],
                moveData: {hitDamage: 5.42, blockDamage: 0, flawlessBlockDamage: 0.0542, type: 'N/A Move'},
                frameData: {
                    startUp: 1,
                    active: 0,
                    recover: 52,
                    cancel: 0,
                    hitAdvance: 66,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'War Banner',
                sequence: ['d', 'b', '4'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: ['buff - damage'],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 1,
                    active: 0,
                    recover: 60,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
        ],
        fatalBlowList: [
            {
                name: 'SKEWERD',
                sequence: ['l2', '+', 'r2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: ['armor - 1 hit', 'buff - damage'],
                moveData: {hitDamage: 31, blockDamage: 1.5, flawlessBlockDamage: 0.0015, type: 'mid'},
                frameData: {
                    startUp: 13,
                    active: 4,
                    recover: 42,
                    cancel: 0,
                    hitAdvance: 18,
                    blockAdvance: -24,
                    flawlessBlockAdvance: -29,
                },
            },
        ],
        fatalityList: [
            {
                name: 'Food For Thought (Close)',
                sequence: ['b', 'd', 'b', '2'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Rock, Paper, Baraka (Close)',
                sequence: ['b', 'f', '2', 'b'],
                description: [],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
        ],
        brutalityList: [
            {
                name: 'The Klassic',
                sequence: ['d', '+', '2'],
                description: [
                    'DO NOT BLOCK An Attack During The Final Round',
                    'Must Hold 2',
                    'Final hit must come from an uppercut D+2',
                ],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
            {
                name: 'Nom Nom',
                sequence: ['f', '+', 'l1'],
                description: ['Press D,D,D, During Toward Throw', 'Final Hit Must Come From Toward Throw'],
                deepLevel: 0,
                variation: null,
                propertyList: [],
                moveData: {hitDamage: 0, blockDamage: 0, flawlessBlockDamage: 0, type: 'N/A Move'},
                frameData: {
                    startUp: 0,
                    active: 0,
                    recover: 0,
                    cancel: 0,
                    hitAdvance: 0,
                    blockAdvance: 0,
                    flawlessBlockAdvance: 0,
                },
            },
        ],
    },
};
