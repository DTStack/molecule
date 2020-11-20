import './style.scss';
import * as React from 'react';
import { classNames, prefixClaName } from 'mo/common/className';
import { Icon } from '../icon';

export const defaultMenuItemClassName = prefixClaName('menu-item');

export interface IMenuItem extends HTMLElementProps {
    /**
     * The name of icon
     */
    icon?: string;
    /**
     * Item Name
     */
    name?: ReactNode;
    /**
     * The description of keybinding
     * example: ⇧⌘P
     */
    keybinding?: string;
    /**
     * Custom render
     */
    render?: (data: IMenuItem) => ReactNode;
    onClick?: (e: React.MouseEvent, item?: IMenuItem) => void;
    sortIndex?: number;
}

export function MenuItem(props: React.PropsWithChildren<IMenuItem>) {
    const {
        icon,
        className,
        onClick,
        keybinding,
        render,
        children,
        name,
    } = props;
    const events = {
        onClick: function (e: React.MouseEvent) {
            if (onClick) {
                onClick(e, props);
            }
        },
    };
    return (
        <li
            className={classNames(defaultMenuItemClassName, className)}
            {...events}
        >
            <a className="menu-item-container">
                <Icon className="menu-item-check" type={icon || ''} />
                <span className="menu-item-label" title={name as string}>
                    {render ? render(props) : children}
                </span>
                {keybinding ? (
                    <span className="keybinding">{keybinding}</span>
                ) : null}
            </a>
        </li>
    );
}
