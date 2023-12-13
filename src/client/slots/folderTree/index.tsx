import { useLayoutEffect, useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import { Button } from 'mo/client/components/button';
import Dropdown from 'mo/client/components/dropdown';
import Tree from 'mo/client/components/tree';
import useConnector from 'mo/client/hooks/useConnector';
import useLocale from 'mo/client/hooks/useLocale';
import type { IFolderTreeController } from 'mo/controllers/folderTree';
import type { IExplorerPanelItem } from 'mo/models/explorer';

import { ScrollBar } from '../../components/scrollBar';
import variables from './index.scss';

/**
 * A simple wrapper Input, achieve autoFucus & auto select file name
 */
const Input = (
    // same as raw input
    props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useLayoutEffect(() => {
        if (inputRef.current) {
            const ext = ((props.defaultValue || '') as string).lastIndexOf('.');
            inputRef.current.selectionStart = 0;
            inputRef.current.selectionEnd =
                // if period at position of 0, then this period means hidden file
                ext > 0 ? ext : ((props.defaultValue || '') as string).length;
        }
    }, []);
    return <input {...props} ref={inputRef} />;
};

export default function FolderTree({
    panel,
    onSelect,
    onUpdateFileName,
    onDropTree,
    onExpand,
    onTreeItemKeyDown,
    onContextMenu,
    onContextMenuClick,
    onCreateRoot,
}: { panel: IExplorerPanelItem } & IFolderTreeController) {
    const folderTree = useConnector('folderTree');
    const contextMenu = useConnector('contextMenu');
    const localize = useLocale();
    const builtin = useConnector('builtin');
    const { entry, current, data, expandKeys, loadedKeys, loadingKeys, editing } = folderTree;

    const welcomePage = (
        <div data-content={panel.id}>
            {entry ? (
                <>{entry}</>
            ) : (
                <div style={{ width: '90%', margin: '0 auto' }}>
                    <p style={{ fontSize: 12 }}>
                        {localize(
                            builtin.constants.FOLDERTREE_ITEM_EMPTY,
                            'You have not yet opened a folder'
                        )}
                    </p>
                    <Button block onClick={onCreateRoot}>
                        {localize(builtin.constants.FOLDERTREE_ITEM_ADD_ROOT_FOLDER, 'Add Folder')}
                    </Button>
                </div>
            )}
        </div>
    );

    const handleVisibleChange = (visible: boolean) => {
        if (visible) {
            onContextMenu?.(data[0]);
        }
    };

    if (!folderTree.data.length) return welcomePage;
    const contextMenuData = contextMenu.data.get(builtin.constants.CONTEXTMENU_ITEM_FOLDERTREE);
    return (
        <ScrollBar isShowShadow>
            <Dropdown
                data={contextMenuData}
                trigger="contextMenu"
                stopPropagation
                alignPoint
                onVisibleChange={handleVisibleChange}
            >
                <div
                    data-content={panel.id}
                    style={{ height: '100%' }}
                    onClick={() => onSelect?.(data[0])}
                >
                    <Tree
                        // root folder do not render
                        activeKey={current}
                        expandKeys={expandKeys}
                        loadedKeys={loadedKeys}
                        loadingKeys={loadingKeys}
                        contextMenu={contextMenuData}
                        data={data[0]?.children || []}
                        className={classNames(variables.folderTree, editing && variables.editing)}
                        draggable={!editing}
                        onDropTree={onDropTree}
                        onSelect={onSelect}
                        onContextMenuClick={onContextMenuClick}
                        onContextMenu={onContextMenu}
                        renderTitle={(node) => {
                            if (node.id !== editing) return node.name;
                            return (
                                <Input
                                    role="input"
                                    className={variables.input}
                                    type="text"
                                    defaultValue={node.name}
                                    onKeyDown={(e) => {
                                        // stop propagation, avoid conflict to onKeyDown event
                                        e.stopPropagation();
                                        if (e.keyCode === 13 || e.keyCode === 27) {
                                            onUpdateFileName?.({
                                                ...node,
                                                name: (e.target as HTMLInputElement).value,
                                            });
                                        }
                                    }}
                                    autoComplete="off"
                                    autoFocus
                                    // onBlur={(e)  => handleInputBlur(e, node)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            );
                        }}
                        onExpand={onExpand}
                        onTreeItemKeyDown={onTreeItemKeyDown}
                    />
                </div>
            </Dropdown>
        </ScrollBar>
    );
}
