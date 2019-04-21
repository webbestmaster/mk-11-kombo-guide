// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';
import type {CharacterType} from '../../character-data/type';
import {characterList, getCharacterById} from '../../character-data/character-data';
import {PageNotFound} from '../../page/page-not-found/c-page-not-found';
import {TabList} from '../ui/tab-list/c-tab-list';
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

        return getCharacterById(characterId);
    }

    renderTabList(): Node {
        const titleList = [
            'CHARACTER__MOCK_UP_MAN__NAME',
            'CHARACTER__MOCK_UP_MAN__VARIATION__KILLER',
            'CHARACTER__MOCK_UP_MAN__VARIATION__MAN_WTH_GUN',
        ];
        const contentList = [<h1 key={1}>1</h1>, <h1 key={2}>2</h1>, <h1 key={3}>3</h1>];
        const activeIndex = 0;

        return (
            <TabList activeIndex={activeIndex} contentList={contentList} onChange={() => null} titleList={titleList}/>
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

        return (
            <>
                {view.renderTabList()}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                {JSON.stringify(characterData)}
            </>
        );
    }
}
