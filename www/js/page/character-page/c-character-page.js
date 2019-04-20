// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';
import {isString} from '../../lib/is';
import {Character} from '../../component/character/c-character';
import {Page} from '../../component/page/c-page';
import {Header} from '../../component/header/c-header';
import {Scroll} from '../../component/ui/scroll/c-scroll';
// import style from './style.scss';

type PassedPropsType = {};

type PropsType = ContextRouterType;

type StateType = void;

export class CharacterPage extends Component<PropsType, StateType> {
    state: StateType;
    props: PropsType;

    getCharacterId(): string | null {
        const view = this;
        const {props} = view;
        const {match} = props;
        const {params} = match;
        const {characterId} = params;

        return isString(characterId) ? characterId : null;
    }

    render(): Node {
        const view = this;
        const characterId = view.getCharacterId();

        if (characterId === null) {
            console.error('You should pass valid character id!');
            return <h1>You should pass valid character id!</h1>;
        }

        return (
            <Page>
                <Header hasBackButton title="APP_NAME"/>
                <Scroll>
                    <Character characterId={characterId}/>
                </Scroll>
            </Page>
        );
    }
}
