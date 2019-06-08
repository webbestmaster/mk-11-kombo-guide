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

import settingsPageStyle from './settings-page.style.scss';

const {i1n, i2n, i3n, i4n, iL1, iL2, iR1, iR2} = inputMoveMap;

const inputList: Array<ComboInputSingleType> = [i1n, i2n, i3n, i4n, iL1, iL2, iR1, iR2];

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
                    return (
                        <img
                            alt={inputType}
                            className={moveStyle.move__image}
                            data-input={inputType}
                            key={inputType}
                            src={getImagePath(platformName, inputType)}
                        />
                    );
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
                <Locale stringKey="SETTING__SELECT_PLATFORM"/>
            </h3>,
            <div key="content">
                {[playStation, xBox, universal].map((platformName: PlatformNameType): Node => {
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
