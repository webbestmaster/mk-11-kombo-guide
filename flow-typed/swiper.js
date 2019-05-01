// @flow

type SwiperOptionsType = {|
    +direction?: 'horizontal' | 'vertical',
    +slidesPerView?: 'auto' | number,
    +freeMode?: boolean,
    +loop?: boolean,
    +watchOverflow?: boolean,
    +scrollbar?: {|
        // eslint-disable-next-line id-length
        +el: string,
        +hide?: boolean,
    |},
    +pagination?: {|
        // eslint-disable-next-line id-length
        +el: string,
    |},
    +mousewheel?: boolean,
    +autoplay?: {|
        +delay?: number,
    |},
|};

declare module 'swiper' {
    declare export default class Swiper {
        constructor(node: HTMLElement, options: SwiperOptionsType): Swiper,
        destroy(deleteInstance?: boolean, cleanStyles: ? boolean): mixed, // default deleteInstance = true, cleanStyles = true
    }
}
