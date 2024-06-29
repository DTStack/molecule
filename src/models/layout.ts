import { Direction, DirectionLiteral, type PosType, type WithHidden } from 'mo/types';

export enum LayoutEvents {
    OnWorkbenchDidMount = 'workbench.didMount',
}

export class LayoutModel {
    constructor(
        public splitPanePos: PosType[] = [300, 'auto', 300],
        public horizontalSplitPanePos: PosType[] = ['auto', 230],
        public groupSplitPos: number[] = [],
        public activityBar: WithHidden<void> = { hidden: false },
        public auxiliaryBar: WithHidden<void> = { hidden: true },
        public panel: WithHidden<{ panelMaximized: boolean }> = {
            hidden: false,
            panelMaximized: false,
        },
        public statusBar: WithHidden<void> = { hidden: false },
        public sidebar: WithHidden<void> = { hidden: false },
        public menuBar: WithHidden<void> = { hidden: false },
        public notification: WithHidden<void> = { hidden: true },
        public editorDirection: DirectionLiteral = Direction.vertical
    ) {}
}
