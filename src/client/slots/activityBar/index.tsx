import ActivityBarItem from 'mo/client/components/activityBarItem';
import Dropdown from 'mo/client/components/dropdown';
import { ScrollBar } from 'mo/client/components/scrollBar';
import useConnector from 'mo/client/hooks/useConnector';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IActivityBarController } from 'mo/controllers/activityBar';
import type { IActivityBarItem } from 'mo/models/activityBar';
import { classify } from 'mo/utils';

import variables from './index.scss';

export default function ActivityBar({ onClick, onContextMenuClick }: IActivityBarController) {
    const activityBar = useConnector('activityBar');
    const contextMenu = useContextMenu('activityBar');

    const [top, bottom] = classify(activityBar.data, (item) => item.alignment === 'top');

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

    return (
        <Dropdown data={contextMenu} trigger="contextMenu" alignPoint onClick={onContextMenuClick}>
            <div className={variables.container}>
                <ScrollBar className={variables.normal}>
                    <ul>{top.map(renderItems)}</ul>
                </ScrollBar>
                <ul className={variables.global}>{bottom.map(renderItems)}</ul>
            </div>
        </Dropdown>
    );
}
