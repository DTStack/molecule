import { BaseService } from 'mo/glue';
import { type ISidebarPane, SidebarModel } from 'mo/models/sideBar';
import type { UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import logger from 'mo/utils/logger';

export interface ISidebarService extends BaseService<SidebarModel> {
    /**
     * Get a specific pane via id
     * @param id
     */
    get(id: UniqueId): ISidebarPane | undefined;
    /**
     * Add a new Sidebar pane
     * @param pane
     * @param isActive Whether to activate the current pane
     */
    add(pane: ISidebarPane, isActive?: boolean): void;
    /**
     * Update a specific pane
     * @param pane
     */
    update(pane: ISidebarPane): void;
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
    /**
     * Reset the sidebar data
     */
    reset(): void;
}

export class SidebarService extends BaseService<SidebarModel> implements ISidebarService {
    protected state: SidebarModel;

    constructor() {
        super();
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

    public update(pane: ISidebarPane) {
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

    public reset() {
        this.setState(new SidebarModel());
    }
}
