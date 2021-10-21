import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    IExplorerPanelItem,
    IExplorer,
    IExplorerModel,
    ExplorerEvent,
} from 'mo/model/workbench/explorer/explorer';
import cloneDeep from 'lodash/cloneDeep';
import { IMenuItemProps } from 'mo/components/menu';
import { searchById } from 'mo/common/utils';
import { IActionBarItemProps } from 'mo/components';
import logger from 'mo/common/logger';

export interface IExplorerService extends Component<IExplorer> {
    /**
     * Add a new panel, as well as add a new data for toolbar data
     */
    addPanel(panel: IExplorerPanelItem | IExplorerPanelItem[]): void;
    /**
     * Update the panels data, as well as modify toolbar data
     */
    updatePanel(data: Partial<IExplorerPanelItem>): void;
    /**
     * Remove a panel via id, as well as remove the corresponding action bar
     */
    removePanel(id: string): void;
    /**
     * Toggle panel hidden, as well as toggle the toolbar status
     */
    togglePanel(id: string): void;
    /**
     * Only toggle the toolbar status
     */
    toggleHeaderBar(id: string): void;
    /**
     * Only add an action in toolbar actions
     */
    addAction(action: IMenuItemProps): void;
    /**
     * Get the specific action in toolbar actions
     * @param id
     */
    getAction(id: string): IMenuItemProps | undefined;
    /**
     * Update the action in toolbar actions
     * @param action
     */
    updateAction(action: Partial<IMenuItemProps>): void;
    /**
     * Remove the specific header toolbar action
     * @param id action id
     */
    removeAction(id: string): void;
    /**
     * Reset the ExplorerService state, it's mainly for customizing the Explorer
     */
    reset(): void;
    /**
     * Listen to the Explorer header toolbar click event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IActionBarItemProps) => void);
    /**
     * Listen to the Explorer panel remove event
     * @param callback
     */
    onRemovePanel(callback: (panel: IExplorerPanelItem) => void): void;
    /**
     * Listen to the Explorer panel toolbar click event
     * @param callback
     */
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

    public getAction(id: string): IMenuItemProps | undefined {
        const { headerToolBar } = this.state;
        const action = headerToolBar?.contextMenu?.find(searchById(id));
        return action ? cloneDeep(action) : action;
    }

    public updatePanel(data: Partial<IExplorerPanelItem>) {
        if (!data.id) {
            logger.error('Must provide id property in update data');
            return;
        }
        const next = this.state.data.concat();
        const target = next.find(searchById(data.id));
        if (!target) {
            logger.error(
                `There is no panel found in state whose id is ${data.id}`
            );
            return;
        }

        Object.assign(target, data);

        this.setState({
            data: next,
        });

        this.updateAction({
            id: data.id.toString(),
            name: data.name,
            title: data.title,
            sortIndex: data.sortIndex,
        });
    }

    public updateAction(action: Partial<IMenuItemProps>) {
        if (!action.id) {
            logger.error('Must provide id property in action data');
            return;
        }
        const { headerToolBar } = this.state;
        if (!headerToolBar) {
            return;
        }
        const nextActions = headerToolBar.contextMenu?.concat() || [];

        const target = nextActions.find(searchById(action.id));
        if (!target) {
            logger.error(
                `There is no action found in actions whose id is ${action.id}`
            );
            return;
        }

        Object.assign(target, action);

        this.setState({
            headerToolBar: {
                ...headerToolBar,
                contextMenu: nextActions,
            },
        });
    }

    public addPanel(data: IExplorerPanelItem | IExplorerPanelItem[]) {
        const workInProgressData = Array.isArray(data) ? data : [data];
        const next = [...this.state.data!];
        const nextActions: IMenuItemProps[] = [];
        workInProgressData.forEach((item) => {
            const index = next.findIndex(searchById(item.id));
            if (index !== -1) {
                logger.error(`There is already a panel whose id is ${item.id}`);
            } else {
                next.push(cloneDeep(item));
                nextActions.push({
                    id: item.id.toString(),
                    name: item.name,
                    title: item.name,
                    icon: 'check',
                    sortIndex: item.sortIndex,
                });
            }
        });

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
        const workInProgressActions = Array.isArray(action) ? action : [action];
        const { headerToolBar } = this.state;
        if (!headerToolBar) {
            return;
        }
        const newActions = headerToolBar.contextMenu?.concat() || [];
        workInProgressActions.forEach((action) => {
            const index = newActions.findIndex(searchById(action.id));
            if (index !== -1) {
                logger.error(
                    `There is already an action whose id is ${action.id}`
                );
            } else {
                newActions.push(action);
            }
        });

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

    public removePanel(id: string) {
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

    public removeAction(id: string) {
        const { headerToolBar } = this.state;
        if (!headerToolBar) {
            return;
        }
        const newActions = headerToolBar.contextMenu || [];
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
    public togglePanel(id: string) {
        const { data } = this.state;
        const next = data.concat();
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
    public toggleHeaderBar(id: string) {
        const { headerToolBar } = this.state;
        if (!headerToolBar) {
            return;
        }
        const nextMenu = headerToolBar.contextMenu?.concat() || [];
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

    public reset() {
        this.setState({
            data: [],
            headerToolBar: undefined,
        });
    }

    public onClick(
        callback: (e: MouseEvent, item: IActionBarItemProps) => void
    ) {
        this.subscribe(ExplorerEvent.onClick, callback);
    }

    public onRemovePanel(callback: (panel: IExplorerPanelItem) => void) {
        this.subscribe(ExplorerEvent.onRemovePanel, callback);
    }

    public onPanelToolbarClick(
        callback: (panel: IExplorerPanelItem, toolbarId: string) => void
    ) {
        this.subscribe(ExplorerEvent.onPanelToolbarClick, callback);
    }
}
