// @flow

import {moveConst} from './move-const';

export type PlatformNameType = 'universal' | 'playStation' | 'xBox';

export const platformNameMap: {+[key: PlatformNameType]: PlatformNameType} = {
    universal: 'universal',
    playStation: 'playStation',
    xBox: 'xBox',
};

export type SetPlatformTypeType = {|
    +type: 'move__set-platform-type',
    +payload: {|
        +platformName: PlatformNameType,
    |},
|};

export function setPlatformType(platformName: PlatformNameType): SetPlatformTypeType {
    return {
        type: moveConst.action.type.setPlatformType,
        payload: {
            platformName,
        },
    };
}
