import { useMemo } from 'react';
import ActivityBarItem from 'mo/client/components/activityBarItem';
import Dropdown from 'mo/client/components/dropdown';
import { ScrollBar } from 'mo/client/components/scrollBar';
import useConnector from 'mo/client/hooks/useConnector';
import type { IActivityBarController } from 'mo/controllers/activityBar';
import type { IActivityBarItem } from 'mo/models/activityBar';
import { IMenuItemProps } from 'mo/types';
import { classify } from 'mo/utils';

import variables from './index.scss';

export default function ActivityBar({ onClick, onContextMenuClick }: IActivityBarController) {
    const activityBar = useConnector('activityBar');

    const [normalBarItems, globalBarItems] = classify(
        activityBar.data,
        (item) => item.type === 'normal'
    );

    const renderItems = (item: IActivityBarItem) => {
        return (
            <ActivityBarItem
                checked={activityBar.selected === item.id}
                key={item.id}
                data={item}
                onClick={onClick}
                onContextMenuClick={onContextMenuClick}
            />
        );
    };

    const contextMenu = useMemo<IMenuItemProps[]>(() => {
        const [normalContext, globalContext] = classify(
            activityBar.contextMenu,
            (item) => item.type === 'normal'
        );
        return [
            ...normalContext.map(({ type: _, ...rest }) => rest),
            { id: 'activityBar.contextMenu.divider', type: 'divider' },
            ...globalContext.map(({ type: _, ...rest }) => rest),
        ];
    }, [activityBar.contextMenu]);

    return (
        <Dropdown data={contextMenu} trigger="contextMenu" alignPoint onClick={onContextMenuClick}>
            <div className={variables.container}>
                <ScrollBar className={variables.normal}>
                    <ul>{normalBarItems.map(renderItems)}</ul>
                </ScrollBar>
                <ul className={variables.global}>{globalBarItems.map(renderItems)}</ul>
            </div>
        </Dropdown>
    );
}
