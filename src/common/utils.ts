export function searchById(id) {
    return (item) => item.id === id;
}

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

export function mergeObjects<T>(source: object, target: object): T {
    for (const prop in target) {
        if (typeof source[prop] === 'object' && target[prop]) {
            source[prop] = mergeObjects(source[prop], target[prop]);
        } else {
            source[prop] = target[prop];
        }
    }
    return source as any;
}

/**
 * It's converts an object to a flatted object,
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
 * It's converts a flatted object to a normal object,
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

/**
 * Determine if a color is light or dark.
 * @param color HEX or RGB
 */
export function colorLightOrDark(color: string) {
    // Variables for red, green, blue values
    let r: number;
    let g: number;
    let b: number;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
        // If RGB --> store the red, green, blue values in separate variables
        const matchArray =
            color.match(
                /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
            ) || [];
        r = +matchArray[1];
        g = +matchArray[2];
        b = +matchArray[3];
    } else {
        // If hex --> Convert it to RGB
        let rgbNum = +('0x' + color.slice(1, 7));
        if (color.length < 5) {
            rgbNum = +('0x' + color.slice(1).replace(/./g, '$&$&').slice(0, 6));
        }
        r = rgbNum >> 16;
        g = (rgbNum >> 8) & 255;
        b = rgbNum & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
        return 'light';
    }
    return 'dark';
}
