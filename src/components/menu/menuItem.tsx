import * as React from 'react';
import { classNames } from 'mo/common/className';
import { Icon } from '../icon';
import {
    checkClassName,
    disabledClassName,
    defaultMenuItemClassName,
    keybindingClassName,
    labelClassName,
    menuContentClassName,
} from './base';
export interface IMenuItemProps extends HTMLElementProps {
    /**
     * The name of icon
     */
    icon?: string;
    type?: 'divider';
    /**
     * Item Name
     */
    name?: ReactNode;
    disabled?: boolean;
    /**
     * The description of keybinding
     * example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * Custom render
     */
    render?: (data: IMenuItemProps) => ReactNode;
    onClick?: (e: React.MouseEvent, item?: IMenuItemProps) => void;
    sortIndex?: number;
}

export function MenuItem(props: React.PropsWithChildren<IMenuItemProps>) {
    const {
        icon,
        disabled = false,
        className,
        onClick,
        keybinding,
        render,
        children,
        name,
        ...custom
    } = props;
    const events = {
        onClick: function (e: React.MouseEvent) {
            onClick?.(e, props);
        },
    };
    return (
        <li
            className={classNames(
                defaultMenuItemClassName,
                className,
                disabled ? disabledClassName : null
            )}
            {...events}
            {...custom}
        >
            <a className={menuContentClassName}>
                <Icon
                    className={checkClassName}
                    type={typeof icon === 'string' ? icon : ''}
                >
                    {typeof icon === 'object' ? icon : ''}
                </Icon>
                <span className={labelClassName} title={name as string}>
                    {render ? render(props) : children}
                </span>
                {keybinding ? (
                    <span className={keybindingClassName}>{keybinding}</span>
                ) : null}
            </a>
        </li>
    );
}
