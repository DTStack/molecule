/**
 * Clone a new object by an object instance
 * @param origin Original object instance
 */
export function cloneInstance<T>(origin: T) {
    try {
        const prototypes = Object.getPrototypeOf(origin) || {};
        Object.keys(prototypes).forEach((prop) => {
            if (typeof prototypes[prop] === 'function') {
                console.log('bind:', prototypes[prop], origin);
                prototypes[prop].bind(origin);
            }
        });
        return {
            ...origin,
            ...prototypes,
        };
    } catch (e) {
        console.error('cloneInstance error:', e);
    }
}
