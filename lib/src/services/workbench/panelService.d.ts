/// <reference types="react" />
import { Component } from 'mo/react';
import { IPanel, IPanelItem } from 'mo/model/workbench/panel';
import { IActionBarItem } from 'mo/components/actionBar';
export interface IPanelService extends Component<IPanel> {
    open(data: IPanelItem): void;
    getById(id: string): IPanelItem | undefined;
    add(data: IPanelItem | IPanelItem[]): void;
    update(data: IPanelItem): IPanelItem | undefined;
    remove(id: string): IPanelItem | undefined;
    appendOutput(content: string): void;
    updateOutput(data: IPanelItem): IPanelItem | undefined;
    clearOutput(): void;
    updateProblems(data: IPanelItem): IPanelItem | undefined;
    clearProblems(): void;
    showHide(): void;
    maximizeRestore(): void;
    onTabChange(callback: (key: string) => void): void;
    onToolbarClick(callback: (e: React.MouseEvent, item: IActionBarItem) => void): void;
}
export declare class PanelService extends Component<IPanel> implements IPanelService {
    protected state: IPanel;
    constructor();
    showHide(): void;
    maximizeRestore(): void;
    open(data: IPanelItem<any>): void;
    getById(id: string): IPanelItem<any> | undefined;
    updateOutput(data: IPanelItem<any>): IPanelItem | undefined;
    updateProblems(data: IPanelItem<any>): IPanelItem | undefined;
    clearProblems(): void;
    appendOutput(content: string): void;
    clearOutput(): void;
    add(data: IPanelItem | IPanelItem[]): void;
    update(data: IPanelItem): IPanelItem | undefined;
    remove(id: string): IPanelItem | undefined;
    onTabChange(callback: (key: string) => void): void;
    onToolbarClick(callback: (e: React.MouseEvent, item: IActionBarItem) => void): void;
}
