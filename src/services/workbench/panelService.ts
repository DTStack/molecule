import 'reflect-metadata';
import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    IPanel,
    IPanelItem,
    PanelEvent,
    PanelModel,
    PANEL_OUTPUT,
    PANEL_TOOLBOX_RESIZE,
} from 'mo/model/workbench/panel';
import { LayoutService } from 'mo/services';

import { searchById } from '../helper';
import { IActionBarItemProps } from 'mo/components/actionBar';
export interface IPanelService extends Component<IPanel> {
    open(data: IPanelItem): void;
    getById(id: string): IPanelItem | undefined;
    add(data: IPanelItem | IPanelItem[]): void;
    update(data: IPanelItem): IPanelItem | undefined;
    remove(id: string): IPanelItem | undefined;
    appendOutput(content: string): void;
    updateOutput(data: IPanelItem): IPanelItem | undefined;
    clearOutput(): void;
    maximizeRestore(): void;
    onTabChange(callback: (key: string) => void): void;
    onToolbarClick(
        callback: (e: React.MouseEvent, item: IActionBarItemProps) => void
    ): void;
}

@singleton()
export class PanelService extends Component<IPanel> implements IPanelService {
    protected state: IPanel;
    private readonly layoutService: LayoutService;

    constructor() {
        super();
        this.state = container.resolve(PanelModel);
        this.layoutService = container.resolve(LayoutService);
    }

    public maximizeRestore(): void {
        const panelMaximized = this.layoutService.isPanelMaximized();
        const { toolbox = [] } = this.state;
        const resizeBtnIndex = toolbox?.findIndex(
            searchById(PANEL_TOOLBOX_RESIZE.id)
        );
        const resizeBtn = toolbox[resizeBtnIndex];
        if (resizeBtn) {
            if (panelMaximized) {
                toolbox[resizeBtnIndex] = Object.assign({}, resizeBtn, {
                    title: 'Restore Panel Size',
                    iconName: 'codicon-chevron-down',
                });
            } else {
                toolbox[resizeBtnIndex] = PANEL_TOOLBOX_RESIZE;
            }
            this.layoutService.togglePanelMaximized();
        }
    }

    public open(data: IPanelItem<any>): void {
        let current = this.getById(data.id);
        if (!current) {
            this.add(data);
            current = data;
        }
        this.setState({
            current: current,
        });
    }

    public getById(id: string): IPanelItem<any> | undefined {
        const { data = [] } = this.state;
        return data.find(searchById(id));
    }

    public updateOutput(data: IPanelItem<any>): IPanelItem | undefined {
        return this.update(Object.assign(PANEL_OUTPUT, data));
    }
    public appendOutput(content: string): void {
        const output = this.getById(PANEL_OUTPUT.id);
        if (output) {
            output.data = output.data + content;
            this.updateOutput(output);
        }
    }

    public clearOutput(): void {
        this.updateOutput(Object.assign(PANEL_OUTPUT, { data: '' }));
    }

    public add(data: IPanelItem | IPanelItem[]) {
        let original = this.state.data || [];
        if (Array.isArray(data)) {
            original = original.concat(data);
        } else {
            original.push(data);
        }
        this.setState({
            data: original,
        });
    }

    public update(data: IPanelItem): IPanelItem | undefined {
        const panes = this.state.data || [];
        const targetIndex = panes?.findIndex(searchById(data.id));
        if (targetIndex !== undefined && targetIndex > -1) {
            Object.assign(panes[targetIndex], data);
            this.setState({
                data: [...panes],
            });
            return panes[targetIndex];
        }
        return undefined;
    }

    public remove(id: string): IPanelItem | undefined {
        const { data } = this.state;

        const targetIndex = data?.findIndex(searchById(id));
        if (targetIndex !== undefined && targetIndex > -1) {
            const result = data?.splice(targetIndex, 1) || [];
            this.setState({
                data: data,
            });
            return result[0];
        }
        return undefined;
    }

    public onTabChange(callback: (key: string) => void) {
        this.subscribe(PanelEvent.onTabChange, callback);
    }

    public onToolbarClick(
        callback: (e: React.MouseEvent, item: IActionBarItemProps) => void
    ) {
        this.subscribe(PanelEvent.onToolbarClick, callback);
    }
}
