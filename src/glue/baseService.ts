import { Draft, produce } from 'immer';
import { cloneDeepWith } from 'lodash-es';

import GlobalEvent from './event';

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
    constructor(private name: string) {
        super();
    }

    public dispatch(recipe: (draft: Draft<S>) => void, didRender?: () => void) {
        const base = { ...this.state };
        const next = produce(base, recipe);

        if (next !== base) {
            this.render(next);
            this.state = next;
            didRender?.();
        }
    }

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
        nextState = cloneDeepWith(nextState, (value) => {
            // FIXME: NOT clone ITextModel
            if (value && typeof value === 'object' && 'uri' in value) {
                return value;
            }
        });
        this.render(nextState);
        const prev = this.state;
        this.state = nextState;
        callback?.(prev, this.state);
    }

    private _renderRecord: { prev?: S; next?: S } = {};
    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    public render(nextState: S) {
        this._renderRecord.prev ??= this.state;
        this._renderRecord.next = nextState;

        window.queueMicrotask(() => {
            this.emit(this.name, this._renderRecord.prev, this._renderRecord.next);
            this._renderRecord = {};
        });
    }

    public onUpdateState(listener: (prevState: S, nextState: S) => void) {
        this.subscribe(this.name, listener);
    }

    public removeOnUpdateState(listener?: Function): void {
        this.unsubscribe(this.name, listener);
    }

    public forceUpdate() {
        this.setState({ ...this.state });
    }

    public getState(): S {
        return this.state;
    }
}
