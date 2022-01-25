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
     * @param listener
     */
    onUpdateState(listener: (prevState: S, nextState: S) => void): void;
    /**
     * Remove the Component update event listening, default is remove all,
     * also you can remove one by pass the listener
     */
    removeOnUpdateState(listener?: Function): void;
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
    implements IComponent<S>
{
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

    public onUpdateState(listener: (prevState: S, nextState: S) => void) {
        this._event.subscribe(ComponentEvents.Update, listener);
    }

    public removeOnUpdateState(listener?: Function): void {
        this._event.unsubscribe(ComponentEvents.Update, listener);
    }

    public forceUpdate() {
        this.setState(cloneDeep(this.state));
    }

    public getState(): S {
        return this.state;
    }
}
