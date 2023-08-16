import { intersection } from 'lodash-es';
import { APP_PREFIX } from 'mo/const';
import { BaseService } from 'mo/glue';
import { type ILocale, type ILocaleModel, LocaleModel, LocalizationEvent } from 'mo/models/locale';
import type { Localize, UniqueId } from 'mo/types';
import { searchById } from 'mo/utils';
import logger from 'mo/utils/logger';
import { setValue } from 'mo/utils/storage';

export interface ILocaleService {
    /**
     * Set the current locale language by id
     * @param id
     */
    setCurrentLocale(id: UniqueId): boolean;
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
    getLocale(id: UniqueId): ILocale | undefined;
    /**
     * Add multiple local languages
     * @param locales
     */
    addLocales(locales: ILocale[]): void;
    /**
     * Remove a locale language by the id
     * @param id
     */
    removeLocale(id: UniqueId): ILocale | undefined;
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
    localize: Localize;
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

export const DEFAULT_LOCALE_ID = `${APP_PREFIX}.defaultLocaleId`;

export class LocaleService extends BaseService<ILocaleModel> implements ILocaleService {
    private static STORE_KEY = `${APP_PREFIX}.localeId`;
    private static LOCALIZE_REPLACED_WORD = '${i}';
    protected state: ILocaleModel;

    // private _locales = new Map<string, ILocale>();
    // private _current: ILocale | undefined;

    constructor() {
        super();
        this.state = new LocaleModel();
    }

    private getNextOrLastLocales(locale: ILocale) {
        const { locales } = this.state;
        const idx = locales.indexOf(locale);
        if (locales.length <= 1) {
            return undefined;
        }
        const next = locales[idx + 1] || locales[idx - 1];
        return next;
    }

    public reset(): void {
        // localStorage.removeItem(STORE_KEY);
        // this._current = undefined;
        // this._locales.clear();
        this.state = new LocaleModel();
    }

    public getLocales() {
        return this.state.locales;
    }

    // public initialize(locales: ILocale[], localeId: string) {
    //     this.addLocales(locales);
    //     if (this._locales.get(localeId)) {
    //         this._current = this._locales.get(localeId);
    //     } else {
    //         logger.error(`Cannot initialize the locale with ${localeId}`);
    //     }
    // }

    public getCurrentLocale(): ILocale | undefined {
        const { current } = this.state;
        if (current === undefined) {
            return undefined;
        }
        return this.getLocale(current);
    }

    public getLocale(id: UniqueId): ILocale | undefined {
        if (id === undefined) return undefined;
        const { locales } = this.state;
        return locales.find(searchById(id));
    }

    public removeLocale(id: UniqueId): ILocale | undefined {
        const { locales, current } = this.getState();
        const locale = this.getLocale(id);
        if (locale) {
            if (locales.length === 1) {
                logger.warn(
                    "You're removing the only locale, ensure that's really what you want to do"
                );
            }
            const nextCurrent = current === id ? this.getNextOrLastLocales(locale)?.id : current;
            const nextLocales = locales.filter((l) => l.id !== id);
            this.setState({
                current: nextCurrent,
                locales: nextLocales,
            });
            return locale;
        }
        return undefined;
    }

    public setCurrentLocale(id: UniqueId): boolean {
        const { current } = this.state;
        if (current === id) return true;
        const locale = this.getLocale(id);
        if (!locale) return false;
        this.setState({
            current: id,
        });
        setValue(LocaleService.STORE_KEY, locale.id.toString());
        return true;
    }

    public addLocales(locales: ILocale[]): void {
        if (Array.isArray(locales)) {
            const duplicate = intersection(
                locales.map((l) => l.id),
                this.getLocales().map((l) => l.id)
            );
            if (duplicate.length) {
                logger.error(`Duplicated locales for [${duplicate.join(',')}].`);
                return;
            }
            this.setState((pre) => ({
                ...pre,
                locales: [...pre.locales, ...locales],
            }));
        }
    }

    public onChange(callback: (prev: ILocale, next: ILocale) => void): void {
        this.subscribe(LocalizationEvent.OnChange, callback);
    }

    public localize: Localize = (sourceKey, defaultValue = '', ...args) => {
        return sourceKey;
        // let result = defaultValue;
        // if (this._current) {
        //     result = this._current.source.get(sourceKey) || defaultValue;
        // }
        // if (args.length) {
        //     args.forEach((replacedVal) => {
        //         result = result.replace(LocaleService.LOCALIZE_REPLACED_WORD, replacedVal);
        //     });
        // }
        // return result;
    };
}
