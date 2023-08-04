import { AsyncSeriesBailHook, type UnsetAdditionalOptions } from 'tapable';

interface IEventContext {
    args: any;
}

export default class EventEmitter {
    private _events = new Map<
        string,
        AsyncSeriesBailHook<IEventContext, unknown, UnsetAdditionalOptions>
    >();

    private _eventHash = new WeakMap();

    public count(name: string) {
        const events = this._events.get(name);
        if (!events) return 0;
        return events.taps.length;
    }

    public emit(name: string, ...args) {
        const hook = this._events.get(name);
        if (hook) {
            hook.callAsync(
                {
                    args,
                },
                () => {}
            );
        }
    }

    public subscribe(name: string, listener: Function) {
        this.assignEvent(name, listener);
    }

    public unsubscribe(name: string, listener?: Function) {
        this.dismissEvent(name, listener);
    }

    private dismissEvent(name: string, listener?: Function) {
        if (listener) {
            const hooks = this._events.get(name);
            if (hooks) {
                const fn = this._eventHash.get(listener);
                const index = hooks.taps.indexOf(fn);
                if (index > -1) {
                    hooks.taps.splice(index, 1);
                }
            }
        } else {
            this._events.delete(name);
        }
    }

    private assignEvent(name: string, listener: Function) {
        const event = this._events.get(name);
        if (event) {
            const fn = (context: IEventContext) => Promise.resolve(listener(context));
            this._eventHash.set(listener, fn);
            event.tapPromise(name, fn);
        } else {
            const hook = new AsyncSeriesBailHook<IEventContext, unknown, UnsetAdditionalOptions>([
                'context',
            ]);
            this._events.set(name, hook);
        }
    }
}
