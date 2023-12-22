import { IExtension } from 'mo/types';

export const ExtendsNotification: IExtension = {
    id: 'ExtendsNotification',
    name: 'Extend The Default Notification',
    activate: function (molecule): void {
        molecule.notification.onClick(() => {
            molecule.layout.setNotification((visible) => !visible);
        });

        molecule.notification.onCloseNotification((item) => {
            molecule.notification.remove(item.id);
        });

        molecule.notification.toggleNotifications(() => {
            molecule.layout.setNotification((visible) => !visible);
        });

        molecule.notification.onActionBarClick((item) => {
            const state = molecule.builtin.getState();
            const { NOTIFICATION_TOOLBAR_CLEAR_ALL, NOTIFICATION_TOOLBAR_HIDE } = state.constants;
            const action = item.id;

            if (action === NOTIFICATION_TOOLBAR_CLEAR_ALL) {
                molecule.notification.clear();
            } else if (action === NOTIFICATION_TOOLBAR_HIDE) {
                molecule.layout.setNotification((visible) => !visible);
            }
        });
    },
};
