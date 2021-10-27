import React from 'react';
import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';
import type { UniqueId } from 'mo/common/types';
import { defaultListClassName } from './list';

export interface IItemProps extends Omit<React.ComponentProps<'li'>, 'id'> {
    id: UniqueId;
    disabled?: boolean;
    disable?: UniqueId;
    active?: UniqueId;
    onClick?(event: React.MouseEvent, item?: IItemProps): void;
}

const itemClassName = getBEMElement(defaultListClassName, 'item');
const labelClassName = getBEMElement(defaultListClassName, 'label');
const itemActiveClassName = getBEMModifier(itemClassName, 'active');
const itemDisabledClassName = getBEMModifier(itemClassName, 'disabled');

export function Item(props: React.PropsWithChildren<IItemProps>) {
    const {
        id,
        onClick,
        disabled,
        active,
        disable,
        className,
        children,
        ...restProps
    } = props;
    const click = (e: React.MouseEvent) => {
        onClick?.(e, props);
    };

    let disabledClassName = '';
    if (disabled !== undefined || disabled === true) {
        disabledClassName = itemDisabledClassName;
    }

    // If the value of disable eqs with the id, attach the disabled class name
    if (disable === id) {
        disabledClassName = itemDisabledClassName;
    }

    const claNames = classNames(
        itemClassName,
        className,
        disabledClassName,
        active === id ? itemActiveClassName : ''
    );
    return (
        <li
            id={id.toString()}
            className={claNames}
            {...restProps}
            onClick={click}
        >
            <span className={labelClassName}>{children}</span>
        </li>
    );
}
