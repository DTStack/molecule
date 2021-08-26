import {
    BuiltInLocales,
    BuiltInZhCN,
    ILocale,
    LocalizationEvent,
} from 'mo/i18n/localization';
import { Component } from 'mo/react';
import { singleton } from 'tsyringe';

export interface ILocaleService {
    /**
     * Initialize the locales data, and the default current locale language
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
    getCurrentLocale(): ILocale;
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
     * Append multiple local languages
     * @param locales
     */
    appendLocales(locales: ILocale[]): void;
    /**
     * Remove a locale language by the id
     * @param id
     */
    removeLocale(id: string): ILocale | undefined;
    /**
     * Return a value which localized by the indicated sourceKey
     * @param sourceKey
     * @param defaultValue
     */
    localize(sourceKey: string, defaultValue: string): string;
    /**
     * Listen to the local language changed event
     * @param callback
     */
    onChange(callback: (prev: ILocale, next: ILocale) => void): void;
}

@singleton()
export class LocaleService extends Component implements ILocaleService {
    state = {};
    private _locales: Map<string, ILocale> = new Map();
    private _current: ILocale | undefined;

    constructor() {
        super();
        this.initialize(BuiltInLocales, BuiltInZhCN.id);
    }

    public getDefaultLocale(): ILocale {
        return Object.assign({}, BuiltInZhCN);
    }

    public getLocales(): ILocale[] {
        return Array.from(this._locales.values());
    }

    public initialize(locales: ILocale[], localeId?: string) {
        this.appendLocales(locales);
        if (localeId) {
            this.setCurrentLocale(localeId);
        }
    }

    public getCurrentLocale(): ILocale {
        return Object.assign({}, this._current || this.getDefaultLocale());
    }

    public getLocale(id: string): ILocale | undefined {
        return this._locales.get(id);
    }

    public removeLocale(id: string): ILocale | undefined {
        const locale = this._locales.get(id);
        if (locale !== undefined) {
            if (this._current && this._current.id === locale.id) {
                this._current = BuiltInZhCN;
            }
            this._locales.delete(id);
        }
        return locale;
    }

    public setCurrentLocale(id: string): boolean {
        if (this._current && this._current.id === id) return true;
        const current = this._locales.get(id);
        if (current) {
            this.emit(LocalizationEvent.OnChange, this._current, current);
            this._current = current;
            return true;
        }
        return false;
    }

    private transformLocaleData(locale: ILocale): ILocale {
        const newLocale = { ...locale };
        newLocale.source = new Map(Object.entries(locale.source));
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

    public appendLocales(locales: ILocale[]): void {
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

    public localize(sourceKey: string, defaultValue: string = ''): string {
        const locale = this._current;
        if (!locale) return defaultValue;

        let result;
        if (locale !== undefined) {
            result = locale.source.get(sourceKey);
        }
        return result || defaultValue;
    }
}
