import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';

export interface IWorkbenchController {
    readonly splitPanePos: string[];
    readonly horizontalSplitPanePos: string[];
    onPaneSizeChange?: (newSize: number) => void;
    onHorizontalPaneSizeChange?: (newSize: number) => void;
}
@singleton()
export class WorkbenchController
    extends Controller
    implements IWorkbenchController {
    // Group Pos locate here temporary, we can move it to state or localStorage in future.
    public splitPanePos: string[] = ['300px', 'auto'];
    public horizontalSplitPanePos: string[] = ['70%', 'auto'];

    constructor() {
        super();
    }

    public onPaneSizeChange = (newSize) => {
        this.splitPanePos = newSize;
    };

    public onHorizontalPaneSizeChange = (newSize) =>
        (this.horizontalSplitPanePos = newSize);
}
