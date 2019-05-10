// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import classNames from 'classnames';

import {Locale} from '../../locale/c-locale';
import type {LangKeyType} from '../../locale/translation/type';
import {HorizontalScroll} from '../horizontal-scroll/c-horizontal-scroll';

import tabListStyle from './tab-list.style.scss';

type PassedPropsType = {|
    +titleList: Array<LangKeyType>,
    +contentList: Array<Node>,
    +activeIndex: number,
    +onChange?: (tabIndex: number) => mixed,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +activeIndex: number,
|};

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

            const {props, state} = view;
            const {onChange} = props;

            if (state.activeIndex === activeIndex) {
                return;
            }

            // eslint-disable-next-line react/no-set-state
            view.setState({activeIndex}, () => {
                if (onChange instanceof Function) {
                    onChange(activeIndex);
                }
            });
        };
    }

    renderTitle = (title: LangKeyType, index: number, titleList: Array<LangKeyType>): Node => {
        const view = this;
        const {state} = view;

        const handleOnClick = view.createChangeHandler(index);

        const isActive = index === state.activeIndex;
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

    renderContent(): Node {
        const {props, state} = this;
        const {contentList} = props;
        const {activeIndex} = state;

        return <div>{contentList[activeIndex]}</div>;
    }

    render(): Node {
        const view = this;

        return (
            <>
                <HorizontalScroll className={tabListStyle.tab_list__top_menu}>
                    {view.renderTitleList()}
                </HorizontalScroll>
                {view.renderContent()}
            </>
        );
    }
}
