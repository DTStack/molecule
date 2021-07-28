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
import { IMenuItemProps } from 'mo/components/menu';
import logger from 'mo/common/logger';
import { ISidebarService, SidebarService } from './sidebarService';

export interface IActivityBarService extends Component<IActivityBar> {
    reset(): void;
    /**
     *
     * @param isActive If provide, Activity Bar will set data active automatically. Only works in one data
     */
    add(data: IActivityBarItem | IActivityBarItem[], isActive?: boolean): void;
    /**
     * set active bar
     */
    setActive(id?: string): void;
    remove(id: string): void;
    toggleBar(id: string): void;
    toggleContextMenuCheckStatus(id: string): void;
    addContextMenu(contextMenu: IMenuItemProps | IMenuItemProps[]): void;
    removeContextMenu(id: string): void;
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

    public remove(id: string) {
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            data: next,
        });
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

    public toggleContextMenuCheckStatus(id: string) {
        const { contextMenu = [] } = this.state;
        const newActions = contextMenu.concat();
        const target = newActions.find(searchById(id));
        if (target) {
            target.icon = target.icon === 'check' ? '' : 'check';
            this.setState({
                contextMenu: newActions,
            });
        } else {
            logger.error('toggle context menu failed, please check your id');
        }
    }

    public addContextMenu(contextMenu: IMenuItemProps | IMenuItemProps[]) {
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

    public removeContextMenu(id: string) {
        const { contextMenu } = this.state;
        const next = [...contextMenu!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            next.splice(index, 1);
        }
        this.setState({
            contextMenu: next,
        });
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
