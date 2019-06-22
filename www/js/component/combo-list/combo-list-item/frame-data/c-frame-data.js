// @flow

/* eslint consistent-this: ["error", "view"] */

import type {ComponentType, Node} from 'react';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Locale} from '../../../locale/c-locale';
import type {ComboType} from '../../../../move-type/combo-type';
import {moveTypeTranslationMap} from '../../../../move-type/move-type';
import type {GlobalStateType} from '../../../../redux-store-provider/reducer';
import type {SettingType} from '../../../../page/settings-page/reducer';

import {renderFrameDataValue} from './helper';
import frameDataStyle from './frame-data.style.scss';

type ReduxPropsType = {|
    +setting: SettingType,
|};

type ReduxActionType = {};

const reduxAction: ReduxActionType = {};

type PassedPropsType = {|
    +combo: ComboType,
|};

type PropsType = {
    ...ReduxActionType,
    ...PassedPropsType,
    ...ReduxPropsType,
};

type StateType = {|
    +state: number,
|};

class FrameData extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

    renderFlawlessColumn(node: Node): Node {
        const view = this;
        const {props} = view;
        const {setting} = props;

        return setting.isShowFlawlessData ? node : null;
    }

    renderMoveData(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {moveData} = combo;
        const {type, hitDamage, blockDamage, flawlessBlockDamage} = moveData;

        return (
            <>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__MOVE_TYPE"/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__HIT_DAMAGE"/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__BLOCK_DAMAGE"/>
                    </td>
                    {view.renderFlawlessColumn(
                        <td className={frameDataStyle.frame_data__table_th}>
                            <Locale stringKey="FRAME_DATA__FLAWLESS_BLOCK_DAMAGE"/>
                        </td>
                    )}
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_td}>
                        <Locale stringKey={moveTypeTranslationMap[type]}/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(hitDamage)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(blockDamage)}</td>
                    {view.renderFlawlessColumn(
                        <td className={frameDataStyle.frame_data__table_td}>
                            {renderFrameDataValue(flawlessBlockDamage)}
                        </td>
                    )}
                </tr>
            </>
        );
    }

    renderFrameData(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {frameData} = combo;
        const {startUp, active, recover, hitAdvance, blockAdvance, cancel, flawlessBlockAdvance} = frameData;

        return (
            <>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__START_UP"/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__ACTIVE"/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__RECOVERY"/>
                    </td>
                    {view.renderFlawlessColumn(<td className={frameDataStyle.frame_data__table_th}>&nbsp;</td>)}
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(startUp)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(active)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(recover)}</td>
                    {view.renderFlawlessColumn(<td className={frameDataStyle.frame_data__table_td}>&nbsp;</td>)}
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__HIT_ADVANTAGE"/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__BLOCK_ADVANTAGE"/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__CANCEL_ADVANTAGE"/>
                    </td>
                    {view.renderFlawlessColumn(
                        <td className={frameDataStyle.frame_data__table_th}>
                            <Locale stringKey="FRAME_DATA__FLAWLESS_BLOCK_ADVANTAGE"/>
                        </td>
                    )}
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(hitAdvance)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(blockAdvance)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(cancel)}</td>
                    {view.renderFlawlessColumn(
                        <td className={frameDataStyle.frame_data__table_td}>
                            {renderFrameDataValue(flawlessBlockAdvance)}
                        </td>
                    )}
                </tr>
            </>
        );
    }

    render(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;

        return (
            <div className={frameDataStyle.frame_data__wrapper}>
                <table className={frameDataStyle.frame_data__table}>
                    <tbody className={frameDataStyle.frame_data__table_body}>
                        {view.renderMoveData()}
                        {view.renderFrameData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const ConnectedComponent = connect<ComponentType<FrameData>, PassedPropsType, ReduxPropsType, ReduxActionType>(
    (state: GlobalStateType, props: PassedPropsType): ReduxPropsType => ({
        setting: state.setting,
    }),
    reduxAction
)(FrameData);

export {ConnectedComponent as FrameData};
