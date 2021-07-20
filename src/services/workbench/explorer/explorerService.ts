import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IExplorerPanelItem,
    IExplorer,
    IExplorerModel,
    ExplorerEvent,
} from 'mo/model/workbench/explorer/explorer';
import { IMenuItemProps } from 'mo/components/menu';
import { searchById } from '../../helper';
import { IActionBarItemProps } from 'mo/components';
import React from 'react';

export interface IExplorerService extends Component<IExplorer> {
    /**
     * Edit panels data, as well as modify toolbar data
     */
    editPanel(data: IExplorerPanelItem[]): void;
    /**
     * add a new panel, as well as add a new data for toolbar data
     */
    addPanel(panel: IExplorerPanelItem | IExplorerPanelItem[]): void;
    reset(): void;
    /**
     * Delete a panel via id, as well as delete corresponding action bar
     */
    deletePanel(id: React.Key): void;
    /**
     * toggle panel hidden, as well as toggle the toolbar status
     */
    togglePanel(id: React.Key): void;
    /**
     * only toggle the toolbar status
     */
    toggleHeaderBar(id: React.Key): void;
    /**
     * Only add an action in toolbar actions
     */
    addAction(action: IMenuItemProps): void;
    removeAction(id: React.Key): void;
    updateRender(): void;
    onClick(callback: (e: MouseEvent, item: IActionBarItemProps) => void);
    /**
     * it execs when delete an explorer panel
     */
    onDeletePanel(callback: (panel: IExplorerPanelItem) => void): void;
    onPanelToolbarClick(
        callback: (panel: IExplorerPanelItem, toolbarId: string) => void
    ): void;
}

@singleton()
export class ExplorerService
    extends Component<IExplorer>
    implements IExplorerService {
    protected state: IExplorer;
    constructor() {
        super();
        this.state = container.resolve(IExplorerModel);
    }

    private toggleIcon(icon?: string) {
        return icon === 'check' ? '' : 'check';
    }

    public editPanel(data: IExplorerPanelItem[]) {
        const next = data.concat();
        const contextMenu = this.state.headerToolBar?.contextMenu || [];

        const nextTooBar = contextMenu.map((item) => {
            const coData = data.find((d) => d.id === item.id);
            if (coData) {
                return {
                    ...item,
                    name: coData.name,
                    title: coData.name,
                    sortIndex: coData.sortIndex,
                } as IMenuItemProps;
            }
            return item;
        });

        // prevent unsorted in case
        next.sort(
            ({ sortIndex: preIndex = 0 }, { sortIndex: nextIndex = 0 }) =>
                nextIndex - preIndex
        );
        this.setState({
            data: next,
            headerToolBar: {
                ...this.state.headerToolBar,
                contextMenu: nextTooBar,
            },
        });
    }

    public addPanel(data: IExplorerPanelItem | IExplorerPanelItem[]) {
        let next = [...this.state.data!];
        const nextActions: IMenuItemProps[] = [];
        if (Array.isArray(data)) {
            next = next?.concat(data);
            nextActions.push(
                ...data.map((item) => ({
                    id: item.id.toString(),
                    name: item.name,
                    title: item.name,
                    icon: 'check',
                    sortIndex: item.sortIndex,
                }))
            );
        } else {
            next?.push(data);
            nextActions.push({
                id: data.id.toString(),
                name: data.name,
                title: data.name,
                icon: 'check',
                sortIndex: data.sortIndex,
            });
        }

        // sort by sortIndex
        next.sort(
            ({ sortIndex: preIndex = 0 }, { sortIndex: nextIndex = 0 }) =>
                nextIndex - preIndex
        );

        this.setState({
            data: next,
        });

        // async add header actions
        this.addAction(nextActions);
    }

    public addAction(action: IMenuItemProps | IMenuItemProps[]) {
        const { headerToolBar } = this.state;
        let newActions = headerToolBar?.contextMenu || [];
        if (Array.isArray(action)) {
            newActions = newActions.concat(action);
        } else {
            newActions.push(action);
        }

        // sort by sortIndex
        newActions.sort(
            ({ sortIndex: preIndex = 0 }, { sortIndex: nextIndex = 0 }) =>
                nextIndex - preIndex
        );
        const next = { ...headerToolBar, contextMenu: newActions };
        this.setState({
            headerToolBar: next,
        });
    }

    public deletePanel(id: React.Key) {
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });

        // async remove action
        this.removeAction(id);
    }

    public removeAction(id: React.Key) {
        const { headerToolBar } = this.state;
        const newActions = headerToolBar?.contextMenu || [];
        const index = newActions?.findIndex(searchById(id));
        if (index > -1) {
            newActions.splice(index, 1);
        }
        const next = { ...headerToolBar, contextMenu: newActions };
        this.setState({
            headerToolBar: next,
        });
    }

    // update panel hidden
    public togglePanel(id: React.Key) {
        const { data } = this.state;
        const next = data?.concat() || [];
        // find current panel
        const currentPanel = next.find(searchById(id));
        if (currentPanel) {
            currentPanel.hidden = !currentPanel.hidden;
            this.setState({
                data: next,
            });
            // async update toolbar status
            this.toggleHeaderBar(id);
        }
    }

    // update header toolbar status
    public toggleHeaderBar(id: React.Key) {
        const { headerToolBar } = this.state;
        const nextMenu = headerToolBar?.contextMenu?.concat() || [];
        const currentMenu = nextMenu.find(searchById(id));
        if (currentMenu) {
            currentMenu.icon = this.toggleIcon(currentMenu.icon as string);
            const next = {
                ...headerToolBar,
                contextMenu: nextMenu,
            };
            this.setState({
                headerToolBar: next,
            });
        }
    }

    public updateRender() {
        this.render();
    }

    public reset() {
        this.setState({
            data: [],
            headerToolBar: {
                ...this.state.headerToolBar,
                contextMenu: [],
            },
        });
    }

    public onClick(
        callback: (e: MouseEvent, item: IActionBarItemProps) => void
    ) {
        this.subscribe(ExplorerEvent.onClick, callback);
    }

    public onDeletePanel(callback: (panel: IExplorerPanelItem) => void) {
        this.subscribe(ExplorerEvent.onDeletePanel, callback);
    }

    public onPanelToolbarClick(
        callback: (panel: IExplorerPanelItem, toolbarId: string) => void
    ) {
        this.subscribe(ExplorerEvent.onPanelToolbarClick, callback);
    }
}
