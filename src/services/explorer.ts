import { BaseService } from 'mo/glue';
import { ExplorerEvent, ExplorerModel, IExplorerPanelItem } from 'mo/models/explorer';
import { ArraylizeOrSingle, IMenuItemProps, UniqueId } from 'mo/types';
import { arraylize, searchById, toggleNextIcon } from 'mo/utils';
import logger from 'mo/utils/logger';
import { TreeHelper } from 'mo/utils/tree';

export interface IExplorerService extends BaseService<ExplorerModel> {
    /**
     * Get the specific panel
     * @param id
     */
    getPanel(id: UniqueId): IExplorerPanelItem | undefined;
    /**
     * Add a new panel
     */
    addPanel(panel: ArraylizeOrSingle<IExplorerPanelItem>): void;
    /**
     * Update the panels data
     */
    updatePanel(data: Partial<IExplorerPanelItem>): void;
    /**
     * Set expanded Panels of Explore
     */
    setExpandedPanels(activePanelKeys: UniqueId[]): void;
    /**
     * Remove a panel via id
     */
    removePanel(id: UniqueId): void;
    /**
     * Toggle panel hidden
     */
    togglePanel(id: UniqueId, hidden?: boolean): void;
    /**
     * Only toggle the toolbar status
     */
    toggleHeaderBar(id: UniqueId, hidden?: boolean): void;
    /**
     * Only add an action in toolbar actions
     */
    addAction(action: IMenuItemProps, parent?: UniqueId): void;
    /**
     * Get the specific action in toolbar actions
     * @param id
     */
    getAction(id: UniqueId): IMenuItemProps | undefined;
    /**
     * Update the action in toolbar actions
     * @param action
     */
    updateAction(action: Partial<IMenuItemProps>): void;
    /**
     * Remove the specific header toolbar action
     * @param id action id
     */
    removeAction(id: UniqueId): void;
    /**
     * Reset the ExplorerService state, it's mainly for customizing the Explorer
     */
    reset(): void;
    /**
     * Listen to the Explorer header toolbar click event
     * @param callback
     */
    onClick(callback: (e: MouseEvent, item: IMenuItemProps) => void): void;
    /**
     * Listen to the Explorer panel remove event
     * @param callback
     */
    onRemovePanel(callback: (panel: IExplorerPanelItem) => void): void;
    /**
     * Listen to the FolderTree Panel collapse all folders event
     * @param callback
     */
    onCollapseAllFolders(callback: () => void): void;
    /**
     * Listen to the Explorer panel toolbar click event
     * @param callback
     */
    onPanelToolbarClick(callback: (panel: IExplorerPanelItem, toolbarId: string) => void): void;
}

export class ExplorerService extends BaseService<ExplorerModel> implements IExplorerService {
    protected state: ExplorerModel;
    constructor() {
        super();
        this.state = new ExplorerModel();
    }

    public getPanel(id: UniqueId) {
        return this.getState().data.find(searchById(id));
    }

    public setExpandedPanels(activePanelKeys: UniqueId[]) {
        this.setState({
            activePanelKeys,
        });
    }

    private toggleIcon(icon?: string) {
        return icon === 'check' ? '' : 'check';
    }

    // FIXME: generate treeHelper each time, improve it
    public getAction(id: UniqueId): IMenuItemProps | undefined {
        const { headerToolBar } = this.getState();
        const treeHelper = new TreeHelper(headerToolBar);
        const action = treeHelper.getNode(id);
        return action;
    }

    public updatePanel(data: Partial<IExplorerPanelItem>) {
        if (!data.id) {
            logger.error('Must provide id property in update data');
            return;
        }
        const target = this.getPanel(data.id);
        if (!target) {
            logger.error(`There is no panel found in state whose id is ${data.id}`);
            return;
        }
        Object.assign(target, data);
        this.setState((prev) => ({
            ...prev,
            data: prev.data,
        }));
    }

