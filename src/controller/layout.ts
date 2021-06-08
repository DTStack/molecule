import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import { ILayoutService, LayoutService } from 'mo/services';

export interface ILayoutController {
    onPaneSizeChange: (splitPanePos: number | string) => void;
    onHorizontalPaneSizeChange: (
        horizontalSplitPanePos: number | string
    ) => void;
}

@singleton()
export class LayoutController extends Controller implements ILayoutController {
    private readonly layoutService: ILayoutService;

    constructor() {
        super();
        this.layoutService = container.resolve(LayoutService);
    }

    public onPaneSizeChange = (splitPanePos: number | string) => {
        console.log(splitPanePos);
        this.layoutService.setPaneSize(splitPanePos);
    };

    public onHorizontalPaneSizeChange = (
        horizontalSplitPanePos: number | string
    ) => {
        this.layoutService.setHorizontalPaneSize(horizontalSplitPanePos);
    };
}
