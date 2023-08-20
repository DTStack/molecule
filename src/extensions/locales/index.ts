import { IContributeType, type IExtension } from 'mo/types';

import zhCN from './zh-CN.json';

export const LocalesExtends: IExtension = {
    contributes: {
        [IContributeType.Languages]: [zhCN],
    },
    id: 'ExtendsLocales',
    name: 'Extends locales',
    activate() {
    },
};
