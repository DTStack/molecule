import LocaleNotification from 'mo/client/components/localeNotification';
import { IContributeType, type IExtension } from 'mo/types';

import EN from './en.json';
import KR from './ko-KR.json';
import zhCN from './zh-CN.json';

export const LocalesExtends: IExtension = {
    contributes: {
        [IContributeType.Languages]: [zhCN, EN, KR],
    },
    id: 'ExtendsLocales',
    name: 'Extends locales',
    activate(molecule) {
        molecule.locale.onChange(() => {
            molecule.notification.add([
                {
                    id: 'locale_changed_notify',
                    value: {},
                    render() {
                        return <LocaleNotification />;
                    },
                },
            ]);
            molecule.layout.setNotification(true);
        });
    },
};
