import * as React from 'react';
import { classNames } from 'mo/common/className';
import { MenuItem } from './menuItem';
import { isHorizontal, ISubMenuProps, MenuMode, SubMenu } from './subMenu';
import { debounce } from 'lodash';
import {
    activeClassName,
    defaultMenuClassName,
    defaultSubMenuClassName,
    horizontalMenuClassName,
    verticalMenuClassName,
} from './base';
import { mergeFunctions } from 'mo/common/utils';
import { cloneReactChildren } from 'mo/react';
import { em2Px } from 'mo/common/css';
import { getRelativePosition, triggerEvent } from 'mo/common/dom';
import { Divider } from './divider';

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
        const paddingTop = em2Px(0.5, parseInt(fontSize.replace('px', ''), 10));
        pos.y = pos.y - paddingTop;
    }

    subMenu.style.cssText = `
        left: ${pos.x}px;
        top: ${pos.y}px;
    `;
};

export function Menu(props: React.PropsWithChildren<IMenuProps>) {
    const {
        className,
        mode = MenuMode.Vertical,
        data = [],
        children,
        onClick,
        trigger = 'hover',
        ...custom
    } = props;
    const menuRef = React.useRef<HTMLUListElement>(null);
    const isMouseInMenu = React.useRef(false);
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
                            mode={mode}
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
            setPositionForSubMenu(liDom, subMenu, isHorizontal(mode));
        }
    }, delay);

    const handleTriggerEvent = (e) => {
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
            onContextMenu: (e) => {
                e.preventDefault();
                e.persist();
                e.stopPropagation();
            },
            onClick: (e) => {
                e.preventDefault();
                e.persist();
                e.stopPropagation();
            },
            [triggerEvent(trigger)]: handleTriggerEvent,
            onMouseOut: handleMouseOut,
        };
    };

    const hideAfterLeftWindow = React.useCallback(() => {
        if (document.hidden) {
            initialMenuStyle();
        }
    }, []);

    React.useEffect(() => {
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
            {...getEventListener()}
            {...custom}
        >
            {content}
        </ul>
    );
}
