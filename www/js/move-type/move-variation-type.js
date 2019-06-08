// @flow

import {trim} from '../lib/string-helper';

export function ensureVariationType(variationName: string): string | null {
    const variationNameTrimmed = trim(variationName);

    return variationNameTrimmed === '' ? null : variationNameTrimmed;
}
