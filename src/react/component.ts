import { GlobalEvent } from 'mo/common/event';
import logger from 'mo/common/logger';

export abstract class Component<S> extends GlobalEvent {
    protected abstract state: S;

    public updateState(nextState: S) {
        Object.assign(this.state, nextState);
        logger.info(`Component.updateState()`, nextState, this.state);
    }

    public getState(): S {
        return this.state;
    }
}
