import { container, singleton } from 'tsyringe';
import { Component } from 'mo/react';
import { ID_APP } from 'mo/common/id';
import { ILayout, Position, LayoutModel } from 'mo/model/workbench/layout';

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
    toggleSideBarVisibility(): boolean;
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
    setPaneSize(splitPanePos: string[]): void;
    /**
     * Set the sizes between the editor and the panel
     * @param horizontalSplitPanePos
     */
    setHorizontalPaneSize(horizontalSplitPanePos: string[]): void;
    /**
     * Set the position of the side bar, default is in `left`
     * @param position
     * @unachieved
     */
    setSideBarPosition(position: keyof typeof Position): void;
    /**
     * Reset all layout data as default value
     */
    reset(): void;
}

@singleton()
export class LayoutService
    extends Component<ILayout>
    implements ILayoutService {
    protected state: ILayout;
    private _container!: HTMLElement | null;
    constructor() {
        super();
        this.state = container.resolve(LayoutModel);
    }

    public get container() {
        if (!this._container) {
            this._container = document.getElementById(ID_APP) || document.body;
        }
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

    public toggleSideBarVisibility(): boolean {
        const { sideBar } = this.state;
        const wasHidden = sideBar.hidden;
        this.setState({ sideBar: { ...sideBar, hidden: !wasHidden } });
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
        const { sideBar } = this.state;
        const { position: prePos } = sideBar;
        if (prePos !== position) {
            this.setState({
                sideBar: { position: position, hidden: false },
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

    public setPaneSize(splitPanePos: string[]): void {
        this.setState({ splitPanePos });
    }
    public setHorizontalPaneSize(horizontalSplitPanePos: string[]): void {
        this.setState({ horizontalSplitPanePos });
    }

    public reset() {
        this.setState({
            splitPanePos: ['300px', 'auto'],
            horizontalSplitPanePos: ['70%', 'auto'],
            activityBar: { hidden: false },
            panel: { hidden: false, panelMaximized: false },
            statusBar: { hidden: false },
            sideBar: { hidden: false, position: Position.left },
            menuBar: { hidden: false },
        });
    }
}
