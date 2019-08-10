// @flow

import type {FullImageDataType} from '../../image';
import {getImageData, getSubImageCoordinates} from '../../image';

export type MoveDataTabNameType = 'basic' | 'combo' | 'special' | 'finisher';

export const moveDataTabNameTypeMap: {[key: MoveDataTabNameType]: MoveDataTabNameType} = {
    basic: 'basic',
    combo: 'combo',
    special: 'special',
    finisher: 'finisher',
};

export async function getMoveDataTab(screenShotPath: string): Promise<MoveDataTabNameType> {
    const basicCoordinatesList = await getSubImageCoordinates(
        screenShotPath,
        './util/get-data-from-game/parse-screen-shot/get-move-data-tab/image/basic.png',
        {x: 112, y: 4, width: 210, height: 80}
    );

    if (basicCoordinatesList.length === 1) {
        return moveDataTabNameTypeMap.basic;
    }

    const comboCoordinatesList = await getSubImageCoordinates(
        screenShotPath,
        './util/get-data-from-game/parse-screen-shot/get-move-data-tab/image/combo.png',
        {x: 517, y: 4, width: 210, height: 80}
    );

    if (comboCoordinatesList.length === 1) {
        return moveDataTabNameTypeMap.combo;
    }

    const specialCoordinatesList = await getSubImageCoordinates(
        screenShotPath,
        './util/get-data-from-game/parse-screen-shot/get-move-data-tab/image/special.png',
        {x: 1066, y: 4, width: 210, height: 80}
    );

    if (specialCoordinatesList.length === 1) {
        return moveDataTabNameTypeMap.special;
    }

    const finisherCoordinatesList = await getSubImageCoordinates(
        screenShotPath,
        './util/get-data-from-game/parse-screen-shot/get-move-data-tab/image/finisher.png',
        {x: 1560, y: 4, width: 210, height: 80}
    );

    if (finisherCoordinatesList.length === 1) {
        return moveDataTabNameTypeMap.finisher;
    }

    throw new Error('can not detect move tab');
}
