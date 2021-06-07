import * as React from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    inputGroupClassName,
    searchToolBarClassName,
    validationBaseInputClassName,
    validationErrorInputClassName,
    validationInfoInputClassName,
    validationWarningInputClassName,
} from './base';
import { classNames } from 'mo/common/className';

export enum InfoTypeEnum {
    info = 'info',
    warning = 'warning',
    error = 'error',
}

export interface IBaseInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    toolbarData?: IActionBarItemProps[];
    info?: { type: keyof typeof InfoTypeEnum; text: string };
    onChange?: (value: string) => void;
    onToolbarClick?: (addon) => void;
}

function Input(props: IBaseInputProps) {
    const {
        className,
        placeholder,
        toolbarData = [],
        onChange,
        value,
        info,
    } = props;

    const [focusStatus, setFocus] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onToolbarClick = (e, item) => {
        // toolbar click can trigger input focus
        inputRef.current?.focus();
        props.onToolbarClick?.(item);
    };

    const getInfoClassName = (classname: string) => {
        switch (classname) {
            case InfoTypeEnum.info:
                return validationInfoInputClassName;
            case InfoTypeEnum.warning:
                return validationWarningInputClassName;
            case InfoTypeEnum.error:
                return validationErrorInputClassName;
            default:
                return '';
        }
    };

    const handleInputFocus = () => {
        setFocus(true);
    };

    const handleInputBlur = () => {
        setFocus(false);
    };

    return (
        <div className={className}>
            <input
                ref={inputRef}
                className={classNames(getInfoClassName(info?.type || ''))}
                value={value || ''}
                placeholder={placeholder}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={(e) => {
                    onChange?.(e.target.value || '');
                }}
            />
            {info && focusStatus && (
                <div
                    className={classNames(
                        validationBaseInputClassName,
                        getInfoClassName(info.type)
                    )}
                >
                    {info.text}
                </div>
            )}
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
