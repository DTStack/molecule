import { useCallback, useLayoutEffect, useRef } from 'react';
import { classNames } from 'mo/client/classNames';
import { Button } from 'mo/client/components/button';
import Tree from 'mo/client/components/tree';
import useConnector from 'mo/client/hooks/useConnector';
import type { IFolderTreeController } from 'mo/controllers/folderTree';
import type { IExplorerPanelItem } from 'mo/models/explorer';
import { FileTypes } from 'mo/types';
import { randomId } from 'mo/utils';
import { TreeNodeModel } from 'mo/utils/tree';

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
    onSelectFile,
    onLoadData,
    onUpdateFileName,
    onDropTree,
    onExpandKeys,
    onFileKeyDown,
    createTreeNode,
    onRightClick,
    onContextMenuClick,
}: { panel: IExplorerPanelItem } & IFolderTreeController) {
    const folderTree = useConnector('folderTree');
    const { entry, current, data, expandKeys, loadedKeys, editing } = folderTree;

    const handleCreateFolder = useCallback(() => {
        createTreeNode?.({
            id: randomId(),
            name: 'molecule',
            fileType: FileTypes.RootFolder,
            icon: 'folder',
            children: [
                { id: randomId(), name: 'folder1', fileType: FileTypes.Folder, children: [{ id: randomId(), name: 'file1', fileType: FileTypes.File } ]},
                { id: randomId(), name: 'folder2', fileType: FileTypes.Folder, children: [{ id: randomId(), name: 'file2', fileType: FileTypes.File }, { id: randomId(), name: 'file3', fileType: FileTypes.File }]},
                { id: randomId(), name: 'file4', fileType: FileTypes.File },
                { id: randomId(), name: 'file5', fileType: FileTypes.File },
                { id: randomId(), name: 'file6', fileType: FileTypes.File },
            ],
        });
    }, []);

    const welcomePage = (
        <div data-content={panel.id}>
            {entry ? (
                <>{entry}</>
            ) : (
                <div style={{ padding: '10px 5px' }}>
                    you have not yet opened a folder
                    <Button onClick={handleCreateFolder}>Add Folder</Button>
                </div>
            )}
        </div>
    );

    if (!folderTree.data.length) return welcomePage;

    const handleRightClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, info: TreeNodeModel<any>) => {
        onRightClick?.(e, info);
    };

    return (
        <ScrollBar isShowShadow>
            <div data-content={panel.id} style={{ height: '100%' }}>
                <Tree
                    // root folder do not render
                    activeKey={current}
                    expandKeys={expandKeys}
                    loadedKeys={loadedKeys}
                    data={data[0]?.children || []}
                    className={classNames(variables.folderTree, editing && variables.editing)}
                    draggable={!editing}
                    onDropTree={onDropTree}
                    onSelect={onSelectFile}
                    onTreeClick={onSelectFile}
                    onContextMenu={onContextMenuClick}
                    onRightClick={handleRightClick}
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
                    onLoadData={onLoadData}
                    onExpand={onExpandKeys}
                    onFileKeyDown={onFileKeyDown}
                />
            </div>
        </ScrollBar>
    );
}
