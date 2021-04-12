import * as React from 'react';
import { IStatusBarItem } from 'mo';
import { Controller } from 'mo/react/controller';
export interface IStatusBarController {
    onClick?: (e: React.MouseEvent, item: IStatusBarItem) => void;
}
export declare const editorLineColumnItem: IStatusBarItem;
export declare class StatusBarController extends Controller implements IStatusBarController {
    constructor();
    onClick: (e: React.MouseEvent, item: IStatusBarItem) => void;
    notify(): void;
    private initStatusBar;
}
