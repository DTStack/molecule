/* eslint-disable no-invalid-this */
import 'reflect-metadata';
import { observable } from 'mo/common/observable';
import { container, inject, injectable } from 'tsyringe';
import { IActionBarItem } from 'mo/components/actionbar';
export enum ExplorerEvent {}
export interface IPanelItem<T = any> extends IActionBarItem {
    renderPanel?: (props) => React.ReactNode | JSX.Element;
    toolbar?: T;
}

export interface IExpolorer {
    data?: IPanelItem[];
}
@observable()
@injectable()
export class IExpolorerModel implements IExpolorer {
    public data: IPanelItem[];

    constructor(@inject('ExplorerData') data: IPanelItem[] = []) {
        this.data = data;
    }

    public render!: () => React.ReactNode;
}

container.register('ExplorerData', { useValue: [] });
