/**
 * Clone a new object by an object instance
 * @param origin Original object instance
 */
export function cloneInstance<T>(origin: T) {
    return {
        ...origin,
        ...Object.getPrototypeOf(origin),
    };
}
