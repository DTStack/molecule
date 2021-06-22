import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { classNames } from 'mo/common/className';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { useContextMenu } from 'mo/components/contextMenu';
import { IMenuItemProps, Menu } from 'mo/components/menu';
import { IActivityBarController } from 'mo/controller/activityBar';

import {
    indicatorClassName,
    labelClassName,
    itemClassName,
    itemCheckedClassName,
    itemDisabledClassName,
} from './base';

export function ActivityBarItem(
    props: IActivityBarItem & IActivityBarController
) {
    const {
        checked = false,
        disabled = false,
        title = '',
        data = {},
        render,
        iconName = '',
        id,
        onClick,
        contextMenu = [],
        className,
        onContextMenuClick,
    } = props;
    let content: React.ReactNode = '';
    if (render) {
        content = render();
    }

    let contextViewMenu;
    const currentElem = useRef<HTMLLIElement>(null);

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
                anchor: currentElem.current,
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    });

    const onClickItem = function (event) {
        if (onClick) {
            onClick(props.id, props);
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
            ref={currentElem}
            onClick={onClickItem}
            className={classNames(
                className,
                itemClassName,
                checked ? itemCheckedClassName : '',
                disabled ? itemDisabledClassName : ''
            )}
            data-id={data.id}
        >
            <a
                title={title}
                className={classNames(labelClassName, 'codicon', iconName)}
            >
                {content}
            </a>
            {checked ? <div className={indicatorClassName}></div> : null}
        </li>
    );
}
