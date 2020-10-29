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
}

export interface IActivityBarService extends BaseService {
    reset(): void;
    push(data: IActivityBarItem | IActivityBarItem []): void;
    remove(index: number) : void;
}

@singleton()
export class ActivityBarService extends BaseService<IActivityBar> implements IActivityBarService {
    private data: IActivityBarItem[];
    private selected: string;
    private renderer!: () => React.ReactNode | undefined;

    constructor(
        @inject('ActivityBarData') data: IActivityBarItem[],
        @inject('ActivityBarSelected') selected: string,
    ) {
        super();
        this.data = data;
        this.selected = selected;
    }

    public reset() {
        this.data = [];
        this.selected = '';
    }

    @emit(ActivityBarEvent.Selected)
    public onSelect(key: string, item?: IActivityBarItem | undefined) {
        this.selected = key;
    }

    @emit(ActivityBarEvent.OnClick)
    public onClick(event: React.MouseEvent, item: IActivityBarItem) {
        console.log('');
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

    public setRenderer(renderer: () => React.ReactNode) {
        this.renderer = renderer;
    }

    public getRenderer() {
        return this.renderer;
    }

    public getState() {
        return {
            data: this.data,
            selected: this.selected,
        };
    }
}

container.register('ActivityBarData', { useValue: [] });
container.register('ActivityBarSelected', { useValue: '' });
