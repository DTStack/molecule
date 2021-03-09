import * as React from 'react';
import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'mo/common/className';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { useContextMenu } from 'mo/components/contextMenu';
import { select } from 'mo/common/dom';
import { Menu } from 'mo/components/menu';
import { IActivityBarController } from 'mo/controller/activityBar';

import {
    indicatorClassName,
    labelClassName,
    itemClassName,
    itemCheckedClassName,
} from './base';

function ActivityBarItem(props: IActivityBarItem & IActivityBarController) {
    const {
        checked = false,
        name = '',
        data = {},
        render,
        iconName = '',
        id,
        onClick,
        contextMenu = [],
        className,
    } = props;
    let content: React.ReactNode = '';
    if (render) {
        content = render();
    }

    let contextViewMenu;

    const onClickMenuItem = useCallback(
        (e, item) => {
            if (onClick) onClick(e, item);
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
            onClick={onClickItem}
            className={classNames(
                className,
                itemClassName,
                checked ? itemCheckedClassName : ''
            )}
            data-id={data.id}
        >
            <a
                title={name}
                className={classNames(labelClassName, 'codicon', iconName)}
            >
                {content}
            </a>
            {checked ? <div className={indicatorClassName}></div> : null}
        </li>
    );
}

export default memo(ActivityBarItem);
