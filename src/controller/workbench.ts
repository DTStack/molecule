import { Controller } from 'mo/react/controller';
import { singleton } from 'tsyringe';

export interface IWorkbenchController {
    readonly splitPanePos: string[];
    onPaneSizeChange?: (newSize: number) => void;
}

@singleton()
export class WorkbenchController
    extends Controller
    implements IWorkbenchController {
    // Group Pos locate here temporary, we can move it to state or localStorage in future.
    public splitPanePos: string[] = ['300px', 'auto'];

    constructor() {
        super();
    }

    public onPaneSizeChange = (newSize) => {
        this.splitPanePos = newSize;
    };
}
