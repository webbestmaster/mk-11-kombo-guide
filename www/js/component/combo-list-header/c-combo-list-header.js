// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {LangKeyType} from '../locale/translation/type';
import serviceStyle from '../../../css/service.scss';
import {Locale} from '../locale/c-locale';

import comboListHeaderStyle from './combo-list-header.style.scss';

type PassedPropsType = {|
    +title: LangKeyType,
|};

type PropsType = {
    ...PassedPropsType,
};

type StateType = {|
    +state: number,
|};

export class ComboListHeader extends Component<PropsType, StateType> {
    props: PropsType;
    state: StateType;

    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    render(): Node {
        const view = this;
        const {props} = view;
        const {title} = props;

        return (
            <div className={comboListHeaderStyle.header_wrapper}>
                <h4 className={serviceStyle.ellipsis}>
                    <Locale stringKey={title}/>
                </h4>
            </div>
        );
    }
}
