import { Controller } from 'mo/react/controller';
export interface IWorkbenchController {
    readonly splitPanePos: string[];
    onPaneSizeChange?: (newSize: number) => void;
}
export declare class WorkbenchController extends Controller implements IWorkbenchController {
    splitPanePos: string[];
    constructor();
    onPaneSizeChange: (newSize: any) => void;
}
