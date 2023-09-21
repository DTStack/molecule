import { BaseService } from 'mo/glue';
import { ExplorerEvent, ExplorerModel, IExplorerPanelItem } from 'mo/models/explorer';
import { ArraylizeOrSingle, IMenuItemProps, UniqueId } from 'mo/types';
import { arraylize, searchById, sortByIndex } from 'mo/utils';
import logger from 'mo/utils/logger';

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
        super('explorer');
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

    public addPanel(data: ArraylizeOrSingle<IExplorerPanelItem>) {
        const next = arraylize(data).filter((item) => {
            const panel = this.getPanel(item.id);
            return !panel;
        });

        this.setState((prev) => ({
            ...prev,
            data: [...prev.data, ...next].sort(sortByIndex),
        }));
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

    // update panel hidden
    public togglePanel(id: UniqueId, hidden?: boolean) {
        const panel = this.getPanel(id);
        if (!panel) return;
        panel.hidden = typeof hidden === 'boolean' ? hidden : !panel.hidden;
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
