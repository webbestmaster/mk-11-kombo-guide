// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import type {GlobalStateType} from '../../../redux-store-provider/reducer';
import type {ComboInputSingleType} from '../../../move-type/combo-input-type';
import type {ComboType} from '../../../move-type/combo-type';
import serviceStyle from '../../../../css/service.scss';
import {forceResize} from '../../../lib/screen';
import {isString} from '../../../lib/is';
import type {SettingType} from '../../../page/settings-page/reducer';
import {comboViewTypeMap} from '../../../page/settings-page/redux/combo-view-type/action';
import {Locale} from '../../locale/c-locale';
import {moveTypeTranslationMap} from '../../../move-type/move-type';

import comboListItemStyle from './combo-list-item.style.scss';
import {Move} from './move/c-move';
import {FrameData} from './frame-data/c-frame-data';
import {AdditionalInfo} from './additional-info/c-additional-info';

type ReduxPropsType = {|
    +setting: SettingType,
|};

type ReduxActionType = {
    // +setSmth: (smth: string) => string,
};

const reduxAction: ReduxActionType = {
    // setSmth, // imported from actions
};

type PassedPropsType = {|
    +combo: ComboType,
    +isShowFrameData: boolean,
|};

type PropsType = {
    ...ReduxActionType,
    ...ReduxPropsType,
    ...PassedPropsType,
};

type StateType = {|
    +isShowFrameData: boolean,
|};

class ComboListItem extends Component<ReduxPropsType, PassedPropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            isShowFrameData: props.isShowFrameData,
        };
    }

    state: StateType;
    props: PropsType;

    renderMoveItem = (inputType: ComboInputSingleType, index: number): Node => {
        const view = this;
        const {props} = view;
        const {setting} = props;

        return <Move input={inputType} key={index} platformName={setting.platformName}/>;
    };

    renderComboTitle(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;

        return (
            <div className={comboListItemStyle.combo_name}>
                <h3 className={serviceStyle.ellipsis}>{combo.name}</h3>
            </div>
        );
    }

    renderMoveList(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;

        return <div className={comboListItemStyle.combo_move_wrapper}>{combo.sequence.map(this.renderMoveItem)}</div>;
    }

    handleWrapperClick = () => {
        const view = this;
        const {props, state} = view;
        const {isShowFrameData} = state;

        view.setState({isShowFrameData: !isShowFrameData}, forceResize);
    };

    renderEquippedMark(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;
        const {variation} = combo;

        return isString(variation) ? <div className={comboListItemStyle.combo__equipped_mark}>*</div> : null;
    }

    renderComboLikeInGame(): Node {
        const view = this;

        return (
            <>
                {view.renderEquippedMark()}
                {view.renderComboTitle()}
                {view.renderMoveList()}
            </>
        );
    }

    renderComboMoreInfo(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;
        const {frameData, moveData} = combo;
        const {startUp, blockAdvance} = frameData;

        return (
            <>
                {view.renderEquippedMark()}
                <div className={comboListItemStyle.combo_move_more_info_inner_container}>
                    {view.renderMoveList()}
                    {view.renderComboTitle()}
                </div>
                <div className={comboListItemStyle.combo_move_more_info_inner_container}>
                    <p className={comboListItemStyle.combo_move_more_info__shot_frame_data}>
                        {startUp}&nbsp;&nbsp;{blockAdvance}
                    </p>
                    <p className={comboListItemStyle.combo_move_more_info__move_type}>
                        <Locale stringKey={moveTypeTranslationMap[moveData.type]}/>
                    </p>
                </div>
            </>
        );
    }

    renderComboInfo(): [Node, Node] | null {
        const view = this;
        const {props, state} = view;
        const {combo} = props;
        const {isShowFrameData} = state;

        if (!isShowFrameData) {
            return null;
        }

        return [<FrameData combo={combo} key="frame-data"/>, <AdditionalInfo combo={combo} key="additional-info"/>];
    }

    renderWrapper(children: Node): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {deepLevel} = combo;

        const wrapperClassName = classNames(comboListItemStyle.combo_wrapper, {
            [comboListItemStyle.combo_wrapper__sub_combo]: deepLevel === 1,
        });

        return (
            <>
                <div
                    className={wrapperClassName}
                    onClick={view.handleWrapperClick}
                    onKeyPress={view.handleWrapperClick}
                    role="button"
                    tabIndex="0"
                >
                    {children}
                </div>
                {view.renderComboInfo()}
            </>
        );
    }

    render(): Node {
        const view = this;
        const {props} = view;
        const {setting} = props;

        if (setting.comboViewType === comboViewTypeMap.moreInfo) {
            return view.renderWrapper(view.renderComboMoreInfo());
        }

        if (setting.comboViewType === comboViewTypeMap.likeInGame) {
            return view.renderWrapper(view.renderComboLikeInGame());
        }

        throw new Error('can not detect comboViewType');
    }
}

const ConnectedComponent = connect<ComponentType<ComboListItem>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        setting: state.setting,
    }),
    reduxAction
)(ComboListItem);

export {ConnectedComponent as ComboListItem};
