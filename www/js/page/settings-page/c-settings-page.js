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
import comboListItemStyle from '../../component/combo-list/combo-list-item/combo-list-item.style.scss';
import moveStyle from '../../component/combo-list/combo-list-item/move/move.style.scss';
import {inputMoveMap} from '../../move-type/combo-input-type';

import {getImagePath} from '../../component/combo-list/combo-list-item/move/helper';

import type {ComboInputSingleType} from '../../move-type/combo-input-type';

import {Move} from '../../component/combo-list/combo-list-item/move/c-move';

import settingsPageStyle from './settings-page.style.scss';

const {i1n, i2n, i3n, i4n, iL1, iL2, iR1, iR2} = inputMoveMap;

const inputList: Array<ComboInputSingleType> = [i1n, i2n, i3n, i4n];

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

    renderSelectPlatformInputList(platformName: PlatformNameType): Node {
        return (
            <div className={comboListItemStyle.combo_move_wrapper}>
                {inputList.map((inputType: ComboInputSingleType): Node => {
                    return <Move input={inputType} key={inputType} platform={{name: platformName}}/>;
                })}
            </div>
        );
    }

    renderSelectPlatform(): [Node, Node] {
        const view = this;
        const {props, state} = view;
        const {platform} = props;
        const {playStation, xBox, universal} = platformNameMap;
        const currentPlatform = platform.name;

        return [
            <h3 className={settingsPageStyle.settings_page__part_header} key="header">
                <Locale stringKey="SETTING__CHOOSE_A_PLATFORM"/>
            </h3>,
            <div key="content">
                {[universal, playStation, xBox].map((platformName: PlatformNameType): Node => {
                    return (
                        <InputRadio
                            isDefaultChecked={currentPlatform === platformName}
                            key={platformName}
                            name="platform"
                            onSelect={view.handleSelectPlatform}
                            value={platformName}
                        >
                            {view.renderSelectPlatformInputList(platformName)}
                        </InputRadio>
                    );
                })}
            </div>,
        ];
    }

    renderReportABug(): [Node, Node] {
        const view = this;
        const {props, state} = view;
        const {platform} = props;
        const {playStation, xBox, universal} = platformNameMap;
        const currentPlatform = platform.name;

        return [
            <h3 className={settingsPageStyle.settings_page__part_header} key="header">
                <Locale stringKey="SETTING__REPORT_A_BUG"/>
            </h3>,
            <div key="content">
                <a className={settingsPageStyle.settings_page__external_link} href="/report-a-bug" target="_blank">
                    <Locale stringKey="SETTING__REPORT_A_BUG"/>
                </a>
            </div>,
        ];
    }

    render(): Node {
        const view = this;

        return (
            <Page className={settingsPageStyle.settings_page__wrapper}>
                <Header hasBackButton hasMenuButton={false} title={<Locale stringKey="SETTING__TITLE"/>}/>
                <Scroll>
                    <div className={settingsPageStyle.settings_page__part}>{view.renderSelectPlatform()}</div>
                    <div className={settingsPageStyle.settings_page__part}>{view.renderReportABug()}</div>
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
