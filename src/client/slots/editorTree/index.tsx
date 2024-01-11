import { Fragment } from 'react';
import { classNames } from 'mo/client/classNames';
import { ActionBar, Flex, Icon, Prevent, ScrollBar } from 'mo/client/components';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import type { IEditorTreeController } from 'mo/controllers/editorTree';
import type { IExplorerPanelItem } from 'mo/models/explorer';
import { searchById } from 'mo/utils';

import variables from './index.scss';

export default function EditorTree({
    panel,
    onSelect,
    onClose,
    onContextMenu,
    onGroupClick,
    onToolbarClick,
}: IEditorTreeController & { panel: IExplorerPanelItem }) {
    const editor = useConnector('editor');
    const editorTree = useConnector('editorTree');
    const builtin = useConnector('builtin');

    const localize = useLocale();

    return (
        <ScrollBar
            isShowShadow
            scrollIntoViewDeps={{
                dep: editor.current && editor.groups.find(searchById(editor.current))?.activeTab,
                activeClassName: variables.active,
            }}
        >
            <Prevent className={variables.editorTree} data-content={panel.id}>
                {editor.groups.map((group, index) => {
                    return (
                        <Fragment key={group.id}>
                            {editor.groups.length !== 1 && (
                                <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, group)}>
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
                                </Prevent>
                            )}
                            {group.data?.map((file) => {
                                const isActive = group.id === editor.current && file.id === group.activeTab;
                                return (
                                    <Prevent
                                        className={classNames(variables.item, isActive && variables.active)}
                                        key={file.id}
                                        tabIndex={0}
                                        onClick={() => onSelect?.(file.id, group.id)}
                                        onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, group, file)}
                                    >
                                        <Icon
                                            className={variables.close}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onClose?.(file.id, group.id);
                                            }}
                                            type="close"
                                        />
                                        <Icon className={variables.file} type={file.data?.icon || file.icon} />
                                        <span className={variables.name}>{file.name}</span>
                                        <span className={variables.path}>{file.data?.path}</span>
                                    </Prevent>
                                );
                            })}
                        </Fragment>
                    );
                })}
            </Prevent>
        </ScrollBar>
    );
}
