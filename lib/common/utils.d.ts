/**
 * Clone a new object by an object instance
 * @param origin Original object instance
 */
export declare function cloneInstance<T>(origin: T): any;
/**
 * Merge multiple functions to one function
 * @param funcs
 */
export declare function mergeFunctions(...funcs: any[]): (...args: any[]) => void;
