// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import Swiper from 'swiper';

import horizontalScrollStyle from './horizontal-scroll.style.scss';

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

export class HorizontalScroll extends Component<PropsType, StateType> {
    constructor() {
        super();

        const view = this;

        view.node = {
            wrapper: React.createRef(),
        };

        view.attr = {
            swiper: null,
            swiperId: 'horizontal-swiper-id-' + String(Math.random()).substr(2),
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

        swiper.destroy();
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
            direction: 'horizontal',
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

    renderItem = (child: Node, index: number): Node => {
        const view = this;
        const {props} = view;

        const itemClassName = [
            'swiper-slide',
            horizontalScrollStyle.horizontal_scroll_swiper_slide,
            props.slideClassName || '',
        ].join(' ');

        return (
            <li className={itemClassName} key={index}>
                {child}
            </li>
        );
    };

    renderSwiper(): Node {
        const view = this;
        const {props} = view;

        const childArray: Array<Node> = React.Children.toArray(props.children);

        return (
            <div
                className={`swiper-container ${horizontalScrollStyle.horizontal_scroll_swiper_container}`}
                ref={view.node.wrapper}
            >
                <ul className={`swiper-wrapper ${horizontalScrollStyle.horizontal_scroll_swiper_wrapper}`}>
                    {childArray.map(view.renderItem)}
                </ul>
                <div className={`${view.attr.swiperId} swiper-scrollbar`}/>
            </div>
        );
    }

    render(): Node {
        const view = this;
        const {props} = view;
        const {className} = props;

        return (
            <div className={`${horizontalScrollStyle.horizontal_scroll_wrapper} ${className || ''}`}>
                <div className={horizontalScrollStyle.horizontal_scroll_container}>{view.renderSwiper()}</div>
            </div>
        );
    }
}
