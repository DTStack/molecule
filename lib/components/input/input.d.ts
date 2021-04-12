import * as React from 'react';
import { TextArea } from './textArea';
declare type SizeType = 'normal' | 'large';
export interface InputProps {
    disabled?: boolean;
    size?: SizeType;
    type?: LiteralUnion<'button' | 'checkbox' | 'search' | 'submit' | 'text', string>;
    placeholder?: string;
    value?: any;
    style?: React.CSSProperties;
    defaultValue?: any;
    className?: string;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export declare const inputClassName: string;
export declare function fixControlledValue<T>(value: T): "" | T;
export declare function resolveOnChange(target: HTMLInputElement | HTMLTextAreaElement, e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>, onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void): void;
export declare function getInputClassName(prefixCls: string, size?: SizeType, disabled?: boolean): string | undefined;
export interface InputState {
    value: any;
    prevValue: any;
}
export declare class Input extends React.Component<InputProps, InputState> {
    static TextArea: typeof TextArea;
    static defaultProps: {
        type: string;
    };
    input: any;
    constructor(props: InputProps);
    static getDerivedStateFromProps(nextProps: InputProps, { prevValue }: InputState): Partial<InputState>;
    saveInput: (input: HTMLInputElement) => void;
    setValue(value: string): void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
