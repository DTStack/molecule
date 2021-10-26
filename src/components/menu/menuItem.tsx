import React from 'react';
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
import type { HTMLElementProps, UniqueId } from 'mo/common/types';

export interface IMenuItemProps extends HTMLElementProps {
    id: UniqueId;
    /**
     * The name of icon
     */
    icon?: string | JSX.Element;
    type?: 'divider';
    /**
     * Item Name
     */
    name?: string;
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
    onClick?: (e: React.MouseEvent, item: IMenuItemProps) => void;
    sortIndex?: number;

    [key: string]: any;
}

export function MenuItem(
    props: React.PropsWithChildren<Omit<IMenuItemProps, 'id'>>
) {
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
        id,
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
            id={id?.toString()}
            // prevent render JSX title in HTMLElement
            {...(typeof title === 'string' ? { title } : {})}
            {...events}
            {...custom}
        >
            <div className={menuContentClassName}>
                <Icon type={icon} className={checkClassName} />
                <span
                    className={labelClassName}
                    title={typeof name === 'string' ? name : ''}
                >
                    {render ? render(props) : children}
                </span>
                {keybinding ? (
                    <span className={keybindingClassName}>{keybinding}</span>
                ) : null}
            </div>
        </li>
    );
}
