// @flow

import getPixelsFromNpm from 'get-pixels';
import type {ImageDataType} from 'get-pixels';

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

function getPixelByCoordinates(fullImageDataType: FullImageDataType, x: number, y: number): PixelType | null {
    return fullImageDataType.pixelList.find((pixel: PixelType): boolean => pixel.x === x && pixel.y === y) || null;
}

function getPixelList(
    fullImageDataType: FullImageDataType,
    x: number,
    y: number,
    width: number,
    height: number
): Array<PixelType> {
    const bottom = height + y;
    const right = width + x;

    return fullImageDataType.pixelList
        .filter((pixelData: PixelType): boolean => {
            return pixelData.x >= x && pixelData.y >= y && pixelData.x < right && pixelData.y < bottom;
        })
        .map((pixelData: PixelType): PixelType => {
            return {
                x: pixelData.x - x,
                y: pixelData.y - y,
                red: pixelData.red,
                green: pixelData.green,
                blue: pixelData.blue,
                alpha: pixelData.alpha,
            };
        });
}

export async function getSubImageCoordinates(
    pathToBigImage: string,
    pathToSmallImage: string
): Promise<Array<PixelType>> {
    const bigImageData = await getImageData(pathToBigImage);
    const smallImageData = await getImageData(pathToSmallImage);
    const smallImagePixelListString = JSON.stringify(smallImageData.pixelList);

    const startPixelList: Array<PixelType> = [];

    bigImageData.pixelList.forEach((pixelData: PixelType) => {
        const pixelList = getPixelList(
            bigImageData,
            pixelData.x,
            pixelData.y,
            smallImageData.width,
            smallImageData.height
        );

        if (JSON.stringify(pixelList) === smallImagePixelListString) {
            startPixelList.push(pixelData);
        }
    });

    return startPixelList;
}

// getImageData('./_res/screenshot/1.png').then(console.log)
// getImageData('./_res/small-image.png');

getSubImageCoordinates('./_res/screenshot/1.png', './_res/small-very-image.png').then(console.log);
