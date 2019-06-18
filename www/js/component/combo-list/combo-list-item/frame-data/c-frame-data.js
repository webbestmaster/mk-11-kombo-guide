// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {Locale} from '../../../locale/c-locale';
import type {ComboType} from '../../../../move-type/combo-type';
import type {MayBeNaType} from '../../../../move-type/n-a-type';
import {moveTypeTranslationMap} from '../../../../move-type/move-type';

import {isNumber} from '../../../../lib/is';

import {AdditionalInfo} from '../additional-info/c-additional-info';

import frameDataStyle from './frame-data.style.scss';
import {renderFrameDataValue} from './helper';

type PassedPropsType = {|
    +combo: ComboType,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +state: number,
|};

export class FrameData extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            state: 0,
        };
    }

    state: StateType;
    props: PropsType;

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
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__FLAWLESS_BLOCK_DAMAGE"/>
                    </td>
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_td}>
                        <Locale stringKey={moveTypeTranslationMap[type]}/>
                    </td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(hitDamage)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(blockDamage)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(flawlessBlockDamage)}</td>
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
                    <td className={frameDataStyle.frame_data__table_th}>&nbsp;</td>
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(startUp)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(active)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(recover)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>&nbsp;</td>
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
                    <td className={frameDataStyle.frame_data__table_th}>
                        <Locale stringKey="FRAME_DATA__FLAWLESS_BLOCK_ADVANTAGE"/>
                    </td>
                </tr>
                <tr className={frameDataStyle.frame_data__table_tr}>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(hitAdvance)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(blockAdvance)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>{renderFrameDataValue(cancel)}</td>
                    <td className={frameDataStyle.frame_data__table_td}>
                        {renderFrameDataValue(flawlessBlockAdvance)}
                    </td>
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
                <AdditionalInfo combo={combo}/>
            </div>
        );
    }
}
