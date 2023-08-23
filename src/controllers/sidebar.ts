import { BaseController } from 'mo/glue';

export interface ISideBarController extends BaseController {}

export class SidebarController extends BaseController implements ISideBarController {
    constructor() {
        super();
    }
}
