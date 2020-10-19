export default class EventEmitter {
    private static _events = new Map();

    public static emit(name: string, args: any) {
        const callEvent = EventEmitter._events.get(name);
        if (callEvent) {
            console.log('event emit:', name, args);
            callEvent(args);
        }
    }

    public static on(name: string | string[], callback: (args: any) => void) {
        if (Array.isArray(name)) {
            name.forEach((key: string) => {
                EventEmitter._events.set(key, callback);
            });
        } else {
            if (!name) return;
            EventEmitter._events.set(name, callback);
        }
        console.log('event on:', name);
    }
}

/**
 * When the function decorated be called,
 * it's going to emit event
 * @param name Event name
 */
export function emitter(name: string) {
    return function(
        target,
        property: string,
        descriptor: PropertyDescriptor,
    ) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function(...args) {
                try {
                    const result = original.apply(this, args);
                    EventEmitter.emit(name, args);
                    return result;
                } catch (e) {
                    throw e;
                }
            };
        }
        return descriptor;
    };
}


/**
 * When the event emitted, it's going to call target function
 * @param name Event name
 */
export function listen(name: string | string []) {
    return function(
        target,
        property: string,
        descriptor: PropertyDescriptor,
    ) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            EventEmitter.on(name, original);
        }
        return descriptor;
    };
}
