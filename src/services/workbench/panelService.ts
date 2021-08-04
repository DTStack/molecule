import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { editor as MonacoEditor } from 'monaco-editor';
import { Component } from 'mo/react';
import {
    builtInOutputPanel,
    builtInPanelToolboxResize,
    IOutput,
    IPanel,
    IPanelItem,
    PanelEvent,
    PanelModel,
    PANEL_OUTPUT,
    PANEL_TOOLBOX_RESIZE,
    PANEL_TOOLBOX_RESTORE_SIZE,
} from 'mo/model/workbench/panel';

import { searchById } from '../helper';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { localize } from 'mo/i18n/localize';
import { LayoutService } from 'mo/services';

export interface IPanelService extends Component<IPanel> {
    /**
     * Set the current active panel
     * @param id target panel id
     */
    setActive(id: string): void;
    /**
     * Open a new or existing panel item as the active in Panel view
     * @param panel
     */
    open(panel: IPanelItem): void;
    /**
     * Get the specific panel
     * @param id
     */
    getPanel(id: string): IPanelItem | undefined;
    /**
     * Add new Panel items
     * @param data
     */
    add(data: IPanelItem | IPanelItem[]): void;
    /**
     * Update the specific panel
     * @param panel the id field is required
     */
    update(panel: IPanelItem): IPanelItem | undefined;
    /**
     * Remove the specific panel
     * @param id
     */
    remove(id: string): IPanelItem | undefined;
    /**
     * Toggle the panel between maximized or normal
     */
    toggleMaximize(): void;
    /**
     * Listen to the Panel tabs onChange event
     * @param callback
     */
    onTabChange(callback: (panelId: string) => void): void;
    /**
     * Listen to the Panel toolbar click event
     * @param callback
     */
    onToolbarClick(
        callback: (e: React.MouseEvent, item: IActionBarItemProps) => void
    ): void;
    /**
     * Listen to the Panel tabs close event
     * @param callback
     */
    onTabClose(callback: (panelId: string) => void): void;
    /**
     * The editorInstance of Output
     */
    readonly outputEditorInstance:
        | MonacoEditor.IStandaloneCodeEditor
        | undefined;
    /**
     * Append the content into Output panel
     * @param content
     */
    appendOutput(content: string): void;
    /**
     * Update the Output panel item
     * @param panel
     */
    updateOutput(panel: IPanelItem): IPanelItem | undefined;
    /**
     * Clean the Output content
     */
    cleanOutput(): void;
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

    public setActive(id: string): void {
        this.open({ id });
    }

    public get outputEditorInstance() {
        const outputPane: IOutput | undefined = this.state.data?.find(
            searchById(PANEL_OUTPUT)
        );
        return outputPane?.outputEditorInstance;
    }

    public toggleMaximize(): void {
        const panelMaximized = this.layoutService.isPanelMaximized();
        const { toolbox = [] } = this.state;
        const resizeBtnIndex = toolbox?.findIndex(
            searchById(PANEL_TOOLBOX_RESIZE)
        );
        const resizeBtn = toolbox[resizeBtnIndex];
        if (resizeBtn) {
            if (panelMaximized) {
                toolbox[resizeBtnIndex] = builtInPanelToolboxResize();
            } else {
                toolbox[resizeBtnIndex] = Object.assign({}, resizeBtn, {
                    title: localize(
                        PANEL_TOOLBOX_RESTORE_SIZE,
                        'Restore Panel Size'
                    ),
                    iconName: 'codicon-chevron-down',
                });
            }
            this.layoutService.togglePanelMaximized();
        }
    }

    public open(data: IPanelItem<any>): void {
        let current = this.getPanel(data.id);
        if (!current) {
            this.add(data);
            current = data;
        }
        this.setState({
            current: current,
        });
    }

    public getPanel(id: string): IPanelItem<any> | undefined {
        const { data = [] } = this.state;
        return data.find(searchById(id));
    }

    public updateOutput(data: IPanelItem<any>): IPanelItem | undefined {
        return this.update(Object.assign(builtInOutputPanel(), data));
    }

    public appendOutput(content: string): void {
        const outputValue = this.outputEditorInstance?.getValue();
        this.updateOutput({
            id: PANEL_OUTPUT,
            data: outputValue + content,
        });
        this.outputEditorInstance?.setValue(outputValue + content);
    }

    public cleanOutput(): void {
        this.outputEditorInstance?.setValue('');
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

    public onTabClose(callback: (key: string) => void) {
        this.subscribe(PanelEvent.onTabClose, callback);
    }
}
