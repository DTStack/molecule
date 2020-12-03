import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import { KeyCodes } from 'mo/common/keyCodes'

import TextArea from './TextArea';

type SizeType = 'normal' | 'large';
export interface InputProps {
    disabled?: boolean;
    size?: SizeType;
    type?: LiteralUnion<
        'button' | 'checkbox' | 'search' | 'submit' | 'text',
        string
    >;
    placeholder?: string;
    value?: string;
    readonly defaultValue?: string;
    readonly className?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export const inputClassName = prefixClaName('input');

export function fixControlledValue<T>(value: T) {
    if (typeof value === 'undefined' || value === null) return '';
    return value;
}

export function resolveOnChange(
    target: HTMLInputElement | HTMLTextAreaElement,
    e:
        | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        | React.MouseEvent<HTMLElement, MouseEvent>,
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
) {
    if (onChange) {
        let event = e;
        onChange(
            event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        );
    }
}

export function getInputClassName(
    prefixCls: string,
    size?: SizeType,
    disabled?: boolean
) {
    return classNames(
        prefixCls,
        size === 'normal' ? [`${prefixCls}--normal`] : '',
        size === 'large' ? [`${prefixCls}--lg`] : '',
        disabled ? [`${prefixCls}--disabled`] : ''
    );
}

export interface InputState {
    value: any;
    prevValue: any;
}

class Input extends React.Component<InputProps, InputState> {
    static TextArea: typeof TextArea;

    static defaultProps = {
        type: 'text',
    };

    input: any;

    constructor(props: InputProps) {
        super(props);
        const value =
            typeof props.value === 'undefined'
                ? props.defaultValue
                : props.value;
        this.state = {
            value,
            prevValue: props.value,
        };
    }

    static getDerivedStateFromProps(
        nextProps: InputProps,
        { prevValue }: InputState
    ) {
        const newState: Partial<InputState> = { prevValue: nextProps.value };
        if (nextProps.value !== undefined || prevValue !== nextProps.value) {
            newState.value = nextProps.value;
        }
        return newState;
    }

    saveInput = (input: HTMLInputElement) => {
        this.input = input;
    };

    setValue(value: string) {
        if (this.props.value === undefined) {
            this.setState({ value });
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { onChange } = this.props
        this.setValue(e.target.value);
        resolveOnChange(this.input, e, onChange);
    };

    handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { onPressEnter, onKeyDown } = this.props;
        if (e.key === KeyCodes.ENTER) {
            onPressEnter?.(e);
        }
        onKeyDown?.(e);
    };

    render() {
        const {
            className,
            size = 'normal',
            disabled = false,
            placeholder,
            onFocus,
            onBlur,
        } = this.props;
        return (
            <input
                placeholder={placeholder}
                onChange={this.handleChange}
                onFocus={(e) => onFocus?.(e)}
                onBlur={(e) => onBlur?.(e)}
                onKeyDown={this.handleKeyDown}
                className={classNames(
                    className,
                    getInputClassName(inputClassName, size, disabled)
                )}
                ref={this.saveInput}
            />
        );
    }
}

export default Input;
