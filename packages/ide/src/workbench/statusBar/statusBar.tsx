import React from 'react';
import { useEffect, useCallback } from 'react';
import { IStatusBar, IStatusBarItem } from 'mo/model/workbench/statusBar';
import { StatusItem } from './item';
import { mergeFunctions } from '@dtinsight/molecule-common';
import { IStatusBarController } from 'mo/controller/statusBar';
import {
    leftItemsClassName,
    rightItemsClassName,
    sortByIndex,
    statusBarClassName,
} from './base';
import { useContextMenu } from '@dtinsight/molecule-ui';
import { IMenuItemProps, Menu } from '@dtinsight/molecule-ui';
import { ID_STATUS_BAR } from '@dtinsight/molecule-common';
import { select } from '@dtinsight/molecule-common';

export function StatusBar(props: IStatusBar & IStatusBarController) {
    const {
        leftItems = [],
        contextMenu = [],
        onContextMenuClick,
        onClick,
        rightItems = [],
    } = props;

    let contextViewMenu;
    const onClickMenuItem = useCallback(
        (e: React.MouseEvent, item: IMenuItemProps | undefined) => {
            onContextMenuClick?.(e, item);
            contextViewMenu?.dispose();
        },
        [contextMenu]
    );
    const renderContextMenu = () => (
        <Menu role="menu" onClick={onClickMenuItem} data={contextMenu} />
    );
    useEffect(() => {
        if (contextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: select(`#${ID_STATUS_BAR}`),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    });

    const renderItems = (data: IStatusBarItem[]) => {
        return data
            .sort(sortByIndex)
            .map((item: IStatusBarItem) => (
                <StatusItem
                    key={item.id}
                    {...item}
                    onClick={mergeFunctions(item.onClick, onClick)}
                />
            ));
    };

    return (
        <div className={statusBarClassName} id={ID_STATUS_BAR}>
            <div className={leftItemsClassName}>{renderItems(leftItems)}</div>
            <div className={rightItemsClassName}>{renderItems(rightItems)}</div>
        </div>
    );
}
