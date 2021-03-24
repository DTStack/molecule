import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';
import {
    activityBarService,
    IActivityBarItem,
    sidebarService,
    explorerService,
    folderTreeService,
    menuBarService,
} from 'mo';
import * as React from 'react';
import { ExplorerView, FolderTreeView } from 'mo/workbench/sidebar/explore';
import { IActionBarItem } from 'mo/components/actionBar';
import { MENU_VIEW_SIDEBAR } from 'mo/model/workbench/menuBar';
import { folderTreeController } from 'mo/controller';
import {
    SAMPLE_FOLDER_PANEL,
    NEW_FILE_COMMAND_ID,
    NEW_FOLDER_COMMAND_ID,
} from 'mo/model';
export interface IExplorerController {
    onHeaderToolbarContextMenuClick?: (
        e: React.MouseEvent,
        item: IActionBarItem
    ) => void;
    onCollapseChange?: (keys) => void;
    onCollapseToolbar?: (item) => void;
    onClick?: (event) => void;
}

@singleton()
export class ExplorerController
    extends Controller
    implements IExplorerController {
    constructor() {
        super();
        this.initView();
    }

    private initView() {
        const ctx = this;
        const state = activityBarService.getState();
        const sideBarState = sidebarService.getState();
        const exploreActiveItem = {
            id: 'active-explorer',
            name: 'Explore',
            iconName: 'codicon-files',
        };

        activityBarService.setState({
            selected: exploreActiveItem.id,
            data: [...state.data!, exploreActiveItem],
        });

        const explorerEvent = {
            onClick: ctx.onClick,
            onCollapseChange: ctx.onCollapseChange,
            onHeaderToolbarContextMenuClick:
                ctx.onHeaderToolbarContextMenuClick,
            onCollapseToolbar: ctx.onCollapseToolbar,
        };

        const explorePane = {
            id: 'explore',
            title: 'EXPLORER',
            render() {
                return <ExplorerView {...explorerEvent} />;
            },
        };

        activityBarService.onSelect((e, item: IActivityBarItem) => {
            const { hidden } = sidebarService.getState();
            if (item.id === exploreActiveItem.id) {
                const isShow = hidden ? !hidden : hidden;
                sidebarService.setState({
                    current: explorePane.id,
                    hidden: isShow,
                });
                menuBarService.update(MENU_VIEW_SIDEBAR, {
                    icon: 'check',
                });
            }
        });

        sidebarService.setState({
            current: explorePane.id,
            panes: [...sideBarState.panes!, explorePane],
        });

        explorerService.addPanel([
            { ...SAMPLE_FOLDER_PANEL, renderPanel: this.renderFolderTree },
        ]);
    }

    private createFileOrFolder = (type) => {
        const folderTreeState = folderTreeService.getState();
        const { data, current } = folderTreeState?.folderTree || {};
        // The current selected node id or the first root node
        const nodeId = current?.id || data?.[0]?.id;
        folderTreeService[type]?.(nodeId);
    };

    public readonly onClick = (event: React.MouseEvent) => {};

    public readonly onHeaderToolbarContextMenuClick = (
        e: React.MouseEvent,
        item: IActionBarItem
    ) => {
        e.stopPropagation();
        console.log('onClick:', e, item);
        const panelId = item.id;
        if (panelId === 'Folders') return;
        explorerService.togglePanel(panelId);
    };

    public readonly onCollapseChange = (keys) => {
        console.log('keys', keys);
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
                {...folderTreeService.getState()?.folderTree}
                {...folderTreeController}
            />
        );
    }
}
