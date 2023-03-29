import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { Controller } from 'mo/react/controller';
import { ILayoutService, LayoutService } from 'mo/services';
import { LayoutEvents } from 'mo/model/workbench/layout';

export interface ILayoutController extends Partial<Controller> {
    onWorkbenchDidMount?: () => void;
    onPaneSizeChange?: (splitPanePos: number[]) => void;
    onHorizontalPaneSizeChange?: (horizontalSplitPanePos: number[]) => void;
}

@singleton()
export class LayoutController extends Controller implements ILayoutController {
    private readonly layoutService: ILayoutService;

    constructor() {
        super();
        this.layoutService = container.resolve(LayoutService);
    }

    public initView() {}

    public onPaneSizeChange = (splitPanePos: number[]) => {
        this.layoutService.setPaneSize(splitPanePos);
    };

    public onHorizontalPaneSizeChange = (horizontalSplitPanePos: number[]) => {
        this.layoutService.setHorizontalPaneSize(horizontalSplitPanePos);
    };

    public onWorkbenchDidMount = () => {
        this.layoutService.emit(LayoutEvents.OnWorkbenchDidMount);
    };
}
