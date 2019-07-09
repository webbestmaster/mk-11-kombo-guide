// @flow

import type {RectangleType} from '../../image';
import {getImageData, getSubImageCoordinates} from '../../image';

export async function getComboLabelRectangle(pathToImage: string): Promise<RectangleType> {
    const leftSide = await getImageData(
        './util/get-data-from-game/parse-screen-shot/get-combo-label-rectangle/image/left-side.png'
    );
    const rightSide = await getImageData(
        './util/get-data-from-game/parse-screen-shot/get-combo-label-rectangle/image/right-side.png'
    );

    const leftPositionList = await getSubImageCoordinates(
        pathToImage,
        './util/get-data-from-game/parse-screen-shot/get-combo-label-rectangle/image/left-side.png',
        {x: 20, y: 150, width: 170, height: 900}
    );

    const rightPositionList = await getSubImageCoordinates(
        pathToImage,
        './util/get-data-from-game/parse-screen-shot/get-combo-label-rectangle/image/right-side.png',
        {x: 815, y: 150, width: 170, height: 900}
    );

    if (leftPositionList.length < 1 || rightPositionList.length < 1) {
        console.log('leftPositionList and rightPositionList');
        console.log(leftPositionList, rightPositionList);
        throw new Error('leftPositionList.length and rightPositionList.length should be 1');
    }

    const [left] = leftPositionList;
    const [right] = rightPositionList;

    const widthRightImage = 5;
    const heightLeftImage = 7;

    return {
        x: left.x,
        y: right.y,
        width: right.x + widthRightImage - left.x,
        height: left.y + heightLeftImage - right.y,
    };
}
