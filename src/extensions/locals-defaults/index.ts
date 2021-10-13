import { IExtension, IContributeType } from 'mo/model/extension';
const defaultLocalsExtension = require('./package.json');

interface ILocaleList {
    contributes: {
        languages: { id: string; path: string }[];
    };
}

const getLocalesList = (objs: ILocaleList) => {
    return objs.contributes.languages.map((obj) => {
        const value = require(obj.path);
        return value;
    });
};

const locales = getLocalesList(defaultLocalsExtension) || [];

export const ExtendsLocals: IExtension = {
    contributes: {
        [IContributeType.Languages]: locales,
    },
    activate() {},
};

export const BuiltInLocales = locales;
export const BuiltInDefault = locales.find((item) => item.id === 'en');
