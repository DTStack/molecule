import React, { useState, useRef, useEffect } from 'react';
import {
    getBEMElement,
    prefixClaName,
    getBEMModifier,
} from '@dtinsight/molecule-common';
import { IMenuBarItem } from 'mo/model/workbench/menuBar';
import { Menu, MenuMode, IMenuProps } from '@dtinsight/molecule-ui';
import type { MenuRef } from '@dtinsight/molecule-ui/esm/menu';
import Logo from './logo';

export const defaultClassName = prefixClaName('menuBar');
export const actionClassName = getBEMElement(defaultClassName, 'action');
export const horizontalClassName = getBEMModifier(
    defaultClassName,
    'horizontal'
);
export const logoClassName = getBEMElement(horizontalClassName, 'logo');
export const logoContentClassName = getBEMElement(logoClassName, 'content');

export interface IHorizontalViewProps {
    data?: IMenuProps[];
    onClick?: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
    logo?: React.ReactNode;
}

export function HorizontalView(props: IHorizontalViewProps) {
    const { data, onClick, logo } = props;
    const menuRef = useRef<MenuRef>(null);
    const [autoDisplayMenu, setAutoDisplayMenu] = useState(false);

    const checkIsRootLiElem = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const liElem = target.closest('li');
        const menuBarElem = liElem?.parentElement?.parentElement;
        const isRootLiElem =
            !!menuBarElem &&
            menuBarElem.classList.contains(horizontalClassName);
        return isRootLiElem;
    };

    useEffect(() => {
        const menuBarElem = document.getElementsByClassName(
            horizontalClassName
        )[0] as HTMLElement;

        const handleClickMenuBar = (e: MouseEvent) => {
            const isRootLiElem = checkIsRootLiElem(e);
            const target = e.target as HTMLElement;

            if (isRootLiElem) {
                if (autoDisplayMenu) {
                    menuRef.current?.dispose?.();
                }
                // Delay the execution of setAutoDisplayMenu to ensure that the menu can be displayed.
                setTimeout(() => setAutoDisplayMenu(!autoDisplayMenu));
            } else {
                const liElem = target.closest('li');
                const isNormalLiElem =
                    liElem &&
                    menuBarElem.contains(liElem) &&
                    !liElem?.dataset.submenu;

                if (!liElem || isNormalLiElem) {
                    setAutoDisplayMenu(false);
                }
            }
        };

        const clearAutoDisplay = (e: MouseEvent) => {
            if (!autoDisplayMenu) return;

            const target = e.target as HTMLElement;
            if (!menuBarElem.contains(target)) {
                setAutoDisplayMenu(false);
            }
        };

        document.addEventListener('click', clearAutoDisplay);
        menuBarElem?.addEventListener('click', handleClickMenuBar);

        return () => {
            document.removeEventListener('click', clearAutoDisplay);
            menuBarElem?.removeEventListener('click', handleClickMenuBar);
        };
    }, [autoDisplayMenu]);

    const trigger = autoDisplayMenu ? 'hover' : 'click';

    const handleClickMenu = (e: React.MouseEvent, item: IMenuBarItem) => {
        onClick?.(e, item);
        menuRef.current!.dispose();
    };

    return (
        <div className={horizontalClassName}>
            <div className={logoClassName}>
                {logo || <Logo className={logoContentClassName} />}
            </div>
            <Menu
                ref={menuRef}
                role="menu"
                mode={MenuMode.Horizontal}
                trigger={trigger}
                onClick={handleClickMenu}
                style={{ width: '100%' }}
                data={data}
            />
        </div>
    );
}
