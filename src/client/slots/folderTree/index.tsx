import { Button, Input, Prevent, ScrollBar, Tree } from 'mo/client/components';
import { useConnector, useLocale } from 'mo/client/hooks';
import type { IFolderTreeController } from 'mo/controllers/folderTree';
import type { IExplorerPanelItem } from 'mo/models/explorer';

import variables from './index.scss';

export type IFolderTreeProps = IFolderTreeController & { panel: IExplorerPanelItem };

export default function FolderTree({
    panel,
    onSelect,
    onKeyDown,
    onBlur,
    onContextMenu,
    onCreateRoot,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDrop,
}: IFolderTreeProps) {
    const folderTree = useConnector('folderTree');
    const localize = useLocale();
    const builtin = useConnector('builtin');
    const { entry, current, data, loadingKeys, expandedKeys, editing } = folderTree;

    const welcomePage = (
        <div data-content={panel.id}>
            {entry ? (
                <>{entry}</>
            ) : (
                <div style={{ width: '90%', margin: '0 auto', padding: '16px 0' }}>
                    <p style={{ fontSize: 12, margin: '0 0 16px 0' }}>
                        {localize(builtin.constants.FOLDERTREE_ITEM_EMPTY, 'You have not yet opened a folder')}
                    </p>
                    <Button block onClick={onCreateRoot}>
                        {localize(builtin.constants.FOLDERTREE_ITEM_ADD_ROOT_FOLDER, 'Add Folder')}
                    </Button>
                </div>
            )}
        </div>
    );

    if (!folderTree.data.length) return welcomePage;
    return (
        <ScrollBar
            isShowShadow
            scrollIntoViewDeps={{
                dep: folderTree.current,
                activeClassName: variables.active,
                center: true,
            }}
        >
            <Prevent
                data-content={panel.id}
                style={{ height: '100%' }}
                onClick={() => onSelect?.(data[0])}
                onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, data[0])}
            >
                <Tree
                    activeKey={current}
                    expandedKeys={expandedKeys}
                    loadingKeys={loadingKeys}
                    data={data[0]?.children || []}
                    className={variables.folderTree}
                    activeClassName={variables.active}
                    draggable={!editing}
                    onSelect={onSelect}
                    onContextMenu={onContextMenu}
                    onKeyDown={onKeyDown}
                    onDragStart={onDragStart}
                    onDragOver={onDragOver}
                    onDragEnd={onDragEnd}
                    onDrop={onDrop}
                    renderTitle={(node) => {
                        if (node.id !== editing) return node.name;
                        return (
                            <Input
                                defaultValue={node.name}
                                className={variables.input}
                                info={folderTree.validateInfo}
                                autoFocus
                                size="small"
                                onBlur={(e) => onBlur?.(e, node)}
                                onClick={(e) => e.stopPropagation()}
                                onKeyDown={(e) => onKeyDown?.(e, node)}
                            />
                        );
                    }}
                />
            </Prevent>
        </ScrollBar>
    );
}
