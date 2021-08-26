import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { editor as MonacoEditor } from 'monaco-editor';
import cloneDeep from 'lodash/cloneDeep';
import { Component } from 'mo/react';
import {
    builtInOutputPanel,
    builtInPanelToolboxResize,
    builtInPanelToolboxReStore,
    IOutput,
    IPanel,
    IPanelItem,
    PanelEvent,
    PanelModel,
    PANEL_OUTPUT,
    PANEL_TOOLBOX_RESIZE,
} from 'mo/model/workbench/panel';

import { searchById } from '../helper';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { LayoutService } from 'mo/services';
import logger from 'mo/common/logger';

export interface IPanelService extends Component<IPanel> {
    /**
     * The editorInstance of Output
     */
    readonly outputEditorInstance:
        | MonacoEditor.IStandaloneCodeEditor
        | undefined;
    /**
     * Set the current active panel
     *
     * This method will log error when couldn't find target panel in state data.
     * So if you want to add a panel and meanwhile active it, please use the `open` method
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
     * Get the value of Output Panel
     */
    getOutputValue(): string;
    /**
     * Append the content into Output panel
     * @param content
     */
    appendOutput(content: string): void;
    /**
     * Clean the Output content
     */
    cleanOutput(): void;
    /**
     * Reset data in state
     */
    reset(): void;
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

    private updateOutput(data: IPanelItem<any>): IPanelItem | undefined {
        return this.update(Object.assign(builtInOutputPanel(), data));
    }

    public get outputEditorInstance() {
        const outputPane: IOutput | undefined = this.state.data?.find(
            searchById(PANEL_OUTPUT)
        );
        return outputPane?.outputEditorInstance;
    }

    public setActive(id: string): void {
        const panel = this.getPanel(id);
        if (panel) {
            this.open(panel);
        } else {
            logger.error(
                `There is no panel found in data via ${id}. If you want to open a brand-new panel, please use the open method`
            );
        }
    }

    public toggleMaximize(): void {
        const { toolbox = [] } = this.state;
        const resizeBtnIndex = toolbox?.findIndex(
            searchById(PANEL_TOOLBOX_RESIZE)
        );
        const resizeBtn = toolbox[resizeBtnIndex];
        if (resizeBtn) {
            const panelMaximized = this.layoutService.togglePanelMaximized();

            toolbox[resizeBtnIndex] = panelMaximized
                ? builtInPanelToolboxReStore()
                : builtInPanelToolboxResize();
        }
    }

    public open(data: IPanelItem<any>): void {
        const { data: stateData = [] } = this.state;
        const cloneData = cloneDeep(data);
        const index = stateData.findIndex(searchById(cloneData.id));
        const current = index === -1 ? cloneData : stateData[index];

        this.setState({
            current,
        });
    }

    public getPanel(id: string): IPanelItem<any> | undefined {
        const { data = [] } = this.state;
        return cloneDeep(data.find(searchById(id)));
    }

    public getOutputValue() {
        const outputPanel = this.getPanel(PANEL_OUTPUT);
        return outputPanel?.data || '';
    }

    public appendOutput(content: string): void {
        const outputValue = this.getOutputValue();
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
        const cloneData = cloneDeep(data);
        if (Array.isArray(cloneData)) {
            original = original.concat(cloneData);
        } else {
            original.push(cloneData);
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
        } else {
            logger.error(`There is no panel found in data via the ${data.id}`);
            return undefined;
        }
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
        } else {
            logger.error(`There is no panel found in data via the ${id}`);
            return undefined;
        }
    }

    public reset(): void {
        this.setState({
            data: [],
            current: null,
            toolbox: [],
        });
        this.cleanOutput();
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
