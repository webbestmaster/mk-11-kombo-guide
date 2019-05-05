// @flow

import {moveConst} from './move-const';

export type PlatformNameType = 'universal' | 'ps' | 'xBox';

export const platformNameMap: {+[key: string]: PlatformNameType} = {
    universal: 'universal',
    playStation: 'ps',
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
