// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {Page} from '../../component/page/c-page';
import {Header} from '../../component/header/c-header';
import {Scroll} from '../../component/ui/scroll/c-scroll';
import {Locale} from '../../component/locale/c-locale';
import {InputRadio} from '../../component/ui/input/radio/c-input-radio';
import type {ComboInputSingleType} from '../../move-type/combo-input-type';
import {inputMoveMap} from '../../move-type/combo-input-type';
import {Move} from '../../component/combo-list/combo-list-item/move/c-move';
import {appConst} from '../../const';

import type {PlatformNameType, SetPlatformTypeType} from './action';
import {platformNameMap, setPlatformName} from './action';
import settingsPageStyle from './settings-page.style.scss';

const {i1n, i2n, i3n, i4n, iL1, iL2, iR1, iR2} = inputMoveMap;

const inputListLine1: Array<ComboInputSingleType> = [i1n, i2n, i3n, i4n];
const inputListLine2: Array<ComboInputSingleType> = [iL1, iL2, iR1, iR2];

type ReduxPropsType = {|
    +platformName: PlatformNameType,
|};

type ReduxActionType = {|
    +setPlatformName: (platformName: PlatformNameType) => SetPlatformTypeType,
|};

const reduxAction: ReduxActionType = {
    setPlatformName,
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
                props.setPlatformName(definedPlatformName);
            }
        });
    };

    renderSelectPlatformInputList(platformName: PlatformNameType): Node {
        return (
            <div className={settingsPageStyle.settings_page__platform_input_wrapper}>
                <div className={settingsPageStyle.settings_page__platform_input_list_wrapper}>
                    {inputListLine1.map((inputType: ComboInputSingleType): Node => {
                        return <Move input={inputType} key={inputType} platformName={platformName}/>;
                    })}
                </div>
                <div className={settingsPageStyle.settings_page__platform_input_list_wrapper}>
                    {inputListLine2.map((inputType: ComboInputSingleType): Node => {
                        return <Move input={inputType} key={inputType} platformName={platformName}/>;
                    })}
                </div>
            </div>
        );
    }

    renderSelectPlatform(): [Node, Node] {
        const view = this;
        const {props, state} = view;
        const {playStation, xBox, universal} = platformNameMap;
        const currentPlatform = props.platformName;

        return [
            <h3 className={settingsPageStyle.settings_page__part_header} key="header">
                <Locale stringKey="SETTING__CHOOSE_A_PLATFORM"/>
            </h3>,
            <Fragment key="content">
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
            </Fragment>,
        ];
    }

    renderReportABug(): [Node, Node] {
        const view = this;
        const {props, state} = view;
        const {platformName} = props;
        const {playStation, xBox, universal} = platformNameMap;
        const currentPlatform = platformName;

        return [
            <h3 className={settingsPageStyle.settings_page__part_header} key="header">
                <Locale stringKey="SETTING__REPORT_A_BUG"/>
            </h3>,
            <Fragment key="content">
                <a
                    className={settingsPageStyle.settings_page__external_link}
                    href={appConst.bugReport.form.url}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Locale stringKey="SETTING__REPORT_A_BUG"/>
                </a>
            </Fragment>,
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
        platformName: state.setting.platformName,
    }),
    reduxAction
)(SettingsPage);

export {ConnectedComponent as SettingsPage};
