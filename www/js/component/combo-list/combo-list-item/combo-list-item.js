// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import type {GlobalStateType} from '../../../redux-store-provider/reducer';

// import type {ContextRouterType} from '../../type/react-router-dom-v4';
import type {ComboType} from '../../../character-data/character-type';

import comboListItemStyle from './combo-list-item.style.scss';

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
    +combo: ComboType,
|};

type PropsType = {
    ...PassedPropsType,
    ...ReduxPropsType,
    ...ReduxActionType,
};

type StateType = {|
    +state: number,
|};

class ComboListItem extends Component<ReduxPropsType, PassedPropsType, StateType> {
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
        const {combo} = props;

        return (
            <div>
                <h1>combo data</h1>
                <div>{JSON.stringify(combo)}</div>
            </div>
        );
    }
}

const ConnectedComponent = connect<ComponentType<ComboListItem>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        reduxProp: true,
    }),
    reduxAction
)(ComboListItem);

export {ConnectedComponent as ComboListItem};
