import { IExtension, IContributeType } from 'mo/model/extension';

const koKR = require('./locales/ko-KR.json');
const zhCN = require('./locales/zh-CN.json');
const en = require('./locales/en.json');
const locales = [zhCN, en, koKR];

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
export const BuiltInId = en.id;
export const BuiltInDefault = locales.find((item) => item.id === BuiltInId);
