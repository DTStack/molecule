import * as React from 'react';
import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';
import { defaultListClassName, IList } from './list';

export interface IItem<T = any> extends IList {
    icon?: string;
    disabled?: boolean;
    data?: T;
}

const itemClassName = getBEMElement(defaultListClassName, 'item');
const labelClassName = getBEMElement(defaultListClassName, 'label');
const itemActiveClassName = getBEMModifier(itemClassName, 'active');
const itemDisabledClassName = getBEMModifier(itemClassName, 'disabled');

export function Item(props: React.PropsWithChildren<IItem>) {
    const {
        id,
        onClick,
        disabled,
        active,
        className,
        children,
        ...others
    } = props;
    const click = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e, props);
        }
    };
    const claNames = classNames(
        itemClassName,
        className,
        disabled ? itemDisabledClassName : '',
        active === id ? itemActiveClassName : ''
    );
    return (
        <li className={claNames} key={`${id}`} {...(others as any)}>
            <a className={labelClassName} onClick={click}>
                {children}
            </a>
        </li>
    );
}
