// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {ComboType} from '../../move-type/combo-type';

import comboListStyle from './combo-list.style.scss';
import {ComboListItem} from './combo-list-item/c-combo-list-item';

type PassedPropsType = {|
    +list: Array<ComboType>,
|};

type PropsType = PassedPropsType;

type StateType = void;

export class ComboList extends Component<PropsType, StateType> {
    static renderComboItem(combo: ComboType, index: number): Node {
        return (
            <li className={comboListStyle.list_item} key={index}>
                <ComboListItem combo={combo} isShowFrameData={false}/>
            </li>
        );
    }

    state: StateType;
    props: PropsType;

    render(): Node {
        const view = this;
        const {props, state} = view;

        return <ul className={comboListStyle.list_wrapper}>{props.list.map(ComboList.renderComboItem)}</ul>;
    }
}
