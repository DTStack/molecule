import { BaseController } from 'mo/glue';
import type { LayoutService } from 'mo/services/layout';
import type { PosType } from 'mo/types';
import { inject, injectable } from 'tsyringe';

export interface ILayoutController {
    onSideChange: (pos: PosType[]) => void;
    onEditorChange: (pos: PosType[]) => void;
}

@injectable()
export class LayoutController extends BaseController implements ILayoutController {
    constructor(@inject('layout') private layout: LayoutService) {
        super();
    }

    public onSideChange = (pos: PosType[]) => {
        this.layout.setPaneSize(pos);
    };

    public onEditorChange = (pos: PosType[]) => {
        this.layout.setHorizontalPaneSize(pos);
    };
}
