import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';
import { useContextMenu } from 'mo/components/contextMenu';
import { IMenuItemProps, Menu } from 'mo/components/menu';
import { mergeFunctions } from 'mo/common/utils';
import Tooltip from '../tooltip';

export interface IActionBarItemProps<T = any> {
    id?: string;
    name?: React.ReactNode;
    title?: string;
    iconName?: string;
    disabled?: boolean;
    checked?: boolean;
    data?: T;
    contextMenu?: IMenuItemProps[];
    className?: string;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItemProps): void;
}

export interface IActionBarProps<T = any> {
    data: IActionBarItemProps<T>[];
    className?: string;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItemProps): void;
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
        id,
        title,
        name,
        data = {},
        contextMenu = [],
        onClick,
        onContextMenuClick,
    } = props;
    const disabled = props.disabled ? itemDisabledClassName : null;
    const checked = props.checked ? itemCheckedClassName : null;
    const refItem = useRef(null);

    const claNames = classNames('codicon', props.iconName);

    let contextViewMenu;

    const onClickMenuItem = useCallback(
        (e: React.MouseEvent, item: IMenuItemProps | undefined) => {
            onContextMenuClick?.(e, item);
            contextViewMenu?.dispose();
        },
        [contextMenu]
    );
    const renderContextMenu = () => (
        <Menu onClick={onClickMenuItem} data={contextMenu} />
    );

    useEffect(() => {
        if (contextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: refItem.current,
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    });

    const onClickItem = function (event) {
        if (onClick) {
            onClick(event, props);
        }
        if (contextMenu.length > -1 && contextViewMenu) {
            contextViewMenu.show({
                x: event.clientX,
                y: event.clientY,
            });
        }
    };
    return (
        <li
            id={id}
            ref={refItem}
            className={classNames(itemClassName, disabled, checked)}
            onClick={onClickItem}
            data-id={data.id}
        >
            <Tooltip overlay={<span>{title}</span>}>
                <a className={claNames}>{name}</a>
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
        ...custom
    } = props;

    const claNames = classNames(defaultActionBarClassName, className);

    const items = data.map((item: IActionBarItemProps<T>, index) => (
        <ActionBarItem
            key={item.id}
            {...item}
            onContextMenuClick={onContextMenuClick}
            data-index={index}
            onClick={mergeFunctions(onClick, item.onClick)}
        />
    ));

    return (
        <div className={claNames} {...custom}>
            <ul className={containerClassName}>{items}</ul>
        </div>
    );
}
