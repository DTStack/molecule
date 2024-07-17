export function setValue(key: string, value: string) {
    window.localStorage.setItem(key, value);
}

export function getValue(key: string) {
    return window.localStorage.getItem(key);
}

export function setLocale(key: string, value: string) {
    setValue(key, value);
    document?.documentElement?.setAttribute('lang', value);
}
