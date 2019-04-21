// @flow

/* global history */

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import backButtonImagePath from './image/back-button.svg';
import backButtonStyle from './back-button.style.scss';

type PassedPropsType = {};

type PropsType = PassedPropsType;

type StateType = void;

export class BackButton extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    handleRouteBack = (evt: SyntheticEvent<HTMLElement>) => {
        evt.preventDefault();

        history.back();
    };

    render(): Node {
        const view = this;
        const {props} = view;

        return (
            <a
                className={backButtonStyle.back_button_wrapper}
                href="/"
                onClick={view.handleRouteBack}
                onKeyPress={view.handleRouteBack}
            >
                <img alt="back" className={backButtonStyle.back_button_icon} src={backButtonImagePath}/>
            </a>
        );
    }
}
