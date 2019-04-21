// @flow

/* global BUILD_DATE */

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import type {ContextRouterType} from '../../type/react-router-dom-v4';

import {Page} from '../../component/page/c-page';

import {Header} from '../../component/header/c-header';
import {Scroll} from '../../component/ui/scroll/c-scroll';
import {CharacterList} from '../../component/character-list/c-character-list';

type PropsType = ContextRouterType;

class Mega<S, N: number> {
    constructor(message: S) {
        console.log(message);
    }
}

export class HomePage extends Component<void, null> {
    state: null;

    componentDidMount() {

        /*
        const newModel = new MainModel<'prop', number>('prop', 1);

        const onChangeProps = (oldValue: number | void, newValue: number | void) => {
            console.log('newModel.attr');
            console.log(oldValue, newValue);
            console.log(newModel.attr);
        };

        newModel.onChange('prop', onChangeProps);

        newModel.trigger('prop');
        newModel.trigger('prop');
        newModel.trigger('prop');

        newModel.offChange('prop', onChangeProps);

        // newModel.set({prop: 11});
        newModel.set('prop', 12);
        newModel.set('prop', 13);

        console.log(newModel);

        const mega = new Mega(1);

        console.log(mega);

        console.log(this.props.match);
        */
    }

    props: PropsType;

    handleMouseOver = () => {
        const view = this;

        console.log(view.state);
    };

    loadAsyncLoadTestComponent = async (): Promise<Node> => {
        const {AsyncLoadTest} = await import(
            /* webpackChunkName: 'async-load-test' */ '../../component/test/c-async-load-test'
        );

        return <AsyncLoadTest/>;
    };

    render(): Node {
        const view = this;
        const {props, state} = view;

        return (
            <Page>
                <Header hasBackButton title="APP_NAME"/>
                <Scroll>
                    <CharacterList/>
                </Scroll>
            </Page>
        );
    }
}