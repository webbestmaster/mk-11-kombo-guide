// @flow

import React from 'react';
import type {Node} from 'react';

import type {MayBeNaType} from '../../../../character-data/character-type';
import {isNumber} from '../../../../lib/is';
import {Locale} from '../../../locale/c-locale';

export function renderFrameDataValue(value: MayBeNaType<number>): Node | number {
    if (isNumber(value)) {
        return value;
    }

    return <Locale stringKey="FRAME_DATA__NOT_AVAILABLE_FRAME_DATA"/>;
}
