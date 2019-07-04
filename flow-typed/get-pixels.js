// @flow

declare module 'get-pixels' {
    declare export type ImageDataType = {|
        +data: Array<number>,
        +shape: [number, number, number],
        +stride: [number, number, number],
        +offset: 0,
    |};

    declare export default (
        pathToImage: string,
        callBack: (mayBeError: Error | null, mayBeImageData: ImageDataType | void) => mixed,
    ) => mixed;
}
