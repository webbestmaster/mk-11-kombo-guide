// @flow

type SwiperOptionsType = {|
    +direction?: 'horizontal' | 'vertical',
    +slidesPerView?: 'auto' | number,
    +freeMode?: boolean,
    +loop?: boolean,
    +watchOverflow?: boolean,
    +roundLengths?: boolean,
    +scrollbar?: {|
        // eslint-disable-next-line id-length
        +el: string,
        +hide?: boolean,
    |},
    +pagination?: {|
        // eslint-disable-next-line id-length
        +el: string,
        +clickable?: boolean,
    |},
    +mousewheel?: boolean,
    +autoplay?: {|
        +delay?: number,
    |},
    +on?: {
        +slideChange?: (() => void) | null,
        +slideChangeTransitionEnd?: (() => void) | null,
    },
|};

declare module 'swiper' {
    declare export default class Swiper {
        constructor(node: HTMLElement, options: SwiperOptionsType): Swiper,
        destroy(deleteInstance?: boolean, cleanStyles: ?boolean): mixed, // default deleteInstance = true, cleanStyles = true
        slideTo(index: number, speed: number, runCallbacks: () => void): mixed,
        activeIndex: number,
    }
}
