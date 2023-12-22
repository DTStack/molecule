import { Direction, DirectionLiteral, type WithHiddenProperty } from 'mo/types';

export enum LayoutEvents {
    OnWorkbenchDidMount = 'workbench.didMount',
}

type PosType = string | number;

export class LayoutModel {
    constructor(
        public splitPanePos: PosType[] = [300, 'auto', 300],
        public horizontalSplitPanePos: PosType[] = ['auto', '230px'],
        public groupSplitPos: PosType[] = [],
        public activityBar: WithHiddenProperty<void> = { hidden: false },
        public auxiliaryBar: WithHiddenProperty<void> = { hidden: true },
        public panel: WithHiddenProperty<{ panelMaximized: boolean }> = {
            hidden: false,
            panelMaximized: false,
        },
        public statusBar: WithHiddenProperty<void> = { hidden: false },
        public sidebar: WithHiddenProperty<void> = { hidden: false },
        public menuBar: WithHiddenProperty<void> = { hidden: false },
        public notification: WithHiddenProperty<void> = { hidden: true },
        public editorDirection: DirectionLiteral = Direction.vertical
    ) {}
}
