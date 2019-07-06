// @flow

import type {FullImageDataType} from '../../image';

export type MoveDataTabNameType = 'basic' | 'combo' | 'special' | 'finisher';

export const moveDataTabNameTypeMap: {[key: MoveDataTabNameType]: MoveDataTabNameType} = {
    basic: 'basic',
    combo: 'combo',
    special: 'special',
    finisher: 'finisher',
};

export async function getMoveDataTab(screenShot: FullImageDataType): Promise<MoveDataTabNameType> {
    return moveDataTabNameTypeMap.basic;
}
