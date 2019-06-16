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
import {platformNameMap} from './action';

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

    render1234(): Node {
        const view = this;
        const {props, state} = view;
        const {input, platform} = props;
        const {playStation, xBox, universal} = platformNameMap;

        switch (platform.name) {
            case playStation:
                return (
                    <p
                        className={[
                            moveStyle.move__move_text_on_button,
                            moveStyle.move__move_text_on_button__playstation,
                        ].join(' ')}
                        data-input={input}
                    >
                        {view.getImagePath()}
                    </p>
                );
            case xBox:
                return (
                    <p
                        className={[
                            moveStyle.move__move_text_on_button,
                            moveStyle.move__move_text_on_button__x_box,
                        ].join(' ')}
                        data-input={input}
                    >
                        {view.getImagePath()}
                    </p>
                );
            case universal:
                return (
                    <p
                        className={[
                            moveStyle.move__move_text_on_button,
                            moveStyle.move__move_text_on_button__universal,
                        ].join(' ')}
                    >
                        {view.getImagePath()}
                    </p>
                );
            default:
                console.error('Can not detect platform name:', platform);
                throw new Error('Can not detect platform name');
        }
    }

    render(): Node {
        const view = this;
        const {props, state} = view;
        const {input} = props;

        if (directionInputList.includes(input)) {
            return <img alt={input} className={moveStyle.move__direction} src={view.getImagePath()}/>;
        }

        if (moveInputList.includes(input)) {
            return view.render1234();
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
