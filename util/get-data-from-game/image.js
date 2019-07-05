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
    +hash: {|
        +full: string,
        +rgb: string,
        +rgba: string,
    |},
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

                console.log('---> getImageData:', pathToImage, 'has bean done');

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

    let startIndex: number = 0;

    let red: number = 0;

    let green: number = 0;

    let blue: number = 0;

    let alpha: number = 0;

    // eslint-disable-next-line no-loops/no-loops
    for (let y: number = 0; y < height; y += 1) {
        // eslint-disable-next-line no-loops/no-loops
        for (let x: number = 0; x < width; x += 1) {
            startIndex = (y * width + x) * 4;

            red = numberList[startIndex];
            green = numberList[startIndex + 1];
            blue = numberList[startIndex + 2];
            alpha = numberList[startIndex + 3];

            result.push({
                x,
                y,
                red,
                green,
                blue,
                alpha,
                hash: {
                    full: [x, y, red, green, blue, alpha].join('_'),
                    rgb: [red, green, blue].join('_'),
                    rgba: [red, green, blue, alpha].join('_'),
                },
            });
        }
    }

    return result;
}

function getPixelByCoordinates(fullImageDataType: FullImageDataType, x: number, y: number): PixelType | null {
    return fullImageDataType.pixelList.find((pixel: PixelType): boolean => pixel.x === x && pixel.y === y) || null;
}

function getPixelsRectangle(
    fullImageDataType: FullImageDataType,
    x: number,
    y: number,
    width: number,
    height: number
): Array<PixelType> {
    const bottom = height + y;
    const right = width + x;

    return fullImageDataType.pixelList.filter((pixelData: PixelType): boolean => {
        return pixelData.x >= x && pixelData.y >= y && pixelData.x < right && pixelData.y < bottom;
    });
}

function isPixelRectangleEquals(pixelsRectangleA: Array<PixelType>, pixelsRectangleB: Array<PixelType>): boolean {
    if (pixelsRectangleA.length !== pixelsRectangleB.length) {
        return false;
    }

    return pixelsRectangleA.every((pixelA: PixelType, index: number): boolean => {
        return pixelA.hash.rgba === pixelsRectangleB[index].hash.rgba;
    });
}

export async function getSubImageCoordinates(
    pathToBigImage: string,
    pathToSmallImage: string
): Promise<Array<PixelType>> {
    const bigImageData = await getImageData(pathToBigImage);
    const smallImageData = await getImageData(pathToSmallImage);
    const smallImagePixelList = smallImageData.pixelList;
    const bigImagePixelListLength = bigImageData.pixelList.length;

    return bigImageData.pixelList.filter((pixelData: PixelType, index: number): boolean => {
        if (index % 20 === 0) {
            console.log(
                '---> getSubImageCoordinates:',
                index,
                '/',
                bigImagePixelListLength,
                '-',
                (index / bigImagePixelListLength * 100).toFixed(4) + '%'
            );
        }

        if (pixelData.hash.rgba !== smallImagePixelList[0].hash.rgba) {
            return false;
        }

        const pixelsRectangle = getPixelsRectangle(
            bigImageData,
            pixelData.x,
            pixelData.y,
            smallImageData.width,
            smallImageData.height
        );

        return isPixelRectangleEquals(pixelsRectangle, smallImagePixelList);
    });
}

// getImageData('./_res/screenshot/1.png').then(console.log)
// getImageData('./_res/small-image.png');

getSubImageCoordinates('./_res/small-image.png', './_res/small-very-image.png'); // .then(console.log);
