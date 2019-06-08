// @flow

import type {ComboInputType} from './combo-input-type';
import type {MoveDataType} from './move-data-type';
import type {FrameDataType} from './move-frame-data-type';
import type {PropertyNameType} from './move-property-type';

export type ComboType = {|
    +name: string,
    +sequence: Array<ComboInputType>,
    +description: Array<string>,
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    +deepLevel: 0 | 1,
    +variation: string | null,
    +propertyList: Array<PropertyNameType>,
|};
