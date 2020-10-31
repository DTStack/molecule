import { BaseService } from 'mo/services/baseService';

export abstract class Component<S> extends BaseService {
    protected abstract state: S;

    public updateState(nextState: S) {
        Object.assign(this.state, nextState);
    }

    public getState(): S {
        return this.state;
    }
}
