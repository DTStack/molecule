import React from 'react';
import { classNames, TriggerEvent } from '@dtinsight/molecule-common';
import { Icon } from '../icon';

import { Menu } from './menu';
import { IMenuItemProps } from './menuItem';
import {
    checkClassName,
    disabledClassName,
    defaultMenuItemClassName,
    defaultSubMenuClassName,
    indicatorClassName,
    labelClassName,
    menuContentClassName,
} from './base';

export enum MenuMode {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

export function isHorizontal(mode: MenuMode) {
    return mode === MenuMode.Horizontal;
}

export function isVertical(mode: MenuMode) {
    return mode === MenuMode.Horizontal;
}

export interface ISubMenuProps extends Omit<IMenuItemProps, 'id'> {
    /**
     * The event of show subMenu, default value is 'hover'
     */
    trigger?: TriggerEvent;
    icon?: string | JSX.Element;
    data?: ISubMenuProps[];
    mode?: MenuMode;
}

export function SubMenu(props: React.PropsWithChildren<ISubMenuProps>) {
    const {
        className,
        name,
        render,
        data = [],
        mode = MenuMode.Vertical,
        icon,
        disabled = false,
        children,
        onClick,
        title,
        sortIndex,
        ...restProps
    } = props;
    const cNames = classNames(defaultSubMenuClassName, className);
    const isAlignHorizontal = isHorizontal(mode);

    const chevronType = isAlignHorizontal ? 'down' : 'right';
    const subMenuContent =
        data.length > 0 ? (
            <Menu
                className={cNames}
                style={{ opacity: '0', pointerEvents: 'none' }}
                data={data}
                onClick={onClick}
                {...restProps}
            />
        ) : (
            <Menu
                className={cNames}
                style={{ opacity: '0', pointerEvents: 'none' }}
                onClick={onClick}
            >
                {children}
            </Menu>
        );

    return (
        <li
            className={classNames(
                defaultMenuItemClassName,
                disabled ? disabledClassName : null
            )}
            data-submenu
            data-mode={mode}
            data-sort={sortIndex}
            // prevent render JSX title in HTMLElement
            {...(typeof title === 'string' ? { title } : {})}
            {...restProps}
        >
            <div className={menuContentClassName}>
                {typeof icon === 'string' ? (
                    <Icon className={checkClassName} type={icon || ''} />
                ) : (
                    icon
                )}
                <span className={labelClassName}>
                    {render ? render(props) : name}
                </span>
                <Icon
                    className={indicatorClassName}
                    type={`chevron-${chevronType}`}
                />
            </div>
            {subMenuContent}
        </li>
    );
}
