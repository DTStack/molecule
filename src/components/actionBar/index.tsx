import * as React from 'react';
import { useCallback, useEffect } from 'react';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';
import { useContextMenu } from 'mo/components/contextMenu';
import { select } from 'mo/common/dom';
import { IMenuItem, Menu } from 'mo/components/menu';
import { mergeFunctions } from 'mo/common/utils';

export interface IActionBarItem<T = any> {
    id: string;
    name?: string;
    title?: string;
    iconName?: string;
    disabled?: boolean;
    checked?: boolean;
    data?: T;
    contextMenu?: IMenuItem[];
    className?: string;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}

export interface IActionBar<T = any> {
    data: IActionBarItem<T>[];
    className?: string;
    onContextMenuClick?: (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => void;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}

const defaultActionBarClassName = prefixClaName('action-bar');
const containerClassName = getBEMElement(
    defaultActionBarClassName,
    'container'
);
const itemClassName = getBEMElement(defaultActionBarClassName, 'item');
const itemDisabledClassName = getBEMModifier(itemClassName, 'disabled');
const itemCheckedClassName = getBEMModifier(itemClassName, 'checked');
const labelClassName = getBEMElement(defaultActionBarClassName, 'label');

export function ActionBarItem(props: IActionBarItem) {
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
    const claNames = classNames(
        labelClassName,
        'codicon',
        props.iconName,
        disabled,
        checked
    );

    let contextViewMenu;

    const onClickMenuItem = useCallback(
        (e: React.MouseEvent, item: IMenuItem | undefined) => {
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
                anchor: select(`#${id}`),
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
        if (contextMenu.length > 0 && contextViewMenu) {
            contextViewMenu.show({
                x: event.clientX,
                y: event.clientY,
            });
        }
    };
    return (
        <li
            id={id}
            className={classNames(itemClassName, disabled)}
            onClick={onClickItem}
            data-id={data.id}
        >
            <a className={claNames} title={title}>
                {name}
            </a>
        </li>
    );
}

export default function ActionBar<T = any>(props: IActionBar<T>) {
    const {
        data = [],
        onClick,
        onContextMenuClick,
        className,
        ...custom
    } = props;

    const claNames = classNames(defaultActionBarClassName, className);

    const items = data.map((item: IActionBarItem<T>, index) => (
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
