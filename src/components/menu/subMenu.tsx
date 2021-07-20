import * as React from 'react';
import { classNames } from 'mo/common/className';
import { TriggerEvent } from 'mo/common/dom';
import { Icon } from 'mo/components/icon';

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

export interface ISubMenuProps extends IMenuItemProps {
    /**
     * The event of show subMenu, default value is 'hover'
     */
    trigger?: TriggerEvent;
    icon?: React.ReactNode;
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
        ...custom
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
                {...custom}
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
            {...custom}
        >
            <a className={menuContentClassName}>
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
            </a>
            {subMenuContent}
        </li>
    );
}
