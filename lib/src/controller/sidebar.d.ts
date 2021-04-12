import { Controller } from 'mo/react/controller';
export interface ISideBarController {
}
export declare class SidebarController extends Controller implements ISideBarController {
    constructor();
    readonly onClick: (event: React.MouseEvent) => void;
}
