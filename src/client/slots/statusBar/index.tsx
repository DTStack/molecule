import Dropdown from 'mo/client/components/dropdown';
import useConnector from 'mo/client/hooks/useConnector';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IStatusBarController } from 'mo/controllers/statusBar';
import { classify } from 'mo/utils';

import StatusItem from '../../components/statusItem';
import variables from './index.scss';

export default function StatusBar({ onClick, onContextMenuClick }: IStatusBarController) {
    const statusBar = useConnector('statusBar');
    const data = useContextMenu('statusBar');

    const [leftItems = [], rightItems = []] = classify(
        statusBar.data,
        (item) => item.alignment === 'left'
    );

    return (
        <Dropdown trigger="contextMenu" alignPoint data={data} onClick={onContextMenuClick}>
            <div className={variables.container}>
                <div className={variables.leftItem}>
                    {leftItems.map((item) => (
                        <StatusItem
                            key={item.id}
                            data={item}
                            onClick={(e) => onClick?.(e, item.id)}
                            onContextMenuClick={onContextMenuClick}
                        />
                    ))}
                </div>
                <div className={variables.rightItem}>
                    {rightItems.map((item) => (
                        <StatusItem
                            key={item.id}
                            data={item}
                            onClick={(e) => onClick?.(e, item.id)}
                            onContextMenuClick={onContextMenuClick}
                        />
                    ))}
                </div>
            </div>
        </Dropdown>
    );
}
