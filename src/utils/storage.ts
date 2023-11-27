export function setValue(key: string, value: string) {
    window.localStorage.setItem(key, value);
}

export function getValue(key: string) {
    return window.localStorage.getItem(key);
}
