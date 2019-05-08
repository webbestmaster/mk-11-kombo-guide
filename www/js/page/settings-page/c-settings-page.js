// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Page} from '../../component/page/c-page';
import {Header} from '../../component/header/c-header';
import {Scroll} from '../../component/ui/scroll/c-scroll';
import {Locale} from '../../component/locale/c-locale';
import {InputRadio} from '../../component/ui/input/radio/c-input-radio';
import type {PlatformType} from '../../component/combo-list/combo-list-item/move/reducer';
import type {PlatformNameType, SetPlatformTypeType} from '../../component/combo-list/combo-list-item/move/action';
import {setPlatformType, platformNameMap} from '../../component/combo-list/combo-list-item/move/action';

import settingsPageStyle from './settings-page.style.scss';

type ReduxPropsType = {|
    +platform: PlatformType,
|};

type ReduxActionType = {|
    +setPlatformType: (platformName: PlatformNameType) => SetPlatformTypeType,
|};

const reduxAction: ReduxActionType = {
    setPlatformType,
};

type PassedPropsType = {
    // +passedProp: string,
};

type PropsType = {
    ...ReduxPropsType,
    ...ReduxActionType,
    // ...PassedPropsType,
};

type StateType = {|
    +state: number,
|};

class SettingsPage extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

    handleSelectPlatform = (platformName: string) => {
        const view = this;
        const {props, state} = view;

        Object.keys(platformNameMap).forEach((key: PlatformNameType) => {
            const definedPlatformName = platformNameMap[key];

            if (platformName === definedPlatformName) {
                props.setPlatformType(definedPlatformName);
            }
        });
    };

    renderSelectPlatform(): [Node, Node] {
        const view = this;
        const {props, state} = view;
        const {platform} = props;
        const {playStation, xBox, universal} = platformNameMap;
        const currentPlatform = platform.name;

        return [
            <h3 className={settingsPageStyle.settings_page__part_header} key="header">
                <Locale stringKey="SETTING__SELECT_PLATFORM"/>
            </h3>,
            <div key="content">
                <InputRadio
                    isChecked={currentPlatform === playStation}
                    name="platform"
                    onSelect={view.handleSelectPlatform}
                    value={playStation}
                >
                    playStation
                </InputRadio>
                <InputRadio
                    isChecked={currentPlatform === xBox}
                    name="platform"
                    onSelect={view.handleSelectPlatform}
                    value={xBox}
                >
                    xBox
                </InputRadio>
                <InputRadio
                    isChecked={currentPlatform === universal}
                    name="platform"
                    onSelect={view.handleSelectPlatform}
                    value={universal}
                >
                    universal
                </InputRadio>
            </div>,
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

const ConnectedComponent = connect<ComponentType<SettingsPage>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        platform: state.platform,
    }),
    reduxAction
)(SettingsPage);

export {ConnectedComponent as SettingsPage};
