import { BaseService } from 'mo/glue';
import { type ISidebarPane, SidebarEvent, SidebarModel } from 'mo/models/sideBar';
import type {
    ArraylizeOrSingle,
    ContextMenuGroupHandler,
    FunctionalOrSingle,
    IMenuItemProps,
    RequiredId,
    UniqueId,
} from 'mo/types';
import { arraylize, searchById } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface ISidebarService extends BaseService<SidebarModel> {
    /**
     * Get a specific pane via id
     * @param id
     */
    get(id: UniqueId): ISidebarPane | undefined;
    getToolbar(paneId: UniqueId, toolbarId: UniqueId): IMenuItemProps | undefined;
    /**
     * Add a new Sidebar pane
     * @param pane
     * @param isActive Whether to activate the current pane
     */
    add(pane: ISidebarPane, isActive?: boolean): void;
    addToolbar(paneId: UniqueId, toolbars: ArraylizeOrSingle<IMenuItemProps>): void;
    /**
     * Update a specific pane
     * @param pane
     */
    update(pane: RequiredId<ISidebarPane>): void;
    /**
     * Update a toolbar item
     * @param paneId
     * @param toolbars
     */
    updateToolbar(paneId: UniqueId, toolbars: ArraylizeOrSingle<RequiredId<IMenuItemProps>>): void;
    /**
     * Remove a pane
     * @param id
     */
    remove(id: UniqueId): void;
    /**
     * Set the specific pane as active
     * @param id
     */
    setActive(id?: UniqueId): void;
    setLoading(loading: FunctionalOrSingle<boolean>): void;
    /**
     * Reset the sidebar data
     */
    reset(): void;
    onToolbarClick(callback: ContextMenuGroupHandler): void;
}

export class SidebarService extends BaseService<SidebarModel> implements ISidebarService {
    protected state: SidebarModel;

    constructor() {
        super('sidebar');
        this.state = new SidebarModel();
    }

    private getPane(id: UniqueId) {
        const { panes } = this.state;
        const target = panes.find(searchById(id));
        return target;
    }

    public get(id: UniqueId) {
        return this.getPane(id);
    }

    public getToolbar(paneId: UniqueId, toolbar: UniqueId) {
        const pane = this.getPane(paneId);
        if (!pane) {
            logger.error(`There is no pane found via the ${paneId} id`);
            return;
        }
        const target = pane.toolbar?.find(searchById(toolbar));
        return target;
    }

    public add(data: ISidebarPane, isActive = false) {
        const pane = this.getPane(data.id);
        if (pane) {
            logger.error(
                `There already has a pane which id is ${data.id}, if you want to modify it, please use the update method`
            );
            return;
        }
        if (isActive) {
            this.setActive(data.id);
        }
        this.setState((prev) => ({
            ...prev,
            panes: [...prev.panes, data],
        }));
    }

    public addToolbar(paneId: UniqueId, toolbars: ArraylizeOrSingle<IMenuItemProps>) {
        const targetPane = this.getPane(paneId);
        if (!targetPane) {
            logger.error(`There is no pane found via the ${paneId} id`);
            return;
        }
        const _toolbars = arraylize(toolbars);
        targetPane.toolbar ??= [];
        targetPane.toolbar.push(..._toolbars);
        this.setState((prev) => ({
            panes: [...prev.panes],
        }));
    }

    public update(pane: RequiredId<ISidebarPane>) {
        const targetPane = this.getPane(pane.id);
        if (!targetPane) {
            logger.error(`There is no pane found via the ${pane.id} id`);
            return;
        }

        Object.assign(targetPane, pane);
        this.setState((prev) => ({
            panes: [...prev.panes],
        }));
    }

    public updateToolbar(
        paneId: UniqueId,
        toolbars: ArraylizeOrSingle<RequiredId<IMenuItemProps>>
    ) {
        const targetPane = this.getPane(paneId);
        if (!targetPane) {
            logger.error(`There is no pane found via the ${paneId} id`);
            return;
        }

        const _toolbars = arraylize(toolbars);
        _toolbars.forEach((toolbar) => {
            const target = targetPane.toolbar?.find(searchById(toolbar.id));
            if (!target) return;
            Object.assign(target, toolbar);
        });
        this.setState((prev) => ({
            panes: [...prev.panes],
        }));
    }

    public remove(id: UniqueId) {
        const { panes, current } = this.state;
        const target = this.getPane(id);
        if (!target) {
            logger.error(`There is no pane found via the ${id} id`);
            return;
        }

        const index = panes.indexOf(target);
        // If the pane is the current pane, the active next or prev pane
        if (id === current) {
            const nextCurrent = panes[index + 1]?.id || panes[index - 1]?.id || '';
            this.setActive(nextCurrent);
        }

        this.setState((prev) => ({
            panes: prev.panes.filter((item) => item !== target),
        }));
    }

    public setActive(id?: UniqueId) {
        this.setState({
            current: id,
        });
    }

    public setLoading(loading: FunctionalOrSingle<boolean>): void {
        this.setState((prev) => ({
            ...prev,
            loading: typeof loading === 'function' ? loading(prev.loading) : loading,
        }));
    }

    public reset() {
        this.setState(new SidebarModel());
    }

    public onToolbarClick = (callback: ContextMenuGroupHandler) => {
        this.subscribe(SidebarEvent.onToolbarClick, callback);
    };
}
