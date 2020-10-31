import { singleton, container } from 'tsyringe';
import { Component } from 'mo/services/react/component';
import { ActivityBarModel, IActivityBar, IActivityBarItem } from 'mo/model/activityBar';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    /**
     * Selected an activity bar
     */
    Selected = 'activityBar.selected',
    OnClick = 'activityBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'activityBar.data',
    ReRender = 'activityBar.reRender',
}

export interface IActivityBarService extends Component<IActivityBar> {
    reset(): void;
    push(data: IActivityBarItem): void;
    remove(index: number) : void;
}

@singleton()
export class ActivityBarService extends Component<IActivityBar> implements IActivityBarService {
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
        original.push(data);
        console.log('ac push:', original);
    }

    public remove(index: number) {
        if (this.state.data) {
            const data = this.state.data;
            data.splice(index, 1);
        }
    }

    public setRenderer(renderer: () => React.ReactNode) {
        // this.updateState(Object.assign(this.state, {
        //     render: renderer,
        // }));
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.render = renderer;
    }

    public onClick(callback: Function) {
        this.subscribe(ActivityBarEvent.OnClick, callback);
    }
}
