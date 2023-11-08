import React from 'react';
import Explorer from 'mo/client/slots/explorer';
import { BaseController } from 'mo/glue';
import { ActivityBarService } from 'mo/services/activityBar';
import type { BuiltinService } from 'mo/services/builtin';
import type { SidebarService } from 'mo/services/sidebar';
import { inject, injectable } from 'tsyringe';

export interface IExplorerController extends BaseController {
    // onActionsContextMenuClick?: (e: React.MouseEvent, item?: IMenuItemProps) => void;
    // onCollapseChange?: (keys) => void;
    // onToolbarClick?: (item: IActionBarItemProps, panel: IExplorerPanelItem) => void;
    // onClick?: (event, item) => void;
}

@injectable()
export class ExplorerController extends BaseController implements IExplorerController {
    // private readonly activityBarService: IActivityBarService;
    // private readonly sidebarService: ISidebarService;
    // private readonly explorerService: IExplorerService;
    // private readonly folderTreeController: IFolderTreeController;
    // private readonly builtinService: IBuiltinService;

    constructor(
        @inject('builtin') private builtin: BuiltinService,
        @inject('sidebar') private sidebar: SidebarService,
        @inject('activityBar') private activitybar: ActivityBarService
    ) {
        super();
        this.initView();
    }

    private initView() {
        const { EXPLORER_ACTIVITY_ITEM, builtInExplorerActivityItem } =
            this.builtin.getState().modules;
        this.activitybar.add(builtInExplorerActivityItem, true);
        this.sidebar.add(
            {
                ...EXPLORER_ACTIVITY_ITEM,
                render: () => React.createElement(Explorer),
            },
            true
        );
    }

    // public readonly onClick = (event: React.MouseEvent, item: IActionBarItemProps) => {
    //     this.emit(ExplorerEvent.onClick, event, item);
    // };

    // public readonly onActionsContextMenuClick = (e: React.MouseEvent, item?: IMenuItemProps) => {
    //     const panelId = item?.id;
    //     if (panelId) {
    //         this.explorerService.togglePanel(panelId);
    //     }
    // };

    // public readonly onCollapseChange = (keys) => {
    //     this.emit(ExplorerEvent.onCollapseChange, keys);
    // };

    // public readonly onToolbarClick = (
    //     item: IActionBarItemProps,
    //     parentPanel: IExplorerPanelItem
    // ) => {
    //     const toolbarId = item.id;
    //     const {
    //         NEW_FILE_COMMAND_ID,
    //         NEW_FOLDER_COMMAND_ID,
    //         REMOVE_COMMAND_ID,
    //         COLLAPSE_COMMAND_ID,
    //         EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
    //         EXPLORER_TOGGLE_SAVE_ALL,
    //         EXPLORER_TOGGLE_VERTICAL,
    //     } = this.builtinService.getConstants();

    //     switch (toolbarId) {
    //         case NEW_FILE_COMMAND_ID: {
    //             this.folderTreeController.createTreeNode?.(FileTypes.File);
    //             break;
    //         }
    //         case NEW_FOLDER_COMMAND_ID: {
    //             this.folderTreeController.createTreeNode?.(FileTypes.Folder);
    //             break;
    //         }
    //         case REMOVE_COMMAND_ID: {
    //             this.emit(ExplorerEvent.onRemovePanel, parentPanel);
    //             break;
    //         }
    //         case COLLAPSE_COMMAND_ID: {
    //             this.emit(ExplorerEvent.onCollapseAllFolders);
    //             break;
    //         }
    //         case EXPLORER_TOGGLE_CLOSE_ALL_EDITORS: {
    //             this.emit(EditorTreeEvent.onCloseAll);
    //             break;
    //         }
    //         case EXPLORER_TOGGLE_SAVE_ALL: {
    //             this.emit(EditorTreeEvent.onSaveAll);
    //             break;
    //         }
    //         case EXPLORER_TOGGLE_VERTICAL: {
    //             this.emit(EditorTreeEvent.onSplitEditorLayout);
    //             break;
    //         }
    //         default:
    //             this.emit(ExplorerEvent.onPanelToolbarClick, parentPanel, toolbarId);
    //     }
    // };

    // public renderFolderTree = (panel) => {
    //     return <FolderTreeView panel={panel} />;
    // };
}