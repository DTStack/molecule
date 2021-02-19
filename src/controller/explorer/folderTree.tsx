import { singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';

import { ITreeNodeItem, FileType, FileTypes } from 'mo/components/tree';

import { editorService, explorerService } from 'mo';
import { IMenuItem } from 'mo/components/menu';
import Modal from 'mo/components/dialog';
const confirm = Modal.confirm;

export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem) => void;
    readonly onCreateFile?: (e: React.MouseEvent) => void;
    readonly onUpdateFile?: (
        file: ITreeNodeItem,
        newName: string,
        index: number
    ) => void;
    readonly onRename?: (file: ITreeNodeItem, callback: Function) => void;
    readonly onDeleteFile?: (file: ITreeNodeItem) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItem,
        node: ITreeNodeItem
    ) => void;
    readonly filterContextMenu?: (
        menus: IMenuItem[],
        treeNode: IMenuItem
    ) => IMenuItem[];
}

@singleton()
export class FolderTreeController
    extends Controller
    implements IFolderTreeController {
    constructor() {
        super();
        this.initView();
    }

    private initView() { }

    public readonly onSelectFile = (file: ITreeNodeItem) => {
        const tabData = {
            ...file,
            activeTab: file.id,
            modified: false,
        };
        editorService.open(tabData, Number(tabData.activeTab!));
    };

    public readonly onCreateFile = (e: React.MouseEvent) => {
        const file: ITreeNodeItem = {
            id: '1',
            name: '',
            fileType: 'folder',
            modify: true,
        };
        const fileType = FileTypes.FOLDER as FileType;
        explorerService.createFile(file, fileType);
    };

    public readonly onUpdateFile = (
        file: ITreeNodeItem,
        newName: string,
        index: number
    ) => {
        explorerService.updateFile(file, newName, index);
    };

    public readonly onRename = (file: ITreeNodeItem, callback: Function) => {
        explorerService.rename(file, callback);
    };

    public readonly onDeleteFile = (file: ITreeNodeItem) => {
        explorerService.deleteFile(file);
    };

    public readonly onDropTree = (treeNode: ITreeNodeItem[]) => {
        explorerService.onDropTree(treeNode);
    };

    public readonly onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItem,
        node: ITreeNodeItem
    ) => {
        const menuId = item.id;
        const ctx = this;

        switch (menuId) {
            case 'rename': {
                this.onRename(node, () => {
                    console.log('Rename file item:', node);
                });
            }
            case 'delete': {
                confirm({
                    title: `Are you sure you want to delete '${node?.name}' ?`,
                    content: 'This action is irreversible!',
                    onOk() {
                        ctx.onDeleteFile(node);
                    },
                });
            }
            case 'newFile': {
                this.onCreateFile(e);
            }
            case 'newFolder': {
                const file: ITreeNodeItem = {
                    id: '1',
                    name: '',
                    fileType: 'folder',
                    modify: true,
                };
                const fileType = FileTypes.FOLDER as FileType;
                explorerService.createFile(file, fileType);
            }
            case 'openTab': {
                console.log('OpenTab');
                // editorService.open();
            }
        }
    };

    public readonly filterContextMenu = (
        menus: IMenuItem[],
        menuItem: IMenuItem
    ) => {
        return menus;
    };
}
