import * as React from 'react';
import { useRef } from 'react';
import { classNames } from 'mo/common/className';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { IMenuItemProps, Menu } from 'mo/components/menu';
import { IActivityBarController } from 'mo/controller/activityBar';

import {
    indicatorClassName,
    labelClassName,
    itemClassName,
    itemCheckedClassName,
    itemDisabledClassName,
} from './base';
import { DropDown, Icon } from 'mo/components';
import { DropDownRef } from 'mo/components/dropdown';
import { KeybindingHelper } from 'mo/services/keybinding';

export function ActivityBarItem(
    props: IActivityBarItem & IActivityBarController
) {
    const {
        checked = false,
        disabled = false,
        title = '',
        data = {},
        render,
        icon,
        id,
        onClick,
        contextMenu = [],
        className,
        onContextMenuClick,
    } = props;

    const contextMenuRef = useRef<DropDownRef>(null);

    const onClickMenuItem = (
        e: React.MouseEvent,
        item: IMenuItemProps | undefined
    ) => {
        onContextMenuClick?.(e, item);
        contextMenuRef.current?.dispose();
    };

    const onClickItem = function (event) {
        if (onClick) {
            onClick(props.id, props);
        }
    };

    const getIcon = () => {
        if (icon) {
            return typeof icon === 'string' ? (
                <Icon title={title} className={labelClassName} type={icon} />
            ) : (
                icon
            );
        }
        return null;
    };

    const content = getIcon() || <span>{render?.() || null}</span>;

    const overlay = (
        <Menu
            onClick={onClickMenuItem}
            data={contextMenu.map((menu) => {
                if (menu.id) {
                    const keybindingObj = KeybindingHelper.queryGlobalKeybinding(
                        menu.id
                    );
                    if (keybindingObj) {
                        menu.keybinding = KeybindingHelper.convertSimpleKeybindingToString(
                            keybindingObj
                        );
                    }
                }
                return menu;
            })}
        />
    );

    const hasContextMenu = contextMenu.length > 0;

    return (
        <li
            id={id}
            onClick={onClickItem}
            className={classNames(
                className,
                itemClassName,
                checked ? itemCheckedClassName : '',
                disabled ? itemDisabledClassName : ''
            )}
            data-id={data.id}
        >
            {hasContextMenu ? (
                <DropDown
                    ref={contextMenuRef}
                    trigger="click"
                    placement="rightBottom"
                    overlay={overlay}
                >
                    {content}
                </DropDown>
            ) : (
                content
            )}
            {checked ? <div className={indicatorClassName}></div> : null}
        </li>
    );
}
