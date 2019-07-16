// @flow

import type {PixelType, RectangleType} from '../../image';
import type {PropertyNameType} from '../../../../www/js/move-type/move-property-type';
import {propertyNameMap} from '../../../../www/js/move-type/move-property-type';
import {getSubImageCoordinates} from '../../image';
import {hasProperty} from '../../../../www/js/lib/is';

const imagePath = './util/get-data-from-game/parse-screen-shot/get-property-name-list/image';
const imagePathTemplate = imagePath + '/property/{{imageName}}.png';
const imageDetectLabel = imagePath + '/detect-property-label.png';

const propertyImageMap: {[key: string]: string} = Object.keys(propertyNameMap).reduce<{
    [key: string]: string,
}>((accumulator: {}, key: string): {[key: string]: string} => {
    return {...accumulator, [key]: imagePathTemplate.replace('{{imageName}}', key)};
}, {});

export type ParsedPropertyNameType = {|
    +property: PropertyNameType,
    +rectangle: RectangleType,
|};

type RawPropertyNameType = {|
    +property: PropertyNameType,
    +pixel: PixelType,
|};

export async function getPropertyNameList(pathToScreenShot: string): Promise<Array<PropertyNameType>> {
    const rectangle = {
        x: 1433,
        y: 191,
        width: 470,
        height: 322,
    };

    const propertyNameList: Array<RawPropertyNameType> = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const key in propertyImageMap) {
        if (hasProperty(propertyImageMap, key)) {
            const pixelList = await getSubImageCoordinates(pathToScreenShot, propertyImageMap[key], rectangle);

            console.log(key, pixelList);

            pixelList.forEach((pixel: PixelType) => {
                propertyNameList.push({property: propertyNameMap[key], pixel});
            });
        }
    }

    const propertyLabelList = await getSubImageCoordinates(pathToScreenShot, imageDetectLabel, rectangle);

    if (propertyLabelList.length !== propertyNameList.length) {
        throw new Error('propertyLabelList.length !== propertyNameList.length');
    }

    return propertyNameList.map((propertyData: RawPropertyNameType): PropertyNameType => propertyData.property);
}
