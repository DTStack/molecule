import { ActivityBarEvent, IActivityBar, IActivityBarItem } from 'mo/core/activityBar';
import { emitter } from 'mo/common/eventEmitter';

export class ActivityBarService implements IActivityBar {
    data: IActivityBarItem[];
    public selected: string;

    constructor(data: IActivityBarItem[] = [], selected: string = '') {
        this.data = data;
        this.selected = selected;
    }

    @emitter(ActivityBarEvent.SELECTED)
    public onSelect(key: string, item?: IActivityBarItem) {
        this.selected = key;
    }

    public onClick(event: React.MouseEvent, item: IActivityBarItem) {

    }

    @emitter(ActivityBarEvent.DATA_CHANGE)
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
