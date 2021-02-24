import { singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';

import { ITreeNodeItem, FileTypes } from 'mo/components/tree';

import { editorService, explorerService } from 'mo';
import { EditorController } from 'mo/controller/editor';
import { IMenuItem } from 'mo/components/menu';
import Modal from 'mo/components/dialog';
const confirm = Modal.confirm;

export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItem,
        node: ITreeNodeItem,
        callback?: Function
    ) => void;
    readonly filterContextMenu?: (
        menus: IMenuItem[],
        treeNode: ITreeNodeItem
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

    private initView() {}

    public readonly onSelectFile = (file: ITreeNodeItem) => {
        const tabData = {
            ...file,
            id: `${file.id}`,
            modified: false,
            data: {
                value: `hello tree ${file.id}`,
                path: 'desktop/molecule/editor1',
                language: 'ini',
            },
            breadcrumb: [{ id: `${file.id}`, name: 'editor.js' }],
        };
        editorService.open(tabData);
    };

    public readonly onDropTree = (treeNode: ITreeNodeItem[]) => {
        explorerService.onDropTree(treeNode);
    };

    public readonly onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItem,
        node: ITreeNodeItem,
        callback?: Function
    ) => {
        const menuId = item.id;
        const { id: nodeId, name } = node as any;
        switch (menuId) {
            case 'rename': {
                explorerService.rename(nodeId, () => {
                    if (callback) callback();
                });
                break;
            }
            case 'delete': {
                confirm({
                    title: `Are you sure you want to delete '${name}' ?`,
                    content: 'This action is irreversible!',
                    onOk() {
                        explorerService.delete(nodeId, () => {
                            new EditorController().onCloseTab(nodeId);
                        });
                    },
                });
                break;
            }
            case 'newFile': {
                explorerService.newFile(nodeId, () => {
                    if (callback) callback();
                });
                break;
            }
            case 'newFolder': {
                explorerService.newFolder(nodeId, () => {
                    if (callback) callback();
                });
                break;
            }
            case 'remove': {
                explorerService.removeRootFolder(nodeId);
                break;
            }
            case 'openTab': {
                console.log('OpenTab');
                break;
                // editorService.open();
            }
        }
    };

    public readonly filterContextMenu = (menus, node) => {
        let menu;
        const baseContextMenu = [
            {
                id: 'newFile',
                name: 'New File',
            },
            {
                id: 'newFolder',
                name: 'New Folder',
            },
        ];

        const rootFolderContextMenu = [
            {
                id: 'remove',
                name: 'Remove Folder',
            },
        ];

        const folderContextMenu = baseContextMenu.concat(menus);

        const fileContextMenu = [
            {
                id: 'openToSide',
                name: 'Open to the side',
            },
        ].concat(menus);

        const rootFodlerContextMenu = baseContextMenu.concat(
            rootFolderContextMenu
        );

        switch (node.fileType) {
            case FileTypes.FILE: {
                menu = fileContextMenu;
                break;
            }
            case FileTypes.FOLDER: {
                menu = folderContextMenu;
                break;
            }
            case FileTypes.ROOT: {
                menu = rootFodlerContextMenu;
                break;
            }
            default:
                menu = menus;
        }
        return menu;
    };
}
