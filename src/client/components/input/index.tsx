import { useLayoutEffect, useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import { InputValidateInfo, ValidateStatus, ValidateStatusLiteral } from 'mo/types';

import Display from '../display';
import variables from './index.scss';

export interface IBaseInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    info?: InputValidateInfo;
    defaultValue?: string;
    autoFocus?: boolean;
    size?: 'default' | 'small';
    autoWrap?: boolean;
    onChange?: (value: string) => void;
    onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    onSubmit?: (value: string) => void;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}

export const Input = ({
    defaultValue,
    size,
    value,
    className,
    placeholder,
    autoFocus,
    autoWrap,
    info,
    onChange,
    onSubmit,
    onBlur,
    onClick,
    onKeyDown,
}: IBaseInputProps) => {
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
        const widgetSize = size === 'small' ? variables.smallWidgetSize : variables.widgetSize;
        const height = parseInt(widgetSize, 10);
        if (textareaRef.current) {
            // base height
            textareaRef.current.style.height = widgetSize;
            const currentScrollHeight = textareaRef.current.scrollHeight;
            // count the lines
            const lines = currentScrollHeight / height;
            const maxLines = 5;
            if (lines > maxLines) {
                textareaRef.current.style.height = `${height * maxLines}px`;
            } else {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        }
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
                const ext = ((defaultValue || '') as string).lastIndexOf('.');
                textareaRef.current.selectionStart = 0;
                textareaRef.current.selectionEnd =
                    // if period at position of 0, then this period means hidden file
                    ext > 0 ? ext : ((defaultValue || '') as string).length;
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
            <textarea
                defaultValue={defaultValue}
                value={value}
                ref={textareaRef}
                spellCheck={false}
                wrap={autoWrap ? 'soft' : 'off'}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
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
};
