// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import classNames from 'classnames';

import {Menu} from '../menu/c-menu';
import serviceStyle from '../../../css/service.scss';

import {BackButton} from './back-button/c-back-button';
import headerStyle from './header.style.scss';

type PassedPropsType = {|
    +title: Node,
    +hasBackButton: boolean,
    +hasMenuButton: boolean,
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

    renderHeaderTitle(): Node {
        const view = this;
        const {props} = view;
        const {hasBackButton, title} = props;

        const titleWrapperClassName = classNames(headerStyle.header_title_wrapper, {
            [headerStyle.header_title_wrapper__after_button]: hasBackButton,
        });

        return (
            <div className={titleWrapperClassName}>
                <h1 className={serviceStyle.ellipsis}>{title}</h1>
            </div>
        );
    }

    render(): Node {
        const view = this;
        const {props} = view;
        const {hasBackButton, hasMenuButton} = props;

        return (
            <header className={headerStyle.header_wrapper}>
                {hasBackButton ? <BackButton/> : null}
                {view.renderHeaderTitle()}
                {hasMenuButton ? <Menu/> : null}
            </header>
        );
    }
}
