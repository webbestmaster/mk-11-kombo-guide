// @flow

import getPixelsFromNpm from 'get-pixels';
import type {ImageDataType} from 'get-pixels';

function getPixels(pathToImage: string): Promise<ImageDataType> {
    return new Promise((resolve: (imageData: ImageDataType) => mixed, reject: (error: Error) => mixed) => {
        getPixelsFromNpm(pathToImage, (mayBeError: Error | null, mayBeImageData: ImageDataType | void) => {
            if (mayBeError instanceof Error) {
                reject(mayBeError);
                return;
            }

            if (mayBeImageData) {
                const {data, shape, stride, offset} = mayBeImageData;

                resolve({data: [...data], shape, stride, offset});
                return;
            }

            reject(new Error('mayBeError or mayBeImageData should be defined!'));
        });
    });
}

getPixels('./_res/small-image.png');
