import { useState } from 'react';
import Dropdown from 'mo/client/components/dropdown';
import useConnector from 'mo/client/hooks/useConnector';
import type { UniqueId } from 'mo/types';

import variables from './index.scss';

export default function MenuBar() {
    const menuBar = useConnector('menuBar');

    const [visibleMenu, setVisibleMenu] = useState<UniqueId | undefined>(undefined);

    const handleActiveDropdown = (menuId: UniqueId) => {
        if (visibleMenu && visibleMenu !== menuId) {
            setVisibleMenu(menuId);
        }
    };

    return (
        <section className={variables.container} role="menuBar">
            {menuBar.data.map((menu) => (
                <Dropdown
                    trigger="click"
                    key={menu.id}
                    data={menu.children}
                    visible={visibleMenu === menu.id}
                    onClick={() => setVisibleMenu(undefined)}
                    onVisibleChange={(visible) => {
                        setVisibleMenu(visible ? menu.id : undefined);
                    }}
                >
                    <span
                        className={variables.item}
                        onMouseEnter={() => handleActiveDropdown(menu.id)}
                    >
                        {menu.render?.(menu) || menu.name || ''}
                    </span>
                </Dropdown>
            ))}
        </section>
    );
}
