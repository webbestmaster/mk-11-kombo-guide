// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import Swiper from 'swiper';

import {isBoolean, isFunction, isNotFunction, isNumber, isString} from '../../../lib/is';
import {noop} from '../../../lib/function-helper';

import horizontalScrollStyle from './horizontal-scroll.style.scss';

const swipeTransitionTime = 300;

type StateType = {|
    +activeIndex: number,
|};

type PropsType = {|
    +className?: string,
    +slideClassName?: string,
    +children: Node | Array<Node>,
    // settings
    +slidesPerView?: number | 'auto',
    +isFreeMode?: boolean,
    +onSlideChange?: (swiper: Swiper) => void,
    +activeIndex?: number,
    +hasScrollBar?: boolean,
|};

type NodeType = {|
    +wrapper: {current: null | HTMLDivElement},
|};

type AttrType = {|
    swiper: Swiper | null,
    swiperId: string,
|};

export class HorizontalScroll extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        const {activeIndex} = props;

        view.state = {
            activeIndex: isNumber(activeIndex) ? activeIndex : 0,
        };

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

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        const view = this;
        const {props, state} = view;

        // check data received from parent
        if (prevState.activeIndex !== state.activeIndex) {
            console.log('check data received from parent');
            return;
        }

        const propsActiveIndex = props.activeIndex;

        if (props.activeIndex !== state.activeIndex && isNumber(propsActiveIndex)) {
            view.slideTo(propsActiveIndex);
        }
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

    generateOnSlideChange(): () => void {
        const view = this;
        const {props} = view;
        const {onSlideChange} = props;

        return () => {
            const currentSwiper = view.attr.swiper;

            if (currentSwiper === null) {
                console.error('currentSwiper is not define');
                return;
            }

            view.setState({activeIndex: currentSwiper.activeIndex}, () => {
                if (isFunction(onSlideChange)) {
                    onSlideChange(currentSwiper);
                }
            });
        };
    }

    initSwiper() {
        const view = this;
        const {props, state} = view;
        const {slidesPerView, isFreeMode} = props;
        const {activeIndex} = state;

        const {wrapper} = view.node;

        if (wrapper.current === null) {
            return;
        }

        view.attr.swiper = new Swiper(wrapper.current, {
            direction: 'horizontal',
            slidesPerView: isString(slidesPerView) || isNumber(slidesPerView) ? slidesPerView : 'auto',
            freeMode: isBoolean(isFreeMode) ? isFreeMode : true,
            watchOverflow: true, // disable this cause swiper has scroll bar and bug after resize
            roundLengths: true,
            scrollbar: {
                // eslint-disable-next-line id-length, unicorn/prevent-abbreviations
                el: `.${view.attr.swiperId}.swiper-scrollbar`,
                hide: true,
            },
            mousewheel: true,
            // eslint-disable-next-line id-length
            on: {
                slideChange: view.generateOnSlideChange(),
            },
        });

        view.slideTo(activeIndex);
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
        const {hasScrollBar} = props;

        const childArray: Array<Node> = React.Children.toArray(props.children);

        return (
            <div
                className={`swiper-container ${horizontalScrollStyle.horizontal_scroll_swiper_container}`}
                ref={view.node.wrapper}
            >
                <ul className={`swiper-wrapper ${horizontalScrollStyle.horizontal_scroll_swiper_wrapper}`}>
                    {childArray.map(view.renderItem)}
                </ul>
                {hasScrollBar === false ? null : <div className={`${view.attr.swiperId} swiper-scrollbar`}/>}
            </div>
        );
    }

    slideTo(activeIndex: number) {
        const view = this;
        const currentSwiper = view.attr.swiper;

        if (currentSwiper === null) {
            console.error('currentSwiper is not define');
            return;
        }

        currentSwiper.slideTo(activeIndex, swipeTransitionTime, noop);
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
