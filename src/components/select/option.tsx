import * as React from 'react';
import { ComponentProps } from 'react';
import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';

import { selectClassName } from './select';

export interface ISelectOption extends ComponentProps<'option'> {
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

export function Option(props: ISelectOption) {
    const {
        className,
        value,
        title,
        name,
        description,
        disabled,
        children,
        ...custom
    } = props;

    const claNames = classNames(
        selectOptionClassName,
        className,
        disabled ? selectOptionDisabledClassName : ''
    );
    return (
        <div
            className={claNames}
            title={title}
            data-name={name || children}
            data-value={value}
            data-desc={description}
            {...(custom as any)}
        >
            {children}
        </div>
    );
}
