// @flow

import type {ComboType} from '../../../www/js/move-type/combo-type';

import type {FullImageDataType} from '../image';
import {getImageData} from '../image';

import {getMoveDataTab} from './get-move-data-tab/get-move-data-tab';
import {getComboLabelRectangle} from './get-combo-label-rectangle/get-combo-label-rectangle';
import {getComboDeepLevel} from './get-combo-deep-level/get-combo-deep-level';
import {getComboIsEquipped} from './get-combo-is-equipped/get-combo-is-equipped';

export type ParsedScreenShotType = {|
    +combo: ComboType,
    +meta: {},
|};

export async function parseScreenShot(pathToScreenShot: string): Promise<ComboType | null> {
    const tabName = await getMoveDataTab(pathToScreenShot);

    console.log('tabName:', tabName);
    // 1 - get combo tab - basic, combo, special, finisher

    const comboLabelRectangle = await getComboLabelRectangle(pathToScreenShot);

    console.log('comboLabelRectangle', comboLabelRectangle);

    const deepLevel = getComboDeepLevel(comboLabelRectangle);

    console.log('deepLevel', deepLevel);

    const isEquipped = await getComboIsEquipped(pathToScreenShot, comboLabelRectangle);

    console.log('isEquipped', isEquipped);

    // 2 - get combo label (full combo line)
    // 2.1 - get is combo or is sub combo, i. e. deepLevel
    // 2.2 - get combo name
    // 2.3 - get combo input
    // 2.4 - isEquipped
    // 2.5 - is fatal blow or air escape or something else

    // 3 - get frame data
    // 3.1 - get start up, cancel ...
    // 3.2 - get move type
    // 3.3 - get damage, block damage, f/block damage
    // 3.4 - get invulnerable, ranged, projectile...

    // 4 - get description

    return null;
}

(async () => {
    await parseScreenShot('./_res/screenshot/1.png');
    await parseScreenShot('./_res/screenshot/2.png');
    await parseScreenShot('./_res/screenshot/3.png');
    await parseScreenShot('./_res/screenshot/4.png'); // !!!
    await parseScreenShot('./_res/screenshot/5.png'); // !!!
    await parseScreenShot('./_res/screenshot/6.png');
    await parseScreenShot('./_res/screenshot/7.png');
    await parseScreenShot('./_res/screenshot/8.png');
})();
