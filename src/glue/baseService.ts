import { isEqual } from 'lodash-es';

import GlobalEvent from './event';

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

export default abstract class BaseService<S = any> extends GlobalEvent implements IComponent<S> {
    protected abstract state: S;

    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     * @FIXME Should support batchUpdate based on fiber
     */
    public setState(
        values: Partial<S> | ((prev: S) => Partial<S>),
        callback?: (prevState: S, nextState: S) => void
    ) {
        let nextState = this.state;
        if (typeof values === 'function') {
            nextState = { ...this.state, ...values(this.state) };
        } else {
            nextState = { ...this.state, ...values };
        }
        // improve performance
        if (isEqual(nextState, this.state)) {
            return;
        }
        this.render(nextState);
        callback?.(this.state, nextState);
        this.state = nextState;
    }

    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    public render(nextState: S) {
        this.emit(ComponentEvents.Update, this.state, nextState);
    }

    public onUpdateState(listener: (prevState: S, nextState: S) => void) {
        this.subscribe(ComponentEvents.Update, listener);
    }

    public removeOnUpdateState(listener?: Function): void {
        this.unsubscribe(ComponentEvents.Update, listener);
    }

    public forceUpdate() {
        this.setState({ ...this.state });
    }

    public getState(): S {
        return this.state;
    }
}
