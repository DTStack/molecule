import * as React from 'react';
import { Controller } from 'mo/react/controller';
import { IMenuItem } from 'mo/components/menu';
import { IActionBarItem } from 'mo/components/actionBar';
export interface IExplorerController {
    onActionsContextMenuClick?: (e: React.MouseEvent, item: IMenuItem | undefined) => void;
    onCollapseChange?: (keys: any) => void;
    onCollapseToolbar?: (item: any) => void;
    onClick?: (event: any, item: any) => void;
}
export declare class ExplorerController extends Controller implements IExplorerController {
    constructor();
    private initView;
    private createFileOrFolder;
    readonly onClick: (event: React.MouseEvent, item: IActionBarItem) => void;
    readonly onActionsContextMenuClick: (e: React.MouseEvent, item: IMenuItem | undefined) => void;
    readonly onCollapseChange: (keys: any) => void;
    readonly onCollapseToolbar: (item: any) => void;
    renderFolderTree(): JSX.Element;
}
