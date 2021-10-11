import 'reflect-metadata';
import { Component } from 'mo/react';
import cloneDeep from 'lodash/cloneDeep';
import { singleton, container } from 'tsyringe';
import {
    ISidebar,
    ISidebarPane,
    SidebarModel,
} from 'mo/model/workbench/sidebar';
import { searchById } from '../../common/treeUtil';
import logger from 'mo/common/logger';

export interface ISidebarService extends Component<ISidebar> {
    /**
     * Get a specific pane via id
     * @param id
     */
    get(id: string): ISidebarPane | undefined;
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
    remove(id: string): void;
    /**
     * Set the specific pane as active
     * @param id
     */
    setActive(id?: string): void;
    /**
     * Reset the sidebar data
     */
    reset(): void;
}

@singleton()
export class SidebarService
    extends Component<ISidebar>
    implements ISidebarService {
    protected state: ISidebar;

    constructor() {
        super();
        this.state = container.resolve(SidebarModel);
    }

    private getPane(id: string) {
        const { panes } = this.state;
        const target = panes.find(searchById(id));
        return target;
    }

    public get(id: string) {
        const pane = this.getPane(id);
        return pane ? cloneDeep(pane) : undefined;
    }

    public add(data: ISidebarPane, isActive = false) {
        const pane = this.getPane(data.id);
        if (pane) {
            logger.error(
                `There already has a pane which id is ${data.id}, if you want to modify it, please use the update method`
            );
            return;
        }

        const oldPanes = this.state.panes.concat();
        oldPanes.push(cloneDeep(data));
        if (isActive) {
            this.setState({
                current: data.id,
            });
        }
        this.setState({
            panes: oldPanes,
        });
    }

    public update(pane: ISidebarPane) {
        const { panes } = this.state;
        const targetPane = this.getPane(pane.id);
        if (!targetPane) {
            logger.error(`There is no pane found via the ${pane.id} id`);
            return;
        }

        Object.assign(targetPane, pane);
        this.setState({
            panes: cloneDeep(panes),
        });
    }

    public remove(id: string) {
        const { panes, current } = this.state;
        const index = panes.findIndex(searchById(id));
        if (index === -1) {
            logger.error(`There is no pane found via the ${id} id`);
            return;
        }

        // If the pane is the current pane, the active next or prev pane
        if (id === current) {
            const nextCurrent =
                panes[index + 1]?.id || panes[index - 1]?.id || '';
            this.setActive(nextCurrent);
        }

        panes.splice(index, 1);
        this.setState({
            panes: panes.concat(),
        });
    }

    public setActive(id?: string) {
        if (!id) {
            this.setState({
                current: '',
            });
        } else {
            const pane = this.getPane(id);
            if (!pane) {
                logger.error(`There is no pane found via the ${id} id`);
                return;
            }
            this.setState({
                current: id,
            });
        }
    }

    public reset() {
        this.setState({
            panes: [],
            current: '',
        });
    }
}
