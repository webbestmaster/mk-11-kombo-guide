// @flow

import type {FrameDataType, MayBeNaType, MoveDataType, MoveType} from './character-type';

/**
 * Make move data
 *
 * @param {number} hitDamage - hit damage
 * @param {number} blockDamage - block damage
 * @param {number} flawlessBlockDamage - f/block damage
 * @param {string} type - move type
 * @returns {object} move data object
 */
export function getMoveData(
    hitDamage: MayBeNaType<number>,
    blockDamage: MayBeNaType<number>,
    flawlessBlockDamage: MayBeNaType<number>,
    type: MoveType
): MoveDataType {
    return {hitDamage, blockDamage, flawlessBlockDamage, type};
}

/**
 * Make frame data
 *
 * @param {number} startUp - start up frames
 * @param {number} active - active frames
 * @param {number} recover - recover frames
 * @param {number} cancel - cancel frames
 * @param {number} hitAdvance - hit advance frames
 * @param {number} blockAdvance - block advance frames
 * @param {number} flawlessBlockAdvance - f/block advance frames
 * @returns {object} frame data object
 */
// eslint-disable-next-line max-params
export function getFrameData(
    startUp: MayBeNaType<number>,
    active: MayBeNaType<number>,
    recover: MayBeNaType<number>,
    cancel: MayBeNaType<number>,
    hitAdvance: MayBeNaType<number>,
    blockAdvance: MayBeNaType<number>,
    flawlessBlockAdvance: MayBeNaType<number>
): FrameDataType {
    return {
        startUp,
        active,
        recover,
        cancel,
        hitAdvance,
        blockAdvance,
        flawlessBlockAdvance,
    };
}
