import { Fragment } from 'react';
import { classNames } from 'mo/client/classNames';
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
    onGroupClick,
}: IEditorTreeController & { panel: IExplorerPanelItem }) {
    const editor = useConnector('editor');
    const localize = useLocale();

    return (
        <ScrollBar isShowShadow>
            <div className={variables.editorTree} data-content={panel.id}>
                {editor.groups.map((group, index) => {
                    return (
                        <Fragment key={group.id}>
                            {editor.groups.length !== 1 && (
                                <div
                                    className={variables.group}
                                    onClick={(e) => onGroupClick?.(e, group.id)}
                                    // onContextMenu={(e) => handleHeaderRightClick(e, group)}
                                    key={group.id}
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
                            )}
                            {group.data?.map((file) => {
                                const isActive =
                                    group.id === editor.current && file.id === group.activeTab;
                                return (
                                    <div
                                        // title={file.data?.path && `${file.data?.path}/${file.name}`}
                                        className={classNames(
                                            variables.item,
                                            isActive && variables.active
                                        )}
                                        tabIndex={0}
                                        key={file.id}
                                        onClick={() => onSelect?.(file.id, group.id)}
                                        // onContextMenu={(e) => handleRightClick(e, group, file)}
                                    >
                                        <Icon
                                            className={variables.close}
                                            onClick={() => onClose?.(file.id, group.id)}
                                            type="close"
                                        />
                                        <Icon
                                            className={variables.file}
                                            type={file.data?.icon || file.icon}
                                        />
                                        <span className={variables.name}>{file.name}</span>
                                        <span className={variables.path}>{file.data?.path}</span>
                                    </div>
                                );
                            })}
                        </Fragment>
                    );
                })}
            </div>
        </ScrollBar>
    );
}
