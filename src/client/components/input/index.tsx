import { useLayoutEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { classNames } from 'mo/client/classNames';
import { InputValidateInfo, ValidateStatus, ValidateStatusLiteral } from 'mo/types';

import Display from '../display';
import variables from './index.scss';

export interface IInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    info?: InputValidateInfo;
    defaultValue?: string;
    autoFocus?: boolean;
    size?: 'default' | 'small';
    onChange?: (value: string) => void;
    onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onSubmit?: (value: string) => void;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}

export default function Input({
    defaultValue,
    size,
    value,
    className,
    placeholder,
    autoFocus,
    info,
    onChange,
    onSubmit,
    onBlur,
    onClick,
    onKeyDown,
}: IInputProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const getInputClassName = (status: ValidateStatusLiteral) => {
        switch (status) {
            case ValidateStatus.info:
                return variables.info;
            case ValidateStatus.warning:
                return variables.warning;
            case ValidateStatus.error:
                return variables.error;
            case ValidateStatus.validating:
                return variables.validating;
            default:
                return '';
        }
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
        e.stopPropagation();
        e.persist();
        onBlur?.(e);
    };

    const handleInputChange = (e: any) => {
        onChange?.(e?.target?.value || '');
    };

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        e.stopPropagation();
        e.persist();
        onKeyDown?.(e);
        // enter press
        if (e.keyCode === 13) {
            onSubmit?.((e.target as HTMLTextAreaElement).value);
            e.preventDefault();
        }
    };

    useLayoutEffect(() => {
        if (autoFocus) {
            if (textareaRef.current) {
                textareaRef.current.focus();
                const val = textareaRef.current.value;
                const ext = val.lastIndexOf('.');
                textareaRef.current.selectionStart = 0;
                textareaRef.current.selectionEnd =
                    // if period at position of 0, then this period means hidden file
                    ext > 0 ? ext : val.length;
            }
        }
    }, []);

    return (
        <div
            className={classNames(
                variables.container,
                info?.message && getInputClassName(info?.status || ValidateStatus.info),
                size === 'small' && variables.small,
                className
            )}
        >
            <TextareaAutosize
                defaultValue={defaultValue}
                value={value}
                ref={textareaRef}
                spellCheck={false}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                minRows={1}
                maxRows={4}
                className={classNames(variables.widget)}
                placeholder={placeholder}
                title={placeholder}
                onKeyDown={handleInputKeyPress}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                onClick={onClick}
            />
            <Display visible={Boolean(info?.message)}>
                <div className={classNames(variables.validation)}>{info?.message}</div>
            </Display>
        </div>
    );
}
