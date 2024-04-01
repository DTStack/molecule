export function setValue(key: string, value: string) {
    window.localStorage.setItem(key, value);
    document?.documentElement?.setAttribute('lang', value);
}

export function getValue(key: string) {
    return window.localStorage.getItem(key);
}
