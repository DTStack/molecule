import * as React from 'react';
import { classNames } from 'mo/common/className';
import { useEffect } from 'react';
import {
    findParentByClassName,
    getRelativePosition,
    TriggerEvent,
} from 'mo/common/dom';
import { em2Px } from 'mo/common/css';
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
    icon?: string;
    data?: ISubMenuProps[];
    mode?: MenuMode;
}

function hideSubMenu(target?: HTMLElement) {
    const container = target || document.body;
    const all = container.querySelectorAll<HTMLMenuElement>(
        '.' + defaultSubMenuClassName
    );
    all?.forEach((ele) => {
        ele.style.visibility = 'hidden';
    });
}

const hideAll = () => {
    hideSubMenu();
};

const hideAfterLeftWindow = () => {
    if (document.hidden) {
        hideSubMenu();
    }
};

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

    const events = {
        onMouseOver: (event: React.MouseEvent<any, any>) => {
            const nextMenuItem = findParentByClassName<HTMLLIElement>(
                event.target,
                defaultMenuItemClassName
            );
            const nextSubMenu = nextMenuItem?.querySelector<HTMLMenuElement>(
                '.' + defaultSubMenuClassName
            );
            if (!nextMenuItem || !nextSubMenu) return;

            const prevMenuItem = findParentByClassName<HTMLLIElement>(
                event.relatedTarget,
                defaultMenuItemClassName
            );
            const prevSubMenu = prevMenuItem?.querySelector<HTMLMenuElement>(
                '.' + defaultSubMenuClassName
            );

            if (
                (prevMenuItem &&
                    prevSubMenu &&
                    !prevMenuItem.contains(nextMenuItem)) ||
                (!prevMenuItem && !prevSubMenu)
            ) {
                hideAll();
            }

            const domRect = nextMenuItem.getBoundingClientRect();
            nextSubMenu.style.visibility = 'visible';
            const pos = getRelativePosition(nextSubMenu, domRect);

            if (isAlignHorizontal) pos.y = pos.y + domRect.height;
            else {
                pos.x = pos.x + domRect.width;
                // The vertical menu default has padding 0.5em so that need reduce the padding
                const fontSize = getComputedStyle(nextSubMenu).getPropertyValue(
                    'font-size'
                );
                const paddingTop = em2Px(
                    0.5,
                    parseInt(fontSize.replace('px', ''), 10)
                );
                pos.y = pos.y - paddingTop;
            }

            nextSubMenu.style.cssText = `
                left: ${pos.x}px;
                top: ${pos.y}px;
            `;
        },
        onMouseOut: function (event: React.MouseEvent) {
            const nextMenuItem = findParentByClassName<HTMLLIElement>(
                event.relatedTarget,
                defaultMenuItemClassName
            );
            if (!nextMenuItem) return;

            const prevMenuItem = event.currentTarget as HTMLLIElement;
            const prevSubMenu = prevMenuItem?.querySelector(
                '.' + defaultSubMenuClassName
            );
            const nextSubMenu = nextMenuItem?.querySelector(
                '.' + defaultSubMenuClassName
            );
            // Hide the prev subMenu when the next menuItem hasn't subMenu and the prev MenuItem
            // subMenu not contains it.
            if (
                !nextSubMenu &&
                prevSubMenu &&
                !prevMenuItem.contains(nextMenuItem)
            ) {
                hideAll();
            }
        },
        onClick: function (event: React.MouseEvent) {},
    };

    useEffect(() => {
        window.addEventListener('contextmenu', hideAll);
        window.addEventListener('click', hideAll);
        window.addEventListener('visibilitychange', hideAfterLeftWindow);
        return () => {
            document.removeEventListener('contextmenu', hideAll);
            window.removeEventListener('click', hideAll);
            window.removeEventListener('visibilitychange', hideAfterLeftWindow);
        };
    }, []);

    const chevronType = isAlignHorizontal ? 'down' : 'right';
    const subMenuContent =
        data.length > 0 ? (
            <Menu
                className={cNames}
                style={{ visibility: 'hidden' }}
                data={data}
                onClick={onClick}
                {...custom}
            />
        ) : (
            <Menu
                className={cNames}
                style={{ visibility: 'hidden' }}
                onClick={onClick}
            >
                {children}
            </Menu>
        );

    events.onClick = (event: React.MouseEvent) => {
        if (!subMenuContent) {
            onClick?.(event, props);
        }
        event.stopPropagation();
    };

    return (
        <li
            className={classNames(
                defaultMenuItemClassName,
                disabled ? disabledClassName : null
            )}
            {...events}
            {...custom}
        >
            <a className={menuContentClassName}>
                <Icon className={checkClassName} type={icon || ''} />
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
