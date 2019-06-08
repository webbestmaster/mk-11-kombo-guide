// @flow

import {trim} from '../lib/string-helper';

export function ensureDescriptionType(description: string): Array<string> {
    return description
        .split(/<br\s*?\/?>/gi)
        .map(trim)
        .map((part: string): string => part.replace(/^•/g, '').replace(/\.$/g, ''))
        .map(trim)
        .filter(Boolean);
}
