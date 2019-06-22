// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component} from 'react';
import classNames from 'classnames';
import Swiper from 'swiper';
import {connect} from 'react-redux';

import {Locale} from '../../locale/c-locale';
import type {LangKeyType} from '../../locale/translation/type';
import {HorizontalScroll} from '../horizontal-scroll/c-horizontal-scroll';
import {Scroll} from '../scroll/c-scroll';
import type {GlobalStateType} from '../../../redux-store-provider/reducer';
import type {SystemType} from '../../system/reducer/root';

import tabListStyle from './tab-list.style.scss';

type ReduxPropsType = {|
    +system: SystemType,
|};

type ReduxActionType = {
    // +setSmth: (smth: string) => string,
};

const reduxAction: ReduxActionType = {
    // setSmth, // imported from actions
};

type PassedPropsType = {|
    +titleList: Array<LangKeyType>,
    +contentList: Array<Node>,
    +activeIndex: number,
|};

type PropsType = {
    ...ReduxActionType,
    ...ReduxPropsType,
    ...PassedPropsType,
};

type StateType = {
    +activeIndex: number,
};

class TabList extends Component<PropsType, StateType> {
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

    handleSlideChangeTransitionEnd = (swiper: Swiper) => {
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

    getSize(): {width: number, height: number} {
        const view = this;
        const {props} = view;
        const {system} = props;
        const {screen} = system;

        const {width, height} = screen;

        const topHeaderHeight = 57;
        const tabListHeight = 35;

        return {width, height: height - topHeaderHeight - tabListHeight};
    }

    renderContentItem = (node: Node, index: number): Node => {
        const view = this;

        return (
            <div className={tabListStyle.tab_list__content_wrapper} key={index} style={view.getSize()}>
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
                    onSlideChangeTransitionEnd={view.handleSlideChangeTransitionEnd}
                    slidesPerView={1}
                >
                    {view.renderContentList()}
                </HorizontalScroll>
            </>
        );
    }
}

const ConnectedComponent = connect<ComponentType<TabList>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        system: state.system,
    }),
    reduxAction
)(TabList);

export {ConnectedComponent as TabList};
