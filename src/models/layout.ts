import { Direction, type WithHiddenProperty } from 'mo/types';

export enum Position {
    left = 'left',
    right = 'right',
}
export type PositionLiteral = keyof typeof Position;

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
    sidebar: WithHiddenProperty<{ position: PositionLiteral }>;
    menuBar: WithHiddenProperty<void>;
    groupSplitPos: (number | string)[];
    editorGroupDirection: Direction;
}

export class LayoutModel implements ILayout {
    constructor(
        public splitPanePos: (number | string)[] = [300, 'auto', 300],
        public horizontalSplitPanePos = ['auto', '230px'],
        public groupSplitPos = [],
        public activityBar = { hidden: false },
        public auxiliaryBar = { hidden: true },
        public panel = { hidden: false, panelMaximized: false },
        public statusBar = { hidden: false },
        public sidebar = { hidden: false, position: Position.left },
        public menuBar = { hidden: false },
        public editorGroupDirection = Direction.vertical
    ) {}
}
