import { APP_PREFIX } from 'mo/common/const';
import {
    ILocale,
    LocalizationEvent,
    BuiltInLocales,
    BuiltInDefault,
} from 'mo/i18n/localization';

import { Component } from 'mo/react';
import { singleton } from 'tsyringe';

export interface ILocaleService {
    /**
     * Initialize the locales data, and the default current locale language,
     * this method first uses the cached `locale` in localStorage, then use the
     * localeId argument, if both the values are null, finally apply the built-in BuiltInZhCN
     * @param locales
     * @param localeId
     */
    initialize(locales: ILocale[], localeId?: string): void;
    /**
     * Set the current locale language by id
     * @param id
     */
    setCurrentLocale(id: string): boolean;
    /**
     * Get the current locale language
     */
    getCurrentLocale(): ILocale | undefined;
    /**
     * Get All locale languages
     */
    getLocales(): ILocale[];
    /**
     * Get a locale language by the id
     * @param id
     */
    getLocale(id: string): ILocale | undefined;
    /**
     * Get the default locale
     */
    getDefaultLocale(): ILocale;
    /**
     * Get the default locales;
     */
    getDefaultLocales(): ILocale[];
    /**
     * Add multiple local languages
     * @param locales
     */
    addLocales(locales: ILocale[]): void;
    /**
     * Remove a locale language by the id
     * @param id
     */
    removeLocale(id: string): ILocale | undefined;
    /**
     * Returns the international text located by source key，or the default value if it is not find
     * For examples:
     * ```ts
     * localize('id','default value'); // hello ${i}, ${i}
     * localize('id','default value', 'world'); // hello world, ${i}
     * localize('id','default value', 'world', 'molecule'); // hello world, molecule
     * ```
     * @param sourceKey The key value located in the source international text
     * @param defaultValue The default value to be used when not find the international text
     * @param args If provided, it will used as the values to be replaced in the international text
     * @returns
     */
    localize(
        sourceKey: string,
        defaultValue: string,
        ...args: string[]
    ): string;
    /**
     * Listen to the local language changed event
     * @param callback
     */
    onChange(callback: (prev: ILocale, next: ILocale) => void): void;
    /**
     * Reset the LocaleService to the initial state
     */
    reset(): void;
}

@singleton()
export class LocaleService extends Component implements ILocaleService {
    state = {};
    private static STORE_KEY = `${APP_PREFIX}.locale`;
    private static LOCALIZE_REPLACED_WORD = '${i}';

    private _locales: Map<string, ILocale> = new Map();
    private _current: ILocale | undefined;

    constructor() {
        super();
        this.initialize(BuiltInLocales, BuiltInDefault);
    }

    public reset(): void {
        localStorage.removeItem(LocaleService.STORE_KEY);
        this._current = undefined;
        this._locales.clear();
    }

    public getDefaultLocale(): ILocale {
        return Object.assign({}, BuiltInDefault);
    }

    public getDefaultLocales(): ILocale[] {
        return BuiltInLocales.concat();
    }

    public getLocales(): ILocale[] {
        return Array.from(this._locales.values());
    }

    public initialize(locales: ILocale[], localeId?: string) {
        this.addLocales(locales);
        let finalLocale = BuiltInDefault!.id;
        if (localeId) {
            finalLocale = localeId;
        }
        const cachedLocale = localStorage.getItem(LocaleService.STORE_KEY);
        if (cachedLocale) {
            finalLocale = cachedLocale;
        }
        this.setCurrentLocale(finalLocale);
    }

    public getCurrentLocale(): ILocale | undefined {
        return this._current && Object.assign({}, this._current);
    }

    public getLocale(id: string): ILocale | undefined {
        return this._locales.get(id);
    }

    public removeLocale(id: string): ILocale | undefined {
        const locale = this._locales.get(id);
        if (locale !== undefined) {
            if (this._current && this._current.id === locale.id) {
                this._current = this.getDefaultLocale();
            }
            this._locales.delete(id);
            return locale;
        }
        return undefined;
    }

    public setCurrentLocale(id: string): boolean {
        if (this._current && this._current.id === id) return true;
        const locale = this._locales.get(id);
        if (locale) {
            this.emit(LocalizationEvent.OnChange, this._current, locale);
            this._current = locale;
            localStorage.setItem(LocaleService.STORE_KEY, locale.id);
            return true;
        }
        return false;
    }

    private transformLocaleData(locale: ILocale): ILocale {
        const newLocale = { ...locale };
        // Convert a normal Object to a Map
        if (locale.source instanceof Map === false) {
            newLocale.source = new Map(
                Object.entries(locale.source).map(([key, value]) => [
                    key,
                    value,
                ])
            );
        }
        // If current locale inherit an exist, merge the parent.
        if (newLocale.inherit) {
            const parent = this._locales.get(newLocale.inherit);
            if (parent) {
                newLocale.source = new Map([
                    ...parent.source,
                    ...newLocale.source,
                ]);
            }
        }
        return newLocale;
    }

    public addLocales(locales: ILocale[]): void {
        if (locales.length > 0) {
            const origin = this._locales;
            locales.forEach((locale: ILocale) => {
                const key = locale.id;
                if (!origin.has(key)) {
                    origin.set(key, this.transformLocaleData(locale));
                }
            });
        }
    }

    public onChange(callback: (prev: ILocale, next: ILocale) => void): void {
        this.subscribe(LocalizationEvent.OnChange, callback);
    }

    public localize(
        sourceKey: string,
        defaultValue: string = '',
        ...args: string[]
    ): string {
        let result = defaultValue;
        if (this._current) {
            result = this._current.source.get(sourceKey) || defaultValue;
        }
        if (args.length) {
            args.forEach((replacedVal) => {
                result = result.replace(
                    LocaleService.LOCALIZE_REPLACED_WORD,
                    replacedVal
                );
            });
        }
        return result;
    }
}
