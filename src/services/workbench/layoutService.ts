import { container, singleton } from 'tsyringe';
import { Component } from 'mo/react';
import { ILayout, LayoutModel } from 'mo/model/workbench/layout';

export interface ILayoutService extends Component<ILayout> {
    setMenuBarHidden(): void;
    setSideBarHidden(): void;
    setPanelHidden(): void;
    setActivityBarHidden(): void;
    setStatusBarHidden(): void;
    setPaneSize(splitPanePos: string[]): void;
    setHorizontalPaneSize(horizontalSplitPanePos: string[]): void;
    togglePanelMaximized(): void;
    isPanelMaximized(): boolean | undefined;
    /**
     * Returns the workbench application rootNode, if there is one.
     */
    getContainer(domId: string): HTMLElement | undefined;
}

@singleton()
export class LayoutService extends Component<any> implements ILayoutService {
    protected state: ILayout;
    constructor() {
        super();
        this.state = container.resolve(LayoutModel);
    }

    public getContainer(domId) {
        return document.getElementById(domId) || document.body;
    }
    /**
     * Set menubar hidden or not
     */
    public setMenuBarHidden(): void {
        const wasHidden = this.state.menuBar.hidden;
        this.setState({ menuBar: { hidden: !wasHidden } });
    }
    /**
     * Set panel hidden or not
     */
    public setPanelHidden(): void {
        const wasHidden = this.state.panel.hidden;
        this.setState({ panel: { hidden: !wasHidden } });
    }
    /**
     * Set sidebar hidden or not
     */
    public setSideBarHidden(): void {
        const wasHidden = this.state.sideBar.hidden;
        this.setState({ sideBar: { hidden: !wasHidden } });
    }
    /**
     * Set activity bar hidden or not
     */
    public setActivityBarHidden(): void {
        const wasHidden = this.state.activityBar.hidden;
        this.setState({ activityBar: { hidden: !wasHidden } });
    }
    /**
     * Set status bar hidden or not
     */
    public setStatusBarHidden(): void {
        const wasHidden = this.state.statusBar.hidden;
        this.setState({ statusBar: { hidden: !wasHidden } });
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
