// @flow

import type {PixelType, RectangleType} from '../../image';
import type {ComboInputSingleType} from '../../../../www/js/move-type/combo-input-type';
import {inputMoveMap} from '../../../../www/js/move-type/combo-input-type';
import {getSubImageCoordinates} from '../../image';
import {hasProperty} from '../../../../www/js/lib/is';

const imagePathTemplate = './util/get-data-from-game/parse-screen-shot/get-combo-input/image/{{imageName}}.png';

const inputImageMap: {[key: string]: string} = Object.keys(inputMoveMap).reduce<{
    [key: string]: string,
}>((accumulator: {}, key: string): {[key: string]: string} => {
    return {...accumulator, [key]: imagePathTemplate.replace('{{imageName}}', key)};
}, {});

export type ParsedComboInputType = {|
    +sequence: Array<ComboInputSingleType>,
    +rectangle: RectangleType,
|};

type RawInputType = {|
    +key: ComboInputSingleType,
    +pixel: PixelType,
|};

export async function getComboInput(pathToScreenShot: string, rectangle: RectangleType): Promise<ParsedComboInputType> {
    const rawInputList: Array<RawInputType> = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const key in inputImageMap) {
        if (hasProperty(inputImageMap, key)) {
            const pixelList = await getSubImageCoordinates(pathToScreenShot, inputImageMap[key], rectangle);

            console.log(key, pixelList);

            pixelList.forEach((pixel: PixelType) => {
                rawInputList.push({key: inputMoveMap[key], pixel});
            });
        }
    }

    if (rawInputList.length === 0) {
        throw new Error('rawInputList is empty!!! Can not detect any input');
    }

    const rawInputListSorted: Array<RawInputType> = rawInputList.sort(
        (inputDataA: RawInputType, inputDataB: RawInputType): number => {
            return inputDataA.pixel.x - inputDataB.pixel.x;
        }
    );

    return {
        sequence: rawInputListSorted.map((inputData: RawInputType): ComboInputSingleType => inputData.key),
        rectangle: {x: rawInputListSorted[0].pixel.x, y: 0, width: 0, height: 0},
    };
}
