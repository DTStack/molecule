import { ActivityBarEvent, IActivityBar, IActivityBarItem } from 'mo/core/activityBar';
import { emit } from 'mo/common/eventEmitter';

export class ActivityBarService implements IActivityBar {
    data: IActivityBarItem[];
    public selected: string;

    constructor(data: IActivityBarItem[] = [], selected: string = '') {
        this.data = data;
        this.selected = selected;
    }

    @emit(ActivityBarEvent.Selected)
    public onSelect(key: string, item?: IActivityBarItem) {
        this.selected = key;
    }

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
