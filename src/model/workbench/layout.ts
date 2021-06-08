export interface ILayout {
    splitPanePos: string[];
    horizontalSplitPanePos: string[];
}

export class LayoutModel implements ILayout {
    public splitPanePos: string[] = ['300px', 'auto'];
    public horizontalSplitPanePos: string[] = ['70%', 'auto'];
}
