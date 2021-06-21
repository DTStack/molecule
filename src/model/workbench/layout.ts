export enum Position {
    LEFT,
    RIGHT,
    BOTTOM,
}
export interface ViewVisibility {
    hidden?: boolean;
}

export interface IPanelViewState extends ViewVisibility {
    panelMaximized?: boolean;
}

export interface ISideBarViewState extends ViewVisibility {
    position?: Position;
}

export function positionToString(position: Position): string {
    switch (position) {
        case Position.LEFT:
            return 'left';
        case Position.RIGHT:
            return 'right';
        case Position.BOTTOM:
            return 'bottom';
        default:
            return 'bottom';
    }
}

const positionsByString: { [key: string]: Position } = {
    [positionToString(Position.LEFT)]: Position.LEFT,
    [positionToString(Position.RIGHT)]: Position.RIGHT,
    [positionToString(Position.BOTTOM)]: Position.BOTTOM,
};

export function positionFromString(str: string): Position {
    return positionsByString[str];
}
export interface ILayout {
    splitPanePos: string[];
    horizontalSplitPanePos: string[];
    activityBar: ViewVisibility;
    panel: IPanelViewState;
    statusBar: ViewVisibility;
    sideBar: ISideBarViewState;
    menuBar: ViewVisibility;
}

export class LayoutModel implements ILayout {
    public splitPanePos: string[];
    public horizontalSplitPanePos: string[];
    public activityBar: ViewVisibility;
    public panel: IPanelViewState;
    public statusBar: ViewVisibility;
    public sideBar: ISideBarViewState;
    public menuBar: ViewVisibility;
    constructor(
        splitPanePos: string[] = ['300px', 'auto'],
        horizontalSplitPanePos = ['70%', 'auto'],
        activityBar = { hidden: false },
        panel = { hidden: false, panelMaximized: false },
        statusBar = { hidden: false },
        sideBar = { hidden: false, position: Position.LEFT },
        menuBar = { hidden: false }
    ) {
        this.splitPanePos = splitPanePos;
        this.horizontalSplitPanePos = horizontalSplitPanePos;
        this.activityBar = activityBar;
        this.panel = panel;
        this.statusBar = statusBar;
        this.sideBar = sideBar;
        this.menuBar = menuBar;
    }
}
