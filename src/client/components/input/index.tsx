import { useState } from 'react';
import { classNames } from 'mo/client/classNames';
import { InputValidateInfo, ValidateStatus, ValidateStatusLiteral } from 'mo/types';

import variables from './index.scss';

export interface IBaseInputProps {
    className?: string;
    placeholder?: string;
    info?: InputValidateInfo;
    onChange?: (value: string) => void;
}

export const Input = (props: IBaseInputProps) => {
    const { className, placeholder, info, onChange } = props;

    const [isFocus, setIsFocus] = useState(false);

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
        <div className={className}>
            <input
                className={classNames(
                    info?.message && getInputClassName(info?.status || ValidateStatus.info)
                )}
                placeholder={placeholder}
                title={placeholder}
                onKeyDown={handleInputKeyPress}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
            />
            {info?.message && isFocus && (
                <div
                    className={classNames(
                        variables.validation,
                        getInputClassName(info?.status || ValidateStatus.info)
                    )}
                >
                    {info?.message}
                </div>
            )}
        </div>
    );
};
