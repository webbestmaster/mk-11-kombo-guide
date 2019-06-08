// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import {Locale} from '../../../locale/c-locale';

import type {ComboType} from '../../../../move-type/combo-type';

import additionalInfoStyle from './additional-info.style.scss';

type PassedPropsType = {|
    +combo: ComboType,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class AdditionalInfo extends Component<PropsType, StateType> {
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
        const {combo} = props;

        return (
            <>
                <div>propertyList: {JSON.stringify(combo.propertyList)}</div>
                <div>variation: {combo.variation}</div>
            </>
        );
    }
}
