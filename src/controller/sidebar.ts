import { Controller } from 'mo/react/controller';
import { sidebarService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface ISideBarController {}

@singleton()
export class SidebarController
    extends Controller
    implements ISideBarController {
    constructor() {
        super();
    }

    public readonly onClick = (event: React.MouseEvent) => {
        console.log('onClick:', sidebarService);
    };
}
