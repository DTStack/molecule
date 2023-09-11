import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Header from 'mo/client/components/header';
import Icon from 'mo/client/components/icon';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import type { IPanelController } from 'mo/controllers/panel';
import { searchById } from 'mo/utils';

import variables from './index.scss';

export default function Panel({ onTabChange, onClose, onToolbarClick }: IPanelController) {
    const panel = useConnector('panel');
    const layout = useConnector('layout');
    const builtin = useConnector('builtin');
    const localize = useLocale();

    const currentPane = panel.current ? panel.data.find(searchById(panel.current)) : undefined;

    return (
        <div className={variables.container}>
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
                {panel.data.map((p) => (
                    <div
                        key={p.id}
                        className={classNames(
                            variables.item,
                            panel.current === p.id && variables.active
                        )}
                        onClick={() => onTabChange?.(p.id)}
                    >
                        {!!p.icon && <Icon type={p.icon} />}
                        {p.name}
                        {!!p.closable && (
                            <Icon
                                type="close"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClose?.(p.id);
                                }}
                            />
                        )}
                    </div>
                ))}
            </Header>
            <div className={variables.content} tabIndex={0}>
                {currentPane?.render?.(currentPane)}
            </div>
        </div>
    );
}
