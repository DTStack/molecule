import 'reflect-metadata';
import * as React from 'react';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';

import { ITreeNodeItem, FileTypes } from 'mo/components/tree';
import { IMenuItem } from 'mo/components/menu';
import Modal from 'mo/components/dialog';
import {
    IFolderInputEvent,
    TreeNodeModel,
    BASE_CONTEXT_MENU,
    ROOT_FOLDER_CONTEXT_MENU,
    FILE_CONTEXT_MENU,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    RENAME_COMMAND_ID,
    REMOVE_COMMAND_ID,
    DELETE_COMMAND_ID,
    OPEN_TO_SIDE_COMMAND_ID,
    ADD_ROOT_FOLDER_COMMAND_ID,
    FolderTreeEvent,
} from 'mo/model';
import {
    EditorService,
    FolderTreeService,
    IEditorService,
    IFolderTreeService,
} from 'mo/services';

const confirm = Modal.confirm;

export interface IFolderTreeController {
    readonly onSelectFile?: (file: ITreeNodeItem, isUpdate?: boolean) => void;
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
    private readonly folderTreeService: IFolderTreeService;
    private readonly editorService: IEditorService;
    constructor() {
        super();
        this.folderTreeService = container.resolve(FolderTreeService);
        this.editorService = container.resolve(EditorService);
        this.initView();
    }

    private initView() {}

    public readonly onSelectFile = (
        file: ITreeNodeItem,
        isUpdate?: boolean
    ) => {
        const { fileType, isEditable } = file;
        const isFile = fileType === FileTypes.file;
        this.folderTreeService.setActive(file?.id);
        if (!isFile || isEditable) return;
        const tabData = {
            ...file,
            id: `${file.id}`?.split('_')?.[0],
            modified: false,
            data: {
                value: file.content,
                path: 'desktop/moslecule/editor1',
                language: 'sql',
            },
        };

        const { id, data = [] } =
            this.editorService.getState()?.current || ({} as any);
        if (isUpdate) {
            const tabId = file.id;
            const index = data?.findIndex((tab) => tab.id == tabId);
            if (index > -1) {
                if (id) this.editorService.updateTab(tabData, id);
            } else {
                this.editorService.open(tabData);
            }
        } else {
            this.editorService.open(tabData);
        }
        this.emit(FolderTreeEvent.onSelectFile, tabData, isUpdate);
    };

    public readonly onDropTree = (treeNode: ITreeNodeItem[]) => {
        this.folderTreeService.onDropTree(treeNode);
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
        const ctx = this;
        const { id: nodeId, name } = node as any;
        console.log('onClickContextMenu => Item', item);
        switch (menuId) {
            case RENAME_COMMAND_ID: {
                this.folderTreeService.rename(nodeId, () => {
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
                        ctx.folderTreeService.delete(nodeId, () => {
                            // TODO Refactor the below, there needs listen to the CloseTab by the editorService
                            // ctx.editorController!.onCloseTab(
                            //     `${nodeId}`,
                            //     ctx.editorService.getState()?.current?.id
                            // );
                        });
                    },
                });
                break;
            }
            case NEW_FILE_COMMAND_ID: {
                this.folderTreeService.newFile(nodeId, () => {
                    events?.onFocus();
                });
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.folderTreeService.newFolder(nodeId, () => {
                    events?.onFocus();
                });
                break;
            }
            case REMOVE_COMMAND_ID: {
                this.folderTreeService.removeRootFolder(nodeId);
                break;
            }
            case ADD_ROOT_FOLDER_COMMAND_ID: {
                this.folderTreeService.addRootFolder?.(
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
                menu = FILE_CONTEXT_MENU.concat(menus);
                break;
            }
            case FileTypes.folder: {
                menu = BASE_CONTEXT_MENU.concat(menus);
                break;
            }
            case FileTypes.rootFolder: {
                menu = BASE_CONTEXT_MENU.concat(ROOT_FOLDER_CONTEXT_MENU);
                break;
            }
            default:
                menu = menus;
        }
        return menu;
    };
}
