import { classNames } from 'mo/client/classNames';
import { ActionBar, Header, PanelItem, Prevent } from 'mo/client/components';
import { useConnector } from 'mo/client/hooks';
import type { IPanelController } from 'mo/controllers/panel';
import { searchById, sortByIndex } from 'mo/utils';

import variables from './index.scss';

export type IPanelProps = IPanelController;

export default function Panel({ onChange, onClose, onToolbarClick, onContextMenu }: IPanelProps) {
    const panel = useConnector('panel');

    const currentPane = panel.current ? panel.data.filter((p) => !p.hidden).find(searchById(panel.current)) : undefined;

    return (
        <div className={variables.container}>
            <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY })}>
                <Header
                    className={variables.header}
                    trackStyle={{ height: 3 }}
                    extra={
                        <Prevent>
                            <ActionBar data={currentPane?.toolbar || []} onClick={onToolbarClick} />
                            <ActionBar data={panel.toolbar} onClick={onToolbarClick} />
                        </Prevent>
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
                                    panel.current === p.id && variables.active,
                                    p.disabled && variables.disabled
                                )}
                                onClick={() => onChange?.(p.id)}
                                onClose={onClose}
                                onContextMenu={onContextMenu}
                            />
                        ))}
                </Header>
            </Prevent>
            <div className={variables.content} tabIndex={0}>
                {currentPane?.render?.(currentPane)}
            </div>
        </div>
    );
}
