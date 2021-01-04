import { ActivityBarEvent, IActivityBarItem } from 'mo/model';
import { Controller } from 'mo/react/controller';
import { activityBarService } from 'mo/services';
import { singleton } from 'tsyringe';

export interface IActivityBarController {
    onSelect?: (key: string, item?: IActivityBarItem) => void;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
}

@singleton()
export class ActivityBarController
    extends Controller
    implements IActivityBarController {
    constructor() {
        super();
    }

    public readonly onSelect = (
        key: string,
        item?: IActivityBarItem | undefined
    ) => {
        if (item && item.type !== 'global') {
            activityBarService.setState({
                selected: key,
            });
        }
        this.emit(ActivityBarEvent.Selected, key, item);
    };

    public readonly onClick = (
        event: React.MouseEvent,
        item: IActivityBarItem
    ) => {
        this.emit(ActivityBarEvent.OnClick, event, item);
    };
}
