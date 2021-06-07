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
    initialize(locals: ILocale[], locale?: string): void;
    appendLocales(locals: ILocale[]): void;
    removeLocale(id: string): ILocale | undefined;
    localize(id: string, defaultValue: string): string;
    /**
     * Current localization changed
     * @param callback
     */
    onChange(callback: (prev: ILocale, next: ILocale) => void): void;
}

@singleton()
export class LocaleService extends Component implements ILocaleService {
    state = {};
    private _locals: Map<string, ILocale> = new Map();
    private _current: ILocale | undefined;

    constructor() {
        super();
        this.initialize(builtInLocales, defaultZhCn.id);
    }

    public getLocales(): ILocale[] {
        return Array.from(this._locals.values());
    }

    public initialize(locals: ILocale[], locale?: string) {
        this.appendLocales(locals);
        if (locale) {
            this.setCurrentLocale(locale);
        }
    }

    public getCurrentLocale(): ILocale | undefined {
        return this._current;
    }

    public getLocale(id: string): ILocale | undefined {
        return this._locals.get(id);
    }

    public removeLocale(id: string): ILocale | undefined {
        const locale = this._locals.get(id);
        if (locale !== undefined) {
            if (this._current && this._current.id === locale.id) {
                this._current = defaultZhCn;
            }
            this._locals.delete(id);
        }
        return locale;
    }

    public setCurrentLocale(id: string): boolean {
        if (this._current && this._current.id === id) return true;
        const current = this._locals.get(id);
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
            const parent = this._locals.get(newLocale.inherit);
            if (parent) {
                newLocale.source = new Map([
                    ...parent.source,
                    ...newLocale.source,
                ]);
            }
        }
        return newLocale;
    }

    public appendLocales(locals: ILocale[]): void {
        if (locals.length > 0) {
            const origin = this._locals;
            locals.forEach((locale: ILocale) => {
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

    public localize(id: string, defaultValue: string = ''): string {
        const locale = this._current;
        if (!locale) return defaultValue;

        let result;
        if (locale !== undefined) {
            result = locale?.source.get(id);
        }
        return result || defaultValue;
    }
}
