import { useState } from 'react';
import Dropdown from 'mo/client/components/dropdown';
import Icon from 'mo/client/components/icon';
import useConnector from 'mo/client/hooks/useConnector';
import type { IMenuBarController } from 'mo/controllers/menuBar';
import type { UniqueId } from 'mo/types';

import variables from './index.scss';

export type IMenuBarProps = IMenuBarController;

export default function MenuBar({ onSelect, onContextMenu }: IMenuBarProps) {
    const menuBar = useConnector('menuBar');

    const [visibleMenu, setVisibleMenu] = useState<UniqueId | undefined>(undefined);

    const handleActiveDropdown = (menuId: UniqueId) => {
        if (visibleMenu && visibleMenu !== menuId) {
            setVisibleMenu(menuId);
        }
    };

    return (
        <section
            className={variables.container}
            role="menuBar"
            onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onContextMenu?.({ x: e.pageX, y: e.pageY });
            }}
        >
            {menuBar.data.map((menu) => (
                <Dropdown
                    trigger="click"
                    key={menu.id}
                    data={menu.children}
                    visible={visibleMenu === menu.id}
                    onClick={(item) => {
                        setVisibleMenu(undefined);
                        onSelect?.(item);
                    }}
                    onVisibleChange={(visible) => {
                        setVisibleMenu(visible ? menu.id : undefined);
                    }}
                >
                    <span
                        className={variables.item}
                        onMouseEnter={() => handleActiveDropdown(menu.id)}
                        onContextMenu={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        {menu.render?.(menu) || (
                            <span className={variables.name} tabIndex={0}>
                                {menu.name || <Icon type={menu.icon} /> || ''}
                            </span>
                        )}
                    </span>
                </Dropdown>
            ))}
        </section>
    );
}
