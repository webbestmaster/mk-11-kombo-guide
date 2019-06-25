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
import type {PlatformNameType} from '../../../../page/settings-page/redux/platform-name/action';
import {platformNameMap} from '../../../../page/settings-page/redux/platform-name/action';

import moveStyle from './move.style.scss';
import {getImagePath} from './helper';

type PropsType = {|
    +input: ComboInputSingleType,
    +platformName: PlatformNameType,
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
        const {input, platformName} = props;

        return getImagePath(platformName, input);
    }

    render1234(): Node {
        const view = this;
        const {props, state} = view;
        const {input, platformName} = props;
        const {playStation, xBox, universal} = platformNameMap;

        switch (platformName) {
            case playStation:
                return (
                    <p
                        className={[
                            moveStyle.move__1234_text_on_button,
                            moveStyle.move__1234_text_on_button__playstation,
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
                            moveStyle.move__1234_text_on_button,
                            moveStyle.move__1234_text_on_button__x_box,
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
                            moveStyle.move__1234_text_on_button,
                            moveStyle.move__1234_text_on_button__universal,
                        ].join(' ')}
                    >
                        {view.getImagePath()}
                    </p>
                );
            default:
                console.error('Can not detect platform name:', platformName);
                throw new Error('Can not detect platform name');
        }
    }

    render(): Node {
        const view = this;
        const {props, state} = view;
        const {input} = props;

        if (directionInputList.includes(input)) {
            return <p className={moveStyle.move__direction}>{view.getImagePath()}</p>;
            // return <img alt={input} className={moveStyle.move__direction} src={view.getImagePath()}/>;
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
