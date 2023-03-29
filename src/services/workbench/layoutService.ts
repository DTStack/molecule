import { container, singleton } from 'tsyringe';
import { Component } from 'mo/react';
import { ID_APP } from 'mo/common/id';
import {
    ILayout,
    Position,
    LayoutModel,
    MenuBarMode,
    LayoutEvents,
} from 'mo/model/workbench/layout';
import { MenuBarEvent } from 'mo/model/workbench/menuBar';

export interface ILayoutService extends Component<ILayout> {
    /**
     * Get the container of the molecule
     */
    readonly container: HTMLElement | null;
    /**
     * Toggle the visibility of menu bar, returns the status of menu bar's `hidden`
     */
    toggleMenuBarVisibility(): boolean;
    /**
     * Toggle the visibility of side bar, returns the status of side bar's `hidden`
     */
    toggleSidebarVisibility(): boolean;
    /**
     * Toggle the visibility of the panel, returns the status of panel's `hidden`
     */
    togglePanelVisibility(): boolean;
    /**
     * Toggle the visibility of the activity bar, returns the status of activity bar's `hidden`
     */
    toggleActivityBarVisibility(): boolean;
    /**
     * Toggle the visibility of the status bar, returns the status of status bar's `hidden`
     */
    toggleStatusBarVisibility(): boolean;
    /**
     * Toggle the maximized status of the panel, returns the status of maximized panel
     */
    togglePanelMaximized(): boolean;
    /**
     * Set the sizes between the side bar and main content area
     * @param splitPanePos
     */
    setPaneSize(splitPanePos: (number | string)[]): void;
    /**
     * Set the sizes between the editor and the panel
     * @param horizontalSplitPanePos
     */
    setHorizontalPaneSize(horizontalSplitPanePos: (number | string)[]): void;
    /**
     * Set the position of the side bar, default is in `left`
     * @param position
     * @unachieved
     */
    setSideBarPosition(position: keyof typeof Position): void;
    /**
     * Set the sizes between editor groups
     * @param groupSplitPos
     */
    setGroupSplitSize(groupSplitPos: (number | string)[]): void;
    /**
     * Set the mode of the MenuBar, default is `vertical`
     * @param mode
     * @unachieved
     */
    setMenuBarMode(mode: keyof typeof MenuBarMode): void;
    /**
     * Get the mode of the MenuBar
     */
    getMenuBarMode(): keyof typeof MenuBarMode;
    /**
     * Set the direction of editor group,default is `vertical`
     */
    setEditorGroupDirection(
        direction: MenuBarMode | ((prev: MenuBarMode) => MenuBarMode)
    ): void;
    /**
     * Set the visibility of auxiliary bar
     *
     * Returns the next state of hidden
     */
    setAuxiliaryBar(
        hidden: boolean | ((preState: boolean) => boolean)
    ): boolean;
    /**
     * Reset all layout data as default value
     */
    reset(): void;
    /**
     * Listen to the workbench did mount event
     * @param callback callback function
     */
    onWorkbenchDidMount(callback: Function): void;
}

@singleton()
export class LayoutService
    extends Component<ILayout>
    implements ILayoutService
{
    protected state: ILayout;
    private _container!: HTMLElement | null;
    constructor() {
        super();
        this.state = container.resolve(LayoutModel);
    }

    public onWorkbenchDidMount(callback: Function): void {
        this.subscribe(LayoutEvents.OnWorkbenchDidMount, callback);
    }

    public get container() {
        // Make sure to get the latest dom element.
        this._container = document.getElementById(ID_APP) || document.body;
        return this._container;
    }

    public toggleMenuBarVisibility(): boolean {
        const { menuBar } = this.state;
        const wasHidden = menuBar.hidden;
        this.setState({ menuBar: { ...menuBar, hidden: !wasHidden } });
        return !wasHidden;
    }

    public togglePanelVisibility(): boolean {
        const { panel } = this.state;
        const wasHidden = panel.hidden;
        this.setState({ panel: { ...panel, hidden: !wasHidden } });
        return !wasHidden;
    }

    public toggleSidebarVisibility(): boolean {
        const { sidebar } = this.state;
        const wasHidden = sidebar.hidden;
        this.setState({ sidebar: { ...sidebar, hidden: !wasHidden } });
        return !wasHidden;
    }

    public toggleActivityBarVisibility(): boolean {
        const { activityBar } = this.state;
        const wasHidden = activityBar.hidden;
        this.setState({ activityBar: { ...activityBar, hidden: !wasHidden } });
        return !wasHidden;
    }

    public toggleStatusBarVisibility(): boolean {
        const { statusBar } = this.state;
        const wasHidden = statusBar.hidden;
        this.setState({ statusBar: { ...statusBar, hidden: !wasHidden } });
        return !wasHidden;
    }

    public setSideBarPosition(position: keyof typeof Position): void {
        const { sidebar } = this.state;
        const { position: prePos } = sidebar;
        if (prePos !== position) {
            this.setState({
                sidebar: { position: position, hidden: false },
            });
        }
    }

    public togglePanelMaximized(): boolean {
        const panelViewState = this.state.panel;
        this.setState({
            panel: {
                ...panelViewState,
                panelMaximized: !panelViewState.panelMaximized,
            },
        });
        return !panelViewState.panelMaximized;
    }

    public setPaneSize(splitPanePos: (number | string)[]): void {
        this.setState({ splitPanePos });
    }
    public setHorizontalPaneSize(
        horizontalSplitPanePos: (number | string)[]
    ): void {
        this.setState({ horizontalSplitPanePos });
    }

    public setGroupSplitSize(groupSplitPos: (string | number)[]): void {
        this.setState({
            groupSplitPos,
        });
    }

    public setMenuBarMode(mode: keyof typeof MenuBarMode): void {
        const { menuBar } = this.state;
        const { mode: preMode } = menuBar;
        if (preMode !== mode) {
            this.setState({ menuBar: { ...menuBar, mode, hidden: false } });
            this.emit(MenuBarEvent.onChangeMode, mode);
        }
    }

    public getMenuBarMode(): keyof typeof MenuBarMode {
        const { menuBar } = this.state;
        return menuBar.mode;
    }

    public setEditorGroupDirection(
        direction: MenuBarMode | ((prev: MenuBarMode) => MenuBarMode)
    ) {
        if (typeof direction === 'function') {
            this.setState({
                editorGroupDirection: direction(
                    this.state.editorGroupDirection
                ),
            });
        } else {
            this.setState({
                editorGroupDirection: direction,
            });
        }
    }

    public setAuxiliaryBar(hidden: boolean | ((preState: boolean) => boolean)) {
        if (typeof hidden === 'boolean') {
            this.setState({
                auxiliaryBar: { hidden },
            });

            return hidden;
        }

        const nextHidden = hidden(this.state.auxiliaryBar.hidden);
        this.setState({
            auxiliaryBar: { hidden: nextHidden },
        });

        return nextHidden;
    }

    public reset() {
        this.setState({
            splitPanePos: ['300px', 'auto'],
            horizontalSplitPanePos: ['70%', 'auto'],
            activityBar: { hidden: false },
            panel: { hidden: false, panelMaximized: false },
            statusBar: { hidden: false },
            sidebar: { hidden: false, position: Position.left },
            menuBar: { hidden: false, mode: MenuBarMode.vertical },
        });
    }
}
