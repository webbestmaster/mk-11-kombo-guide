// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {characterList} from '../../character-data/character-data';
import type {CharacterType} from '../../character-data/character-type';

import {CharacterListItem} from './character-list-item/c-character-list-item';
// import style from './style.scss';

type PropsType = {};

type StateType = void;

export class CharacterList extends Component<PropsType, StateType> {
    static renderListItem(characterData: CharacterType): Node {
        return (
            <li key={characterData.id}>
                <CharacterListItem characterData={characterData}/>
            </li>
        );
    }

    state: StateType;
    props: PropsType;

    render(): Node {
        return <ul>{characterList.map(CharacterList.renderListItem)}</ul>;
    }
}
