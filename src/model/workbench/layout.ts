export enum Position {
    left = 'left',
    right = 'right',
}
export interface ViewVisibility {
    hidden: boolean;
}
export interface IPanelViewState extends ViewVisibility {
    panelMaximized: boolean;
}

export interface ISidebarViewState extends ViewVisibility {
    position: keyof typeof Position;
}
export interface ILayout {
    splitPanePos: (number | string)[];
    horizontalSplitPanePos: (number | string)[];
    activityBar: ViewVisibility;
    panel: IPanelViewState;
    statusBar: ViewVisibility;
    sidebar: ISidebarViewState;
    menuBar: ViewVisibility;
}

export class LayoutModel implements ILayout {
    public splitPanePos: (number | string)[];
    public horizontalSplitPanePos: (number | string)[];
    public activityBar: ViewVisibility;
    public panel: IPanelViewState;
    public statusBar: ViewVisibility;
    public sidebar: ISidebarViewState;
    public menuBar: ViewVisibility;
    constructor(
        splitPanePos: string[] = ['300px', 'auto'],
        horizontalSplitPanePos = ['70%', 'auto'],
        activityBar = { hidden: false },
        panel = { hidden: false, panelMaximized: false },
        statusBar = { hidden: false },
        sidebar = { hidden: false, position: Position.left },
        menuBar = { hidden: false }
    ) {
        this.splitPanePos = splitPanePos;
        this.horizontalSplitPanePos = horizontalSplitPanePos;
        this.activityBar = activityBar;
        this.panel = panel;
        this.statusBar = statusBar;
        this.sidebar = sidebar;
        this.menuBar = menuBar;
    }
}
