import { monacoService } from 'mo/monaco/monacoService';
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

export function getOrCreateModel(monaco, value, language, path) {
    return (
        monacoService?.getModel(crateModelUri(monaco, path)) ||
        monacoService?.createModel(value, language, crateModelUri(monaco, path))
    );
}

export function crateModelUri(monaco, path) {
    return monaco.Uri.parse(path);
}
