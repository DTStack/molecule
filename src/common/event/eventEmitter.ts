export class EventEmitter {
    private _events = new Map<string, Function[]>();

    public count(name: string) {
        const events = this._events.get(name) || [];
        return events.length;
    }

    public emit(name: string, ...args) {
        const events = this._events.get(name);
        if (events && events.length > 0) {
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

    /**
     * Unsubscribe the specific event by the name
     *
     * TODO: The `unsubscribe` method delete the all events via the name directly, the developer
     * use the `subscribe` method could register many callbacks, so if the developer only want to delete the specific callback by the name,
     * this method is no work.
     * @param name The removed event name
     */
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
