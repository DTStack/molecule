import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    ActivityBarModel,
    ActivityBarEvent,
    IActivityBar,
    IActivityBarItem,
} from 'mo/model/workbench/activityBar';
import { EXPLORER_ACTIVITY_ITEM } from 'mo/model/workbench/explorer/explorer';
import { SEARCH_ACTIVITY_ITEM } from 'mo/model/workbench/search';
import { searchById } from '../helper';
import { IMenuBarItem } from 'mo/model';

export interface IActivityBarService extends Component<IActivityBar> {
    showHide(): void;
    reset(): void;
    addBar(data: IActivityBarItem | IActivityBarItem[]): void;
    remove(id: string): void;
    toggleBar(id?: string): void;
    updateContextMenuCheckStatus(id?: string): void;
    addConextMenu(contextMenu: IMenuBarItem | IMenuBarItem[]): void;
    removeContextMenu(id: string): void;
    /**
     * Add click event listener
     * @param callback
     */
    onClick(callback: (key: React.MouseEvent, item: IActivityBarItem) => void);
    onSelect(callback: (key: React.MouseEvent, item: IActivityBarItem) => void);
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

    public reset() {
        this.setState({
            data: [],
            selected: '',
            hidden: false,
        });
    }

    public showHide(): void {
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    public addBar(data: IActivityBarItem | IActivityBarItem[]) {
        let next = [...this.state.data!];
        if (Array.isArray(data)) {
            next = next?.concat(data);
        } else {
            next?.push(data);
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
            const existBar = [
                EXPLORER_ACTIVITY_ITEM,
                SEARCH_ACTIVITY_ITEM,
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

    public addConextMenu(contextMenu: IMenuBarItem | IMenuBarItem[]) {
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
    public onClick(callback: Function) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }

    public onSelect(
        callback: (key: React.MouseEvent, item: IActivityBarItem) => void
    ) {
        this.subscribe(ActivityBarEvent.Selected, callback);
    }
}
