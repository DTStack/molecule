import { useMemo } from 'react';
import { classNames } from 'mo/client/classNames';
import { APP_PREFIX } from 'mo/const';
import type { IMenuItemProps, MenuHandler } from 'mo/types';
import { get, sortByIndex } from 'mo/utils';
import RcMenu, { Divider, Item as MenuItem, SubMenu } from 'rc-menu';

import Icon from '../icon';
import variables from './index.scss';

export interface IMenuProps {
    data?: IMenuItemProps[];
    onClick?: MenuHandler;
}

export default function Menu({ data, onClick }: IMenuProps) {
    const handleMenuClick = (keyPath: string[]) => {
        if (!data) return;
        const item = get(data, keyPath.reverse());
        if (!item) return;
        onClick?.(item);
    };

    function generateMenuItem(menuItem: IMenuItemProps) {
        if (menuItem.type === 'divider') {
            return <Divider key={menuItem.id} className={variables.divider} />;
        }
        return (
            <MenuItem
                key={menuItem.id}
                disabled={menuItem.disabled}
                className={classNames(variables.item, menuItem.disabled && variables.disabled)}
            >
                <span className={variables.icon}>
                    <Icon type={menuItem.icon} />
                </span>
                <span className={variables.label}>
                    {menuItem.render?.(menuItem) || menuItem.name || menuItem.title}
                </span>
                {menuItem.keybinding && (
                    <span className={variables.keybinding}>
                        {menuItem.keybinding.split('').map((item) => (
                            <span key={item} className={variables.keybindingItem}>
                                {item}
                            </span>
                        ))}
                    </span>
                )}
            </MenuItem>
        );
    }

    function generateSubMenu(subMenu: IMenuItemProps) {
        if (!subMenu.children?.length) return generateMenuItem(subMenu);
        return (
            <SubMenu
                popupClassName={variables.container}
                className={variables.subMenu}
                title={
                    <div className={variables.item}>
                        <span className={variables.icon} />
                        <span className={variables.label}>
                            {subMenu.render?.(subMenu) || subMenu.name || subMenu.title}
                        </span>
                        <span className={variables.indicator}>
                            <Icon type={`chevron-right`} />
                        </span>
                    </div>
                }
                key={subMenu.id}
                disabled={subMenu.disabled}
            >
                {subMenu.children.map((child) => {
                    if (Array.isArray(child.children)) return generateSubMenu(child);
                    return generateMenuItem(child);
                })}
            </SubMenu>
        );
    }

    const Menu = useMemo(() => {
        if (!Array.isArray(data)) return null;
        return data
            .concat()
            .sort(sortByIndex)
            .map((i) => {
                if (Array.isArray(i.children)) return generateSubMenu(i);

                return generateMenuItem(i);
            });
    }, [data]);

    return (
        <RcMenu
            className={variables.container}
            selectable={false}
            triggerSubMenuAction="hover"
            getPopupContainer={() => document.querySelector<HTMLElement>(`.${APP_PREFIX}`) || document.body}
            onClick={({ keyPath, domEvent }) => {
                domEvent.stopPropagation();
                handleMenuClick(keyPath);
            }}
            onContextMenu={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            {Menu}
        </RcMenu>
    );
}
