import Dropdown from 'mo/client/components/dropdown';
import Flex from 'mo/client/components/flex';
import useConnector from 'mo/client/hooks/useConnector';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IStatusBarController } from 'mo/controllers/statusBar';
import { Alignment } from 'mo/types';
import { classify, sortByIndex } from 'mo/utils';

import StatusItem from '../../components/statusItem';
import variables from './index.scss';

export default function StatusBar({ onClick, onContextMenuClick }: IStatusBarController) {
    const statusBar = useConnector('statusBar');
    const data = useContextMenu('statusBar');

    const [leftItems = [], rightItems = []] = classify(
        statusBar.data,
        (item) => item.alignment === Alignment.left
    );

    return (
        <Dropdown trigger="contextMenu" alignPoint data={data} onClick={onContextMenuClick}>
            <Flex className={variables.container} justifyContent="space-between">
                <Flex className={variables.items} justifyContent="flex-start">
                    {leftItems.sort(sortByIndex).map((item) => (
                        <StatusItem
                            key={item.id}
                            data={item}
                            onClick={(e) => onClick?.(e, item.id)}
                            onContextMenuClick={onContextMenuClick}
                        />
                    ))}
                </Flex>
                <Flex className={variables.items} justifyContent="flex-end">
                    {rightItems
                        .sort(sortByIndex)
                        .reverse()
                        .map((item) => (
                            <StatusItem
                                key={item.id}
                                data={item}
                                onClick={(e) => onClick?.(e, item.id)}
                                onContextMenuClick={onContextMenuClick}
                            />
                        ))}
                </Flex>
            </Flex>
        </Dropdown>
    );
}
