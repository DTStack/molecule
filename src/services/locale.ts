import { isUndefined } from 'lodash-es';
import { LOCALE_STORE_KEY } from 'mo/const';
import { BaseService } from 'mo/glue';
import { type ILocale, LocaleModel, LocalizationEvent } from 'mo/models/locale';
import type { Arraylize, Localize, UniqueId } from 'mo/types';
import { arraylize, getPrevOrNext, searchById } from 'mo/utils';
import { setLocale } from 'mo/utils/storage';

export class LocaleService extends BaseService<LocaleModel> {
    private static LOCALIZE_REPLACED_WORD = '${i}';
    protected state: LocaleModel;

    constructor() {
        super('locale');
        this.state = new LocaleModel();
    }

    public getAll() {
        return this.getState().data;
    }

    public get(id?: UniqueId) {
        if (isUndefined(id)) return;
        return this.getState().data.find(searchById(id));
    }

    public getCurrent() {
        return this.getState().current;
    }

    public getCurrentLocale(): ILocale | undefined {
        return this.get(this.getCurrent());
    }

    public removeLocale(id: UniqueId) {
        this.dispatch((draft) => {
            const idx = draft.data.findIndex(searchById(id));
            if (idx === -1) return;
            const next = getPrevOrNext(draft.data, idx)?.id;
            // the following condition works ONLY on there is one locale and prepared to remove it.
            // And that's invalid. Should at least keep one locale.
            if (isUndefined(next)) return;
            draft.data.splice(idx, 1);
            draft.current = next;
        });
    }

    public setCurrent(id: UniqueId) {
        const prev = this.getCurrent();
        this.dispatch((draft) => {
            draft.current = id;
        });
        // ===================== effects =====================
        if (prev !== this.getCurrent()) {
            this.emit(LocalizationEvent.onChange, prev, this.getCurrent());
            setLocale(LOCALE_STORE_KEY, id.toString());
        }
    }

    public add(locale: Arraylize<ILocale>): void {
        this.dispatch((draft) => {
            draft.data.push(...arraylize(locale));
        });
    }

    public localize: Localize = (sourceKey, defaultValue = '', ...args) => {
        const locale = this.getCurrentLocale();
        if (!locale) return defaultValue;
        let result = locale.source[sourceKey];
        if (args.length) {
            args.forEach((replacedVal) => {
                result = result?.replace(LocaleService.LOCALIZE_REPLACED_WORD, replacedVal);
            });
        }
        return result || defaultValue;
    };

    public reset(): void {
        this.state = new LocaleModel();
    }

    // ===================== Subscriptions =====================
    public onChange(callback: (prev: UniqueId, next: UniqueId) => void): void {
        this.subscribe(LocalizationEvent.onChange, callback);
    }
}
