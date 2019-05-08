// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import type {ComboInputSingleType, ComboInputType} from '../../../../character-data/character-type';

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

        /*
        switch (platform.name) {
            case platformNameMap.universal:
                return imageInputMapUniversal[input];

            case platformNameMap.playStation:
                return imageInputMapPs[input];

            case platformNameMap.xBox:
                return imageInputMapXBox[input];

            default:
                throw new Error('Can not get image!');
        }
*/
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
