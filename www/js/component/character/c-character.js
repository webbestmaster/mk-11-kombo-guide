// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';
import type {CharacterType} from '../../character-data/type';
import {characterList} from '../../character-data/character-data';
import {PageNotFound} from '../../page/page-not-found/c-page-not-found';
// import style from './style.scss';

type PassedPropsType = {|
    +characterId: string,
|};

type PropsType = PassedPropsType;

type StateType = void;

export class Character extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    getCharacterData(): CharacterType | null {
        const view = this;
        const {props} = view;
        const {characterId} = props;

        return (
            characterList.find(
                (characterData: CharacterType): boolean => {
                    return characterData.id === characterId;
                }
            ) || null
        );
    }

    render(): Node {
        const view = this;
        const characterData = view.getCharacterData();

        if (characterData === null) {
            console.error('You should pass valid character id!');
            console.error(view.props.characterId);
            return <h1>You should pass valid character id!</h1>;
        }

        return <div>{JSON.stringify(characterData)}</div>;
    }
}
