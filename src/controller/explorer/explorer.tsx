import 'reflect-metadata';
import * as React from 'react';
import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { ExplorerView, FolderTreeView } from 'mo/workbench/sidebar/explore';
import { IMenuItem } from 'mo/components/menu';
import { MENU_VIEW_SIDEBAR } from 'mo/model/workbench/menuBar';
import { IActivityBarItem } from 'mo/model/workbench/activityBar';
import { ExplorerEvent } from 'mo/model/workbench/explorer/explorer';
import {
    SAMPLE_FOLDER_PANEL,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
    exploreActiveItem,
} from 'mo/model';
import { IActionBarItem } from 'mo/components/actionBar';
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
        item: IMenuItem | undefined
    ) => void;
    onCollapseChange?: (keys) => void;
    onCollapseToolbar?: (item) => void;
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
        const ctx = this;
        const state = this.activityBarService.getState();
        const sideBarState = this.sidebarService.getState();
        this.activityBarService.setState({
            selected: exploreActiveItem.id,
            data: [...state.data!, exploreActiveItem],
        });

        const explorerEvent = {
            onClick: ctx.onClick,
            onCollapseChange: ctx.onCollapseChange,
            onActionsContextMenuClick: ctx.onActionsContextMenuClick,
            onCollapseToolbar: ctx.onCollapseToolbar,
        };

        const explorePane = {
            id: 'explore',
            title: 'EXPLORER',
            render() {
                return <ExplorerView {...explorerEvent} />;
            },
        };

        this.activityBarService.onSelect((e, item: IActivityBarItem) => {
            const { hidden } = this.sidebarService.getState();
            if (item.id === exploreActiveItem.id) {
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

        this.explorerService.addPanel([
            { ...SAMPLE_FOLDER_PANEL, renderPanel: this.renderFolderTree },
        ]);
    }

    private createFileOrFolder = (type) => {
        const folderTreeState = this.folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        this.folderTreeService[type]?.(nodeId);
    };

    public readonly onClick = (
        event: React.MouseEvent,
        item: IActionBarItem
    ) => {
        this.emit(ExplorerEvent.onClick, event, item);
    };

    public readonly onActionsContextMenuClick = (
        e: React.MouseEvent,
        item: IMenuItem | undefined
    ) => {
        console.log('onActionsContextMenuClick', e, item);
        const panelId = item?.id;
        this.explorerService.togglePanel(panelId);
    };

    public readonly onCollapseChange = (keys) => {
        this.emit(ExplorerEvent.onCollapseChange, keys);
    };

    public readonly onCollapseToolbar = (item) => {
        console.log('item', item);
        const toolbarId = item.id;
        switch (toolbarId) {
            case NEW_FILE_COMMAND_ID: {
                this.createFileOrFolder('newFile');
                break;
            }
            case NEW_FOLDER_COMMAND_ID: {
                this.createFileOrFolder('newFolder');
                break;
            }
            default:
                console.log('onCollapseToolbar');
        }
    };

    public renderFolderTree() {
        return (
            <FolderTreeView
                {...this.folderTreeService.getState()?.folderTree}
                {...this.folderTreeController}
            />
        );
    }
}
