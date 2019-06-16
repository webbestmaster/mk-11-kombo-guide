// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {ComboInputSingleType} from '../../../../move-type/combo-input-type';

import {
    additionalInputList,
    directionInputList,
    frontInputList,
    moveInputList,
} from '../../../../move-type/combo-input-type';

import moveStyle from './move.style.scss';
import type {PlatformType} from './reducer';
import {getImagePath} from './helper';

type PropsType = {|
    +input: ComboInputSingleType,
    +platform: PlatformType,
|};

type StateType = {|
    +state: number,
|};

export class Move extends Component<PropsType, StateType> {
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
            return <p className={moveStyle.move__text_on_button}>{view.getImagePath()}</p>;
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
