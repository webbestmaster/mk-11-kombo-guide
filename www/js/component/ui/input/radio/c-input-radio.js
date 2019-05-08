// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component, Fragment} from 'react';

import inputRadioStyle from './input-radio.style.scss';

type PassedPropsType = {|
    +name: string,
    +value: string,
    +children: Node | Array<Node>,
    +isDefaultChecked: boolean,
    +onSelect: (value: string) => mixed,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +isChecked: boolean,
|};

export class InputRadio extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            isChecked: props.isDefaultChecked,
        };
    }

    state: StateType;
    props: PropsType;

    handleSelect = (evt: SyntheticEvent<HTMLInputElement>) => {
        const view = this;
        const {state, props} = view;
        const {onSelect} = props;
        const {currentTarget} = evt;
        const {value, checked} = currentTarget;

        if (!checked) {
            return;
        }

        onSelect(value);
    };

    render(): Node {
        const view = this;
        const {state, props} = view;
        const {isChecked} = state;
        const {children, name, value} = props;

        return (
            <label className={inputRadioStyle.input_radio__label}>
                <input
                    className={inputRadioStyle.input_radio__native_input}
                    defaultChecked={isChecked}
                    name={name}
                    onChange={view.handleSelect}
                    type="radio"
                    value={value}
                />
                <div className={inputRadioStyle.input_radio__input_state}/>
                <div className={inputRadioStyle.input_radio__label_content}>{children}</div>
            </label>
        );
    }
}
