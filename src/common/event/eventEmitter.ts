export class EventEmitter {
    private _events = new Map<string, Function[]>();

    public emit(name: string, ...args) {
        const events = this._events.get(name);
        if (events && events.length > 0) {
            // The log for development
            events.forEach((callEvent) => {
                callEvent(...args);
            });
        }
    }

    public subscribe(name: string | string[], callback: Function) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                this.assignEvent(key, callback);
            });
        } else {
            this.assignEvent(name, callback);
        }
    }

    public unsubscribe(name: string | string[]) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                this._events.delete(key);
            });
        } else {
            this._events.delete(name);
        }
    }

    public assignEvent<T>(name: string, callback: Function) {
        const event = this._events.get(name);
        if (event) {
            event.push(callback);
        } else {
            this._events.set(name, [callback]);
        }
    }
}
