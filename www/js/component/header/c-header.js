// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {Locale} from '../locale/c-locale';
import type {LangKeyType} from '../locale/translation/type';

import {Menu} from './menu/c-menu';

// import type {ContextRouterType} from '../../type/react-router-dom-v4';

type PassedPropsType = {|
    +title: LangKeyType,
    +hasBackButton: boolean,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class Header extends Component<PropsType, StateType> {
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

        return (
            <div>
                <header>
                    <div>| back button |</div>
                    <Locale stringKey={props.title}/>
                    <div>| open menu button |</div>
                </header>
                <Menu/>
            </div>
        );
    }
}
