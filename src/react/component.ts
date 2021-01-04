import { EventEmitter, GlobalEvent } from 'mo/common/event';
import logger from 'mo/common/logger';

enum componentEvents {
    Update = 'Component.Update',
}

export interface IComponent<S = any> {
    setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
    render(nextState?: S): void;
    onUpdateState(callback: (prevState: S, nextState: S) => void): void;
    getState(): S;
    /**
     * Subscribe the component event
     * @param name
     * @param callback
     */
    onEvent(name, callback): void;
}

export abstract class Component<S = any>
    extends GlobalEvent
    implements IComponent<S> {
    protected abstract state: S;
    private _event: EventEmitter;

    constructor() {
        super();
        this._event = new EventEmitter();
    }

    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     */
    public setState(
        values: S,
        callback?: (prevState: S, nextState: S) => void
    ) {
        const nextState = Object.assign(this.state, values);
        this.render(nextState);
        callback?.(this.state, nextState);
        logger.info(`Component.setState()`, this.state, nextState);
    }

    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    public render(nextState?: S) {
        this._event.emit(componentEvents.Update, this.state, nextState);
    }

    public onUpdateState(callback: (prevState: S, nextState: S) => void) {
        this._event.subscribe(componentEvents.Update, callback);
    }

    public getState(): S {
        return this.state;
    }

    public onEvent(name, callback) {
        this.subscribe(name, callback);
    }
}
