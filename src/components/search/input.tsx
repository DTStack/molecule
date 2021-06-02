import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { inputGroupClassName, searchToolBarClassName } from './base';

export interface IBaseInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    toolbarData?: IActionBarItemProps[];
    onChange?: (value: string) => void;
    onToolbarClick?: (addon) => void;
}

function Input(props: IBaseInputProps) {
    const { className, placeholder, toolbarData = [], onChange, value } = props;

    const onToolbarClick = (e, item) => {
        props.onToolbarClick?.(item);
    };

    return (
        <div className={className}>
            <input
                value={value || ''}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange?.(e.target.value || '');
                }}
            />
            <Toolbar
                className={searchToolBarClassName}
                data={toolbarData}
                onClick={onToolbarClick}
            />
        </div>
    );
}

function Group({ children }) {
    return <div className={inputGroupClassName}>{children}</div>;
}

Input.Group = Group;

export default Input;
