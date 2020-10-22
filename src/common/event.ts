export class EventEmitter {
    private _events = new Map<string, Function[]>();

    public emit<ArgsType = any>(name: string, args: ArgsType) {
        const events = this._events.get(name);
        if (events && events.length > 0) {
            // The log for development
            console.log('event emit:', name, args);
            events.forEach((callEvent) => {
                callEvent(args);
            });
        }
    }

    public subscribe<T = any>(name: string | string[], callback: Function ) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                this.assignEvent(key, callback);
            });
        } else {
            this.assignEvent(name, callback);
        }
        // The log for development
        console.log('event on:', name);
    }

    public assignEvent<T>(name: string, callback: Function) {
        const event = this._events.get(name);
        if (event) {
            event.push(callback);
        } else {
            this._events.set(name, [callback] );
        }
    }
}
