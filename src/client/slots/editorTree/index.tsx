import { Fragment } from 'react';
import { classNames } from 'mo/client/classNames';
import Dropdown from 'mo/client/components/dropdown';
import Icon from 'mo/client/components/icon';
import { ScrollBar } from 'mo/client/components/scrollBar';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import type { IEditorTreeController } from 'mo/controllers/editorTree';
import type { IExplorerPanelItem } from 'mo/models/explorer';

import variables from './index.scss';

export default function EditorTree({
    panel,
    onSelect,
    onClose,
    onContextMenu,
    onGroupClick,
    onGroupContextMenu,
}: IEditorTreeController & { panel: IExplorerPanelItem }) {
    const editor = useConnector('editor');
    const { data } = useConnector('contextMenu');

    const localize = useLocale();

    return (
        <ScrollBar isShowShadow>
            <div className={variables.editorTree} data-content={panel.id}>
                {editor.groups.map((group, index) => {
                    return (
                        <Fragment key={group.id}>
                            {editor.groups.length !== 1 && (
                                <Dropdown
                                    stopPropagation
                                    trigger="contextMenu"
                                    data={data.get('editorTreeHeader')}
                                    alignPoint
                                    onClick={(item) => onGroupContextMenu?.(item, group.id)}
                                >
                                    <div
                                        className={variables.group}
                                        onClick={(e) => onGroupClick?.(e, group.id)}
                                    >
                                        {localize(
                                            'sidebar.explore.openEditor.group',
                                            'Group',
                                            (index + 1).toString()
                                        )}
                                        {/* {groupToolbar && (
                                        <Toolbar
                                            data={groupToolbar}
                                            onClick={(e, item) =>
                                                handleToolBarClick(e, item, group)
                                            }
                                        />
                                    )} */}
                                    </div>
                                </Dropdown>
                            )}
                            {group.data?.map((file) => {
                                const isActive =
                                    group.id === editor.current && file.id === group.activeTab;
                                return (
                                    <Dropdown
                                        key={file.id}
                                        stopPropagation
                                        data={data.get('editorTab')}
                                        alignPoint
                                        trigger="contextMenu"
                                        onClick={(item) => onContextMenu?.(item, file.id, group.id)}
                                    >
                                        <div
                                            className={classNames(
                                                variables.item,
                                                isActive && variables.active
                                            )}
                                            tabIndex={0}
                                            onClick={() => onSelect?.(file.id, group.id)}
                                        >
                                            <Icon
                                                className={variables.close}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onClose?.(file.id, group.id);
                                                }}
                                                type="close"
                                            />
                                            <Icon
                                                className={variables.file}
                                                type={file.data?.icon || file.icon}
                                            />
                                            <span className={variables.name}>{file.name}</span>
                                            <span className={variables.path}>
                                                {file.data?.path}
                                            </span>
                                        </div>
                                    </Dropdown>
                                );
                            })}
                        </Fragment>
                    );
                })}
            </div>
        </ScrollBar>
    );
}
