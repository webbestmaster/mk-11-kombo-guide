// @flow

declare module 'screenshot-desktop' {
    declare type ScreenShotDesktopOptionType = {|
        +format: 'png',
        +filename: string,
    |};

    declare export default (option: ScreenShotDesktopOptionType) => Promise<mixed>;
}
