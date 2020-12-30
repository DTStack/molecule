import { Controller } from 'mo/react/controller';
// import { panelService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface IPanelController {}

@singleton()
export class PanelController extends Controller implements IPanelController {
    constructor() {
        super();
    }

    public readonly onClick = (event: React.MouseEvent) => {
        // console.log('onClick:', panelService);
    };
}
