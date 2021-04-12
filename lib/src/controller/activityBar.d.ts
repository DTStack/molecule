/// <reference types="react" />
import { IMenuItem } from 'mo/components/menu';
import { IActivityBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
export interface IActivityBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
    onContextMenuClick?: (e: React.MouseEvent, item: IMenuItem | undefined) => void;
}
export declare class ActivityBarController extends Controller implements IActivityBarController {
    constructor();
    readonly onSelect: (key: string, item?: IActivityBarItem | undefined) => void;
    readonly onClick: (event: React.MouseEvent, item: IActivityBarItem) => void;
    private gotoQuickCommand;
    private onSelectColorTheme;
    private gotoSettings;
    readonly onContextMenuClick: (e: React.MouseEvent, item: IMenuItem | undefined) => void;
}
