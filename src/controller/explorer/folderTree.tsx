import { singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';

import { ITreeNodeItem, FileTypes } from 'mo/components/tree';
import { editorService, explorerService } from 'mo';
import { EditorController } from 'mo/controller/editor';
import { IMenuItem } from 'mo/components/menu';
import Modal from 'mo/components/dialog';
const confirm = Modal.confirm;

export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem, isAuto?: boolean) => void;
    readonly onSelectTree?: (id: number) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItem,
        node: ITreeNodeItem,
        events?: Object
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

    private initView() {
    }

    public readonly onSelectFile = (file: ITreeNodeItem, isAuto?: boolean) => {
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
        if (isAuto) {
            // 更新文件自动回调
            const editorState = editorService.getState();

            const { id, data = [] } = editorState?.current || {};
            const tabId = file.id;
            const index = data?.findIndex((tab) => tab.id == tabId);
            if (index > -1) {
                if (id) editorService.updateTab(tabData, id);
            } else {
                editorService.open(tabData);
            }
        } else {
            editorService.open(tabData);
        }
    };

    public onSelectTree = (id: number) => {
        explorerService.setActive(id);
    };

    public readonly onDropTree = (treeNode: ITreeNodeItem[]) => {
        explorerService.onDropTree(treeNode);
    };

    public readonly onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItem,
        node: ITreeNodeItem,
        events?: Object
    ) => {
        const menuId = item.id;
        const { id: nodeId, name } = node as any;
        switch (menuId) {
            case 'rename': {
                explorerService.rename(nodeId, () => {
                    events?.['setValue'](name);
                    events?.['onFocus']();
                });
                break;
            }
            case 'delete': {
                confirm({
                    title: `Are you sure you want to delete '${name}' ?`,
                    content: 'This action is irreversible!',
                    onOk() {
                        explorerService.delete(nodeId, () => {
                            new EditorController().onCloseTab(
                                `${nodeId}`,
                                editorService.getState()?.current?.id
                            );
                        });
                    },
                });
                break;
            }
            case 'newFile': {
                explorerService.newFile(nodeId, () => {
                    events?.['onFocus']();
                });
                break;
            }
            case 'newFolder': {
                explorerService.newFolder(nodeId, () => {
                    events?.['onFocus']();
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
            case FileTypes.file: {
                menu = fileContextMenu;
                break;
            }
            case FileTypes.folder: {
                menu = folderContextMenu;
                break;
            }
            case FileTypes.rootFolder: {
                menu = rootFodlerContextMenu;
                break;
            }
            default:
                menu = menus;
        }
        return menu;
    };
}
