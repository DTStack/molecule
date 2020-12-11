import { singleton, container } from 'tsyringe';
import { Component } from 'mo/react/component';
import {
    ActivityBarModel,
    ActivityBarEvent,
    IActivityBar,
    IActivityBarItem,
} from 'mo/model/workbench/activityBar';

export interface IActivityBarService extends Component<IActivityBar> {
    reset(): void;
    push(data: IActivityBarItem): void;
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
        this.updateState({
            data: [],
            selected: '',
        });
    }

    public push(data: IActivityBarItem) {
        const original = this.state.data;
        original?.push(data);
        console.log('ac push:', original);
    }

    public remove(index: number) {
        if (this.state.data) {
            const data = this.state.data;
            data.splice(index, 1);
        }
    }

    public setRenderer(renderer: () => React.ReactNode) {
        this.updateState({
            render: renderer,
        });
    }

    public onClick(callback: Function) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }

    public onSelect(
        callback: (key: React.MouseEvent, item: IActivityBarItem) => void
    ) {
        this.subscribe(ActivityBarEvent.Selected, (key, data) => {
            const item: IActivityBarItem = data;
            if (item.type !== 'global') {
                this.updateState({
                    selected: key,
                });
            }
            callback?.(key, item);
        });
    }
}
