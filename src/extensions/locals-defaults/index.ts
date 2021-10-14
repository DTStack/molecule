import { IExtension, IContributeType } from 'mo/model/extension';

const getLocalesList = () => {
    return [require('./locals/en.json'), require('./locals/zh-CN.json')];
};

const locales = getLocalesList() || [];

export const ExtendsLocals: IExtension = {
    id: 'ExtendsLocals',
    name: 'Extends Locals',
    contributes: {
        [IContributeType.Languages]: locales,
    },
    activate() {},
    dispose() {},
};

export const BuiltInLocales = locales;
export const BuiltInDefault = locales.find((item) => item.id === 'en');
