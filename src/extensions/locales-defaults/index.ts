import { IExtension, IContributeType } from 'mo/model/extension';

const zhCN = require('./locales/zh-CN.json');
const en = require('./locales/en.json');
const getLocalesList = () => [zhCN, en];
const locales = getLocalesList() || [];

export const ExtendsLocales: IExtension = {
    id: 'ExtendsLocales',
    name: 'Extends locales',
    contributes: {
        [IContributeType.Languages]: locales,
    },
    activate() {},
    dispose() {},
};
export const BuiltInLocales = locales;
export const BuiltInDefault = locales.find((item) => item.id === en.id);
export const BuiltInId = en.id;
