import { IActivityBar, IActivityBarItem } from '@/core/activityBar';

export class ActivityBarService implements IActivityBar {
    public data: IActivityBarItem[];
    public selected: string;

    constructor(data: IActivityBarItem[] = [], selected: string = '') {
        this.data = data;
        this.selected = selected;
    }
    public onSelect(key: string, item?: IActivityBarItem) {
        this.selected = key;
    }
    public onClick(event: React.MouseEvent, item: IActivityBarItem) {

    }
    public push(data: IActivityBarItem | IActivityBarItem[]) {
        if (Array.isArray(data)) {
            this.data = this.data.concat(data);
            // this.data = [...this.data, ...data];
        } else {
            this.data.push(data);
            // this.data = [...this.data, data];
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
