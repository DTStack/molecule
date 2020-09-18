import { IActivityBar, IActivityBarData } from '@/core/activityBar';

export class ActivityBarService implements IActivityBar {
    public readonly data: IActivityBarData[];

    constructor(data: IActivityBarData[] = []) {
        this.data = data;
    }
    public onSelect(key: string, item: IActivityBarData) {
    }
    public onClick(event: React.MouseEvent, item: IActivityBarData) {

    }
    public push(data: IActivityBarData) {
        this.data.push(data);
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
