import 'reflect-metadata';
import React from 'react';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { connect } from 'mo/react';
import { Explorer, FolderTreeView } from 'mo/workbench/sidebar/explore';
import { IMenuItemProps } from 'mo/components/menu';
import {
    ExplorerEvent,
    IExplorerPanelItem,
} from 'mo/model/workbench/explorer/explorer';
import { FileTypes, EditorTreeEvent } from 'mo/model';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    IExplorerService,
    ISidebarService,
    IActivityBarService,
    ActivityBarService,
    SidebarService,
    ExplorerService,
    IBuiltinService,
    BuiltinService,
} from 'mo/services';
import { FolderTreeController, IFolderTreeController } from './folderTree';

export interface IExplorerController extends Partial<Controller> {
    onActionsContextMenuClick?: (
        e: React.MouseEvent,
        item?: IMenuItemProps
    ) => void;
    onCollapseChange?: (keys) => void;
    onToolbarClick?: (
        item: IActionBarItemProps,
        panel: IExplorerPanelItem
    ) => void;
    onClick?: (event, item) => void;
}

@singleton()
export class ExplorerController
    extends Controller
    implements IExplorerController {
    private readonly activityBarService: IActivityBarService;
    private readonly sidebarService: ISidebarService;
    private readonly explorerService: IExplorerService;
    private readonly folderTreeController: IFolderTreeController;
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.sidebarService = container.resolve(SidebarService);
        this.explorerService = container.resolve(ExplorerService);
        this.folderTreeController = container.resolve(FolderTreeController);
        this.builtinService = container.resolve(BuiltinService);
    }

    public initView() {
        const explorerEvent = {
            onClick: this.onClick,
            onCollapseChange: this.onCollapseChange,
            onActionsContextMenuClick: this.onActionsContextMenuClick,
            onToolbarClick: this.onToolbarClick,
        };

        const ExplorerView = connect(this.explorerService, Explorer);

        const id = this.builtinService.getConstants().EXPLORER_ACTIVITY_ITEM;

        if (!id) return;

        const explorePane = {
            id,
            title: 'EXPLORER',
            render() {
                return <ExplorerView {...explorerEvent} />;
            },
        };
        const {
            builtInExplorerActivityItem,
            builtInExplorerFolderPanel,
            builtInExplorerHeaderToolbar,
        } = this.builtinService.getModules();

        if (builtInExplorerHeaderToolbar) {
            this.explorerService.setState({
                headerToolBar: builtInExplorerHeaderToolbar,
            });
        }

        if (builtInExplorerActivityItem && builtInExplorerFolderPanel) {
            this.activityBarService.add(builtInExplorerActivityItem, true);
            this.sidebarService.add(explorePane, true);

            // add folder panel
            this.explorerService.addPanel({
                ...builtInExplorerFolderPanel,
                renderPanel: this.renderFolderTree,
            });
        }
    }

    public readonly onClick = (
        event: React.MouseEvent,
        item: IActionBarItemProps
    ) => {
        this.emit(ExplorerEvent.onClick, event, item);
    };

    public readonly onActionsContextMenuClick = (
        e: React.MouseEvent,
        item?: IMenuItemProps
    ) => {
        const panelId = item?.id;
        if (panelId) {
            this.explorerService.togglePanel(panelId);
        }
    };

    public readonly onCollapseChange = (keys) => {
        this.emit(ExplorerEvent.onCollapseChange, keys);
    };

    public readonly onToolbarClick = (
        item: IActionBarItemProps,
        parentPanel: IExplorerPanelItem
    ) => {
        const toolbarId = item.id;
        const {
            NEW_FILE_COMMAND_ID,
            NEW_FOLDER_COMMAND_ID,
            REMOVE_COMMAND_ID,
            EXPLORER_TOGGLE_CLOSE_ALL_EDITORS,
            EXPLORER_TOGGLE_SAVE_ALL,
            EXPLORER_TOGGLE_VERTICAL,
        } = this.builtinService.getConstants();

        switch (toolbarId) {
            case NEW_FILE_COMMAND_ID: {
                this.folderTreeController.createTreeNode?.(FileTypes.File);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.folderTreeController.createTreeNode?.(FileTypes.Folder);
                break;
            }
            case REMOVE_COMMAND_ID: {
                this.emit(ExplorerEvent.onRemovePanel, parentPanel);
                break;
            }
            case EXPLORER_TOGGLE_CLOSE_ALL_EDITORS: {
                this.emit(EditorTreeEvent.onCloseAll);
                break;
            }
            case EXPLORER_TOGGLE_SAVE_ALL: {
                this.emit(EditorTreeEvent.onSaveAll);
                break;
            }
            case EXPLORER_TOGGLE_VERTICAL: {
                this.emit(EditorTreeEvent.onSplitEditorLayout);
                break;
            }
            default:
                this.emit(
                    ExplorerEvent.onPanelToolbarClick,
                    parentPanel,
                    toolbarId
                );
        }
    };

    public renderFolderTree = (panel) => {
        return <FolderTreeView panel={panel} />;
    };
}
