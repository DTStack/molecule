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
}

@singleton()
export class LayoutService extends Component<any> implements ILayoutService {
    protected state: ILayout;
    constructor() {
        super();
        this.state = container.resolve(LayoutModel);
    }
    public setMenuBarHidden(): void {
        const wasHidden = this.state.menuBar.hidden;
        this.setState({ menuBar: { hidden: !wasHidden } });
    }
    public setPanelHidden(): void {
        const wasHidden = this.state.panel.hidden;
        this.setState({ panel: { hidden: !wasHidden } });
    }
    public setSideBarHidden(): void {
        const wasHidden = this.state.sideBar.hidden;
        this.setState({ sideBar: { hidden: !wasHidden } });
    }
    public setActivityBarHidden(): void {
        const wasHidden = this.state.activityBar.hidden;
        this.setState({ activityBar: { hidden: !wasHidden } });
    }
    public setStatusBarHidden(): void {
        const wasHidden = this.state.statusBar.hidden;
        this.setState({ statusBar: { hidden: !wasHidden } });
    }
    public togglePanelMaximized(): void {
        const panelViewState = this.state.panel;
        this.setState({
            panel: {
                ...panelViewState,
                panelMaximized: !panelViewState.panelMaximized,
            },
        });
    }
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
