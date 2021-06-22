import 'reflect-metadata';
import * as React from 'react';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { IMenuItemProps } from 'mo/components/menu';
import { Modal } from 'mo/components/dialog';
import {
    IFolderInputEvent,
    BASE_CONTEXT_MENU,
    ROOT_FOLDER_CONTEXT_MENU,
    FILE_CONTEXT_MENU,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    RENAME_COMMAND_ID,
    DELETE_COMMAND_ID,
    OPEN_TO_SIDE_COMMAND_ID,
    FolderTreeEvent,
    FileTypes,
} from 'mo/model';
import { FolderTreeService, IFolderTreeService } from 'mo/services';
import { randomId } from 'mo/common/utils';

const confirm = Modal.confirm;
export interface IFolderTreeController {
    readonly createFileOrFolder?: (type: keyof typeof FileTypes) => void;
    readonly onClickContextMenu?: (
        e: React.MouseEvent,
        item: IMenuItemProps,
        node?: ITreeNodeItemProps,
        events?: IFolderInputEvent
    ) => void;
    readonly filterContextMenu?: (
        menus: IMenuItemProps[],
        treeNode: ITreeNodeItemProps
    ) => IMenuItemProps[];
    readonly getInputEvent?: (events: IFolderInputEvent) => IFolderInputEvent;
    readonly onNewFile?: (id: number) => void;
    readonly onNewFolder?: (id: number) => void;
    /**
     * If not provide id, it will use a random id
     */
    readonly onNewRootFolder?: (id?: number) => void;
    readonly onRename?: (id: number) => void;
    readonly onDelete?: (id: number) => void;
    readonly onUpdateFileName?: (file: ITreeNodeItemProps) => void;
    readonly onUpdateFileContent?: (id: number, value?: string) => void;
    readonly onSelectFile?: (
        file: ITreeNodeItemProps,
        isUpdate?: boolean
    ) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItemProps[]) => void;
}

@singleton()
export class FolderTreeController
    extends Controller
    implements IFolderTreeController {
    private readonly folderTreeService: IFolderTreeService;

    constructor() {
        super();
        this.folderTreeService = container.resolve(FolderTreeService);
        this.initView();
    }

    private initView() {}

    public createFileOrFolder = (type: keyof typeof FileTypes) => {
        const folderTreeState = this.folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        // emit onNewFile or onNewFolder event
        this.emit(FolderTreeEvent[`onNew${type}`], nodeId);
    };

    public readonly getInputEvent = (
        events: IFolderInputEvent
    ): IFolderInputEvent => {
        return events;
    };

    public onRename = (id: number) => {
        this.emit(FolderTreeEvent.onRename, id);
    };

    public onDelete = (id: number) => {
        this.emit(FolderTreeEvent.onDelete, id);
    };

    public onNewFile = (id: number) => {
        this.emit(FolderTreeEvent.onNewFile, id);
    };

    public onNewFolder = (id: number) => {
        this.emit(FolderTreeEvent.onNewFolder, id);
    };

    public onNewRootFolder = (id?: number) => {
        this.emit(FolderTreeEvent.onNewRootFolder, id || randomId());
    };

    public onUpdateFileName = (file: ITreeNodeItemProps) => {
        this.emit(FolderTreeEvent.onUpdateFileName, file);
    };

    public onUpdateFileContent = (id: number, value?: string) => {
        this.emit(FolderTreeEvent.onUpdateFileContent, id, value);
    };

    public readonly onSelectFile = (
        file: ITreeNodeItemProps,
        isUpdate?: boolean
    ) => {
        this.emit(FolderTreeEvent.onSelectFile, file, isUpdate);
    };

    public readonly onDropTree = (treeNode: ITreeNodeItemProps[]) => {
        this.folderTreeService.onDropTree(treeNode);
    };

    public readonly onClickContextMenu = (
        e: React.MouseEvent,
        item: IMenuItemProps,
        node?: ITreeNodeItemProps
    ) => {
        const menuId = item.id;
        const ctx = this;
        const { id: nodeId, name } = node || {};
        switch (menuId) {
            case RENAME_COMMAND_ID: {
                this.onRename(nodeId);
                break;
            }
            case DELETE_COMMAND_ID: {
                confirm({
                    title: `Are you sure you want to delete '${name}' ?`,
                    content: 'This action is irreversible!',
                    onOk() {
                        ctx.onDelete(nodeId);
                    },
                });
                break;
            }
            case NEW_FILE_COMMAND_ID: {
                this.createFileOrFolder(FileTypes.File);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.createFileOrFolder(FileTypes.Folder);
                break;
            }
            case OPEN_TO_SIDE_COMMAND_ID: {
                this.onSelectFile(node!, false);
                break;
            }
        }
    };

    public readonly filterContextMenu = (menus, node) => {
        let menu;

        switch (node.fileType) {
            case FileTypes.File: {
                menu = FILE_CONTEXT_MENU.concat(menus);
                break;
            }
            case FileTypes.Folder: {
                menu = BASE_CONTEXT_MENU.concat(menus);
                break;
            }
            case FileTypes.RootFolder: {
                menu = BASE_CONTEXT_MENU.concat(ROOT_FOLDER_CONTEXT_MENU);
                break;
            }
            default:
                menu = menus;
        }
        return menu;
    };
}

// Register singleton
container.resolve(FolderTreeController);
