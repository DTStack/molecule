import type { UniqueId } from 'mo/types';

/**
 * The Localization configuration event definition
 */
export enum LocalizationEvent {
    /**
     * The Localization changed
     */
    OnChange = 'localization.onchange',
}

export type LocaleKind = any;
type LocaleKindLiteral = keyof LocaleKind;

export interface ILocale {
    id: UniqueId;
    name: string;
    description?: string;
    /**
     * Whether inherit an exist locale, if it's exist, merge the parent locale
     */
    inherit?: UniqueId;
    source: Record<LocaleKindLiteral, string>;
}

export interface ILocaleModel {
    locales: ILocale[];
    current?: UniqueId;
}

export class LocaleModel implements ILocaleModel {
    constructor(public locales = [], public current = undefined) {}
}
