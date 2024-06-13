import { FolderTreeEvent } from 'mo/models/folderTree';
import { FileTypes, IExtension } from 'mo/types';

import Drag from './drag';

export const ExtendsFolderTree: IExtension = {
    id: 'ExtendsFolderTree',
    name: 'Extend The Default Folder Tree',
    activate: function (molecule): void {
        molecule.folderTree.onSelect((treeNode) => {
            molecule.folderTree.setCurrent(treeNode.id);

            if (treeNode.fileType === FileTypes.File) {
                molecule.folderTree.setEditing();
            } else {
                molecule.folderTree.toggleExpanded(treeNode.id);

                if (!Array.isArray(treeNode.children)) {
                    molecule.folderTree.emit(FolderTreeEvent.onLoad, treeNode.id);
                }
            }
        });

        molecule.folderTree.onKeyDown((e, treeNode) => {
            if (e.key === 'Enter') {
                if (molecule.folderTree.getState().editing === treeNode.id) {
                    molecule.folderTree.emit(FolderTreeEvent.onRename, e.target, treeNode);
                }
            }

            if (e.key === 'Escape') {
                if (molecule.folderTree.getState().editing) {
                    molecule.folderTree.setEditing(undefined);
                }
            }
        });

        molecule.folderTree.onBlur((e, treeNode) => {
            if (molecule.folderTree.getState().editing === treeNode.id) {
                // If already validate failed, then do NOT emit rename event.
                if (molecule.folderTree.getState().validateInfo?.status === 'error') {
                    molecule.folderTree.setEditing(undefined);
                } else {
                    molecule.folderTree.emit(FolderTreeEvent.onRename, e.target, treeNode);
                }
            }
        });

        molecule.folderTree.onRename((ele, treeNode) => {
            molecule.folderTree.setEditing(undefined);
            const nextValue = ele.value;
            molecule.folderTree.update({ id: treeNode.id, name: nextValue });
        });

        molecule.folderTree.onRemove((id) => {
            molecule.folderTree.remove(id);
        });

        const drag = new Drag(molecule);
        molecule.folderTree.onDragStart(() => {
            drag.start();
        });

        molecule.folderTree.onDragOver((source, target) => {
            drag.createEffect(() => {
                drag.makeup(source, target);
                drag.debounce(() => {
                    if (
                        target.fileType === FileTypes.Folder &&
                        !molecule.folderTree.getState().expandedKeys.includes(target.id)
                    ) {
                        molecule.folderTree.emit(FolderTreeEvent.onSelect, target);
                    }
                }, 2000);
            }, target);
        });

        molecule.folderTree.onDrop(() => {
            drag.end();
        });

        molecule.folderTree.onDragEnd(() => {
            drag.end();
        });

        molecule.folderTree.onContextMenu((pos, treeNode) => {
            const scope = {
                name: molecule.builtin.getConstants().CONTEXTMENU_ITEM_FOLDERTREE,
                item: treeNode,
            };
            if (treeNode.fileType === FileTypes.File) {
                molecule.contextMenu.open(
                    molecule.builtin.getModules().CONTEXTMENU_FILE,
                    pos,
                    scope
                );
            } else if (treeNode.fileType === FileTypes.Folder) {
                molecule.contextMenu.open(
                    molecule.builtin.getModules().CONTEXTMENU_FOLDER,
                    pos,
                    scope
                );
            } else if (treeNode.fileType === FileTypes.RootFolder) {
                molecule.contextMenu.open(
                    molecule.builtin.getModules().CONTEXTMENU_FOLDER_PANEL,
                    pos,
                    scope
                );
            }
        });

        molecule.folderTree.onContextMenuClick((item, treeNode) => {
            const { EXPLORER_CONTEXTMENU_RENAME, EXPLORER_CONTEXTMENU_DELETE } =
                molecule.builtin.getConstants();
            switch (item.id) {
                case EXPLORER_CONTEXTMENU_RENAME: {
                    molecule.folderTree.setCurrent(treeNode.id);
                    molecule.folderTree.setEditing(treeNode.id);
                    molecule.folderTree.setValidateInfo('');
                    break;
                }

                case EXPLORER_CONTEXTMENU_DELETE: {
                    molecule.folderTree.emit(FolderTreeEvent.onDelete, treeNode.id);
                    break;
                }

                default:
                    break;
            }
        });
    },
};
