import * as React from 'react';
import { ID_ACTIVITY_BAR } from 'mo/common/id';
import { IActivityBar, IActivityBarItem } from 'mo/model/workbench/activityBar';

import ActivityBarItem from './activityBarItem';
import { Scrollable } from 'mo/components/scrollable';
import { IActivityBarController } from 'mo/controller/activityBar';

import {
    containerClassName,
    defaultClassName,
    globalItemsClassName,
    normalItemsClassName,
} from './base';

export function ActivityBar(props: IActivityBar & IActivityBarController) {
    const {
        data = [],
        selected,
        onClick,
        onSelect,
        onContextMenuClick,
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
                onContextMenuClick={onContextMenuClick}
                onClick={onClickBar}
                data-index={index}
                checked={selected === item.id}
            />
        );
    };

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
