// @flow

import type {FrameDataType, MayBeNaType, MoveDataType, MoveType} from './character-type';

export function getMoveData(
    hitDamage: MayBeNaType<number>,
    blockDamage: MayBeNaType<number>,
    flawlessBlockDamage: MayBeNaType<number>,
    type: MoveType
): MoveDataType {
    return {hitDamage, blockDamage, flawlessBlockDamage, type};
}

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
