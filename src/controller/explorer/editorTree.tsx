import 'reflect-metadata';
import React from 'react';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { EditorTreeEvent } from 'mo/model/workbench/explorer/editorTree';
import { EditorService, ExplorerService, FolderTreeService } from 'mo/services';
import { builtInExplorerEditorPanel } from 'mo/model';
import { EditorTree } from 'mo/workbench/sidebar/explore/editorTree';
import { connect } from 'mo/react';

export interface IEditorTreeController {
    readonly onClose: (tabId: string, groupId: number) => void;
    readonly onSelect: (tabId: string, groupId: number) => void;
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
        const EditorTreeView = connect(this.editService, EditorTree);

        this.explorerService.addPanel({
            ...builtInExplorerEditorPanel(),
            renderPanel: () => (
                <EditorTreeView
                    onClose={this.onClose}
                    onSelect={this.onSelect}
                    getFileIconByExtensionName={
                        this.folderTreeService.getFileIconByExtensionName
                    }
                />
            ),
        });
    }

    public onClose = (tabId: string, groupId: number) => {
        this.emit(EditorTreeEvent.onClose, tabId, groupId);
    };

    public onSelect = (tabId: string, groupId: number) => {
        this.emit(EditorTreeEvent.onSelect, tabId, groupId);
    };
}

// Register singleton
container.resolve(EditorTreeController);
