import { Component } from 'mo/react/component';
import { IPanelItem, IExplorer } from 'mo/model/workbench/explorer/explorer';
import { IActionBarItem } from 'mo/components/actionBar';
import { IMenuItem } from 'mo/components/menu';
export interface IExplorerService extends Component<IExplorer> {
    addPanel(panel: IPanelItem | IPanelItem[]): void;
    reset(): void;
    remove(id: string): void;
    togglePanel(id?: string): void;
    updateActionsCheckStatus(id?: string): void;
    addAction(action: IMenuItem): void;
    removeAction(id: string): void;
    updateRender(): void;
    onClick(callback: (e: MouseEvent, item: IActionBarItem) => void): any;
}
export declare class ExplorerService extends Component<IExplorer> implements IExplorerService {
    protected state: IExplorer;
    constructor();
    addPanel(data: IPanelItem | IPanelItem[]): void;
    remove(id: string): void;
    reset(): void;
    onClick(callback: (e: MouseEvent, item: IActionBarItem) => void): void;
    togglePanel(id: string): void;
    addAction(action: IMenuItem): void;
    removeAction(id: string): void;
    updateActionsCheckStatus(id: string): void;
    updateRender(): void;
}
