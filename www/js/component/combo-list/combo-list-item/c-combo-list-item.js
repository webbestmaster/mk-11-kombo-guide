// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import type {GlobalStateType} from '../../../redux-store-provider/reducer';
import type {ComboInputSingleType} from '../../../move-type/combo-input-type';
import type {ComboType} from '../../../move-type/combo-type';
import {Locale} from '../../locale/c-locale';
import serviceStyle from '../../../../css/service.scss';
import {inputMoveMap} from '../../../move-type/combo-input-type';

import {forceResize} from '../../ui/scroll/helper';

import comboListItemStyle from './combo-list-item.style.scss';
import {Move} from './move/c-move';
import {FrameData} from './frame-data/c-frame-data';

type ReduxPropsType = {|
    +reduxProp: boolean,
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
    static renderMoveItem(inputType: ComboInputSingleType, index: number): Node | Array<Node> {
        return <Move input={inputType} key={index}/>;
    }

    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            isShowFrameData: false,
        };
    }

    state: StateType;
    props: PropsType;

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

        return (
            <div className={comboListItemStyle.combo_move_wrapper}>
                {combo.sequence.map(ComboListItem.renderMoveItem)}
            </div>
        );
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

        return (
            <>
                <div
                    className={comboListItemStyle.combo_wrapper}
                    onClick={view.handleWrapperClick}
                    onKeyPress={view.handleWrapperClick}
                    role="button"
                    tabIndex="0"
                >
                    {view.renderComboTitle()}
                    {view.renderMoveList()}
                </div>
                {isShowFrameData ? <FrameData combo={combo}/> : null}
            </>
        );
    }
}

const ConnectedComponent = connect<ComponentType<ComboListItem>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        reduxProp: true,
    }),
    reduxAction
)(ComboListItem);

export {ConnectedComponent as ComboListItem};
