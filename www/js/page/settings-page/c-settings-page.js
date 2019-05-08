// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {Page} from '../../component/page/c-page';
import {Header} from '../../component/header/c-header';
import {Scroll} from '../../component/ui/scroll/c-scroll';
import {Locale} from '../../component/locale/c-locale';

import settingsPageStyle from './settings-page.style.scss';

type PassedPropsType = {};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class SettingsPage extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

    renderSelectPlatform(): [Node, Node] {
        return [
            <h3 className={settingsPageStyle.settings_page__part_header} key="header">
                <Locale stringKey="SETTING__SELECT_PLATFORM"/>
            </h3>,
            <div key="content">content</div>,
        ];
    }

    render(): Node {
        const view = this;

        return (
            <Page>
                <Header hasBackButton hasMenuButton={false} title="SETTING__TITLE"/>
                <Scroll>
                    <div className={settingsPageStyle.settings_page__part}>{view.renderSelectPlatform()}</div>
                </Scroll>
            </Page>
        );
    }
}
