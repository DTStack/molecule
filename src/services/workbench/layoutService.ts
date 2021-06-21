import { container, singleton } from 'tsyringe';
import { Component } from 'mo/react';
import { ID_APP } from 'mo/common/id';
import { ILayout, Position, LayoutModel } from 'mo/model/workbench/layout';

export interface ILayoutService extends Component<ILayout> {
    setMenuBarHidden(): void;
    setSideBarHidden(): void;
    setPanelHidden(): void;
    setActivityBarHidden(): void;
    setStatusBarHidden(): void;
    setPaneSize(splitPanePos: string[]): void;
    setHorizontalPaneSize(horizontalSplitPanePos: string[]): void;
    setSideBarPosition(position: Position): void;
    getSideBarPosition(): Position;
    togglePanelMaximized(): void;
    isPanelMaximized(): boolean | undefined;
    container: HTMLElement | null;
}

@singleton()
export class LayoutService extends Component<any> implements ILayoutService {
    protected state: ILayout;
    private _container!: HTMLElement | null;
    constructor() {
        super();
        this.state = container.resolve(LayoutModel);
    }

    public get container() {
        if (!this.container) {
            this._container = document.getElementById(ID_APP) || document.body;
        }
        return this._container;
    }
    /**
     * Set menubar hidden or not
     */
    public setMenuBarHidden(): void {
        const { menuBar } = this.state;
        const wasHidden = menuBar?.hidden;
        this.setState({ menuBar: { ...menuBar, hidden: !wasHidden } });
    }
    /**
     * Set panel hidden or not
     */
    public setPanelHidden(): void {
        const { panel } = this.state;
        const wasHidden = panel?.hidden;
        this.setState({ panel: { ...panel, hidden: !wasHidden } });
    }
    /**
     * Set sidebar hidden or not
     */
    public setSideBarHidden(): void {
        const { sideBar } = this.state;
        const wasHidden = sideBar.hidden;
        this.setState({ sideBar: { ...sideBar, hidden: !wasHidden } });
    }
    /**
     * Set activity bar hidden or not
     */
    public setActivityBarHidden(): void {
        const { activityBar } = this.state;
        const wasHidden = activityBar.hidden;
        this.setState({ activityBar: { ...activityBar, hidden: !wasHidden } });
    }
    /**
     * Set status bar hidden or not
     */
    public setStatusBarHidden(): void {
        const { statusBar } = this.state;
        const wasHidden = statusBar.hidden;
        this.setState({ statusBar: { ...statusBar, hidden: !wasHidden } });
    }

    public setSideBarPosition(newPosition: Position): void {
        const { sideBar } = this.state;
        const position = sideBar?.position;
        const wasHidden = sideBar.hidden;
        const newPositionValue =
            newPosition === Position.LEFT ? 'left' : 'right';
        const oldPositionValue = position === Position.LEFT ? 'left' : 'right';
        if (newPositionValue !== oldPositionValue && !wasHidden) {
            this.setState({
                sidebar: { ...sideBar, hidden: !wasHidden },
            });
        }
    }

    public getSideBarPosition(): Position {
        return this.state.sideBar.position!;
    }
    /**
     * Toggle Panel Maximized
     */
    public togglePanelMaximized(): void {
        const panelViewState = this.state.panel;
        this.setState({
            panel: {
                ...panelViewState,
                panelMaximized: !panelViewState.panelMaximized,
            },
        });
    }
    /**
     * Returns true if the panel is maximized.
     */
    public isPanelMaximized(): boolean {
        return this.state.panel?.panelMaximized!;
    }
    public setPaneSize(splitPanePos: string[]): void {
        this.setState({ splitPanePos });
    }
    public setHorizontalPaneSize(horizontalSplitPanePos: string[]): void {
        this.setState({ horizontalSplitPanePos });
    }
}
