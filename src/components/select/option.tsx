import * as React from 'react';
import { ComponentProps } from 'react';
import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';

import { selectClassName } from './select';

export interface ISelectOptionProps extends ComponentProps<'div'> {
    value?: string;
    name?: string;
    description?: string;
    disabled?: boolean;
}

const selectOptionClassName = getBEMElement(selectClassName, 'option');
const selectOptionDisabledClassName = getBEMModifier(
    selectOptionClassName,
    'disabled'
);

export function Option(props: ISelectOptionProps) {
    const {
        className,
        value,
        title,
        name,
        description,
        disabled,
        children,
        onClick,
        ...restProps
    } = props;

    const claNames = classNames(
        selectOptionClassName,
        className,
        disabled ? selectOptionDisabledClassName : ''
    );
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!disabled) {
            onClick?.(e);
        }
    };

    return (
        <div
            className={claNames}
            title={title}
            data-name={name || children}
            data-value={value}
            data-desc={description}
            onClick={handleClick}
            {...restProps}
        >
            {children}
        </div>
    );
}
