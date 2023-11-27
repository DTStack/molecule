import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Dropdown from 'mo/client/components/dropdown';
import Header from 'mo/client/components/header';
import PanelItem from 'mo/client/components/panelItem';
import useConnector from 'mo/client/hooks/useConnector';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import useLocale from 'mo/client/hooks/useLocale';
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
    const layout = useConnector('layout');
    const builtin = useConnector('builtin');
    const contextMenu = useContextMenu('panel');
    const localize = useLocale();

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
                            <ActionBar
                                onClick={onToolbarClick}
                                data={[
                                    {
                                        id: builtin.constants.PANEL_TOOLBOX_CLOSE,
                                        title: localize(
                                            builtin.constants.PANEL_TOOLBOX_CLOSE,
                                            'Close Panel'
                                        ),
                                        icon: 'close',
                                        group: 'inline',
                                    },
                                    layout.panel.panelMaximized
                                        ? {
                                              id: builtin.constants.PANEL_TOOLBOX_RESIZE,
                                              title: localize(
                                                  builtin.constants.PANEL_TOOLBOX_RESTORE_SIZE,
                                                  'Restore Panel Size'
                                              ),
                                              icon: 'chevron-down',
                                              group: 'inline',
                                          }
                                        : {
                                              id: builtin.constants.PANEL_TOOLBOX_RESIZE,
                                              title: localize(
                                                  builtin.constants.PANEL_TOOLBOX_RESIZE,
                                                  'Maximize Panel Size'
                                              ),
                                              icon: 'chevron-up',
                                              group: 'inline',
                                          },
                                ]}
                            />
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
