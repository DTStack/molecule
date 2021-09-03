import React, { useState, useRef } from 'react';
import { ActionBar, IActionBarItemProps } from 'mo/components/actionBar';
import {
    inputGroupClassName,
    searchToolBarClassName,
    validationBaseInputClassName,
    validationErrorInputClassName,
    validationInfoInputClassName,
    validationWarningInputClassName,
} from './base';
import { classNames } from 'mo/common/className';

export enum InfoTypeEnums {
    info = 'info',
    warning = 'warning',
    error = 'error',
}
export type InfoTypeEnum = keyof typeof InfoTypeEnums;

export interface IBaseInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    toolbarData?: IActionBarItemProps[];
    info?: { type: InfoTypeEnum; text: string };
    onChange?: (value: string) => void;
    onToolbarClick?: (addon) => void;
}

/**
 * Mock an Input by textarea
 * 'Cause we have to achieve text wrap and input cannot achieve it
 */
function Input(props: IBaseInputProps) {
    const {
        className,
        placeholder,
        toolbarData = [],
        onChange,
        value,
        info,
    } = props;

    const [focusStatus, setFocus] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onToolbarClick = (e, item) => {
        // toolbar click can trigger input focus
        textareaRef.current?.focus();
        props.onToolbarClick?.(item);
    };

    const getInfoClassName = (classname: string) => {
        switch (classname) {
            case InfoTypeEnums.info:
                return validationInfoInputClassName;
            case InfoTypeEnums.warning:
                return validationWarningInputClassName;
            case InfoTypeEnums.error:
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

    const handleInputChange = (e) => {
        if (textareaRef.current) {
            // base height
            textareaRef.current.style.height = '24px';
            const curretnScollerHeight = textareaRef.current.scrollHeight;
            // count the lines
            const lines = curretnScollerHeight / 24;
            const maxLines = 5;
            if (lines > maxLines) {
                textareaRef.current.style.height = `${24 * maxLines}px`;
            } else {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        }
        onChange?.(e.target.value || '');
    };

    const handleInputKeyPress = (e) => {
        // detect Enter press
        if (e.keyCode === 13) {
            onChange?.(e.target.value || '');
            e.preventDefault();
        }
    };

    return (
        <div className={className}>
            <textarea
                ref={textareaRef}
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="off"
                className={classNames(
                    info?.text && getInfoClassName(info?.type || '')
                )}
                value={value || ''}
                placeholder={placeholder}
                title={placeholder}
                onKeyDown={handleInputKeyPress}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
            />
            {info?.text && focusStatus && (
                <div
                    className={classNames(
                        validationBaseInputClassName,
                        getInfoClassName(info.type)
                    )}
                >
                    {info.text}
                </div>
            )}
            <ActionBar
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
