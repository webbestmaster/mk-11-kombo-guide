// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import classNames from 'classnames';

import Swiper from 'swiper';

import {Locale} from '../../locale/c-locale';
import type {LangKeyType} from '../../locale/translation/type';
import {HorizontalScroll} from '../horizontal-scroll/c-horizontal-scroll';
import {Scroll} from '../scroll/c-scroll';

import {isFunction} from '../../../lib/is';

import tabListStyle from './tab-list.style.scss';

type PassedPropsType = {|
    +titleList: Array<LangKeyType>,
    +contentList: Array<Node>,
    +activeIndex: number,
|};

type PropsType = PassedPropsType;

type StateType = {
    +activeIndex: number,
};

export class TabList extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            activeIndex: props.activeIndex,
        };
    }

    state: StateType;
    props: PropsType;

    createChangeHandler(activeIndex: number): () => mixed {
        return () => {
            const view = this;

            view.updateActiveIndex(activeIndex);
        };
    }

    handleSlideChange = (swiper: Swiper) => {
        const view = this;

        view.updateActiveIndex(swiper.activeIndex);
    };

    updateActiveIndex(activeIndex: number) {
        const view = this;

        const {state} = view;

        if (state.activeIndex === activeIndex) {
            return;
        }

        view.setState({activeIndex});
    }

    renderTitle = (title: LangKeyType, index: number, titleList: Array<LangKeyType>): Node => {
        const view = this;
        const {state} = view;
        const {activeIndex} = state;

        const handleOnClick = view.createChangeHandler(index);

        const isActive = index === activeIndex;
        const isFirst = index === 0;
        const isLast = index === titleList.length - 1;

        return (
            <button
                className={classNames(tabListStyle.tab_list__tab_item, {
                    [tabListStyle.tab_list__tab_item__active]: isActive,
                    [tabListStyle.tab_list__tab_item__first]: isFirst,
                    [tabListStyle.tab_list__tab_item__last]: isLast,
                })}
                key={title}
                onClick={handleOnClick}
                onKeyPress={handleOnClick}
                type="button"
            >
                <Locale stringKey={title}/>
            </button>
        );
    };

    renderTitleList(): Array<Node> {
        const view = this;
        const {props} = view;
        const {titleList} = props;

        return titleList.map(view.renderTitle);
    }

    renderContentItem = (node: Node, index: number): Node => {
        return (
            <div key={index} style={{height: 300, display: 'flex'}}>
                <Scroll>{node}</Scroll>
            </div>
        );
    };

    renderContentList(): Node {
        const view = this;
        const {props} = view;
        const {contentList} = props;

        return contentList.map(view.renderContentItem);
    }

    render(): Node {
        const view = this;
        const {state} = view;
        const {activeIndex} = state;

        return (
            <>
                <HorizontalScroll className={tabListStyle.tab_list__top_menu} hasScrollBar={false}>
                    {view.renderTitleList()}
                </HorizontalScroll>
                <HorizontalScroll
                    activeIndex={activeIndex}
                    hasScrollBar={false}
                    isFreeMode={false}
                    onSlideChange={view.handleSlideChange}
                    slidesPerView={1}
                >
                    {view.renderContentList()}
                </HorizontalScroll>
            </>
        );
    }
}
