// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import menuButtonImagePath from './image/menu-button.svg';
import menuStyle from './menu.style.scss';

type PassedPropsType = {};

type PropsType = PassedPropsType;

type StateType = {|
    +isOpen: boolean,
|};

export class Menu extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            isOpen: false,
        };
    }

    state: StateType;
    props: PropsType;

    handleOpenMenu = () => {
        const view = this;

        view.setState({isOpen: true});
    };

    handleCloseManu = () => {
        const view = this;

        view.setState({isOpen: false});
    };

    render(): Node {
        const view = this;

        return (
            <button
                className={menuStyle.menu_wrapper}
                onClick={view.handleOpenMenu}
                onKeyPress={view.handleOpenMenu}
                type="button"
            >
                <img alt="menu" className={menuStyle.menu_button_icon} src={menuButtonImagePath}/>
            </button>
        );
    }
}
