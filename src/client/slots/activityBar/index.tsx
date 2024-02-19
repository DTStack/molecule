import { ActivityBarItem, Prevent, ScrollBar } from 'mo/client/components';
import { useConnector } from 'mo/client/hooks';
import type { IActivityBarController } from 'mo/controllers/activityBar';
import { Alignment } from 'mo/types';
import { classify, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export type IActivityBarProps = IActivityBarController;

export default function ActivityBar({ onClick, onContextMenu, onMenuClick, onContextMenuClick }: IActivityBarProps) {
    const activityBar = useConnector('activityBar');
    const layout = useConnector('layout');
    const menuBar = useConnector('menuBar');

    const [top = [], bottom = []] = classify(activityBar.data, (item) => item.alignment === Alignment.top);

    const renderMenu = () => {
        if (layout.menuBar.hidden) {
            return (
                <ActivityBarItem
                    key="inline-menu"
                    data={{
                        id: 'menu',
                        name: 'menu',
                        icon: 'menu',
                        alignment: Alignment.bottom,
                        contextMenu: menuBar.data,
                    }}
                    onContextMenuClick={onMenuClick}
                />
            );
        }
    };

    return (
        <Prevent className={variables.container} onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY })}>
            <ScrollBar className={variables.normal}>
                <ul>
                    {renderMenu()}
                    {top.sort(sortByIndex).map((item) => (
                        <ActivityBarItem
                            checked={!layout.sidebar.hidden && activityBar.current === item.id}
                            key={item.id}
                            data={item}
                            onClick={onClick}
                            onContextMenu={onContextMenu}
                        />
                    ))}
                </ul>
            </ScrollBar>
            <ul>
                {bottom.sort(sortByIndex).map((item) => (
                    <ActivityBarItem
                        key={item.id}
                        data={item}
                        onContextMenu={onContextMenu}
                        onContextMenuClick={onContextMenuClick}
                    />
                ))}
            </ul>
        </Prevent>
        // </Dropdown>
    );
}
