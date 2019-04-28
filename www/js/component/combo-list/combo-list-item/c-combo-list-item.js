// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import type {GlobalStateType} from '../../../redux-store-provider/reducer';

// import type {ContextRouterType} from '../../type/react-router-dom-v4';
import type {ComboInputType, ComboType} from '../../../character-data/character-type';

import {Locale} from '../../locale/c-locale';
import serviceStyle from '../../../../css/service.scss';

import comboListItemStyle from './combo-list-item.style.scss';
import {Move} from './move/c-move';

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
    +state: number,
|};

class ComboListItem extends Component<ReduxPropsType, PassedPropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
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
                <h3 className={serviceStyle.ellipsis}>
                    <Locale stringKey={combo.name}/>
                </h3>
            </div>
        );
    }

    renderMoveItem(inputType: ComboInputType, index: number): Node {
        // TODO: check is array here, add ',' here too

        return <Move input={inputType} key={index}/>;
    }

    renderMoveList(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;

        return <div className={comboListItemStyle.combo_move_wrapper}>{combo.sequence.map(view.renderMoveItem)}</div>;
    }

    render(): Node {
        const view = this;
        const {props, state} = view;
        const {combo} = props;

        return (
            <div className={comboListItemStyle.combo_wrapper}>
                {view.renderComboTitle()}
                {view.renderMoveList()}
                {/* <h5>show frame data here</h5>*/}
                {/* <div>{JSON.stringify(combo)}</div>*/}
            </div>
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
