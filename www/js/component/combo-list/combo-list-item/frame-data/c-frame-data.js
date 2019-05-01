// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';

import {Locale} from '../../../locale/c-locale';
import type {ComboType} from '../../../../character-data/character-type';

import frameDataStyle from './frame-data.style.scss';

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
        const {type, hitDamage, blockDamage} = moveData;

        return (
            <>
                <tr className={frameDataStyle.frame_data_table_tr}>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__MOVE_TYPE"/>
                    </td>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__HIT_DAMAGE"/>
                    </td>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__BLOCK_DAMAGE"/>
                    </td>
                </tr>
                <tr className={frameDataStyle.frame_data_table_tr}>
                    <td className={frameDataStyle.frame_data_table_td}>{type}</td>
                    <td className={frameDataStyle.frame_data_table_td}>{hitDamage}</td>
                    <td className={frameDataStyle.frame_data_table_td}>{blockDamage}</td>
                </tr>
            </>
        );
    }

    renderFrameData(): Node {
        const view = this;
        const {props} = view;
        const {combo} = props;
        const {frameData} = combo;
        const {startUp, active, recover, hitAdvance, blockAdvance, cancel} = frameData;

        return (
            <>
                <tr className={frameDataStyle.frame_data_table_tr}>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__START_UP"/>
                    </td>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__ACTIVE"/>
                    </td>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__RECOVER"/>
                    </td>
                </tr>
                <tr className={frameDataStyle.frame_data_table_tr}>
                    <td className={frameDataStyle.frame_data_table_td}>{startUp}</td>
                    <td className={frameDataStyle.frame_data_table_td}>{active}</td>
                    <td className={frameDataStyle.frame_data_table_td}>{recover}</td>
                </tr>
                <tr className={frameDataStyle.frame_data_table_tr}>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__HIT_ADVANTAGE"/>
                    </td>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__BLOCK_ADVANTAGE"/>
                    </td>
                    <td className={frameDataStyle.frame_data_table_th}>
                        <Locale stringKey="FRAME_DATA__CANCEL"/>
                    </td>
                </tr>
                <tr className={frameDataStyle.frame_data_table_tr}>
                    <td className={frameDataStyle.frame_data_table_td}>{hitAdvance}</td>
                    <td className={frameDataStyle.frame_data_table_td}>{blockAdvance}</td>
                    <td className={frameDataStyle.frame_data_table_td}>{cancel}</td>
                </tr>
            </>
        );
    }

    render(): Node {
        const view = this;

        return (
            <div className={frameDataStyle.frame_data_wrapper}>
                <table className={frameDataStyle.frame_data_table}>
                    <tbody className={frameDataStyle.frame_data_table_body}>
                        {view.renderMoveData()}
                        {view.renderFrameData()}
                    </tbody>
                </table>
            </div>
        );
    }
}
