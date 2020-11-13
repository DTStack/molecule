import * as React from 'react';
import { memo, useEffect } from 'react';

import { prefixClaName, classNames } from 'mo/common/className';
import { ID_ACTIVITY_BAR } from 'mo/common/id';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { useContextMenu } from 'mo/components/contextMenu';
import { select } from 'mo/common/dom';
import { Menu } from 'mo/components/menu';

function ActivityBarItem(props: IActivityBarItem) {
    const {
        checked = false,
        name = '',
        data = {},
        render,
        iconName = '',
        id,
        onClick,
        contextMenu = [],
    } = props;
    let content: React.ReactNode = '';
    if (render) {
        content = render();
    }

    const renderContextMenu = () => <Menu data={contextMenu} />;
    let contextViewMenu;

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
                prefixClaName('item', ID_ACTIVITY_BAR),
                checked ? 'checked' : ''
            )}
            data-id={data.id}
        >
            <a
                title={name}
                className={classNames('item-label', 'codicon', iconName)}
            >
                {content}
            </a>
            {checked ? <div className="active-item-indicator"></div> : null}
        </li>
    );
}

export default memo(ActivityBarItem);
