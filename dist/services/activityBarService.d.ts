/// <reference types="react" />
import { IActivityBar, IActivityBarItem } from '@/core/activityBar';
export declare class ActivityBarService implements IActivityBar {
    data: IActivityBarItem[];
    selected: string;
    constructor(data?: IActivityBarItem[], selected?: string);
    onSelect(key: string, item?: IActivityBarItem): void;
    onClick(event: React.MouseEvent, item: IActivityBarItem): void;
    push(data: IActivityBarItem | IActivityBarItem[]): void;
    remove(index: number): void;
    update(): void;
    get(id: string): void;
}
