// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';

import type {ComboType} from '../../character-data/character-type';

import comboListStyle from './combo-list.style.scss';
import {ComboListItem} from './combo-list-item/combo-list-item';

type PassedPropsType = {|
    +list: Array<ComboType>,
|};

type PropsType = PassedPropsType;

type StateType = void;

export class ComboList extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    renderComboItem(combo: ComboType) {
        return <ComboListItem combo={combo} key={JSON.stringify(combo)}/>;
    }

    render(): Node {
        const view = this;
        const {props, state} = view;

        return <div>{props.list.map(view.renderComboItem)}</div>;
    }
}
