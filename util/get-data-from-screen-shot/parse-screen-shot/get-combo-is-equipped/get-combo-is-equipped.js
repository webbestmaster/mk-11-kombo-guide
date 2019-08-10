// @flow

import type {RectangleType} from '../../image';
import {getSubImageCoordinates} from '../../image';

export async function getComboIsEquipped(screenShotPath: string, comboRectangle: RectangleType): Promise<boolean> {
    const getEquippedMarkList = await getSubImageCoordinates(
        screenShotPath,
        './util/get-data-from-game/parse-screen-shot/get-combo-is-equipped/image/equipped-mark.png',
        comboRectangle
    );

    switch (getEquippedMarkList.length) {
        case 1:
            return true;
        case 0:
            return false;
        default:
            console.error('getEquippedMarkList.length should be 0 or 1 !!!', getEquippedMarkList);
            throw new Error('getEquippedMarkList.length should be 0 or 1 !!! ');
    }
}
