import * as React from 'react';
import { ComponentProps } from 'react';
import { prefixClaName, classNames, getBEMElement } from 'mo/common/className';

export interface ICheckboxProps extends ComponentProps<any> {
    id: string;
    value?: string;
    children?: ReactNode;
    onChange?(e: React.ChangeEvent, options?: ICheckboxProps): void;
}

export const checkboxClassName = prefixClaName('checkbox');
const checkboxLabelClassName = getBEMElement(checkboxClassName, 'label');
const checkboxInputClassName = getBEMElement(checkboxClassName, 'input');

export function Checkbox(props: ICheckboxProps) {
    const { className, id, children, value, onChange, ...custom } = props;

    const claNames = classNames(checkboxClassName, className);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e, { id, value: e.target.value });
    };

    return (
        <div className={claNames} {...(custom as any)}>
            <input
                id={id}
                type="checkbox"
                className={checkboxInputClassName}
                value={value}
                onChange={handleCheckboxChange}
            ></input>
            <label
                htmlFor={id}
                className={classNames(checkboxLabelClassName, 'codicon')}
            >
                {children}
            </label>
        </div>
    );
}
