import LocaleNotification from 'mo/client/components/localeNotification';
import { IContributeType, type IExtension } from 'mo/types';

import EN from './en.json';
import zhCN from './zh-CN.json';

export const LocalesExtends: IExtension = {
    contributes: {
        // FIXME
        [IContributeType.Languages]: [zhCN, EN as any],
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
            molecule.notification.setNotificationVisibility(true);
        });
    },
};
