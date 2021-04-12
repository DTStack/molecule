import { Controller } from 'mo/react/controller';
import * as React from 'react';
import { IActionBarItem } from 'mo/components/actionBar';
export interface IExplorerController {
    onHeaderToolbarClick?: (e: React.MouseEvent, item: IActionBarItem) => void;
}
export declare class ExplorerController extends Controller implements IExplorerController {
    constructor();
    private initView;
    private createFile;
    readonly onClick: (event: React.MouseEvent) => void;
    readonly onHeaderToolbarClick: (e: React.MouseEvent, item: IActionBarItem) => void;
}
