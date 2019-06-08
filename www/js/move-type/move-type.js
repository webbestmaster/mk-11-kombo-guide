// @flow

import type {LangKeyType} from '../component/locale/translation/type';
import {trim} from '../../../util/get-data/helper';

export type MoveType = 'low' | 'mid' | 'high' | 'overhead' | 'throw' | 'unblockable' | 'N/A Move';

export const moveTypeMap: {+[key: string]: MoveType} = {
    low: 'low',
    mid: 'mid',
    high: 'high',
    overhead: 'overhead',
    throwMove: 'throw',
    unblockable: 'unblockable',
    notAvailableMove: 'N/A Move',
};

export const moveTypeTranslationMap: {+[key: MoveType]: LangKeyType} = {
    [moveTypeMap.low]: 'MOVE_TYPE__LOW',
    [moveTypeMap.mid]: 'MOVE_TYPE__MID',
    [moveTypeMap.high]: 'MOVE_TYPE__HIGH',
    [moveTypeMap.overhead]: 'MOVE_TYPE__OVERHEAD',
    [moveTypeMap.throwMove]: 'MOVE_TYPE__THROW',
    [moveTypeMap.unblockable]: 'MOVE_TYPE__UNBLOCKABLE',
    [moveTypeMap.notAvailableMove]: 'MOVE_TYPE__NOT_AVAILABLE_MOVE_TYPE',
};

// eslint-disable-next-line complexity
export function ensureMoveType(mayBeMoveType: string): MoveType {
    const {low, mid, high, overhead, throwMove, unblockable, notAvailableMove} = moveTypeMap;
    const mayBeMoveTypeLowCase = trim(mayBeMoveType).toLowerCase();

    switch (mayBeMoveTypeLowCase) {
        case low:
            return low;
        case mid:
            return mid;
        case high:
            return high;
        case overhead:
            return overhead;
        case throwMove:
            return throwMove;
        case unblockable:
            return unblockable;
        case '':
        case notAvailableMove:
            return notAvailableMove;
        default:
            console.error(`Can not detect move type: '${mayBeMoveType}' -> '${mayBeMoveTypeLowCase}'`);
    }

    throw new Error('Can not detect move type');
}
