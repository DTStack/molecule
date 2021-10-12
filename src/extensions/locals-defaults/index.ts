import { IExtension, IContributeType } from 'mo/model/extension';
const en = require('./locals/en.json');
const defaultId = en.id;
const zhCN = require('./locals/zh-CN.json');

export const ExtendsLocals: IExtension = {
    contributes: {
        [IContributeType.Languages]: {
            localeId: defaultId,
            locales: [en, zhCN],
        },
    },
    activate() {},
};

const builtInConfig = ExtendsLocals!.contributes?.[IContributeType.Languages];

export const BuiltInLocales = builtInConfig!.locales;
export const BuiltInDefault = builtInConfig!.locales.find(
    (item) => item.id === builtInConfig!.localeId
);
