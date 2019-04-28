// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// import type {GlobalStateType} from '../../redux-store-provider/reducer';
// import type {ContextRouterType} from '../../type/react-router-dom-v4';
import type {ComboInputType} from '../../../../character-data/character-type';

import moveStyle from './move.style.scss';

type ReduxPropsType = {|
    +reduxProp: boolean,
|};

type ReduxActionType = {
    // +setSmth: (smth: string) => string,
};

const reduxAction: ReduxActionType = {
    // setSmth, // imported from actions
};

type PassedPropsType = {|
    +input: ComboInputType,
|};

type PropsType = {
    ...ReduxPropsType,
    ...ReduxActionType,
    ...PassedPropsType,
};

type StateType = {|
    +state: number,
|};

class Move extends Component<ReduxPropsType, PassedPropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

    render(): Node {
        const view = this;
        const {props, state} = view;

        return <div className={moveStyle.move_wrapper}>{props.input}</div>;
    }
}

const ConnectedComponent = connect<ComponentType<Move>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        reduxProp: true,
    }),
    reduxAction
)(Move);

export {ConnectedComponent as Move};
