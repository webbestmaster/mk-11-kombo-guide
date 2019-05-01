// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {ComboType} from '../../../../character-data/character-type';

import frameDataStyle from './frame-data.style.scss';

type PassedPropsType = {|
    +combo: ComboType,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class FrameData extends Component<PropsType, StateType> {
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
        const {props} = view;
        const {combo} = props;

        return <div className={frameDataStyle.frame_data_wrapper}>{JSON.stringify(combo.frameData)}</div>;
    }
}
