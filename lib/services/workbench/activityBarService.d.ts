/// <reference types="react" />
import { Component } from 'mo/react/component';
import { IActivityBar, IActivityBarItem } from 'mo/model/workbench/activityBar';
export interface IActivityBarService extends Component<IActivityBar> {
    reset(): void;
    addBar(data: IActivityBarItem | IActivityBarItem[]): void;
    remove(index: number): void;
    /**
     * Add click event listener
     * @param callback
     */
    onClick(callback: (key: React.MouseEvent, item: IActivityBarItem) => void): any;
    onSelect(callback: (key: React.MouseEvent, item: IActivityBarItem) => void): any;
}
export declare class ActivityBarService extends Component<IActivityBar> implements IActivityBarService {
    protected state: IActivityBar;
    constructor();
    reset(): void;
    addBar(data: IActivityBarItem | IActivityBarItem[]): void;
    remove(index: number): void;
    onClick(callback: Function): void;
    onSelect(callback: (key: React.MouseEvent, item: IActivityBarItem) => void): void;
}
