// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import type {CharacterType} from '../../../character-data/character-type';
import {getCharacterPath} from '../../app/routes';
// import type {ContextRouterType} from '../../type/react-router-dom-v4';
import serviceStyle from '../../../../css/service.scss';

import characterListItemStyle from './character-list-item.style.scss';

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

        return (
            <Link className={characterListItemStyle.character_wrapper} to={getCharacterPath(characterData.id)}>
                <img
                    alt={characterData.name}
                    className={characterListItemStyle.character_image}
                    src={characterData.imagePath}
                />
                <div className={characterListItemStyle.character_name}>
                    <p className={serviceStyle.ellipsis}>{characterData.name}</p>
                </div>
            </Link>
        );
    }
}
