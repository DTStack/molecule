import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { useContextMenu } from 'mo/components/contextMenu';
import { select } from 'mo/common/dom';
import { IMenuItem, Menu } from 'mo/components/menu';
import { ID_ACTIVITY_BAR } from 'mo/common/id';
import { IActivityBar, IActivityBarItem } from 'mo/model/workbench/activityBar';

import ActivityBarItem from './activityBarItem';
import { Scrollable } from 'mo/components/scrollable';
import { IActivityBarController } from 'mo/controller/activityBar';
import { mergeFunctions } from 'mo/common/utils';

import {
    containerClassName,
    defaultClassName,
    globalItemsClassName,
    normalItemsClassName,
} from './base';

export function ActivityBar(props: IActivityBar & IActivityBarController) {
    const {
        data = [],
        contextMenu = [],
        selected,
        onClick,
        onSelect,
        onContextMenuClick,
        onManageContextMenuClick,
    } = props;

    const onClickBar = (e: React.MouseEvent, item: IActivityBarItem) => {
        if (onClick) onClick(e, item);
        if (onSelect) {
            onSelect(item.id || '', item);
        }
    };

    const normalBarItems =
        data?.filter(
            (item: IActivityBarItem) => !item.type || item.type === 'normal'
        ) || [];
    const globalBarItems =
        data?.filter(
            (item: IActivityBarItem) => item.type && item.type === 'global'
        ) || [];

    const renderItems = (item: IActivityBarItem, index: number) => {
        return (
            <ActivityBarItem
                key={item.id}
                {...item}
                onContextMenuClick={mergeFunctions(
                    onContextMenuClick,
                    onManageContextMenuClick
                )}
                onClick={onClickBar}
                data-index={index}
                checked={selected === item.id}
            />
        );
    };

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
                anchor: select(`#${ID_ACTIVITY_BAR}`),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    });

    return (
        <div className={defaultClassName} id={ID_ACTIVITY_BAR}>
            <div className={containerClassName}>
                <Scrollable className={normalItemsClassName}>
                    <ul>{normalBarItems.map(renderItems)}</ul>
                </Scrollable>
                <ul className={globalItemsClassName}>
                    {globalBarItems.map(renderItems)}
                </ul>
            </div>
        </div>
    );
}

export default ActivityBar;
