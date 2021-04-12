export interface IObservable {
    /**
     * The onChange of observed object
     */
    subscribe: (onChange: (target: any, property: any, value: any) => void) => void;
}
/**
 * Wrap an object to an observable object
 * @param object target object
 * @param callback callback when target observed
 */
export declare function observableWrapper<T = any>(object: any, callback?: any): IObservable & T;
/**
 * Observable decorator
 * @param target observable target object
 * @param name
 * @param descriptor
 */
export declare function observable(): any;
