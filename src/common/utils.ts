/**
 * Clone a new object by an object instance
 * @param origin Original object instance
 */
export function cloneInstance<T>(origin: T) {
    try {
        const prototypes = Object.getPrototypeOf(origin) || {};
        return {
            ...origin,
            ...prototypes,
        };
    } catch (e) {
        console.error('cloneInstance error:', e);
    }
}
