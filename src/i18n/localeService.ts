import { APP_PREFIX } from 'mo/common/const';
import logger from 'mo/common/logger';
import { ILocale, LocalizationEvent } from 'mo/i18n/localization';

import { Component } from 'mo/react';
import { singleton } from 'tsyringe';

export interface ILocaleService {
    /**
     * Initialize the locales data, and the current locale language,
     * @param locales
     * @param localeId
     */
    initialize(locales: ILocale[], localeId: string): void;
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

export const STORE_KEY = `${APP_PREFIX}.localeId`;
export const DEFAULT_LOCALE_ID = `${APP_PREFIX}.defaultLocaleId`;

@singleton()
export class LocaleService extends Component implements ILocaleService {
    state = {};
    private static LOCALIZE_REPLACED_WORD = '${i}';

    private _locales = new Map<string, ILocale>();
    private _current: ILocale | undefined;

    constructor() {
        super();
    }

    public reset(): void {
        localStorage.removeItem(STORE_KEY);
        this._current = undefined;
        this._locales.clear();
    }

    public getLocales(): ILocale[] {
        return Array.from(this._locales.values());
    }

    public initialize(locales: ILocale[], localeId: string) {
        this.addLocales(locales);
        if (this._locales.get(localeId)) {
            this._current = this._locales.get(localeId);
        } else {
            logger.warn(`Cannot initialize the locale with ${localeId}`);
            this._current = this._locales.values().next().value;
        }
    }

    public getCurrentLocale(): ILocale | undefined {
        return this._current && Object.assign({}, this._current);
    }

    public getLocale(id: string | null): ILocale | undefined {
        if (!id) return;
        return this._locales.get(id);
    }

    public removeLocale(id: string): ILocale | undefined {
        const locale = this._locales.get(id);
        if (locale !== undefined) {
            if (this._locales.size === 1) {
                logger.error(
                    "You can't remove this Locale because there must have one locale at least"
                );
                return undefined;
            }
            if (this._current && this._current.id === locale.id) {
                this._current = this._locales.values().next().value;
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
            localStorage.setItem(STORE_KEY, locale.id);
            return true;
        }
        return false;
    }

    private transformLocaleData(locale: ILocale): ILocale {
        const newLocale = { ...locale };
        // Convert a normal Object to a Map
        if (!(locale.source instanceof Map)) {
            newLocale.source = new Map(Object.entries(locale.source));
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
