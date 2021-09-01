import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import { ILayoutService, LayoutService } from 'mo/services';

export interface ILayoutController {
    onPaneSizeChange?: (splitPanePos: string[]) => void;
    onHorizontalPaneSizeChange?: (horizontalSplitPanePos: string[]) => void;
}

@singleton()
export class LayoutController extends Controller implements ILayoutController {
    private readonly layoutService: ILayoutService;

    constructor() {
        super();
        this.layoutService = container.resolve(LayoutService);
    }

    public onPaneSizeChange = (splitPanePos: string[]) => {
        this.layoutService.setPaneSize(splitPanePos);
    };

    public onHorizontalPaneSizeChange = (horizontalSplitPanePos: string[]) => {
        this.layoutService.setHorizontalPaneSize(horizontalSplitPanePos);
    };
}
