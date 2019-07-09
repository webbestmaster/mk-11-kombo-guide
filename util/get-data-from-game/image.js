// @flow

import getPixelsFromNpm from 'get-pixels';
import type {ImageDataType} from 'get-pixels';

import {hasProperty} from '../../www/js/lib/is';

export type PixelType = {|
    +x: number,
    +y: number,
    +red: number,
    +green: number,
    +blue: number,
    +alpha: number,
|};

export type RectangleType = {|
    +x: number,
    +y: number,
    +width: number,
    +height: number,
|};

export type FullImageDataType = {|
    +width: number,
    +height: number,
    +numberList: Array<number>,
    +pixelList: Array<PixelType>,
|};

const imageDataCache: {[key: string]: Promise<FullImageDataType>} = {};

export function getImageData(pathToImage: string): Promise<FullImageDataType> {
    if (hasProperty(imageDataCache, pathToImage)) {
        return imageDataCache[pathToImage];
    }

    const result = new Promise((resolve: (imageData: FullImageDataType) => mixed, reject: (error: Error) => mixed) => {
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

                console.log('---> getImageData:', pathToImage, 'has bean done');

                return;
            }

            reject(new Error('mayBeError or mayBeImageData should be defined!'));
        });
    });

    imageDataCache[pathToImage] = result;

    return result;
}

// getImageData('./_res/screenshot/1.png').then(console.log)
// getImageData('./_res/small-image.png');

function makePixelArray(fullImageDataType: FullImageDataType): Array<PixelType> {
    const result = [];
    const {width, height, numberList} = fullImageDataType;

    let startIndex: number = 0;

    // eslint-disable-next-line no-loops/no-loops
    for (let y: number = 0; y < height; y += 1) {
        // eslint-disable-next-line no-loops/no-loops
        for (let x: number = 0; x < width; x += 1) {
            startIndex = (y * width + x) * 4;

            result.push({
                x,
                y,
                red: numberList[startIndex],
                green: numberList[startIndex + 1],
                blue: numberList[startIndex + 2],
                alpha: numberList[startIndex + 3],
            });
        }
    }

    return result;
}

function getPixelByCoordinates(fullImageDataType: FullImageDataType, x: number, y: number): PixelType | null {
    return fullImageDataType.pixelList.find((pixel: PixelType): boolean => pixel.x === x && pixel.y === y) || null;
}

function getPixelsRectangle(fullImageDataType: FullImageDataType, rectangle: RectangleType): Array<PixelType> {
    return fullImageDataType.pixelList.filter((pixelData: PixelType): boolean => isInRectangle(pixelData, rectangle));
}

function isPixelEquals(pixelA: PixelType, pixelB: PixelType): boolean {
    const delta = 30;

    if (Math.abs(pixelA.red - pixelB.red) > delta) {
        return false;
    }

    if (Math.abs(pixelA.green - pixelB.green) > delta) {
        return false;
    }

    if (Math.abs(pixelA.blue - pixelB.blue) > delta) {
        return false;
    }

    return true;
}

function isPixelRectangleEquals(pixelsRectangleA: Array<PixelType>, pixelsRectangleB: Array<PixelType>): boolean {
    if (pixelsRectangleA.length !== pixelsRectangleB.length) {
        return false;
    }

    return pixelsRectangleA.every((pixelA: PixelType, index: number): boolean =>
        isPixelEquals(pixelA, pixelsRectangleB[index])
    );
}

function isInRectangle(coords: {+x: number, +y: number}, rectangle: RectangleType): boolean {
    // console.log('isInRectangle');

    if (coords.x < rectangle.x) {
        return false;
    }
    if (coords.y < rectangle.y) {
        return false;
    }

    if (coords.x >= rectangle.x + rectangle.width) {
        return false;
    }

    if (coords.y >= rectangle.y + rectangle.height) {
        return false;
    }

    return true;
}

export async function getSubImageCoordinates(
    pathToBigImage: string,
    pathToSmallImage: string,
    limitSquare: RectangleType
): Promise<Array<PixelType>> {
    const bigImageData = await getImageData(pathToBigImage);
    const smallImageData = await getImageData(pathToSmallImage);
    const smallImagePixelList = smallImageData.pixelList;
    const bigImagePixelListInRectangle = getPixelsRectangle(bigImageData, limitSquare);

    return bigImagePixelListInRectangle.filter((pixelData: PixelType, index: number): boolean => {
/*
        if (index % 10000 === 0) {
            console.log(
                [
                    '---> getSubImageCoordinates:',
                    index,
                    '/',
                    bigImagePixelListInRectangle.length,
                    '-',
                    (index / bigImagePixelListInRectangle.length * 100).toFixed(4) + '%',
                ].join(' ')
            );
        }
*/

        if (!isPixelEquals(pixelData, smallImagePixelList[0])) {
            return false;
        }

        /*
        console.log('!isInRectangle(pixelData, limitSquare)')
        if (!isInRectangle(pixelData, limitSquare)) {
            return false;
        }
*/
        const pixelsRectangle = getPixelsRectangle(bigImageData, {
            x: pixelData.x,
            y: pixelData.y,
            width: smallImageData.width,
            height: smallImageData.height,
        });

        return isPixelRectangleEquals(pixelsRectangle, smallImagePixelList);
    });
}

// getImageData('./_res/screenshot/1.png').then(console.log)
// getImageData('./_res/small-image.png');

// getSubImageCoordinates('./_res/small-image.png', './_res/small-very-image.png'); // .then(console.log);