    public updateAction(action: Partial<IMenuItemProps>) {
        if (!action.id) {
            logger.error('Must provide id property in action data');
            return;
        }
        const target = this.getAction(action.id);
        if (!target) {
            logger.error(`There is no action found in actions whose id is ${action.id}`);
            return;
        }

        Object.assign(target, action);

        this.setState((prev) => ({
            ...prev,
            headerToolBar: {
                ...prev.headerToolBar,
            },
        }));
    }

    public addPanel(data: ArraylizeOrSingle<IExplorerPanelItem>) {
        const next = arraylize(data).filter((item) => {
            const panel = this.getPanel(item.id);
            return !panel;
        });

        // sort by sortIndex
        next.sort(
            ({ sortIndex: preIndex = 0 }, { sortIndex: nextIndex = 0 }) => nextIndex - preIndex
        );

        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, ...next],
        }));
    }

    public addAction(action: ArraylizeOrSingle<IMenuItemProps>, parent?: UniqueId) {
        const next = arraylize(action).filter((item) => {
            const action = this.getAction(item.id);
            return !action;
        });
        if (parent) {
            const parentAction = this.getAction(parent);
            if (!parentAction) return;
            parentAction.children ??= [];
            parentAction.children.push(...next);
            // sort by sortIndex
            parentAction.children.sort(
                ({ sortIndex: preIndex = 0 }, { sortIndex: nextIndex = 0 }) => nextIndex - preIndex
            );
            this.setState((prev) => ({
                ...prev,
                headerToolBar: [...prev.headerToolBar],
            }));
        } else {
            this.setState((prev) => {
                const toolbar = [...prev.headerToolBar, ...next];
                toolbar.sort(
                    ({ sortIndex: preIndex = 0 }, { sortIndex: nextIndex = 0 }) =>
                        nextIndex - preIndex
                );
                return {
                    ...prev,
                    headerToolBar: toolbar,
                };
            });
        }
    }

    public removePanel(id: UniqueId) {
        const panel = this.getPanel(id);
        if (panel) {
            this.setState((prev) => ({
                ...prev,
                data: prev.data.filter((i) => i !== panel),
            }));
        }
    }

    public removeAction(id: UniqueId) {
        const { headerToolBar } = this.state;
        const treeHelper = new TreeHelper(headerToolBar);
        const parent = treeHelper.getParent(id);
        if (!parent?.children?.length) return;
        const idx = parent.children.findIndex((i) => i.id === id);
        parent.children.splice(idx, 1);
        this.setState({
            headerToolBar: [...headerToolBar],
        });
    }

    // update panel hidden
    public togglePanel(id: UniqueId, hidden?: boolean) {
        const panel = this.getPanel(id);
        if (!panel) return;
        panel.hidden = typeof hidden === 'boolean' ? hidden : !panel.hidden;
        this.setState((prev) => ({ ...prev }));
    }

    // update header toolbar status
    public toggleHeaderBar(id: UniqueId, hidden?: boolean) {
        const action = this.getAction(id);
        if (!action) return;
        action.icon = toggleNextIcon(action.icon, typeof hidden === 'boolean' ? !hidden : hidden);
        this.setState((prev) => ({ ...prev }));
    }

    public reset() {
        this.setState(new ExplorerModel());
    }

    // ===================== Subscriptions =====================
    public onClick(callback: (e: MouseEvent, item: IMenuItemProps) => void) {
        this.subscribe(ExplorerEvent.onClick, callback);
    }

    public onRemovePanel(callback: (panel: IExplorerPanelItem) => void) {
        this.subscribe(ExplorerEvent.onRemovePanel, callback);
    }

    public onCollapseAllFolders(callback: () => void) {
        this.subscribe(ExplorerEvent.onCollapseAllFolders, callback);
    }

    public onPanelToolbarClick(callback: (panel: IExplorerPanelItem, toolbarId: string) => void) {
        this.subscribe(ExplorerEvent.onPanelToolbarClick, callback);
    }
}
