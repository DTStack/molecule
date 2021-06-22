import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    ActivityBarModel,
    ActivityBarEvent,
    IActivityBar,
    IActivityBarItem,
} from 'mo/model/workbench/activityBar';
import { builtInExplorerActivityItem } from 'mo/model/workbench/explorer/explorer';
import { builtInSearchActivityItem } from 'mo/model/workbench/search';
import { searchById } from '../helper';
import { IMenuItemProps } from 'mo/components/menu';

export interface IActivityBarService extends Component<IActivityBar> {
    reset(): void;
    /**
     *
     * @param isActive If provide, Activity Bar will set data active automatically. Only works in one data
     */
    addBar(
        data: IActivityBarItem | IActivityBarItem[],
        isActive?: boolean
    ): void;
    /**
     * set active bar
     */
    setActive(id?: string): void;
    remove(id: string): void;
    toggleBar(id?: string): void;
    updateContextMenuCheckStatus(id?: string): void;
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

    constructor() {
        super();
        this.state = container.resolve(ActivityBarModel);
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

    public addBar(
        data: IActivityBarItem | IActivityBarItem[],
        isActive = false
    ) {
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
        const { data } = this.state;
        const next = [...data!];
        const index = next.findIndex(searchById(id));
        if (index > -1) {
            this.remove(id);
        } else {
            // TODO 这个existBar 逻辑应该有问题
            const existBar = [
                builtInExplorerActivityItem(),
                builtInSearchActivityItem(),
            ].find(searchById(id));
            if (!existBar) return;
            this.addBar(existBar);
        }
        this.updateContextMenuCheckStatus(id);
    }

    public updateContextMenuCheckStatus(id: string) {
        const { contextMenu, data } = this.state;
        const existBar = data?.find(searchById(id));
        const newActions = contextMenu?.map((item) => {
            return {
                ...item,
                icon:
                    item.id === id
                        ? Boolean(existBar)
                            ? 'check'
                            : ''
                        : item.icon,
            };
        });
        this.setState({
            contextMenu: newActions,
        });
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
