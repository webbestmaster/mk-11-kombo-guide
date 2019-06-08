// @flow

import {trim} from '../../../util/get-data/helper';

export function ensureVariationType(variationName: string): string | null {
    const variationNameTrimmed = trim(variationName);

    return variationNameTrimmed === '' ? null : variationNameTrimmed;
}
