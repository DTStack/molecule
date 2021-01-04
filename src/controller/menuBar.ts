import { IActivityBarItem, IMenuBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { menuBarService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface IMenuBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
}

@singleton()
export class MenuBarController
    extends Controller
    implements IMenuBarController {
    constructor() {
        super();
    }

    public readonly onClick = (event: React.MouseEvent, item: IMenuBarItem) => {
        console.log('onClick:', menuBarService);
    };
}
