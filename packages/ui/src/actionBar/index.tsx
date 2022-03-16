import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
    mergeFunctions,
    getDataAttributionsFromProps,
} from '@dtinsight/molecule-common';
import type { HTMLElementProps, UniqueId } from '@dtinsight/molecule-common';
import Tooltip from '../tooltip';
import { Icon } from '../icon';
import { IContextMenu, useContextMenu } from '../contextMenu';
import { IMenuItemProps, Menu } from '../menu';

export interface IActionBarItemProps<T = any> {
    id: UniqueId;
    title?: string | JSX.Element;
    name?: React.ReactNode;
    icon?: string | JSX.Element;
    disabled?: boolean;
    checked?: boolean;
    data?: T;
    contextMenu?: IMenuItemProps[];
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItemProps): void;

    [key: string]: any;
}

export interface IActionBarProps<T = any> extends HTMLElementProps {
    data: IActionBarItemProps<T>[];
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItemProps): void;

    [key: string]: any;
}

const defaultActionBarClassName = prefixClaName('action-bar');
const containerClassName = getBEMElement(
    defaultActionBarClassName,
    'container'
);
const itemClassName = getBEMElement(defaultActionBarClassName, 'item');
const itemDisabledClassName = getBEMModifier(itemClassName, 'disabled');
const itemCheckedClassName = getBEMModifier(itemClassName, 'checked');

export function ActionBarItem(props: IActionBarItemProps) {
    const {
        title,
        name,
        contextMenu = [],
        onClick,
        icon,
        onContextMenuClick,
        ...restProps
    } = props;
    const disabled = props.disabled ? itemDisabledClassName : null;
    const checked = props.checked ? itemCheckedClassName : null;
    const refItem = useRef<HTMLLIElement>(null);

    const contextViewMenu = useRef<IContextMenu>();

    const onClickMenuItem = useCallback(
        (e: React.MouseEvent, item: IMenuItemProps | undefined) => {
            onContextMenuClick?.(e, item);
            contextViewMenu.current?.hide();
        },
        [contextMenu]
    );
    const renderContextMenu = () => (
        <Menu onClick={onClickMenuItem} data={contextMenu} />
    );

    useEffect(() => {
        if (contextMenu.length > 0) {
            contextViewMenu.current = useContextMenu({
                anchor: refItem.current,
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu.current?.dispose();
        };
    });

    const onClickItem = function (event) {
        if (props.disabled) {
            event.preventDefault();
            return;
        }
        if (onClick) {
            onClick(event, props);
        }
        if (contextMenu.length > -1 && contextViewMenu.current) {
            contextViewMenu.current.show({
                x: event.clientX,
                y: event.clientY,
            });
        }
    };

    const dataProps = getDataAttributionsFromProps(restProps);

    return (
        <li
            ref={refItem}
            className={classNames(itemClassName, disabled, checked)}
            onClick={onClickItem}
            {...dataProps}
        >
            <Tooltip overlay={<span>{title}</span>}>
                <Icon type={icon}>{name}</Icon>
            </Tooltip>
        </li>
    );
}

export function ActionBar<T = any>(props: IActionBarProps<T>) {
    const {
        data = [],
        onClick,
        onContextMenuClick,
        className,
        style,
        title,
        ...restProps
    } = props;

    const claNames = classNames(defaultActionBarClassName, className);

    const items = data.map((item, index) => (
        <ActionBarItem
            key={item.id}
            {...item}
            onContextMenuClick={onContextMenuClick}
            data-index={index}
            onClick={mergeFunctions(onClick, item.onClick)}
        />
    ));

    const dataProps = getDataAttributionsFromProps(restProps);

    return (
        <div className={claNames} style={style} title={title} {...dataProps}>
            <ul className={containerClassName}>{items}</ul>
        </div>
    );
}
