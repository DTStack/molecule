import Dropdown from 'mo/client/components/dropdown';
import useConnector from 'mo/client/hooks/useConnector';
import type { IStatusBarController } from 'mo/controllers/statusBar';
import type { IStatusBarItem } from 'mo/models/statusBar';
import type { IMenuItemProps } from 'mo/types';
import { sortByIndex } from 'mo/utils';

import StatusItem from '../../components/statusItem';
import variables from './index.scss';

export default function StatusBar({ onClick, onContextMenuClick }: IStatusBarController) {
    const statusBar = useConnector('statusBar');

    const renderItems = (data: IStatusBarItem[]) => {
        return data
            .concat()
            .sort(sortByIndex)
            .map((item) => (
                <StatusItem key={item.id} data={item} onClick={(e) => onClick?.(e, item.id)} />
            ));
    };

    const right: IMenuItemProps[] = statusBar.rightItems.map((i) => ({
        id: i.id,
        name: i.name,
        icon: i.hidden ? undefined : 'check',
    }));
    const left: IMenuItemProps[] = statusBar.leftItems.map((i) => ({
        id: i.id,
        name: i.name,
        icon: i.hidden ? undefined : 'check',
    }));
    const contextMenu: IMenuItemProps[] = right.concat(
        left,
        { id: 'divider1', type: 'divider' },
        statusBar.contextMenu || []
    );

    return (
        <Dropdown trigger="contextMenu" alignPoint data={contextMenu} onClick={onContextMenuClick}>
            <div className={variables.container}>
                <div className={variables.leftItem}>{renderItems(statusBar.leftItems)}</div>
                <div className={variables.rightItem}>{renderItems(statusBar.rightItems)}</div>
            </div>
        </Dropdown>
    );
}
