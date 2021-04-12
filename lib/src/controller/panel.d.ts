import * as React from 'react';
import { IActionBarItem } from 'mo/components/actionBar';
import { Controller } from 'mo/react/controller';
export interface IPanelController {
    onTabChange(key: string | undefined): void;
    onToolbarClick(e: React.MouseEvent, item: IActionBarItem): void;
}
export declare class PanelController extends Controller implements IPanelController {
    constructor();
    readonly onTabChange: (key: string | undefined) => void;
    readonly onToolbarClick: (e: React.MouseEvent, item: IActionBarItem) => void;
}
