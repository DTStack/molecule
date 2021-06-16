import 'reflect-metadata';
import * as React from 'react';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { connect } from 'mo/react';
import { Explorer, FolderTreeView } from 'mo/workbench/sidebar/explore';
import { IMenuItemProps } from 'mo/components/menu';
import { MENU_VIEW_SIDEBAR } from 'mo/model/workbench/menuBar';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import {
    builtInExplorerActivityItem,
    builtInExplorerFolderPanel,
    builtInExplorerEditorPanel,
    ExplorerEvent,
    IExplorerPanelItem,
} from 'mo/model/workbench/explorer/explorer';
import {
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    EXPLORER_ACTIVITY_ITEM,
    REMOVE_COMMAND_ID,
    FileTypes,
    FolderTreeEvent,
} from 'mo/model';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    IExplorerService,
    ISidebarService,
    IActivityBarService,
    IFolderTreeService,
    ActivityBarService,
    SidebarService,
    ExplorerService,
    FolderTreeService,
    MenuBarService,
    IMenuBarService,
} from 'mo/services';
import { FolderTreeController, IFolderTreeController } from './folderTree';
export interface IExplorerController {
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
    private readonly folderTreeService: IFolderTreeService;
    private readonly menuBarService: IMenuBarService;
    private readonly folderTreeController: IFolderTreeController;

    constructor() {
        super();
        this.activityBarService = container.resolve(ActivityBarService);
        this.sidebarService = container.resolve(SidebarService);
        this.explorerService = container.resolve(ExplorerService);
        this.folderTreeService = container.resolve(FolderTreeService);
        this.menuBarService = container.resolve(MenuBarService);
        this.folderTreeController = container.resolve(FolderTreeController);

        this.initView();
    }

    private initView() {
        const state = this.activityBarService.getState();
        const sideBarState = this.sidebarService.getState();
        const { data = [] } = state;
        this.activityBarService.setState({
            selected: EXPLORER_ACTIVITY_ITEM,
            data: [...data, builtInExplorerActivityItem()],
        });

        const explorerEvent = {
            onClick: this.onClick,
            onCollapseChange: this.onCollapseChange,
            onActionsContextMenuClick: this.onActionsContextMenuClick,
            onToolbarClick: this.onToolbarClick,
        };

        const ExplorerView = connect(this.explorerService, Explorer);

        const explorePane = {
            id: 'explore',
            title: 'EXPLORER',
            render() {
                return <ExplorerView {...explorerEvent} />;
            },
        };

        this.activityBarService.onSelect((e, item: IActivityBarItem) => {
            const { hidden } = this.sidebarService.getState();
            if (item.id === EXPLORER_ACTIVITY_ITEM) {
                const isShow = hidden ? !hidden : hidden;
                this.sidebarService.setState({
                    current: explorePane.id,
                    hidden: isShow,
                });
                this.menuBarService.update(MENU_VIEW_SIDEBAR, {
                    icon: 'check',
                });
            }
        });

        this.sidebarService.setState({
            current: explorePane.id,
            panes: [...sideBarState.panes!, explorePane],
        });

        // add folder panel
        this.explorerService.addPanel({
            ...builtInExplorerFolderPanel(),
            renderPanel: this.renderFolderTree,
        });

        // add editor panel
        this.explorerService.addPanel({
            ...builtInExplorerEditorPanel(),
        });
    }

    private createFileOrFolder = (type: keyof typeof FileTypes) => {
        const folderTreeState = this.folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        // emit onNewFile or onNewFolder event
        this.emit(FolderTreeEvent[`onNew${type}`], nodeId);
    };

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
        switch (toolbarId) {
            case NEW_FILE_COMMAND_ID: {
                this.createFileOrFolder(FileTypes.File);
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.createFileOrFolder(FileTypes.Folder);
                break;
            }
            case REMOVE_COMMAND_ID: {
                this.emit(ExplorerEvent.onDeletePanel, parentPanel);
                break;
            }
            default:
                console.log('onCollapseToolbar');
        }
    };

    public renderFolderTree = () => {
        return (
            <FolderTreeView
                {...this.folderTreeService.getState()?.folderTree}
                {...this.folderTreeController}
            />
        );
    };
}

// Register singleton
container.resolve(ExplorerController);
