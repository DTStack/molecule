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
     * Unsubscribe the specific event by the name and the callback function
     * @param name The removed event name
     * @param callback optional, The removed callback function
     */
    public unsubscribe(name: string | string[], callback?: Function) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                this.deleteEvent(key, callback);
            });
        } else {
            this.deleteEvent(name, callback);
        }
    }

    public deleteEvent(name: string, callback?: Function) {
        if (callback) {
            const event = this._events.get(name);
            if (event) {
                event.splice(event.indexOf(callback), 1);
            }
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
