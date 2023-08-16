import useConnector from 'mo/client/hooks/useConnector';
import type { IStatusBarController } from 'mo/controllers/statusBar';
import type { IStatusBarItem } from 'mo/models/statusBar';
import { sortByIndex } from 'mo/utils';

import StatusItem from '../../components/statusItem';
import variables from './index.scss';

export default function StatusBar({ onClick }: IStatusBarController) {
    const statusBar = useConnector('statusBar');
    // let contextViewMenu;
    // const onClickMenuItem = useCallback(
    //     (e: React.MouseEvent, item: IMenuItemProps | undefined) => {
    //         onContextMenuClick?.(e, item);
    //         contextViewMenu?.dispose();
    //     },
    //     [contextMenu]
    // );
    // const renderContextMenu = () => (
    //     <Menu role="menu" onClick={onClickMenuItem} data={contextMenu} />
    // );

    const renderItems = (data: IStatusBarItem[]) => {
        return data
            .concat()
            .sort(sortByIndex)
            .map((item) => (
                <StatusItem key={item.id} data={item} onClick={(e) => onClick?.(e, item)} />
            ));
    };

    // useEffect(() => {
    //     if (contextMenu.length > 0) {
    //         contextViewMenu = useContextMenu({
    //             anchor: select(`#${ID_STATUS_BAR}`),
    //             render: renderContextMenu,
    //         });
    //     }
    //     return function cleanup() {
    //         contextViewMenu?.dispose();
    //     };
    // });

    return (
        <div className={variables.container}>
            <div className={variables.leftItem}>{renderItems(statusBar.leftItems)}</div>
            <div className={variables.rightItem}>{renderItems(statusBar.rightItems)}</div>
        </div>
    );
}
