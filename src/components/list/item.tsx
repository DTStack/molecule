import * as React from 'react';
import { classNames, getBEMElement, getBEMModifier } from 'mo/common/className';
import { defaultListClassName } from './list';

export interface IItemProps extends Omit<React.ComponentProps<'li'>, 'id'> {
    id: string;
    disabled?: boolean;
    disable?: string;
    active?: string;
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

    const disabledClassName =
        disable === id
            ? itemDisabledClassName
            : disabled !== undefined || disabled === true
            ? itemDisabledClassName
            : '';

    const claNames = classNames(
        itemClassName,
        className,
        disabledClassName,
        active === id ? itemActiveClassName : ''
    );
    return (
        <li id={id} className={claNames} {...restProps} onClick={click}>
            <span className={labelClassName}>{children}</span>
        </li>
    );
}
