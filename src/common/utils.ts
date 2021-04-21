/**
 * Clone a new object by an object instance
 * @param origin Original object instance
 */
export function cloneInstance<T>(origin: T) {
    try {
        const prototypes = Object.getPrototypeOf(origin) || {};
        Object.keys(prototypes).forEach((prop) => {
            if (typeof prototypes[prop] === 'function') {
                prototypes[prop].bind(origin);
            }
        });
        return {
            ...origin,
            ...prototypes,
        };
    } catch (e) {
        console.error('Function cloneInstance error:', e);
    }
}

/**
 * Merge multiple functions to one function
 * @param funcs
 */
export function mergeFunctions(...funcs) {
    return function (...args) {
        funcs.filter((fn) => !!fn).forEach((fn) => fn?.(...args));
    };
}

export function randomId() {
    return Date.now() + Math.round(Math.random() * 1000);
}

export function mergeObjects(source: object, target: object) {
    for (const prop in target) {
        if (typeof source[prop] === 'object' && target[prop]) {
            source[prop] = mergeObjects(source[prop], target[prop]);
        } else {
            source[prop] = target[prop];
        }
    }
    return source;
}

/**
 * It's used convert an object to a flatted object,
 * eg: { a: { b: 'test' }}, result is : { 'a.b': 'test' }
 * @param target flat target
 */
export function flatObject(target: object): object {
    const flatted = {};
    const recurse = (parent: string, target: object) => {
        for (const prop in target) {
            if (prop) {
                const value = target[prop];
                const path = parent ? `${parent}.${prop}` : prop;
                if (typeof value === 'object') {
                    recurse(path, value);
                } else {
                    flatted[path] = value;
                }
            }
        }
    };
    recurse('', target);
    return flatted;
}

/**
 * It's used convert a flatted object to a normal object,
 *  eg: { 'a.b': 'test' }, result is : { a: { b: 'test' }}
 * @param target flat target
 */
export function normalizeFlattedObject(target: object): object {
    let normalized = {};

    for (const prop in target) {
        if (prop) {
            const flattedProps = prop.split('.');
            let prevProp = '';
            let root = {};
            let prevObj = root;
            for (let i = 0; i < flattedProps.length; ++i) {
                if (i === flattedProps.length) break;
                const key = flattedProps[i];
                const current = { [key]: '' };

                if (prevProp) {
                    prevObj[prevProp] = current;
                }
                prevObj = current;
                prevProp = key;
                if (i === 0) {
                    root = current;
                }
            }
            prevObj[prevProp] = target[prop];
            normalized = mergeObjects(normalized, root);
        }
    }
    return normalized;
}
