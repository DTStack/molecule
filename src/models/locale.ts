import type { UniqueId } from 'mo/types';

/**
 * The Localization configuration event definition
 */
export enum LocalizationEvent {
    /**
     * The Localization changed
     */
    onChange = 'localization.onChange',
}

export interface ILocale {
    id: UniqueId;
    name: string;
    description?: string;
    /**
     * Whether inherit an exist locale, if it's exist, merge the parent locale
     */
    inherit?: UniqueId;
    source: Record<string, string>;
}

export class LocaleModel {
    constructor(public data: ILocale[] = [], public current?: UniqueId) {}
}
