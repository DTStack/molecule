import { BaseController } from 'mo/glue';
import type { LayoutService } from 'mo/services/layout';
import { inject, injectable } from 'tsyringe';

export interface ILayoutController {
    onSideChange: (pos: number[]) => void;
    onEditorChange: (pos: number[]) => void;
}

@injectable()
export class LayoutController extends BaseController implements ILayoutController {
    constructor(@inject('layout') private layout: LayoutService) {
        super();
    }

    public onSideChange = (pos: number[]) => {
        const { sidebar, splitPanePos, auxiliaryBar } = this.layout.getState();
        const nextPos: number[] = [];
        nextPos[0] = sidebar.hidden ? Number(splitPanePos[0]) : pos[0];
        nextPos[2] = auxiliaryBar.hidden ? Number(splitPanePos[2]) : pos[2];

        nextPos[1] = pos.reduce((acc, cur) => acc + cur, 0) - nextPos[0] - nextPos[2];

        this.layout.setPaneSize(nextPos);
    };

    public onEditorChange = (pos: number[]) => {
        this.layout.setHorizontalPaneSize(pos);
    };
}
