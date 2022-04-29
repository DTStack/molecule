import { EventBus } from './eventBus';

/**
 * Emit decorator, when the function be called,
 * it's going to notify the listener
 * @param name Event name
 */
export function emit(name: string) {
    return function (target, property: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function (...args) {
                try {
                    const result = original.apply(this, args);
                    EventBus.emit(name, args);
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
export function subscribe(name: string | string[]) {
    return function (target, property: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        if (typeof original === 'function') {
            EventBus.subscribe(name, original);
        }
        return descriptor;
    };
}
