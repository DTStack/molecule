import { Component } from 'mo/react';
import { singleton, container } from 'tsyringe';
import {
    IPanel,
    IPanelItem,
    PanelModel,
    PANEL_OUTPUT,
    PANEL_PROBLEMS,
} from 'mo/model/workbench/panel';

import { searchById } from '../helper';
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
}

@singleton()
export class PanelService extends Component<IPanel> implements IPanelService {
    protected state: IPanel;

    constructor() {
        super();
        this.state = container.resolve(PanelModel);
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

    public updateProblems(data: IPanelItem<any>): IPanelItem | undefined {
        return this.update(Object.assign(PANEL_PROBLEMS, data));
    }

    public clearProblems(): void {
        this.updateOutput(Object.assign(PANEL_PROBLEMS, { data: null }));
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
            this.render();
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
}
