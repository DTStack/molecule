import { cloneDeep } from 'lodash';
import { EventEmitter, GlobalEvent } from 'mo/common/event';

export enum ComponentEvents {
    Update = 'Component.Update',
}

export interface IComponent<S = any> {
    /**
     * Set the Component state
     * @param values The next values of state
     * @param callback calling after setState
     */
    setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
    /**
     * Trigger the Component update event
     * @param nextState
     */
    render(nextState?: S): void;
    /**
     * Listen to the Component state update event
     * @param callback
     */
    onUpdateState(callback: (prevState: S, nextState: S) => void): void;
    /**
     * Remove the Component update event listening, default is remove all,
     * if you want to remove one, you can pass the callback
     */
    removeOnUpdateState(callback?: Function): void;
    /**
     * Force to update the Component
     */
    forceUpdate(): void;
    /**
     * Get the Component state
     */
    getState(): S;
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
        values: Partial<S>,
        callback?: (prevState: S, nextState: S) => void
    ) {
        const nextState = Object.assign(this.state, values);
        this.render(nextState);
        callback?.(this.state, nextState);
    }

    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    public render(nextState?: S) {
        this._event.emit(ComponentEvents.Update, this.state, nextState);
    }

    public onUpdateState(callback: (prevState: S, nextState: S) => void) {
        this._event.subscribe(ComponentEvents.Update, callback);
    }

    public removeOnUpdateState(callback?: Function): void {
        this._event.unsubscribe(ComponentEvents.Update, callback);
    }

    public forceUpdate() {
        this.setState(cloneDeep(this.state));
    }

    public getState(): S {
        return this.state;
    }
}
