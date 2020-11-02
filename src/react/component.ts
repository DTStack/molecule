import { GlobalEvent } from 'mo/common/event';

export abstract class Component<S> extends GlobalEvent {
    protected abstract state: S;

    public updateState(nextState: S) {
        Object.assign(this.state, nextState);
    }

    public getState(): S {
        return this.state;
    }
}
