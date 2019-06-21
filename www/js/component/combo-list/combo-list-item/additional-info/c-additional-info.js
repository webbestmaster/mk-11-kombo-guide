// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ComboType} from '../../../../move-type/combo-type';
import {Locale} from '../../../locale/c-locale';
import type {PropertyNameType} from '../../../../move-type/move-property-type';
import {propertyNameTranslationMap} from '../../../../move-type/move-property-type';

import additionalInfoStyle from './additional-info.style.scss';

type PassedPropsType = {|
    +combo: ComboType,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class AdditionalInfo extends Component<PropsType, StateType> {
    static renderPropertyItem(propertyName: PropertyNameType, index: number): Node {
        const propertyNode = <Locale stringKey={propertyNameTranslationMap[propertyName]}/>;
        const key = `${propertyName} - ${index}`;

        if (index === 0) {
            return <Fragment key={key}>{propertyNode}</Fragment>;
        }

        return <Fragment key={key}>, {propertyNode}</Fragment>;
    }

    static renderDescriptionItem(description: string, index: number): Node {
        const key = `${description} - ${index}`;

        if (index === 0) {
            return <Fragment key={key}>{description}</Fragment>;
        }

        return (
            <Fragment key={key}>
                <br/>
                {description}
            </Fragment>
        );
    }

    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

    renderPropertyList(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {propertyList} = combo;

        if (propertyList.length === 0) {
            return null;
        }

        return (
            <p className={additionalInfoStyle.additional_info__p}>
                <Locale stringKey="ADDITIONAL_INFO__PROPERTIES"/>
                {': '}
                {propertyList.map(AdditionalInfo.renderPropertyItem)}
            </p>
        );
    }

    renderVariation(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {variation} = combo;

        if (variation === null) {
            return null;
        }

        return (
            <p className={additionalInfoStyle.additional_info__p}>
                <Locale stringKey="ADDITIONAL_INFO__VARIATION"/>
                {`: ${variation}`}
            </p>
        );
    }

    renderDescription(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {description} = combo;

        if (description.length === 0) {
            return null;
        }

        return (
            <div className={additionalInfoStyle.additional_info__p}>
                <Locale stringKey="ADDITIONAL_INFO__DESCRIPTION"/>:
                <p className={additionalInfoStyle.additional_info__p}>
                    {description.map(AdditionalInfo.renderDescriptionItem)}
                </p>
            </div>
        );
    }

    render(): Node {
        const view = this;

        return (
            <div className={additionalInfoStyle.additional_info_wrapper}>
                {view.renderVariation()}
                {view.renderPropertyList()}
                {view.renderDescription()}
            </div>
        );
    }
}
