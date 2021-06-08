import defaultEN from './source/en';
export const defaultZhCn = require('./source/zh-CN.json');

export type LocaleSourceIdType = keyof typeof defaultEN.source;

export const builtInLocales = [defaultEN, defaultZhCn];

/**
 * The Localization configuration event definition
 */
export enum LocalizationEvent {
    /**
     * The Localization changed
     */
    OnChange = 'localization.onchange',
}

export interface ILocale {
    id: string;
    name: string;
    description?: string;
    /**
     * Whether inherit an exist locale, if it's exist, merge the parent locale
     */
    inherit?: string;
    source: Map<LocaleSourceIdType | string, string>;
}
