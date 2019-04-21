// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {Locale} from '../locale/c-locale';
import type {LangKeyType} from '../locale/translation/type';
import {Menu} from '../menu/c-menu';

import serviceStyle from '../../../css/service.scss';

import {BackButton} from './back-button/c-back-button';
import headerStyle from './header.style.scss';

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
            <header className={headerStyle.header_wrapper}>
                <BackButton/>
                <div className={headerStyle.header_title_wrapper}>
                    <h1 className={serviceStyle.ellipsis}>
                        <Locale stringKey={props.title}/>
                    </h1>
                </div>
                <Menu/>
            </header>
        );
    }
}
