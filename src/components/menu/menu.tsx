import React, { useEffect, useCallback, useRef } from 'react';
import { classNames } from 'mo/common/className';
import { debounce } from 'lodash';
import { mergeFunctions } from 'mo/common/utils';
import { cloneReactChildren } from 'mo/react';
import { em2Px } from 'mo/common/css';
import { getRelativePosition, triggerEvent } from 'mo/common/dom';

import {
    activeClassName,
    defaultMenuClassName,
    defaultSubMenuClassName,
    horizontalMenuClassName,
    verticalMenuClassName,
} from './base';
import { Divider } from './divider';
import { MenuItem } from './menuItem';
import { isHorizontal, ISubMenuProps, MenuMode, SubMenu } from './subMenu';

export type IMenuProps = ISubMenuProps;

const visibleMenuItem = (item?: HTMLElement) => {
    if (!item) return;
    if (item?.dataset.submenu) {
        const subMenu: HTMLElement = Array.prototype.find.call(
            item.children,
            (dom: HTMLElement) => dom.nodeName === 'UL'
        );
        subMenu.style.opacity = '1';
        subMenu.style.pointerEvents = 'auto';
        item.classList.add(activeClassName);
    }
};

const setPositionForSubMenu = (
    item?: HTMLElement,
    subMenu?: HTMLElement,
    isAlignHorizontal: boolean = false
) => {
    if (!item || !subMenu) return;
    const domRect = item.getBoundingClientRect();
    const pos = getRelativePosition(subMenu, domRect);

    if (isAlignHorizontal) pos.y = pos.y + domRect.height;
    else {
        pos.x = pos.x + domRect.width;
        // The vertical menu default has padding 0.5em so that need reduce the padding
        const fontSize = getComputedStyle(subMenu).getPropertyValue(
            'font-size'
        );
        const paddingTop = em2Px(0.5, parseInt(fontSize.replace(/px/g, '')));
        pos.y = pos.y - paddingTop;
    }

    subMenu.style.top = `${pos.y}px`;
    subMenu.style.left = `${pos.x}px`;
};

export function Menu(props: React.PropsWithChildren<IMenuProps>) {
    const {
        className,
        mode = MenuMode.Vertical,
        data = [],
        children,
        onClick,
        trigger = 'hover',
        title,
        ...restProps
    } = props;
    const menuRef = useRef<HTMLUListElement>(null);
    const isMouseInMenu = useRef(false);
    let content = cloneReactChildren(children, { onClick });
    // Only when the trigger is hover need to set the delay
    const delay = trigger === 'hover' ? 200 : 0;

    const modeClassName =
        mode === MenuMode.Horizontal
            ? horizontalMenuClassName
            : verticalMenuClassName;
    const claNames = classNames(defaultMenuClassName, modeClassName, className);

    if (data.length > 0) {
        const renderMenusByData = (menus: IMenuProps[]) => {
            return menus.map((item: IMenuProps) => {
                if (item.type === 'divider') return <Divider />;

                const handleClick = mergeFunctions(onClick, item.onClick);
                if (item.data && item.data.length > 0) {
                    return (
                        <SubMenu
                            key={item.id}
                            mode={item.mode || mode}
                            {...item}
                            onClick={handleClick}
                        >
                            {renderMenusByData(item.data)}
                        </SubMenu>
                    );
                }
                return (
                    <MenuItem key={item.id} onClick={handleClick} {...item}>
                        {item.name}
                    </MenuItem>
                );
            });
        };
        content = renderMenusByData(data);
    }

    const initialMenuStyle = () => {
        menuRef.current?.querySelectorAll('ul').forEach((ul) => {
            ul.style.opacity = '0';
            ul.style.pointerEvents = 'none';
        });
        menuRef.current
            ?.querySelectorAll(`li.${activeClassName}`)
            .forEach((li) => {
                li.classList.remove(activeClassName);
            });
    };

    const detectDomElementByEvent = debounce((e) => {
        // ensure only when mouse in menu can the submenu toggle visibility

        if (isMouseInMenu.current) {
            const doms = document.elementsFromPoint(
                e.pageX,
                e.pageY
            ) as HTMLElement[];
            const ulDom = doms.find((dom) => dom.nodeName === 'UL');
            const liDom = doms.find((dom) => dom.nodeName === 'LI');
            // clear current ul children style
            if (ulDom) {
                ulDom.querySelectorAll('ul').forEach((ul) => {
                    ul.style.opacity = '0';
                    ul.style.pointerEvents = 'none';
                });
                ulDom
                    .querySelectorAll(`li.${activeClassName}`)
                    .forEach((li) => {
                        li.classList.remove(activeClassName);
                    });
            }
            visibleMenuItem(liDom);
            const subMenu = liDom?.querySelector('ul') || undefined;
            const subMenuMode = liDom?.dataset.mode || mode;
            setPositionForSubMenu(
                liDom,
                subMenu,
                isHorizontal(subMenuMode as MenuMode)
            );
        }
    }, delay);

    const handleTriggerEvent = (e: React.MouseEvent) => {
        e.preventDefault();
        e.persist();
        e.stopPropagation();
        isMouseInMenu.current = true;
        detectDomElementByEvent(e);
    };

    const handleMouseOut = () => {
        isMouseInMenu.current = false;
    };

    const getEventListener = () => {
        // sub menu do not listen any event
        if (claNames?.includes(defaultSubMenuClassName)) return {};
        return {
            onContextMenu: (e: React.MouseEvent) => {
                e.preventDefault();
                e.persist();
                e.stopPropagation();
            },
            onClick: (e: React.MouseEvent) => {
                e.preventDefault();
                e.persist();
                e.stopPropagation();
            },
            [triggerEvent(trigger)]: handleTriggerEvent,
            onMouseOut: handleMouseOut,
        };
    };

    const hideAfterLeftWindow = useCallback(() => {
        if (document.hidden) {
            initialMenuStyle();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('contextmenu', initialMenuStyle);
        window.addEventListener('click', initialMenuStyle);
        window.addEventListener('visibilitychange', hideAfterLeftWindow);
        return () => {
            document.removeEventListener('contextmenu', initialMenuStyle);
            window.removeEventListener('click', initialMenuStyle);
            window.removeEventListener('visibilitychange', hideAfterLeftWindow);
        };
    }, []);

    return (
        <ul
            className={claNames}
            ref={menuRef}
            // prevent JSX render in HTMLElement
            {...(typeof title === 'string' ? { title } : {})}
            {...getEventListener()}
            {...restProps}
        >
            {content}
        </ul>
    );
}
