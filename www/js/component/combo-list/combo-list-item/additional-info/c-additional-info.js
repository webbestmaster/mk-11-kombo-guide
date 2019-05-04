// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ComboType, MoveFeatureDataType, MoveFeatureType} from '../../../../character-data/character-type';

import {moveFeatureDataMap} from '../../../../character-data/character-type';
import {Locale} from '../../../locale/c-locale';

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

    renderItem = (moveFeatureType: MoveFeatureType): Node => {
        const getMoveFeatureData = moveFeatureDataMap[moveFeatureType];

        return (
            <div key={getMoveFeatureData.name}>
                <Locale stringKey={getMoveFeatureData.name}/>
            </div>
        );
    };

    render(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {moveFeatureList} = combo;

        if (moveFeatureList.length === 0) {
            return null;
        }

        return <div>{moveFeatureList.map(view.renderItem)}</div>;
    }
}
