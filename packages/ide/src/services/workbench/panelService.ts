import 'reflect-metadata';
import { singleton, container } from 'tsyringe';
import { editor as MonacoEditor } from 'monaco-editor';
import { cloneDeepWith, cloneDeep } from 'lodash';
import pickBy from 'lodash/pickBy';
import { Component } from '@dtinsight/molecule-glue';
import {
    IOutput,
    IPanel,
    IPanelItem,
    PanelEvent,
    PanelModel,
} from 'mo/model/workbench/panel';

import { searchById } from '@dtinsight/molecule-common';
import { IActionBarItemProps } from '@dtinsight/molecule-ui';
import { BuiltinService, IBuiltinService, LayoutService } from 'mo/services';
import { Logger as logger } from '@dtinsight/molecule-common';
import type { UniqueId } from '@dtinsight/molecule-common';

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
    setActive(id: UniqueId): void;
    /**
     * Open a new or existing panel item as the active in Panel view
     * @param panel
     */
    open(panel: IPanelItem): void;
    /**
     * Get the specific panel
     * @param id
     */
    getPanel(id: UniqueId): IPanelItem | undefined;
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
     * Update the Output panel, except the value
     *
     * If you want to update the value of this panel, please use the `appendOutput` method
     * @param panel
     */
    updateOutput(panel: IPanelItem): IPanelItem | undefined;
    /**
     * Remove the specific panel
     * @param id
     */
    remove(id: UniqueId): IPanelItem | undefined;
    /**
     * Toggle the panel between maximized or normal
     */
    toggleMaximize(): void;
    /**
     * Listen to the Panel tabs onChange event
     * @param callback
     */
    onTabChange(callback: (panelId: UniqueId) => void): void;
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
    onTabClose(callback: (panelId: UniqueId) => void): void;
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
    private readonly builtinService: IBuiltinService;

    constructor() {
        super();
        this.state = container.resolve(PanelModel);
        this.layoutService = container.resolve(LayoutService);
        this.builtinService = container.resolve(BuiltinService);
    }

    private updateOutputProperty(
        data: Partial<IPanelItem<string>>
    ): IPanelItem | undefined {
        const { PANEL_OUTPUT } = this.builtinService.getConstants();
        const truthData = pickBy(data, (item) => item !== undefined);
        return this.update(
            Object.assign(this.getPanel(PANEL_OUTPUT!), truthData)
        );
    }

    public get outputEditorInstance() {
        const { PANEL_OUTPUT } = this.builtinService.getConstants();
        const outputPane: IOutput | undefined = this.state.data?.find(
            searchById(PANEL_OUTPUT)
        );
        return outputPane?.outputEditorInstance;
    }

    public setActive(id: UniqueId): void {
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
        const { PANEL_TOOLBOX_RESIZE } = this.builtinService.getConstants();
        const { builtInPanelToolboxResize, builtInPanelToolboxReStore } =
            this.builtinService.getModules();
        const { toolbox = [] } = this.state;
        if (builtInPanelToolboxResize && builtInPanelToolboxReStore) {
            const resizeBtnIndex = toolbox?.findIndex(
                searchById(PANEL_TOOLBOX_RESIZE)
            );
            const resizeBtn = toolbox[resizeBtnIndex];
            if (resizeBtn) {
                const panelMaximized =
                    this.layoutService.togglePanelMaximized();

                toolbox[resizeBtnIndex] = panelMaximized
                    ? builtInPanelToolboxReStore
                    : builtInPanelToolboxResize;
            }
        }
    }

    public open(data: IPanelItem<any>): void {
        const { data: stateData = [] } = this.state;
        let current = cloneDeep(data);
        const index = stateData.findIndex(searchById(current.id));
        if (index > -1) {
            current = stateData[index];
        } else {
            // Add the new panel item
            this.add(current);
        }

        this.setState({
            current,
        });
    }

    public getPanel(id: UniqueId): IPanelItem<any> | undefined {
        const { data = [] } = this.state;
        return cloneDeepWith(data.find(searchById(id)), (value) => {
            // prevent the browser from OOM
            // because when cloneDeep the StandaloneEditor class, it'll get infinity loop in
            // https://unpkg.com/monaco-editor@0.23.0/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase.js#L398
            // class PieceTreeBase.getOffsetAt.while
            if (
                value &&
                typeof value === 'object' &&
                value.constructor.name === 'StandaloneEditor'
            ) {
                return value;
            }
        });
    }

    public getOutputValue() {
        const { PANEL_OUTPUT = '' } = this.builtinService.getConstants();
        const outputPanel = this.getPanel(PANEL_OUTPUT);
        return outputPanel?.data || '';
    }

    /**
     * Onyl support to update several properties
     */
    public updateOutput(data: Partial<IPanelItem>): IPanelItem | undefined {
        const { title, name, sortIndex, active, closable, editable } = data;
        return this.updateOutputProperty({
            title,
            name,
            sortIndex,
            active,
            closable,
            editable,
        });
    }

    public appendOutput(content: string): void {
        const outputValue = this.getOutputValue();
        this.updateOutputProperty({
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

    public remove(id: UniqueId): IPanelItem | undefined {
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

    public onTabChange(callback: (key: UniqueId) => void) {
        this.subscribe(PanelEvent.onTabChange, callback);
    }

    public onToolbarClick(
        callback: (e: React.MouseEvent, item: IActionBarItemProps) => void
    ) {
        this.subscribe(PanelEvent.onToolbarClick, callback);
    }

    public onTabClose(callback: (key: UniqueId) => void) {
        this.subscribe(PanelEvent.onTabClose, callback);
    }
}
