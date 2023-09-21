import { createElement } from 'react';
import EditorTree from 'mo/client/slots/editorTree';
import { BaseController } from 'mo/glue';
import { EditorTreeEvent } from 'mo/models/editorTree';
import type { BuiltinService } from 'mo/services/builtin';
import type { ExplorerService } from 'mo/services/explorer';
import { UniqueId } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface IEditorTreeController extends BaseController {
    readonly onClose?: (tabId: UniqueId, groupId: UniqueId) => void;
    readonly onSelect?: (tabId: UniqueId, groupId: UniqueId) => void;
    readonly onGroupClick?: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        groupId: UniqueId
    ) => void;
    // readonly onCloseGroup?: (groupId: UniqueId) => void;
    // readonly onSaveGroup?: (groupId: UniqueId) => void;
    // readonly onToolbarClick?: (toolbar: IActionBarItemProps, groupId: UniqueId) => void;
    // /**
    //  * Trigger by context menu click event
    //  * When click the context menu from group header, it doesn't have file info
    //  */
    // readonly onContextMenu?: (menu: IMenuItemProps, groupId: UniqueId, file?: ITabProps) => void;
}

@injectable()
export class EditorTreeController extends BaseController implements IEditorTreeController {
    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('explorer') private explorer: ExplorerService
    ) {
        super();
        this.initView();
    }

    private initView() {
        // const EditorTreeView = connect<IOpenEditProps>(this.editService, EditorTree);
        const {
            builtInExplorerEditorPanel,
            // builtInEditorTreeContextMenu,
            // builtInEditorTreeHeaderContextMenu,
        } = this.builtin.getState().modules;

        this.explorer.addPanel({
            ...builtInExplorerEditorPanel,
            render: (panel) => createElement(EditorTree, { panel, ...this }),
        });

        // if (builtInExplorerEditorPanel) {
        //     const { groupToolbar, ...restEditor } = builtInExplorerEditorPanel;
        //     const contextMenu = builtInEditorTreeContextMenu || [];
        //     const headerContextMenu = builtInEditorTreeHeaderContextMenu || [];

        //     this.explorerService.addPanel({
        //         ...restEditor,
        //         renderPanel: (panel) => (
        //             <EditorTreeView
        //                 panel={panel}
        //                 contextMenu={contextMenu}
        //                 headerContextMenu={headerContextMenu}
        //                 groupToolbar={groupToolbar}
        //                 onClose={this.onClose}
        //                 onSelect={this.onSelect}
        //                 onCloseGroup={this.onCloseGroup}
        //                 onSaveGroup={this.onSaveGroup}
        //                 onContextMenu={this.onContextMenu}
        //                 onToolbarClick={this.onToolbarClick}
        //             />
        //         ),
        //     });
        // }
    }

    // public onContextMenu = (menu: IMenuItemProps, groupId: UniqueId, file?: ITabProps) => {
    //     const {
    //         EDITOR_MENU_CLOSE,
    //         EDITOR_MENU_CLOSE_OTHERS,
    //         EDITOR_MENU_CLOSE_SAVED,
    //         EDITOR_MENU_CLOSE_ALL,
    //     } = this.builtinService.getConstants();

    //     switch (menu.id) {
    //         case EDITOR_MENU_CLOSE:
    //             this.onClose(file?.id!, groupId);
    //             break;

    //         case EDITOR_MENU_CLOSE_OTHERS:
    //             this.emit(EditorTreeEvent.onCloseOthers, file, groupId);
    //             break;

    //         case EDITOR_MENU_CLOSE_SAVED:
    //             this.emit(EditorTreeEvent.onCloseSaved, groupId);
    //             break;

    //         case EDITOR_MENU_CLOSE_ALL:
    //             this.emit(EditorTreeEvent.onCloseAll, groupId);
    //             break;

    //         default:
    //             this.emit(EditorTreeEvent.onContextMenu, menu, file, groupId);
    //             break;
    //     }
    // };

    public onGroupClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, groupId: UniqueId) => {
        this.emit(EditorTreeEvent.onGroupClick, groupId);
    };

    public onClose = (tabId: UniqueId, groupId: UniqueId) => {
        this.emit(EditorTreeEvent.onClose, tabId, groupId);
    };

    public onSelect = (tabId: UniqueId, groupId: UniqueId) => {
        this.emit(EditorTreeEvent.onSelect, tabId, groupId);
    };

    // public onCloseGroup = (groupId: UniqueId) => {
    //     this.emit(EditorTreeEvent.onCloseAll, groupId);
    // };

    // public onSaveGroup = (groupId: UniqueId) => {
    //     this.emit(EditorTreeEvent.onSaveAll, groupId);
    // };

    // public onToolbarClick = (toolbar: IActionBarItemProps, groupId: UniqueId) => {
    //     this.emit(EditorTreeEvent.onToolbarClick, toolbar, groupId);
    // };
}
