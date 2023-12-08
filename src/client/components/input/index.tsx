import { useRef, useState } from 'react';
import { classNames } from 'mo/client/classNames';
import { InputValidateInfo, ValidateStatus, ValidateStatusLiteral } from 'mo/types';

import Display from '../display';
import variables from './index.scss';

export interface IBaseInputProps {
    value?: string;
    className?: string;
    placeholder?: string;
    info?: InputValidateInfo;
    onChange?: (value: string) => void;
}

export const Input = ({ value, className, placeholder, info, onChange }: IBaseInputProps) => {
    const [isFocus, setIsFocus] = useState(false);
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

    const handleInputFocus = () => {
        setIsFocus(true);
    };

    const handleInputBlur = () => {
        setIsFocus(false);
    };

    const handleInputChange = (e: any) => {
        const height = parseInt(variables.widgetSize, 10);
        if (textareaRef.current) {
            // base height
            textareaRef.current.style.height = variables.widgetSize;
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

    const handleInputKeyPress = (e: any) => {
        // enter press
        if (e?.keyCode === 13) {
            onChange?.(e?.target?.value || '');
            e?.preventDefault();
        }
    };

    return (
        <div
            className={classNames(
                variables.container,
                info?.message && getInputClassName(info?.status || ValidateStatus.info),
                className
            )}
        >
            <textarea
                value={value}
                ref={textareaRef}
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="off"
                className={classNames(variables.widget)}
                placeholder={placeholder}
                title={placeholder}
                onKeyDown={handleInputKeyPress}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
            />
            <Display visible={Boolean(info?.message && isFocus)}>
                <div className={classNames(variables.validation)}>{info?.message}</div>
            </Display>
        </div>
    );
};
