// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';

import type {ComboType} from '../../move-type/combo-type';

import comboListStyle from './combo-list.style.scss';
import {ComboListItem} from './combo-list-item/c-combo-list-item';

type PassedPropsType = {|
    +list: Array<ComboType>,
|};

type PropsType = PassedPropsType;

type StateType = void;

export class ComboList extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    renderComboItem(combo: ComboType): Node {
        return (
            <li className={comboListStyle.list_item} key={JSON.stringify(combo)}>
                <ComboListItem combo={combo}/>
            </li>
        );
    }

    render(): Node {
        const view = this;
        const {props, state} = view;

        return <ul className={comboListStyle.list_wrapper}>{props.list.map(view.renderComboItem)}</ul>;
    }
}
