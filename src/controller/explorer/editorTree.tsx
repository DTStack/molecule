import 'reflect-metadata';
import React from 'react';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import {
    builtInEditorTreeContextMenu,
    builtInEditorTreeHeaderContextMenu,
    EditorTreeEvent,
} from 'mo/model/workbench/explorer/editorTree';
import { EditorService, ExplorerService, FolderTreeService } from 'mo/services';
import {
    builtInExplorerEditorPanel,
    EDITOR_MENU_CLOSE,
    EDITOR_MENU_CLOSE_ALL,
    EDITOR_MENU_CLOSE_OTHERS,
    EDITOR_MENU_CLOSE_SAVED,
} from 'mo/model';
import {
    EditorTree,
    IOpenEditProps,
} from 'mo/workbench/sidebar/explore/editorTree';
import { connect } from 'mo/react';
import { IMenuItemProps, ITabProps } from 'mo/components';

export interface IEditorTreeController {
    readonly onClose: (tabId: string, groupId: number) => void;
    readonly onSelect: (tabId: string, groupId: number) => void;
    readonly onCloseGroup: (groupId: number) => void;
    readonly onSaveGroup: (groupId: number) => void;
    /**
     * Trigger by context menu click event
     * When click the context menu from group header, it doesn't have file info
     */
    readonly onContextMenu: (
        menu: IMenuItemProps,
        groupId: number,
        file?: ITabProps
    ) => void;
}

@singleton()
export class EditorTreeController
    extends Controller
    implements IEditorTreeController {
    private readonly explorerService: ExplorerService;
    private readonly folderTreeService: FolderTreeService;
    private readonly editService: EditorService;

    constructor() {
        super();
        this.editService = container.resolve(EditorService);
        this.explorerService = container.resolve(ExplorerService);
        this.folderTreeService = container.resolve(FolderTreeService);
        this.initView();
    }

    public initView() {
        const EditorTreeView = connect<IOpenEditProps>(
            this.editService,
            EditorTree
        );
        const { groupToolbar, ...restEditor } = builtInExplorerEditorPanel();
        const contextMenu = builtInEditorTreeContextMenu();
        const headerContextMenu = builtInEditorTreeHeaderContextMenu();

        this.explorerService.addPanel({
            ...restEditor,
            renderPanel: (panel) => (
                <EditorTreeView
                    panel={panel}
                    contextMenu={contextMenu}
                    headerContextMenu={headerContextMenu}
                    groupToolbar={groupToolbar}
                    onClose={this.onClose}
                    onSelect={this.onSelect}
                    onCloseGroup={this.onCloseGroup}
                    onSaveGroup={this.onSaveGroup}
                    onContextMenu={this.onContextMenu}
                    getFileIconByExtensionName={
                        this.folderTreeService.getFileIconByExtensionName
                    }
                />
            ),
        });
    }

    public onContextMenu = (
        menu: IMenuItemProps,
        groupId: number,
        file?: ITabProps
    ) => {
        switch (menu.id) {
            case EDITOR_MENU_CLOSE:
                this.onClose(file?.id!, groupId);
                break;

            case EDITOR_MENU_CLOSE_OTHERS:
                this.emit(EditorTreeEvent.onCloseOthers, file, groupId);
                break;

            case EDITOR_MENU_CLOSE_SAVED:
                this.emit(EditorTreeEvent.onCloseSaved, groupId);
                break;

            case EDITOR_MENU_CLOSE_ALL:
                this.emit(EditorTreeEvent.onCloseAll, groupId);
                break;

            default:
                this.emit(EditorTreeEvent.onContextMenu, menu, file, groupId);
                break;
        }
    };

    public onClose = (tabId: string, groupId: number) => {
        this.emit(EditorTreeEvent.onClose, tabId, groupId);
    };

    public onSelect = (tabId: string, groupId: number) => {
        this.emit(EditorTreeEvent.onSelect, tabId, groupId);
    };

    public onCloseGroup = (groupId: number) => {
        this.emit(EditorTreeEvent.onCloseAll, groupId);
    };

    public onSaveGroup = (groupId: number) => {
        this.emit(EditorTreeEvent.onSaveAll, groupId);
    };
}

// Register singleton
container.resolve(EditorTreeController);
