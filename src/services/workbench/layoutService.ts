import { horizontalSplitPanePos } from './../../model/layout';
import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Component } from 'mo/react';
import { ILayout, LayoutModel } from 'mo/model/workbench/layout';

export interface ILayoutService extends Component<ILayout> {
    setEditorHidden(hidden: boolean): void;
    setSideBarHidden(hidden: boolean): void;
    setPanelHidden(hidden: boolean): void;
    setActivityBarHidden(hidden: boolean): void;
    setStatusBarHidden(hidden: boolean): void;
    setPaneSize(splitPanePos: number | string): void;
    setHorizontalPaneSize(horizontalSplitPanePos: number | string): void;
}

@singleton()
export class LayoutService extends Component<any> implements ILayoutService {
    protected state: ILayout;
    constructor() {
        super();
        this.state = container.resolve(LayoutModel);
    }
    public setEditorHidden(): void {}
    public setPanelHidden(): void {}
    public setSideBarHidden(): void {}
    public setActivityBarHidden(): void {}
    public setStatusBarHidden(): void {}
    public setPaneSize(splitPanePos: number | string): void {
        this.setState({ splitPanePos });
    }
    public setHorizontalPaneSize(
        horizontalSplitPanePos: number | string
    ): void {
        console.log(horizontalSplitPanePos);
        this.setState({ horizontalSplitPanePos });
    }
}
