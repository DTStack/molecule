/* eslint-disable no-invalid-this */
import { emit } from 'mo/services/eventService';
import { IActivityBar, IActivityBarItem } from 'mo/workbench';
import { singleton, inject, container } from 'tsyringe';
import { BaseService } from './baseService';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    /**
     * Selected an activity bar
     */
    Selected = 'activityBar.selected',
    OnClick = 'activityBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'activityBar.data',
    ReRender = 'activityBar.reRender',
}

export interface IActivityBarService extends BaseService {
    reset(): void;
    push(data: IActivityBarItem | IActivityBarItem []): void;
    remove(index: number) : void;
}

@singleton()
export class ActivityBarService extends BaseService<IActivityBar> implements IActivityBarService {
    private data: IActivityBarItem[];
    private selected: string = '';

    constructor(
        @inject('ActivityBarData') data: IActivityBarItem[],
        @inject('ActivityBarSelected') selected: string,
    ) {
        super();
        this.data = data;
        this.selected = selected;
    }

    public render!: () => React.ReactNode;

    public readonly onSelect = (key: string, item?: IActivityBarItem | undefined) => {
        this.selected = key;
        this.emit(ActivityBarEvent.Selected, key, item);
    }

    public readonly onClick = (event: React.MouseEvent, item: IActivityBarItem) => {
        this.emit(ActivityBarEvent.OnClick, event, item);
    }

    public reset() {
        this.data = [];
        this.selected = '';
    }

    @emit(ActivityBarEvent.DataChanged)
    public push(data: IActivityBarItem | IActivityBarItem[]) {
        const original = this.data || [];
        if (Array.isArray(data)) {
            this.data = original.concat(data);
        } else {
            original.push(data);
        }
    }

    public remove(index: number) {
        if (this.data) {
            this.data.splice(index, 1);
        }
    }

    @emit(ActivityBarEvent.ReRender)
    public setRenderer(renderer: () => React.ReactNode) {
        this.render = renderer;
    }

    public getState() {
        return {
            selected: this.selected,
            data: this.data,
        };
    }
}

container.register('ActivityBarData', { useValue: [] });
container.register('ActivityBarSelected', { useValue: '' });
