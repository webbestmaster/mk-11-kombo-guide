// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

// import type {GlobalStateType} from '../../redux-store-provider/reducer';
// import type {ContextRouterType} from '../../type/react-router-dom-v4';
import type {ComboInputSingleType, ComboInputType} from '../../../../character-data/character-type';

import {imageInputMapPc, imageInputMapPs, imageInputMapXBox} from './move-image';

import moveStyle from './move.style.scss';
import type {PlatformType} from './reducer';
import {platformNameMap} from './action';

type ReduxPropsType = {|
    +platform: PlatformType,
|};

type ReduxActionType = {
    // +setSmth: (smth: string) => string,
};

const reduxAction: ReduxActionType = {
    // setSmth, // imported from actions
};

type PassedPropsType = {|
    +input: ComboInputSingleType,
|};

type PropsType = {
    ...ReduxActionType,
    ...ReduxPropsType,
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

    getImagePath(): string {
        const view = this;
        const {props, state} = view;
        const {input, platform} = props;

        switch (platform.name) {
            case platformNameMap.universal:
                return imageInputMapPc[input];

            case platformNameMap.playStation:
                return imageInputMapPs[input];

            case platformNameMap.xBox:
                return imageInputMapXBox[input];

            default:
                throw new Error('Can not get image!');
        }
    }

    render(): Node {
        const view = this;
        const {props, state} = view;
        const {input} = props;

        return <img alt={input} className={moveStyle.move__image} data-input={input} src={view.getImagePath()}/>;
    }
}

const ConnectedComponent = connect<ComponentType<Move>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        platform: state.platform,
    }),
    reduxAction
)(Move);

export {ConnectedComponent as Move};
