import {
    builtInLocales,
    defaultZhCn,
    ILocale,
    LocalizationEvent,
} from 'mo/i18n/localization';
import { Component } from 'mo/react';
import { singleton } from 'tsyringe';

export interface ILocaleService {
    setCurrentLocale(id: string): boolean;
    getCurrentLocale(): ILocale | undefined;
    getLocales(): ILocale[];
    getLocale(id: string): ILocale | undefined;
    initialize(locales: ILocale[], localeId?: string): void;
    appendLocales(locales: ILocale[]): void;
    removeLocale(id: string): ILocale | undefined;
    localize(sourceKey: string, defaultValue: string): string;
    /**
     * Current localization changed
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
        this.initialize(builtInLocales, defaultZhCn.id);
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

    public getCurrentLocale(): ILocale | undefined {
        return this._current;
    }

    public getLocale(id: string): ILocale | undefined {
        return this._locales.get(id);
    }

    public removeLocale(id: string): ILocale | undefined {
        const locale = this._locales.get(id);
        if (locale !== undefined) {
            if (this._current && this._current.id === locale.id) {
                this._current = defaultZhCn;
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
