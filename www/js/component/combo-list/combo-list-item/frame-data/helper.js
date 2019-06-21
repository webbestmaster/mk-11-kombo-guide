// @flow

import type {Node} from 'react';
import React from 'react';

import {Locale} from '../../../locale/c-locale';

export function renderFrameDataValue(value: number): Node | number {
    return value !== 0 ? value : <Locale stringKey="FRAME_DATA__NOT_AVAILABLE_FRAME_DATA"/>;
}
