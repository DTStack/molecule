import { Fragment } from 'react';
import { classNames } from 'mo/client/classNames';
import ActionBar from 'mo/client/components/actionBar';
import Dropdown from 'mo/client/components/dropdown';
import Flex from 'mo/client/components/flex';
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
    onToolbarClick,
}: IEditorTreeController & { panel: IExplorerPanelItem }) {
    const editor = useConnector('editor');
    const editorTree = useConnector('editorTree');
    const { data } = useConnector('contextMenu');
    const builtin = useConnector('builtin');

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
                                    <Flex
                                        className={variables.group}
                                        onClick={(e) => onGroupClick?.(e, group.id)}
                                        justifyContent="space-between"
                                    >
                                        {localize(
                                            builtin.constants.EDITORTREE_ITEM_GROUP,
                                            'Group ${i}',
                                            (index + 1).toString()
                                        )}
                                        <ActionBar
                                            className={variables.toolbar}
                                            data={editorTree.toolbar}
                                            onClick={(item) => onToolbarClick?.(item, group.id)}
                                        />
                                    </Flex>
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
