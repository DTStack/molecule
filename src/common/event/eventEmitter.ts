export interface ListenerContextProps {
    stopDelivery: () => void;
}

export class EventEmitter {
    private _events = new Map<string, Function[]>();

    public count(name: string) {
        const events = this._events.get(name) || [];
        return events.length;
    }

    public emit(name: string, ...args) {
        const events = this._events.get(name);
        if (events && events.length > 0) {
            let continued = true;
            // call in descending order
            for (let index = events.length - 1; index >= 0; index--) {
                if (continued) {
                    const evt = events[index];
                    evt.call(
                        {
                            stopDelivery: () => (continued = false),
                        },
                        ...args
                    );
                }
            }
        }
    }

    public subscribe(name: string | string[], listener: Function) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                this.assignEvent(key, listener);
            });
        } else {
            this.assignEvent(name, listener);
        }
    }

    public unsubscribe(name: string | string[], listener?: Function) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                this.deleteEvent(key, listener);
            });
        } else {
            this.deleteEvent(name, listener);
        }
    }

    public deleteEvent(name: string, listener?: Function) {
        if (listener) {
            const event = this._events.get(name);
            if (event) {
                event.splice(event.indexOf(listener), 1);
            }
        } else {
            this._events.delete(name);
        }
    }

    public assignEvent<T>(name: string, listener: Function) {
        const event = this._events.get(name);
        if (event) {
            event.push(listener);
        } else {
            this._events.set(name, [listener]);
        }
    }
}
