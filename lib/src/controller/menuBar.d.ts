/// <reference types="react" />
import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
export interface IMenuBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
}
export declare class MenuBarController extends Controller implements IMenuBarController {
    constructor();
    readonly onClick: (event: React.MouseEvent, item: IMenuBarItem) => void;
    undo: () => void;
    redo: () => void;
    updateActivityBar: () => void;
    updateMenuBar: () => void;
    updateStatusBar: () => void;
    updateSideBar: () => void;
}
