// @flow

/* global document */

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {selector} from '../../const';

import {routes} from '../app/routes';

import menuOpenButtonImagePath from './image/menu-button.svg';
import menuCloseButtonImagePath from './image/close-button.svg';
import menuStyle from './menu.style.scss';

type PassedPropsType = {};

type PropsType = PassedPropsType;

type StateType = {
    // +isOpen: boolean,
};

export class Menu extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            // isOpen: false,
        };
    }

    state: StateType;
    props: PropsType;

    /*
        handleOpenMenu = () => {
            const view = this;

            view.setState({isOpen: true});
        };

        handleCloseMenu = () => {
            const view = this;

            view.setState({isOpen: false});
        };

        renderMenuContent(): Node {
            const view = this;
            const {state} = view;
            const appWrapper = document.querySelector(selector.appWrapper);

            if (!state.isOpen || !appWrapper) {
                return null;
            }

            return ReactDOM.createPortal(view.getMenuContent(), appWrapper);
        }

        getMenuContent(): Node {
            return <h1>menu content is here</h1>;
        }
    */

    renderMenuButton(): Node {
        // const view = this;
        // const {state} = view;
        // const {isOpen} = state;

        /*
        if (isOpen) {
            return (
                <button
                    className={menuStyle.menu_wrapper}
                    onClick={view.handleCloseMenu}
                    onKeyPress={view.handleCloseMenu}
                    type="button"
                >
                    <img alt="close menu" className={menuStyle.menu_button_icon} src={menuCloseButtonImagePath}/>
                </button>
            );
        }
*/

        return (
            <Link
                className={menuStyle.menu_wrapper}
                to={routes.settings}
                // onClick={view.handleOpenMenu}
                // onKeyPress={view.handleOpenMenu}
                // type="button"
            >
                <img alt="open settings" className={menuStyle.menu_button_icon} src={menuOpenButtonImagePath}/>
            </Link>
        );
    }

    render(): Node {
        const view = this;

        return (
            <>
                {view.renderMenuButton()}
                {/* {view.renderMenuContent()}*/}
            </>
        );
    }
}
