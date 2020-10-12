export interface IObservable {
    observe: (handler: (target, property, value) => void) => void;
}

export function observable<T>(object, callback?): IObservable & T {
    object.handlers = [];
    object.observe = function(handler: Function) {
        object.handlers.push(handler);
    };

    const handler = {
        get(target, property, receiver) {
            if (target.hasOwnProperty(property)) {
                try {
                    return new Proxy(target[property], handler);
                } catch (err) {
                    return Reflect.get(target, property, receiver);
                }
            }
            return Reflect.get(target, property, receiver);
        },
        set: function(target, property, value, receiver) {
            console.log('set value:', target, property, value, receiver);
            let nextTarget = target;
            if (target.hasOwnProperty(property)) {
                try {
                    Reflect.set(target, property, value, receiver);
                    nextTarget = new Proxy(target[property], handler);
                } catch (err) {
                    nextTarget = Reflect.set(target, property, value, receiver);
                }
            } else {
                nextTarget = Reflect.set(target, property, value, receiver);
            }
            if (callback) {
                callback(target, property, value);
            }
            if (object.handlers) {
                object.handlers.forEach((hand) => hand(target, property, value));
            }
            return nextTarget;
        },
    };
    return new Proxy(object, handler);
}
