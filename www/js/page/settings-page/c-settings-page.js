// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import settingsPageStyle from './settings-page.style.scss';

type PassedPropsType = {};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class SettingsPage extends Component<PropsType, StateType> {
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
            <div>
                <h1>settings</h1>
            </div>
        );
    }
}
