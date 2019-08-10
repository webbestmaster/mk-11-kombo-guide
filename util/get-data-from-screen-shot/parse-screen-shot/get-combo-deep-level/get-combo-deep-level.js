// @flow

import type {ComboDeepLevelType} from '../../../../www/js/move-type/combo-type';
import type {RectangleType} from '../../image';

const comboWidthEdge = 300;

export function getComboDeepLevel(comboLabelRectangle: RectangleType): ComboDeepLevelType {
    return comboLabelRectangle.width < comboWidthEdge ? 1 : 0;
}
