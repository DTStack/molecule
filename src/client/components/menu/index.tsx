import { useMemo } from 'react';
import type { IMenuItemProps } from 'mo/types';
import RcMenu, { Divider, Item as MenuItem, SubMenu } from 'rc-menu';
import type { MenuClickEventHandler } from 'rc-menu/lib/interface';

import Icon from '../icon';
import variables from './index.scss';

interface IMenuProps {
    data?: IMenuItemProps[];
    onClick?: MenuClickEventHandler;
}

export default function Menu({ data, onClick }: IMenuProps) {
    function generateMenuItem(menuItem: IMenuItemProps) {
        if (menuItem.type === 'divider') {
            return <Divider key={menuItem.id} className={variables.divider} />;
        }
        return (
            <MenuItem key={menuItem.id} disabled={menuItem.disabled} className={variables.item}>
                <span className={variables.icon}>
                    <Icon type={menuItem.icon} />
                </span>
                <span className={variables.label}>
                    {menuItem.render?.(menuItem) || menuItem.name}
                </span>
                {menuItem.keybinding && (
                    <span className={variables.keybinding}>{menuItem.keybinding}</span>
                )}
            </MenuItem>
        );
    }

    function generateSubMenu(subMenu: IMenuItemProps) {
        if (!subMenu.children?.length) return generateMenuItem(subMenu);
        return (
            <SubMenu
                popupClassName={variables.container}
                title={
                    <div className={variables.item}>
                        <span className={variables.icon} />
                        <span className={variables.label}>
                            {subMenu.render?.(subMenu) || subMenu.name}
                        </span>
                        <span className={variables.indicator}>
                            <Icon type={`chevron-right`} />
                        </span>
                    </div>
                }
                key={subMenu.id}
            >
                {subMenu.children.map((child) => generateMenuItem(child))}
            </SubMenu>
        );
    }

    const Menu = useMemo(() => {
        if (!Array.isArray(data)) return null;
        return data.map((i) => {
            if (Array.isArray(i.children)) return generateSubMenu(i);

            return generateMenuItem(i);
        });
    }, [data]);

    return (
        <RcMenu
            className={variables.container}
            selectable={false}
            triggerSubMenuAction="hover"
            onClick={onClick}
        >
            {Menu}
        </RcMenu>
    );
}
