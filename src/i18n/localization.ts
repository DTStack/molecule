import BuiltInEN from './source/en';

export const BuiltInZhCN = require('./source/zh-CN.json');
export { default as BuiltInEN } from './source/en';
export type LocaleSourceIdType = keyof typeof BuiltInEN.source;
export const BuiltInLocales = [BuiltInZhCN, BuiltInEN];

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
