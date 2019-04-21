// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import manuStyle from './manu.style.scss';

type PassedPropsType = {};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class Menu extends Component<PropsType, StateType> {
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
        return (
            <div className={manuStyle.menu}>
                <h1>menu</h1>
            </div>
        );
    }
}
