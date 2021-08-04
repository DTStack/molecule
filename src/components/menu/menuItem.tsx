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

export interface IMenuItemProps extends Omit<HTMLElementProps, 'title'> {
    /**
     * The name of icon
     */
    icon?: string | JSX.Element;
    type?: 'divider';
    /**
     * Item Name
     */
    name?: React.ReactNode;
    title?: React.ReactNode;
    disabled?: boolean;
    /**
     * The description of keybinding
     * example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * Custom render
     */
    render?: (data: IMenuItemProps) => React.ReactNode;
    onClick?: (e: React.MouseEvent, item?: IMenuItemProps) => void;
    sortIndex?: number;

    [key: string]: any;
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
        title,
        ...custom
    } = props;

    const events = {
        onClick: function (e: React.MouseEvent) {
            onClick?.(e, props);
        },
    };

    const getIcon = () => {
        if (icon) {
            return typeof icon === 'string' ? (
                <Icon className={checkClassName} type={icon} />
            ) : (
                icon
            );
        }
        return null;
    };

    return (
        <li
            className={classNames(
                defaultMenuItemClassName,
                className,
                disabled ? disabledClassName : null
            )}
            // prevent render JSX title in HTMLElement
            {...(typeof title === 'string' ? { title } : {})}
            {...events}
            {...custom}
        >
            <a className={menuContentClassName}>
                {getIcon()}
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
