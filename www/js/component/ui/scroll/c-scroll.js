// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import Swiper from 'swiper';

import scrollStyle from './scroll.style.scss';

type StateType = void;

type PropsType = {|
    +className?: string,
    +slideClassName?: string,
    +children: Node | Array<Node>,
|};

type NodeType = {|
    +wrapper: {current: null | HTMLDivElement},
|};

type AttrType = {|
    swiper: Swiper | null,
    swiperId: string,
|};

export class Scroll extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.node = {
            wrapper: React.createRef(),
        };

        view.attr = {
            swiper: null,
            swiperId: 'swiper-id-' + String(Math.random()).substr(2),
        };
    }

    state: StateType;

    componentDidMount() {
        const view = this;

        view.initSwiper();
    }

    componentWillUnmount() {
        const view = this;

        const {swiper} = view.attr;

        if (swiper === null) {
            return;
        }

        try {
            swiper.destroy();
        } catch (error) {
            console.warn(error);
        }
    }

    attr: AttrType;
    node: NodeType;
    props: PropsType;

    initSwiper() {
        const view = this;

        const {wrapper} = view.node;

        if (wrapper.current === null) {
            return;
        }

        view.attr.swiper = new Swiper(wrapper.current, {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            watchOverflow: true, // disable this cause swiper has scroll bar and bug after resize
            roundLengths: true,
            scrollbar: {
                // eslint-disable-next-line id-length, unicorn/prevent-abbreviations
                el: `.${view.attr.swiperId}.swiper-scrollbar`,
                hide: true,
            },
            mousewheel: true,
        });
    }

    renderSwiper(): Node {
        const view = this;
        const {props} = view;
        const {slideClassName} = props;

        return (
            <div className={`swiper-container ${scrollStyle.scroll_swiper_container}`} ref={view.node.wrapper}>
                <div className={`swiper-wrapper ${scrollStyle.scroll_swiper_wrapper}`}>
                    <div className={`swiper-slide ${scrollStyle.scroll_swiper_slide} ${slideClassName || ''}`}>
                        {props.children}
                    </div>
                </div>
                <div className={`${view.attr.swiperId} swiper-scrollbar`}/>
            </div>
        );
    }

    render(): Node {
        const view = this;
        const {props, attr} = view;
        const {className} = props;

        return (
            <div className={`${scrollStyle.scroll_wrapper} ${className || ''}`}>
                <div className={scrollStyle.scroll_container}>{view.renderSwiper()}</div>
            </div>
        );
    }
}
