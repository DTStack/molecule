import { WithHiddenProperty } from 'mo/types';

export enum Position {
    left = 'left',
    right = 'right',
}
export type PositionStr = keyof typeof Position;

export enum MenuBarMode {
    horizontal = 'horizontal',
    vertical = 'vertical',
}
export type MenuBarModeStr = keyof typeof MenuBarMode;

export enum LayoutEvents {
    OnWorkbenchDidMount = 'workbench.didMount',
}

export interface ILayout {
    splitPanePos: (number | string)[];
    horizontalSplitPanePos: (number | string)[];
    activityBar: WithHiddenProperty<void>;
    auxiliaryBar: WithHiddenProperty<void>;
    panel: WithHiddenProperty<{ panelMaximized: boolean }>;
    statusBar: WithHiddenProperty<void>;
    sidebar: WithHiddenProperty<{ position: PositionStr }>;
    menuBar: WithHiddenProperty<{ mode: MenuBarModeStr }>;
    groupSplitPos: (number | string)[];
    editorGroupDirection: MenuBarMode;
}

export class LayoutModel implements ILayout {
    constructor(
        public splitPanePos: (number | string)[] = [300, 'auto', 300],
        public horizontalSplitPanePos = ['auto', '150px'],
        public groupSplitPos = [],
        public activityBar = { hidden: false },
        public auxiliaryBar = { hidden: true },
        public panel = { hidden: false, panelMaximized: false },
        public statusBar = { hidden: false },
        public sidebar = { hidden: false, position: Position.left },
        public menuBar = { hidden: false, mode: MenuBarMode.vertical },
        public editorGroupDirection = MenuBarMode.vertical
    ) {}
}
