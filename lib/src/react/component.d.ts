import { GlobalEvent } from 'mo/common/event';
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
    onEvent(name: any, callback: any): void;
}
export declare abstract class Component<S = any> extends GlobalEvent implements IComponent<S> {
    protected abstract state: S;
    private _event;
    constructor();
    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     */
    setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    render(nextState?: S): void;
    onUpdateState(callback: (prevState: S, nextState: S) => void): void;
    getState(): S;
    onEvent(name: any, callback: any): void;
}
