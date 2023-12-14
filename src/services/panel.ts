import { BaseService } from 'mo/glue';
import { IPanelItem, PanelEvent, PanelModel } from 'mo/models/panel';
import type {
    ArraylizeOrSingle,
    ContextMenuWithItemHandler,
    IMenuItemProps,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface IPanelService extends BaseService<PanelModel> {
    /**
     * Set the current active panel
     */
    setActive(id: UniqueId | undefined): void;
    /**
     * Open a new or existing panel item as the active in Panel view
     * @param panel
     */
    open(panel: IPanelItem): void;
    /**
     * Get the specific panel
     * @param id
     */
    getPanel(id: UniqueId): IPanelItem | undefined;
    /**
     * Add new Panel items
     * @param data
     */
    add(data: ArraylizeOrSingle<IPanelItem>): void;
    /**
     * Add new toolbar items
     */
    addToolbar(toolbars: IMenuItemProps[]): void;
    /**
     * Update the specific panel
     * @param panel the id field is required
     */
    update(panel: IPanelItem): IPanelItem | undefined;
    updateToolbar(item: RequiredId<IMenuItemProps>): void;
    toggleBar(id: UniqueId): void;
    /**
     * Remove the specific panel
     * @param id
     */
    remove(id: UniqueId): IPanelItem | undefined;
    /**
     * Reset data in state
     */
    reset(): void;
    /**
     * Listen to the Panel tabs onChange event
     * @param callback
     */
    onChange(callback: (panelId: UniqueId) => void): void;
    /**
     * Listen to the Panel toolbar click event
     * @param callback
     */
    onToolbarClick(callback: (item: IMenuItemProps) => void): void;
    /**
     * Listen to the Panel tabs close event
     * @param callback
     */
    onClose(callback: (panelId: UniqueId) => void): void;
    onContextMenu(callback: ContextMenuWithItemHandler<[item?: IPanelItem]>): void;
}

export class PanelService extends BaseService<PanelModel> implements IPanelService {
    protected state: PanelModel;

    constructor() {
        super('panel');
        this.state = new PanelModel();
    }

    public setActive(id: UniqueId | undefined): void {
        this.setState({
            current: id,
        });
    }

    public open(data: IPanelItem<any>): void {
        const panel = this.getPanel(data.id);
        if (panel) {
            this.setActive(panel.id);
        } else {
            this.add(data);
            this.setActive(data.id);
        }
    }

    public getPanel(id: UniqueId): IPanelItem<any> | undefined {
        return this.getState().data.find(searchById(id));
    }

    public add(data: ArraylizeOrSingle<IPanelItem>) {
        const next = arraylize(data);
        this.setState((prev) => ({ ...prev, data: [...prev.data, ...next] }));
    }

    public addToolbar(toolbars: IMenuItemProps[]): void {
        this.setState((prev) => ({ ...prev, toolbars: [...prev.toolbars, ...toolbars] }));
    }

    public update(data: IPanelItem): IPanelItem | undefined {
        const panel = this.getPanel(data.id);
        if (panel) {
            Object.assign(panel, data);
            this.setState((prev) => ({ ...prev }));
            return panel;
        } else {
            logger.error(`There is no panel found in data via the ${data.id}`);
            return undefined;
        }
    }

    public toggleBar(id: UniqueId): void {
        this.update({ id, hidden: !this.getPanel(id)?.hidden });
    }

    public updateToolbar(item: RequiredId<IMenuItemProps>): void {
        const toolbar = this.getState().toolbars.find(searchById(item.id));
        if (toolbar) {
            Object.assign(toolbar, item);
            this.setState((prev) => ({ ...prev }));
        } else {
            logger.error(`There is no toolbar found in data via the ${item.id}`);
        }
    }

    public remove(id: UniqueId): IPanelItem | undefined {
        const panel = this.getPanel(id);
        if (panel) {
            this.setState((prev) => ({ ...prev, data: prev.data.filter((i) => i !== panel) }));
            return panel;
        } else {
            logger.error(`There is no panel found in data via the ${id}`);
            return undefined;
        }
    }

    public reset(): void {
        this.setState(new PanelModel());
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (key: UniqueId) => void) {
        this.subscribe(PanelEvent.onChange, callback);
    }

    public onToolbarClick(callback: (item: IMenuItemProps) => void) {
        this.subscribe(PanelEvent.onToolbarClick, callback);
    }

    public onClose(callback: (key: UniqueId) => void) {
        this.subscribe(PanelEvent.onClose, callback);
    }

    public onContextMenu(callback: ContextMenuWithItemHandler<[item?: IPanelItem]>): void {
        this.subscribe(PanelEvent.onContextMenu, callback);
    }
}
