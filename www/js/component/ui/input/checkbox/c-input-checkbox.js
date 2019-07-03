// @flow

/* eslint consistent-this: ["error", "view"] */

import type {Node} from 'react';
import React, {Component} from 'react';
import classNames from 'classnames';

import inputCheckboxStyle from './input-checkbox.style.scss';

type PassedPropsType = {|
    +name: string,
    +children: Node | Array<Node>,
    +isDefaultChecked: boolean,
    +onChange: (isChecked: boolean) => mixed,
    +isDisabled?: boolean,
|};

type PropsType = PassedPropsType;

type StateType = {|
    +isChecked: boolean,
|};

export class InputCheckbox extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        const view = this;

        view.state = {
            isChecked: props.isDefaultChecked,
        };
    }

    state: StateType;
    props: PropsType;

    handleChange = (evt: SyntheticEvent<HTMLInputElement>) => {
        const view = this;
        const {props} = view;
        const {onChange} = props;
        const {currentTarget} = evt;
        const {checked} = currentTarget;

        onChange(checked);
    };

    render(): Node {
        const view = this;
        const {state, props} = view;
        const {isChecked} = state;
        const {children, name, isDisabled} = props;

        const labelClassName = classNames(inputCheckboxStyle.input_checkbox__label, {
            [inputCheckboxStyle.input_checkbox__label__disabled]: isDisabled === true,
        });

        return (
            <label className={labelClassName}>
                <input
                    className={inputCheckboxStyle.input_checkbox__native_input}
                    defaultChecked={isChecked}
                    name={name}
                    onChange={view.handleChange}
                    type="checkbox"
                />
                <div className={inputCheckboxStyle.input_checkbox__input_state}/>
                <div className={inputCheckboxStyle.input_checkbox__label_content}>{children}</div>
            </label>
        );
    }
}
