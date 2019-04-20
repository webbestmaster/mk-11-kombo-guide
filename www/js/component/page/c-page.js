// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import type {GlobalStateType} from '../../redux-store-provider/reducer';
import type {ContextRouterType} from '../../type/react-router-dom-v4';

import type {SystemType} from '../system/reducer/root';

import pageStyle from './page.style.scss';

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
    +children: Node | Array<Node>,
|};

type PropsType = $ReadOnly<$Exact<{
        ...$Exact<PassedPropsType>,
        ...$Exact<ReduxPropsType>,
        ...$Exact<ReduxActionType>,
        ...$Exact<ContextRouterType>,
        +children: Node,
    }>>;

type StateType = {|
    +state: number,
|};

class Page extends Component<ReduxPropsType, PassedPropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

    getSize(): {width: number, height: number} {
        const view = this;
        const {props} = view;
        const {system} = props;
        const {screen} = system;

        const {width, height} = screen;

        return {width, height};
    }

    render(): Node {
        const view = this;
        const {props} = view;
        const {children} = props;
        const {width, height} = this.getSize();

        return (
            <div className={pageStyle.page} style={{width, height}}>
                {children}
            </div>
        );
    }
}

const ConnectedComponent = connect<ComponentType<Page>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        system: state.system,
    }),
    reduxAction
)(Page);

export {ConnectedComponent as Page};
