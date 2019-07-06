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
import {InputCheckbox} from '../../component/ui/input/checkbox/c-input-checkbox';
import {FormPart} from '../../component/ui/form-part/c-form-part';
import {frost} from '../../character-data/character/frost/data';
import {ComboListItem} from '../../component/combo-list/combo-list-item/c-combo-list-item';
import {forceResize} from '../../lib/screen';

import {comboViewTypeMap, setComboViewType} from './redux/combo-view-type/action';
import {frameDataViewTypeMap, setFrameDataViewType} from './redux/frame-data-view-type/action';
import {platformNameMap, setPlatformName} from './redux/platform-name/action';
import settingsPageStyle from './settings-page.style.scss';
import type {SettingType} from './reducer';
import type {IsShowFlawlessDataType, SetShowFlawlessDataType} from './redux/show-flawless-data/action';
import type {PlatformNameType, SetPlatformTypeType} from './redux/platform-name/action';
import {setShowFlawlessData} from './redux/show-flawless-data/action';
import type {FrameDataViewType, SetFrameDataViewTypeType} from './redux/frame-data-view-type/action';
import type {ComboViewType, SetComboViewTypeType} from './redux/combo-view-type/action';

const {i1n, i2n, i3n, i4n, iL1, iL2, iR1, iR2} = inputMoveMap;

const inputListLine1: Array<ComboInputSingleType> = [i1n, i2n, i3n, i4n];
const inputListLine2: Array<ComboInputSingleType> = [iL1, iL2, iR1, iR2];

type ReduxPropsType = {|
    +setting: SettingType,
|};

type ReduxActionType = {|
    +setPlatformName: (platformName: PlatformNameType) => SetPlatformTypeType,
    +setShowFlawlessData: (isShowFlawlessData: IsShowFlawlessDataType) => SetShowFlawlessDataType,
    +setComboViewType: (comboViewType: ComboViewType) => SetComboViewTypeType,
    +setFrameDataViewType: (frameDataViewType: FrameDataViewType) => SetFrameDataViewTypeType,
|};

