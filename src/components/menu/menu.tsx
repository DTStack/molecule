import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import { MenuItem } from './menuItem';
import { ISubMenu, MenuMode, SubMenu } from './subMenu';

export interface IMenu extends ISubMenu {}

export const defaultMenuClassName = 'menu';

export function Menu(props: React.PropsWithChildren<IMenu>) {
    const { className, mode = MenuMode.Vertical, data = [], children, ...others } = props;
    let content = children;
    const claNames = classNames(prefixClaName(defaultMenuClassName), mode, className);

    if (data.length > 0) {
        const renderMenusByData = (menus: IMenu[]) => {
            return menus.map((item: IMenu) => {
                if (item.data && item.data.length > 0) {
                    return <SubMenu mode={mode} {...item}>{ renderMenusByData(item.data) }</SubMenu> 
                }
                return <MenuItem key={item.id} {...item}>{item.name}</MenuItem>
            })
        }
        content = renderMenusByData(data);
    }

    return (
        <ul className={claNames} {...others}>
            { content }
        </ul>
    );
}
