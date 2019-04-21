// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import {Link} from 'react-router-dom';

import type {CharacterType} from '../../../character-data/type';
import {getCharacterPath} from '../../app/routes';
// import type {ContextRouterType} from '../../type/react-router-dom-v4';
// import style from './style.scss';

type PassedPropsType = {|
    +characterData: CharacterType,
|};

type PropsType = PassedPropsType;

type StateType = void;

export class CharacterListItem extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    render(): Node {
        const view = this;
        const {props} = view;
        const {characterData} = props;

        return <Link to={getCharacterPath(characterData.id)}>{characterData.id}</Link>;
    }
}