// @flow

import type {MoveType} from './move-type';

export type MoveDataType = {|
    +hitDamage: number,
    +blockDamage: number,
    +flawlessBlockDamage: number,
    +type: MoveType,
|};
