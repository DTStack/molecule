import { AsyncSeriesBailHook, type UnsetAdditionalOptions } from 'tapable';

type IEventContext = any[];

export default class EventEmitter {
    private _events = new Map<
        string,
        AsyncSeriesBailHook<IEventContext, unknown, UnsetAdditionalOptions>
    >();

    private _eventHash = new WeakMap<Function, Function>();

    public count(name: string) {
        const events = this._events.get(name);
        if (!events) return 0;
        return events.taps.length;
    }

    public emit(name: string, ...args: any[]) {
        const hook = this._events.get(name);
        if (hook) {
            // FIXME: uncertain way to resolve unlimited args for tapable
            // @ts-ignore
            hook.callAsync(...args, () => {});
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
                if (fn) {
                    const index = hooks.taps.findIndex((tap) => tap.fn === fn);
                    if (index > -1) {
                        // @ts-ignore
                        hooks._resetCompilation();
                        hooks.taps.splice(index, 1);
                    }
                }
            }
        } else {
            this._events.delete(name);
        }
    }

    private assignEvent(name: string, listener: Function) {
        const event = this._events.get(name);
        if (event) {
            const fn = (...args: IEventContext) => Promise.resolve(listener(...args));
            this._eventHash.set(listener, fn);
            event.tapPromise(name, fn);
        } else {
            const hook = new AsyncSeriesBailHook<IEventContext, unknown, UnsetAdditionalOptions>([
                'context',
                'context2',
            ]);
            this._events.set(name, hook);
            const fn = (...args: IEventContext) => Promise.resolve(listener(...args));
            this._eventHash.set(listener, fn);
            hook.tapPromise(name, fn);
        }
    }
}
