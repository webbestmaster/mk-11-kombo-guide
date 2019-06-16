// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import type {ComboInputSingleType} from '../../../../move-type/combo-input-type';

import {
    additionalInputList,
    directionInputList,
    frontInputList,
    inputMoveMap,
    moveInputList,
} from '../../../../move-type/combo-input-type';

import {imageInputMapUniversal, imageInputMapPs, imageInputMapXBox} from './move-image';
import moveStyle from './move.style.scss';
import type {PlatformType} from './reducer';
import {platformNameMap} from './action';
import {getImagePath} from './helper';

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
        const {props} = view;
        const {input, platform} = props;

        return getImagePath(platform.name, input);
    }

    render(): Node {
        const view = this;
        const {props, state} = view;
        const {input} = props;

        if (directionInputList.includes(input)) {
            return <img alt={input} className={moveStyle.move__direction} src={view.getImagePath()}/>;
        }

        if (moveInputList.includes(input)) {
            return <img alt={input} className={moveStyle.move__move} src={view.getImagePath()}/>;
        }

        if (frontInputList.includes(input)) {
            return <p className={moveStyle.move__text_on_button}>{input.toUpperCase()}</p>;
        }

        if (additionalInputList.includes(input)) {
            return (
                <p className={moveStyle.move__text} data-input={input}>
                    {input}
                </p>
            );
        }

        console.error('Can not detect input type:', input);
        throw new Error('Can not detect input type');
    }
}

const ConnectedComponent = connect<ComponentType<Move>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        platform: state.platform,
    }),
    reduxAction
)(Move);

export {ConnectedComponent as Move};
