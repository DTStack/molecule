import * as React from 'react';
import { classNames } from 'mo/common/className';
import { Icon } from '../icon';
import { checkClassName, defaultMenuItemClassName, keybindingClassName, labelClassName, menuContentClassName } from './base';

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
        ...custom
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
            {...custom}
        >
            <a className={menuContentClassName}>
                <Icon className={checkClassName} type={icon || ''} />
                <span className={labelClassName} title={name as string}>
                    {render ? render(props) : children}
                </span>
                {keybinding ? (
                    <span className={keybindingClassName}>{keybinding}</span>
                ) : null}
            </a>
        </li>
    );
}
