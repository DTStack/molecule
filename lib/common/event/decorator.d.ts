/**
 * Emit decorator, when the function be called,
 * it's going to notify the listener
 * @param name Event name
 */
export declare function emit(name: string): (target: any, property: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * When the event emitted, it's going to call target function
 * @param name Event name
 */
export declare function subscribe(name: string | string[]): (target: any, property: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
