// @flow

import getPixelsFromNpm from 'get-pixels';
import type {ImageDataType} from 'get-pixels';

export type CoordinatesType = {|
    +x: number,
    +y: number,
|};

export type PixelType = {|
    +x: number,
    +y: number,
    +red: number,
    +green: number,
    +blue: number,
    +alpha: number,
|};

type FullImageDataType = {|
    +width: number,
    +height: number,
    +numberList: Array<number>,
    +pixelList: Array<PixelType>,
|};

export function getImageData(pathToImage: string): Promise<FullImageDataType> {
    return new Promise((resolve: (imageData: FullImageDataType) => mixed, reject: (error: Error) => mixed) => {
        getPixelsFromNpm(pathToImage, (mayBeError: Error | null, mayBeImageData: ImageDataType | void) => {
            if (mayBeError instanceof Error) {
                reject(mayBeError);
                return;
            }

            if (mayBeImageData) {
                const {data, shape} = mayBeImageData;
                const [width, height] = shape;
                const numberList = [...data];
                const pixelList = makePixelArray({numberList, width, height, pixelList: []});

                resolve({numberList, width, height, pixelList});
                return;
            }

            reject(new Error('mayBeError or mayBeImageData should be defined!'));
        });
    });
}

// getImageData('./_res/screenshot/1.png').then(console.log)
// getImageData('./_res/small-image.png');

function makePixelArray(fullImageDataType: FullImageDataType): Array<PixelType> {
    const result = [];

    const {width, height, numberList} = fullImageDataType;

    // eslint-disable-next-line no-loops/no-loops
    for (let heightIndex = 0; heightIndex < height; heightIndex += 1) {
        const line = numberList.slice(heightIndex * width * 4, (heightIndex + 1) * width * 4);

        // eslint-disable-next-line no-loops/no-loops
        for (let widthIndex = 0; widthIndex < width; widthIndex += 1) {
            const [red, green, blue, alpha] = line.slice(widthIndex * 4, (widthIndex + 1) * 4);

            result.push({x: widthIndex, y: heightIndex, red, green, blue, alpha});
        }
    }

    return result;
}

/*
export async function getSubImageCoordinates(pathToBigImage: string, pathToSmallImage: string): CoordinatesType | null {
    const bigImageData = await getImageData(pathToBigImage);
    const smallImageData = await getImageData(pathToSmallImage);

}
*/
