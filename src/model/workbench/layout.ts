export enum Position {
    left = 'left',
    right = 'right',
}

export enum MenuBarMode {
    horizontal = 'horizontal',
    vertical = 'vertical',
}

export enum LayoutEvents {
    OnWorkbenchDidMount = 'workbench.didMount',
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

export interface IMenuBarViewState extends ViewVisibility {
    mode: keyof typeof MenuBarMode;
}

export interface ILayout {
    splitPanePos: (number | string)[];
    horizontalSplitPanePos: (number | string)[];
    activityBar: ViewVisibility;
    auxiliaryBar: ViewVisibility;
    panel: IPanelViewState;
    statusBar: ViewVisibility;
    sidebar: ISidebarViewState;
    menuBar: IMenuBarViewState;
    groupSplitPos: (number | string)[];
    editorGroupDirection: MenuBarMode;
}

export class LayoutModel implements ILayout {
    public splitPanePos: (number | string)[];
    public horizontalSplitPanePos: (number | string)[];
    public groupSplitPos: (number | string)[];
    public activityBar: ViewVisibility;
    public auxiliaryBar: ViewVisibility;
    public panel: IPanelViewState;
    public statusBar: ViewVisibility;
    public sidebar: ISidebarViewState;
    public menuBar: IMenuBarViewState;
    public editorGroupDirection: MenuBarMode;
    constructor(
        splitPanePos: (number | string)[] = [300, 'auto', 300],
        horizontalSplitPanePos = ['auto', '150px'],
        groupSplitPos = [],
        activityBar = { hidden: false },
        auxiliaryBar = { hidden: true },
        panel = { hidden: false, panelMaximized: false },
        statusBar = { hidden: false },
        sidebar = { hidden: false, position: Position.left },
        menuBar = { hidden: false, mode: MenuBarMode.vertical },
        editorGroupDirection = MenuBarMode.vertical
    ) {
        this.splitPanePos = splitPanePos;
        this.horizontalSplitPanePos = horizontalSplitPanePos;
        this.groupSplitPos = groupSplitPos;
        this.activityBar = activityBar;
        this.auxiliaryBar = auxiliaryBar;
        this.panel = panel;
        this.statusBar = statusBar;
        this.sidebar = sidebar;
        this.menuBar = menuBar;
        this.editorGroupDirection = editorGroupDirection;
    }
}
