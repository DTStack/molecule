import { Controller } from 'mo/react/controller';
import { container, singleton } from 'tsyringe';
import { ISidebarService, SidebarService } from 'mo/services';

export interface ISideBarController {}

@singleton()
export class SidebarController
    extends Controller
    implements ISideBarController {
    private readonly sidebarService: ISidebarService;

    constructor() {
        super();
        this.sidebarService = container.resolve(SidebarService);
    }

    public readonly onClick = (event: React.MouseEvent) => {
        console.log('onClick:', this.sidebarService);
    };
}
