import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import cloneDeep from 'lodash/cloneDeep';
import { Controller } from 'mo/react/controller';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { IMenuItemProps } from 'mo/components/menu';
import {
    ROOT_FOLDER_CONTEXT_MENU,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    RENAME_COMMAND_ID,
    DELETE_COMMAND_ID,
    OPEN_TO_SIDE_COMMAND_ID,
    FolderTreeEvent,
    FileTypes,
    FileType,
    SAMPLE_FOLDER_PANEL_ID,
} from 'mo/model';
import {
    ExplorerService,
    FolderTreeService,
    IExplorerService,
    IFolderTreeService,
} from 'mo/services';
import type { EventDataNode } from 'rc-tree/lib/interface';
import { Key } from 'react';
import { uniq } from 'lodash';

export interface LoadEventData extends EventDataNode {
    data?: ITreeNodeItemProps;
}

export interface IFolderTreeController {
    readonly createTreeNode?: (type: FileType) => void;
    readonly onClickContextMenu?: (
        contextMenu: IMenuItemProps,
        treeNode?: ITreeNodeItemProps
    ) => void;
    readonly onUpdateFileName?: (file: ITreeNodeItemProps) => void;
    readonly onSelectFile?: (file: ITreeNodeItemProps) => void;
    readonly onExpand?: (expandedKeys: Key[], file: ITreeNodeItemProps) => void;
    readonly onDropTree?: (treeNode: ITreeNodeItemProps[]) => void;
    readonly onLoadData?: (treeNode: LoadEventData) => Promise<void>;
    readonly onRightClick?: (treeNode: ITreeNodeItemProps) => IMenuItemProps[];
}

@singleton()
export class FolderTreeController
    extends Controller
    implements IFolderTreeController {
    private readonly folderTreeService: IFolderTreeService;
    private readonly explorerService: IExplorerService;

    constructor() {
        super();
        this.folderTreeService = container.resolve(FolderTreeService);
        this.explorerService = container.resolve(ExplorerService);
        this.handleEvents();
    }

    private handleEvents() {
        this.explorerService.onCollapseChange((keys) => {
            // If click the Folder Panel, Reset the current
            if (keys[0] === SAMPLE_FOLDER_PANEL_ID) {
                const folderTree = this.folderTreeService.getState().folderTree;
                if (folderTree) {
                    folderTree.current = undefined;
                    this.folderTreeService.setState({
                        folderTree: folderTree,
                    });
                }
            }
        });
    }

    private getContextMenu = (treeNode: ITreeNodeItemProps) => {
        const menus: IMenuItemProps[] = cloneDeep(
            this.folderTreeService.getState().folderTree?.contextMenu || []
        );

        const fileContextMenu = this.folderTreeService.getFileContextMenu();
        const folderContextMenu = this.folderTreeService.getFolderContextMenu();
        switch (treeNode.fileType) {
            case FileTypes.File: {
                menus.unshift(...fileContextMenu);
                break;
            }
            case FileTypes.Folder: {
                menus.unshift(...folderContextMenu);
                break;
            }
            case FileTypes.RootFolder: {
                // In general, root folder have no contextMenu, because it can't be clicked
                return folderContextMenu.concat(
                    ROOT_FOLDER_CONTEXT_MENU
                ) as IMenuItemProps[];
            }
            default:
                break;
        }

        return menus;
    };

    public createTreeNode = (type: FileType) => {
        const folderTreeState = this.folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const node = current || data?.[0];
        const nodeId = node?.id;
        this.emit(FolderTreeEvent.onCreate, type, nodeId);
    };

    public readonly onClickContextMenu = (
        contextMenu: IMenuItemProps,
        treeNode?: ITreeNodeItemProps
    ) => {
        const menuId = contextMenu.id;
        switch (menuId) {
            case RENAME_COMMAND_ID: {
                const { id: nodeId } = treeNode!;
                this.onRename(nodeId);
                break;
            }
            case DELETE_COMMAND_ID: {
                const { id: nodeId } = treeNode!;
                this.onDelete(nodeId);
                break;
            }
            case NEW_FILE_COMMAND_ID: {
                this.createTreeNode(FileTypes.File);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.createTreeNode(FileTypes.Folder);
                break;
            }
            case OPEN_TO_SIDE_COMMAND_ID: {
                this.onSelectFile(treeNode!);
                break;
            }
            default: {
                this.onContextMenuClick(contextMenu, treeNode);
            }
        }
    };

    public onRightClick = (treeNode: ITreeNodeItemProps) => {
        const menus = this.getContextMenu(treeNode);
        this.emit(FolderTreeEvent.onRightClick, treeNode, menus);

        return menus;
    };

    public readonly onDropTree = (treeNode: ITreeNodeItemProps[]) => {
        this.folderTreeService.onDropTree(treeNode);
    };

    public onUpdateFileName = (file: ITreeNodeItemProps) => {
        this.emit(FolderTreeEvent.onUpdateFileName, file);
    };

    public readonly onSelectFile = (file: ITreeNodeItemProps) => {
        this.folderTreeService.setActive(file.id);
        // editing file won't emit onSelectFile
        if (!file.isEditable && file.fileType === FileTypes.File) {
            this.emit(FolderTreeEvent.onSelectFile, file);
        }
    };

    public readonly onExpand = (expandedKeys, node: ITreeNodeItemProps) => {
        let expandKeys: string[] = this.folderTreeService.getExpandedKeys();
        if (expandedKeys.length > 0) {
            expandKeys = uniq(expandKeys.concat(expandedKeys));
        } else {
            const nodeId = `${node.key}`;
            if (!expandKeys.includes(nodeId)) {
                expandKeys.push(nodeId);
            } else {
                expandKeys = expandKeys.filter((key) => `${key}` !== nodeId);
            }
        }
        this.folderTreeService.setExpandedKeys(expandKeys);
        this.emit(FolderTreeEvent.onExpand, expandedKeys, node);
    };

    private onContextMenuClick = (
        contextMenu: IMenuItemProps,
        treeNode?: ITreeNodeItemProps
    ) => {
        this.emit(FolderTreeEvent.onContextMenuClick, contextMenu, treeNode);
    };

    private onRename = (id: number) => {
        this.emit(FolderTreeEvent.onRename, id);
    };

    private onDelete = (id: number) => {
        this.emit(FolderTreeEvent.onDelete, id);
    };

    public onLoadData = async (treeNode: LoadEventData) => {
        await this.emit(FolderTreeEvent.onLoadData, treeNode);
    };
}
