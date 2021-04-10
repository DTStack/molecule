import { Controller } from 'mo/react/controller';
import { IPanelService, PanelService } from 'mo/services';
import { container, singleton } from 'tsyringe';

export interface ISettingsController {}

@singleton()
export class SettingsController
    extends Controller
    implements ISettingsController {
    private readonly panelService: IPanelService;

    constructor() {
        super();
        this.panelService = container.resolve(PanelService);
    }

    public readonly onClick = (event: React.MouseEvent) => {
        console.log('onClick:', this.panelService);
    };
}
