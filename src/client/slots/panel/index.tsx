import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Dropdown from 'mo/client/components/dropdown';
import Header from 'mo/client/components/header';
import PanelItem from 'mo/client/components/panelItem';
import useConnector from 'mo/client/hooks/useConnector';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IPanelController } from 'mo/controllers/panel';
import { searchById, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export default function Panel({
    onTabChange,
    onClose,
    onToolbarClick,
    onContextMenuClick,
}: IPanelController) {
    const panel = useConnector('panel');
    const contextMenu = useContextMenu('panel');

    const currentPane = panel.current
        ? panel.data.filter((p) => !p.hidden).find(searchById(panel.current))
        : undefined;

    return (
        <div className={variables.container}>
            <Dropdown
                data={contextMenu}
                trigger="contextMenu"
                alignPoint
                onClick={onContextMenuClick}
            >
                <Header
                    className={variables.header}
                    trackStyle={{ height: 3 }}
                    extra={
                        <>
                            <ActionBar data={currentPane?.toolbar || []} onClick={onToolbarClick} />
                            <ActionBar data={panel.toolbars} onClick={onToolbarClick} />
                        </>
                    }
                >
                    {panel.data
                        .filter((p) => !p.hidden)
                        .sort(sortByIndex)
                        .map((p) => (
                            <PanelItem
                                key={p.id}
                                data={p}
                                className={classNames(
                                    variables.item,
                                    panel.current === p.id && variables.active
                                )}
                                onClick={() => onTabChange?.(p.id)}
                                onClose={onClose}
                                onContextMenuClick={onContextMenuClick}
                            />
                        ))}
                </Header>
            </Dropdown>
            <div className={variables.content} tabIndex={0}>
                {currentPane?.render?.(currentPane)}
            </div>
        </div>
    );
}
