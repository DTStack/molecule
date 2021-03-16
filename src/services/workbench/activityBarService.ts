import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    ActivityBarModel,
    ActivityBarEvent,
    IActivityBar,
    IActivityBarItem,
} from 'mo/model/workbench/activityBar';

export interface IActivityBarService extends Component<IActivityBar> {
    showHide(): void;
    reset(): void;
    addBar(data: IActivityBarItem | IActivityBarItem[]): void;
    remove(index: number): void;
    /**
     * Add click event listener
     * @param callback
     */
    onClick(callback: (key: React.MouseEvent, item: IActivityBarItem) => void);
    onSelect(callback: (key: React.MouseEvent, item: IActivityBarItem) => void);
}

@singleton()
export class ActivityBarService
    extends Component<IActivityBar>
    implements IActivityBarService {
    protected state: IActivityBar;

    constructor() {
        super();
        this.state = container.resolve(ActivityBarModel);
    }

    public reset() {
        this.setState({
            data: [],
            selected: '',
            hidden: false,
        });
    }

    public showHide(): void {
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    public addBar(data: IActivityBarItem | IActivityBarItem[]) {
        let next = [...this.state.data!];
        if (Array.isArray(data)) {
            next = next?.concat(data);
        } else {
            next?.push(data);
        }
        this.setState({
            data: next,
        });
    }

    public remove(index: number) {
        if (this.state.data) {
            const data = this.state.data;
            data.splice(index, 1);
        }
    }

    // ====== The belows for subscribe activity bar events ======
    public onClick(callback: Function) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }

    public onSelect(
        callback: (key: React.MouseEvent, item: IActivityBarItem) => void
    ) {
        this.subscribe(ActivityBarEvent.Selected, callback);
    }
}
