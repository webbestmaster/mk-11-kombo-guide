// @flow

import type {ComboInputSingleType} from './combo-input-type';
import type {MoveDataType} from './move-data-type';
import type {FrameDataType} from './move-frame-data-type';
import type {PropertyNameType} from './move-property-type';

export type ComboDeepLevelType = 0 | 1;

export type ComboType = {|
    +name: string,
    +sequence: Array<ComboInputSingleType>,
    +description: Array<string>,
    +moveData: MoveDataType,
    +frameData: FrameDataType,
    +deepLevel: ComboDeepLevelType,
    +variation: string | null,
    +propertyList: Array<PropertyNameType>,
|};
