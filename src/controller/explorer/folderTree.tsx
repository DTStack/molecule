import { singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';

import { ITreeNodeItem, FileTypes } from 'mo/components/tree';
import { editorService, explorerService } from 'mo';
import { EditorController } from 'mo/controller/editor';
import { IMenuItem } from 'mo/components/menu';
import Modal from 'mo/components/dialog';
import {
    IFolderInputEvent,
    TreeNodeModel,
    baseContextMenu,
    rootFolderContextMenu,
    fileContextMenu,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    RENAME_COMMAND_ID,
    REMOVE_COMMAND_ID,
    DELETE_COMMAND_ID,
    OPEN_TO_SIDE_COMMAND_ID,
    ADD_ROOT_FOLDER_COMMAND_ID,
} from 'mo/model';
const confirm = Modal.confirm;

export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem, isAuto?: boolean) => void;
    readonly onSelectTree?: (id: number) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItem[]) => void;
    readonly onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItem,
        node?: ITreeNodeItem,
        events?: IFolderInputEvent
    ) => void;
    readonly filterContextMenu?: (
        menus: IMenuItem[],
        treeNode: ITreeNodeItem
    ) => IMenuItem[];
    readonly getInputEvent?: (events: IFolderInputEvent) => IFolderInputEvent;
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

    public readonly onSelectFile = (file: ITreeNodeItem, isAuto?: boolean) => {
        const { fileType, modify } = file;
        const isFile = fileType === FileTypes.file;
        if (!isFile || modify) return;
        const tabData = {
            ...file,
            id: `${file.id}`?.split('_')?.[0],
            modified: false,
            data: {
                value: file.value,
                path: 'desktop/molecule/editor1',
                language: 'sql',
            },
            breadcrumb: [{ id: `${file.id}`, name: 'editor.js' }],
        };
        const editorState = editorService.getState();

        const { id, data = [] } = editorState?.current || ({} as any);
        if (isAuto) {
            // 更新文件自动回调
            const tabId = file.id;
            const index = data?.findIndex((tab) => tab.id == tabId);
            if (index > -1) {
                if (id) editorService.updateTab(tabData, id);
            } else {
                editorService.open(tabData);
                new EditorController()?.onSelectTab(tabData.id, id);
            }
        } else {
            editorService.open(tabData);
            new EditorController()?.onSelectTab(tabData.id, id);
        }
    };

    public onSelectTree = (id: number) => {
        explorerService.setActive(id);
    };

    public readonly onDropTree = (treeNode: ITreeNodeItem[]) => {
        explorerService.onDropTree(treeNode);
    };

    public readonly getInputEvent = (
        events: IFolderInputEvent
    ): IFolderInputEvent => {
        return events;
    };

    public readonly onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItem,
        node = {},
        events?: IFolderInputEvent
    ) => {
        const menuId = item.id;
        const { id: nodeId, name } = node as any;
        console.log('onClickContextMenu => Item', item);
        switch (menuId) {
            case RENAME_COMMAND_ID: {
                explorerService.rename(nodeId, () => {
                    events?.setValue?.(name);
                    events?.onFocus();
                });
                break;
            }
            case DELETE_COMMAND_ID: {
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
            case NEW_FILE_COMMAND_ID: {
                explorerService.newFile(nodeId, () => {
                    events?.onFocus();
                });
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                explorerService.newFolder(nodeId, () => {
                    events?.onFocus();
                });
                break;
            }
            case REMOVE_COMMAND_ID: {
                explorerService.removeRootFolder(nodeId);
                break;
            }
            case ADD_ROOT_FOLDER_COMMAND_ID: {
                explorerService.addRootFolder?.(
                    new TreeNodeModel({
                        name: `molecule_temp${Math.random()}`,
                        fileType: 'rootFolder',
                    })
                );
                break;
            }
            case OPEN_TO_SIDE_COMMAND_ID: {
                console.log('OpenTab');
                break;
                // editorService.open();
            }
        }
    };

    public readonly filterContextMenu = (menus, node) => {
        let menu;

        switch (node.fileType) {
            case FileTypes.file: {
                menu = fileContextMenu.concat(menus);
                break;
            }
            case FileTypes.folder: {
                menu = baseContextMenu.concat(menus);
                break;
            }
            case FileTypes.rootFolder: {
                menu = baseContextMenu.concat(rootFolderContextMenu);
                break;
            }
            default:
                menu = menus;
        }
        return menu;
    };
}
