// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {characterList} from '../../character-data/character-data';
import type {CharacterType} from '../../character-data/type';

import {CharacterListItem} from './character-list-item/c-character-list-item';
// import style from './style.scss';

type PropsType = {};

type StateType = void;

export class CharacterList extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    render(): Array<Node> {
        return characterList.map(
            (characterData: CharacterType): Node => {
                return <CharacterListItem characterData={characterData} key={characterData.id}/>;
            }
        );
    }
}
