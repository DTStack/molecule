/// <reference types="react" />
import { IActivityBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
export interface IActivityBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
}
export declare class ActivityBarController extends Controller implements IActivityBarController {
    constructor();
    readonly onSelect: (key: string, item?: IActivityBarItem | undefined) => void;
    readonly onClick: (event: React.MouseEvent, item: IActivityBarItem) => void;
}
