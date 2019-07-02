// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {LangKeyType} from '../../locale/translation/type';
import {Locale} from '../../locale/c-locale';

import formPartStyle from './form-part.style.scss';

type PassedPropsType = {|
    +children: Node | Array<Node>,
    +headerLangKey: LangKeyType,
|};

type PropsType = PassedPropsType;

type StateType = {};

export class FormPart extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {};
    }

    state: StateType;
    props: PropsType;

    render(): Node {
        const view = this;
        const {props} = view;
        const {children, headerLangKey} = props;

        return (
            <div className={formPartStyle.form_part_wrapper}>
                <h4 className={formPartStyle.form_part__header}>
                    <Locale stringKey={headerLangKey}/>
                </h4>
                {children}
            </div>
        );
    }
}
