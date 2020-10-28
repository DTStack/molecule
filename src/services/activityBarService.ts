import { ActivityBarEvent, IActivityBar, IActivityBarItem } from 'mo/core/workbench/activityBar';
import { emit, EventService } from 'mo/services/eventService';
import { singleton, inject, container } from 'tsyringe';
import { BaseService } from './baseService';

@singleton()
export class ActivityBarService extends BaseService implements IActivityBar {
    public data: IActivityBarItem[];
    public selected: string;

    constructor(
        @inject('ActivityBarItem') data: IActivityBarItem[] = [],
        @inject('Selected') selected: string = '',
    ) {
        super();
        this.data = data;
        this.selected = selected;
    }

    public subscribe(name: ActivityBarEvent, callback: Function) {
        EventService.subscribe(name, callback);
    }

    @emit(ActivityBarEvent.Selected)
    public onSelect(key: string, item?: IActivityBarItem | undefined) {
        this.selected = key;
    }

    @emit(ActivityBarEvent.OnClick)
    public onClick(event: React.MouseEvent, item: IActivityBarItem) {

    }

    @emit(ActivityBarEvent.DataChanged)
    public push(data: IActivityBarItem | IActivityBarItem[]) {
        if (Array.isArray(data)) {
            this.data = this.data.concat(data);
        } else {
            this.data.push(data);
        }
    }

    public remove(index: number) {
        this.data.splice(index, 1);
    }

    public update() {
        // this.data.
    };

    public get(id: string) {

    }
}

container.register('ActivityBarItem', { useValue: [] });
container.register('Selected', { useValue: '' });
