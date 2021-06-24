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
import { getRelativePosition } from 'mo/common/dom';

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
    let content = cloneReactChildren(children, { onClick });

    const modeClassName =
        mode === MenuMode.Horizontal
            ? horizontalMenuClassName
            : verticalMenuClassName;
    const claNames = classNames(defaultMenuClassName, modeClassName, className);

    if (data.length > 0) {
        const renderMenusByData = (menus: IMenuProps[]) => {
            return menus.map((item: IMenuProps) => {
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
            ulDom.querySelectorAll(`li.${activeClassName}`).forEach((li) => {
                li.classList.remove(activeClassName);
            });
        }
        visibleMenuItem(liDom);
        const subMenu = liDom?.querySelector('ul') || undefined;
        setPositionForSubMenu(liDom, subMenu, isHorizontal(mode));
    }, 200);

    const handleMouseMove = (e) => {
        e.persist();
        detectDomElementByEvent(e);
    };

    const handleClick = (e) => {
        e.persist();
        e.stopPropagation();
        detectDomElementByEvent(e);
    };
    const handleContextMenu = (e) => {
        e.preventDefault();
        e.persist();
        e.stopPropagation();
        detectDomElementByEvent(e);
    };

    // Different events trigger should listen different events
    const getEventListener = () => {
        // sub menu do not listen any event
        if (claNames?.includes(defaultSubMenuClassName)) return {};
        if (trigger === 'hover') {
            return {
                onMouseMove: handleMouseMove,
            };
        } else if (trigger === 'click') {
            return {
                onClick: handleClick,
            };
        } else {
            return {
                onContextMenu: handleContextMenu,
            };
        }
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
