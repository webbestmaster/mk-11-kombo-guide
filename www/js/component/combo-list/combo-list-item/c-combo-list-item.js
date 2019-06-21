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
import {forceResize} from '../../ui/scroll/helper';
import type {PlatformNameType} from '../../../page/settings-page/action';

import comboListItemStyle from './combo-list-item.style.scss';
import {Move} from './move/c-move';
import {FrameData} from './frame-data/c-frame-data';
import {AdditionalInfo} from './additional-info/c-additional-info';

type ReduxPropsType = {|
    +platformName: PlatformNameType,
|};

type ReduxActionType = {
    // +setSmth: (smth: string) => string,
};

const reduxAction: ReduxActionType = {
    // setSmth, // imported from actions
};

type PassedPropsType = {|
    +combo: ComboType,
|};

type PropsType = {
    ...ReduxPropsType,
    ...ReduxActionType,
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
            isShowFrameData: false,
        };
    }

    state: StateType;
    props: PropsType;

    renderMoveItem = (inputType: ComboInputSingleType, index: number): Node => {
        const view = this;
        const {props} = view;
        const {platformName} = props;

        return <Move input={inputType} key={index} platformName={platformName}/>;
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

    render(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;
        const {isShowFrameData} = state;
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
                    {view.renderComboTitle()}
                    {view.renderMoveList()}
                </div>
                {isShowFrameData ? <FrameData combo={combo}/> : null}
                {isShowFrameData ? <AdditionalInfo combo={combo}/> : null}
            </>
        );
    }
}

const ConnectedComponent = connect<ComponentType<ComboListItem>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        platformName: state.setting.platformName,
    }),
    reduxAction
)(ComboListItem);

export {ConnectedComponent as ComboListItem};
