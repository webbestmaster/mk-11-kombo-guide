// @flow

import {trim} from '../../../util/get-data/helper';

export type FrameDataType = {|
    +startUp: number,
    +active: number,
    +recover: number,
    +cancel: number,
    +hitAdvance: number,
    +blockAdvance: number,
    +flawlessBlockAdvance: number,
|};

export function ensureNumberType(bayBeNumberType: string): number {
    const parsedNumber = parseFloat(trim(bayBeNumberType));

    if (Number.isNaN(parsedNumber)) {
        throw new TypeError(`Can not use parseFloat for: '${bayBeNumberType}'`);
    }

    return parsedNumber;
}