const reduxAction: ReduxActionType = {
    setPlatformName,
    setShowFlawlessData,
    setComboViewType,
    setFrameDataViewType,
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

    async componentDidUpdate() {
        await forceResize();
    }

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

    handleVisibleFlawless = (isVisible: IsShowFlawlessDataType) => {
        const view = this;
        const {props, state} = view;

        props.setShowFlawlessData(isVisible);
    };

    handleSelectComboViewType = (comboViewType: string) => {
        const view = this;
        const {props, state} = view;

        Object.keys(comboViewTypeMap).forEach((key: ComboViewType) => {
            const definedComboViewType = comboViewTypeMap[key];

            if (comboViewType === definedComboViewType) {
                props.setComboViewType(definedComboViewType);
            }
        });
    };

    handleSelectFrameDataViewType = (frameDataViewType: string) => {
        const view = this;
        const {props, state} = view;

        Object.keys(frameDataViewTypeMap).forEach((key: FrameDataViewType) => {
            const definedFrameDataViewType = frameDataViewTypeMap[key];

            if (frameDataViewType === definedFrameDataViewType) {
                props.setFrameDataViewType(definedFrameDataViewType);
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
        const {setting} = props;
        const {playStation, xBox, universal} = platformNameMap;
        const currentPlatform = setting.platformName;

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
                            name="platform-name"
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

    renderViewSettingList(): Node {
        const view = this;
        const {props, state} = view;
        const {setting} = props;
        const {comboViewType, frameDataViewType} = setting;
        const isFrameDataLikeInGame = frameDataViewType === frameDataViewTypeMap.likeInGame;

        return (
            <>
                <h3 className={settingsPageStyle.settings_page__part_header}>
                    <Locale stringKey="SETTING__VIEW_SETTING__HEADER"/>
                </h3>
                <FormPart headerLangKey="SETTING__INPUT_DATA_ITEM_TYPE">
                    <InputRadio
                        isDefaultChecked={comboViewType === comboViewTypeMap.moreInfo}
                        key={comboViewTypeMap.moreInfo}
                        name="combo-view-type"
                        onSelect={view.handleSelectComboViewType}
                        value={comboViewTypeMap.moreInfo}
                    >
                        <Locale stringKey="SETTING__INPUT_DATA_ITEM_TYPE__MORE_INFO"/>
                    </InputRadio>
                    <InputRadio
                        isDefaultChecked={comboViewType === comboViewTypeMap.likeInGame}
                        key={comboViewTypeMap.likeInGame}
                        name="combo-view-type"
                        onSelect={view.handleSelectComboViewType}
                        value={comboViewTypeMap.likeInGame}
                    >
                        <Locale stringKey="SETTING__INPUT_DATA_ITEM_TYPE__LIKE_IN_GAME"/>
                    </InputRadio>
                </FormPart>
                <FormPart headerLangKey="SETTING__FRAME_DATA_TABLE_TYPE">
                    <InputRadio
                        isDefaultChecked={frameDataViewType === frameDataViewTypeMap.compact}
                        key={frameDataViewTypeMap.compact}
                        name="frame-data-view-type"
                        onSelect={view.handleSelectFrameDataViewType}
                        value={frameDataViewTypeMap.compact}
                    >
                        <Locale stringKey="SETTING__FRAME_DATA_TABLE__COMPACT"/>
                    </InputRadio>
                    <InputRadio
                        isDefaultChecked={frameDataViewType === frameDataViewTypeMap.likeInGame}
                        key={frameDataViewTypeMap.likeInGame}
                        name="frame-data-view-type"
                        onSelect={view.handleSelectFrameDataViewType}
                        value={frameDataViewTypeMap.likeInGame}
                    >
                        <Locale stringKey="SETTING__FRAME_DATA_TABLE__LIKE_IN_GAME"/>
                    </InputRadio>
                </FormPart>
                <FormPart headerLangKey="SETTING__OTHER">
                    <InputCheckbox
                        isDefaultChecked={setting.isShowFlawlessData || isFrameDataLikeInGame}
                        isDisabled={isFrameDataLikeInGame}
                        key={String(isFrameDataLikeInGame)}
                        name="show-flawless-frame-data"
                        onChange={view.handleVisibleFlawless}
                    >
                        <Locale stringKey="SETTING__SHOW_FLAWLESS_FRAME_DATA"/>
                    </InputCheckbox>
                </FormPart>
            </>
        );
    }

    renderResultView(): Node {
        const view = this;

        return (
            <>
                <h3 className={settingsPageStyle.settings_page__part_header__free}>
                    <Locale stringKey="SETTING__SETTINGS_RESULT"/>
                </h3>
                <ComboListItem combo={frost.move.comboList[13]} isShowFrameData/>
            </>
        );
    }

    renderReportABug(): Node {
        const view = this;

        return (
            <>
                <h3 className={settingsPageStyle.settings_page__part_header}>
                    <Locale stringKey="SETTING__REPORT_A_BUG"/>
                </h3>
                <a
                    className={settingsPageStyle.settings_page__external_link}
                    href={appConst.bugReport.form.character.url}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Locale stringKey="SETTING__REPORT_CHARACTER_BUG"/>
                </a>
                <a
                    className={settingsPageStyle.settings_page__external_link}
                    href={appConst.bugReport.form.app.url}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Locale stringKey="SETTING__REPORT_APP_BUG"/>
                </a>
            </>
        );
    }

    render(): Node {
        const view = this;

        return (
            <Page className={settingsPageStyle.settings_page__wrapper}>
                <Header hasBackButton hasMenuButton={false} title={<Locale stringKey="SETTING__TITLE"/>}/>
                <Scroll slideClassName={settingsPageStyle.page_scroll__slide}>
                    <div className={settingsPageStyle.settings_page__part}>{view.renderSelectPlatform()}</div>
                    <div className={settingsPageStyle.settings_page__part}>{view.renderViewSettingList()}</div>
                    {view.renderResultView()}
                    <div className={settingsPageStyle.settings_page__part}>{view.renderReportABug()}</div>
                </Scroll>
            </Page>
        );
    }
}

const ConnectedComponent = connect<ComponentType<SettingsPage>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        setting: state.setting,
    }),
    reduxAction
)(SettingsPage);

export {ConnectedComponent as SettingsPage};
