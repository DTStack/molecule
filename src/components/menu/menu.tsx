import * as React from 'react';
import { classNames } from 'mo/common/className';
import { MenuItem } from './menuItem';
import { ISubMenuProps, MenuMode, SubMenu } from './subMenu';
import {
    defaultMenuClassName,
    horizontalMenuClassName,
    verticalMenuClassName,
} from './base';
import { mergeFunctions } from 'mo/common/utils';
import { cloneReactChildren } from 'mo/react';

export interface IMenuProps extends ISubMenuProps {}

export function Menu(props: React.PropsWithChildren<IMenuProps>) {
    const {
        className,
        mode = MenuMode.Vertical,
        data = [],
        children,
        onClick,
        ...custom
    } = props;
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

    return (
        <ul className={claNames} {...custom}>
            {content}
        </ul>
    );
}
