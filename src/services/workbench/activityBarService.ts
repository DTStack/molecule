import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    ActivityBarModel,
    ActivityBarEvent,
    IActivityBar,
    IActivityBarItem,
} from 'mo/model/workbench/activityBar';
import { searchById } from '../helper';
import { IActivityMenuItemProps } from 'mo/model';
import logger from 'mo/common/logger';
import { ISidebarService, SidebarService } from './sidebarService';

export interface IActivityBarService extends Component<IActivityBar> {
    /**
     * Reset the activityBar state data,
     * if you want to whole customize the activityBar, you can reset it first,
     * and then using the activityBar.add() method to fill the data you need.
     */
    reset(): void;
    /**
     * Add IActivityBarItem data
     * @param isActive If provide, Activity Bar will set data active automatically. Only works in one data
     */
    add(data: IActivityBarItem | IActivityBarItem[], isActive?: boolean): void;
    /**
     * Set active bar
     */
    setActive(id?: string): void;
    /**
     * Remove the specific activity bar by id
     * @param id
     */
    remove(id: string | string[]): void;
    /**
     * Toggle the specific activity bar between show or hide
     * @param id activity bar id
     */
    toggleBar(id: string): void;
    /**
     * Toggle the contextMenu between checked or unchecked
     * @param id contextmenu id
     */
    toggleContextMenuChecked(id: string): void;
    /**
     * Add new contextMenus for the activityBar
     */
    addContextMenu(
        data: IActivityMenuItemProps | IActivityMenuItemProps[]
    ): void;
    /**
     * Remove the specific contextMenu item by id
     * @param id contextmenu id
     */
    removeContextMenu(id: string | string[]): void;
    /**
     * Add click event listener
     * @param callback
     */
    onClick(callback: (selectedKey: string, item: IActivityBarItem) => void);
    /**
     * Called when activity bar item which is not global is changed
     */
    onChange(
        callback: (prevSelectedKey?: string, nextSelectedKey?: string) => void
    );
}

@singleton()
export class ActivityBarService
    extends Component<IActivityBar>
    implements IActivityBarService {
    protected state: IActivityBar;
    private sidebarService: ISidebarService;

    constructor() {
        super();
        this.state = container.resolve(ActivityBarModel);
        this.sidebarService = container.resolve(SidebarService);
    }

    public setActive(id?: string) {
        this.setState({
            selected: id,
        });
    }

    public reset() {
        this.setState({
            data: [],
            selected: '',
            contextMenu: [],
        });
    }

    public add(data: IActivityBarItem | IActivityBarItem[], isActive = false) {
        let next = [...this.state.data!];
        if (Array.isArray(data)) {
            next = next?.concat(data);
        } else {
            next?.push(data);
            if (isActive) {
                this.setActive(data.id);
            }
        }
        this.setState({
            data: next,
        });
    }

    private getRemoveList<T extends IActivityBarItem | IActivityMenuItemProps>(
        id: string | string[],
        data: T[]
    ) {
        return data.reduce((total: number[], item: T, key: number) => {
            const strItem = item.id.toString();
            if ((Array.isArray(id) && id.includes(strItem)) || id === strItem) {
                return total.concat(key);
            }
            return total;
        }, []);
    }

    public remove(id: string | string[]) {
        const { data } = this.state;
        let next = [...data!];
        const indexs = this.getRemoveList<IActivityBarItem>(id, next);

        if (!indexs.length) {
            logger.error(
                "Remove the bar data failed, because there is no data found in barData via this 'id'"
            );
        } else {
            next = next.filter((_, key) => {
                return !indexs.includes(key);
            });

            this.setState({
                data: next,
            });
        }
    }

    public toggleBar(id: string) {
        const { data = [], selected } = this.state;
        const next = data.concat();
        const index = next.findIndex(searchById(id));
        const target = next[index];

        if (target) {
            target.hidden = !target.hidden;
            if (id === selected) {
                const nextIndex = (index + 1) % next.length;
                this.setActive(next[nextIndex].id);
                this.sidebarService.setActive(next[nextIndex].id);
            }
            this.setState({
                data: next,
            });
        } else {
            logger.error('Toggle activity bar failed, please check your id');
        }
    }

    public toggleContextMenuChecked(id: string) {
        const { contextMenu = [] } = this.state;
        const newActions = contextMenu.concat();
        const target = newActions.find(searchById(id));

        if (target) {
            target.icon = target.icon === 'check' ? '' : 'check';
            this.setState({
                contextMenu: newActions,
            });
        } else {
            logger.error(
                `Toggle the contextmenu failed, can not found any menu by id ${id}`
            );
        }
    }

    public addContextMenu(
        contextMenu: IActivityMenuItemProps | IActivityMenuItemProps[]
    ) {
        let next = [...this.state.contextMenu!];

        if (Array.isArray(contextMenu)) {
            next = next?.concat(contextMenu);
        } else {
            next?.push(contextMenu);
        }
        this.setState({
            contextMenu: next,
        });
    }

    public removeContextMenu(id: string | string[]) {
        const { contextMenu } = this.state;
        let next = [...contextMenu!];
        const indexs = this.getRemoveList<IActivityMenuItemProps>(id, next);

        if (!indexs.length) {
            logger.error(
                "Remove the bar data failed, because there is no data found in barData via this 'id'"
            );
        } else {
            next = next.filter((_, key) => {
                return !indexs.includes(key);
            });
            this.setState({
                contextMenu: next,
            });
        }
    }

    // ====== The belows for subscribe activity bar events ======
    public onClick(
        callback: (selectedKey: string, item: IActivityBarItem) => void
    ) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }

    public onChange(
        callback: (prevSelectedKey?: string, nextSelectedKey?: string) => void
    ) {
        this.subscribe(ActivityBarEvent.OnChange, callback);
    }
}
