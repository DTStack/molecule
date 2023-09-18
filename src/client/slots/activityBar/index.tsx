import ActivityBarItem from 'mo/client/components/activityBarItem';
import Dropdown from 'mo/client/components/dropdown';
import { ScrollBar } from 'mo/client/components/scrollBar';
import useConnector from 'mo/client/hooks/useConnector';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IActivityBarController } from 'mo/controllers/activityBar';
import type { IActivityBarItem } from 'mo/models/activityBar';
import { classify } from 'mo/utils';

import variables from './index.scss';

export default function ActivityBar({
    onClick,
    onContextMenuClick,
    onMenuClick,
}: IActivityBarController) {
    const activityBar = useConnector('activityBar');
    const layout = useConnector('layout');
    const menuBar = useConnector('menuBar');
    const contextMenu = useContextMenu('activityBar');

    const [top = [], bottom = []] = classify(activityBar.data, (item) => item.alignment === 'top');

    const renderMenu = () => {
        if (layout.menuBar.hidden) {
            return (
                <ActivityBarItem
                    key="inline-menu"
                    data={{
                        id: 'menu',
                        name: 'menu',
                        icon: 'menu',
                        contextMenu: menuBar.data,
                    }}
                    onContextMenuClick={onMenuClick}
                />
            );
        }
    };

    return (
        <Dropdown data={contextMenu} trigger="contextMenu" alignPoint onClick={onContextMenuClick}>
            <div className={variables.container}>
                <ScrollBar className={variables.normal}>
                    <ul>
                        {renderMenu()}
                        {top.map((item: IActivityBarItem) => (
                            <ActivityBarItem
                                checked={!layout.sidebar.hidden && activityBar.selected === item.id}
                                key={item.id}
                                data={item}
                                onClick={onClick}
                                onContextMenuClick={onContextMenuClick}
                            />
                        ))}
                    </ul>
                </ScrollBar>
                <ul>
                    {bottom.map((item: IActivityBarItem) => (
                        <ActivityBarItem
                            key={item.id}
                            data={item}
                            onContextMenuClick={onContextMenuClick}
                        />
                    ))}
                </ul>
            </div>
        </Dropdown>
    );
}
