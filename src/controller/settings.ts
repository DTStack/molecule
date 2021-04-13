import { Controller } from 'mo/react/controller';
// import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface ISettingsController {}

@singleton()
export class SettingsController
    extends Controller
    implements ISettingsController {
    constructor() {
        super();
    }

    public readonly onClick = (event: React.MouseEvent) => {
        // console.log('onClick:', panelService);
    };
}
