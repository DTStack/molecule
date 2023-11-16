import { IExtension } from 'mo/types';

export const ExtendsNotification: IExtension = {
    id: 'ExtendsNotification',
    name: 'Extend The Default Notification',
    activate: function (molecule): void {
        molecule.notification.onClick(() => {
            molecule.notification.setNotificationVisibility((visible) => !visible);
        });

        molecule.notification.onCloseNotification((item) => {
            molecule.notification.remove(item.id);
        });

        molecule.notification.toggleNotifications(() => {
            molecule.notification.setNotificationVisibility((visible) => !visible);
        });

        molecule.notification.onActionBarClick((item) => {
            const state = molecule.builtin.getState();
            const { NOTIFICATION_CLEAR_ALL_ID, NOTIFICATION_HIDE_ID } = state.constants;
            const action = item.id;

            if (action === NOTIFICATION_CLEAR_ALL_ID) {
                molecule.notification.clear();
            } else if (action === NOTIFICATION_HIDE_ID) {
                molecule.notification.setNotificationVisibility((visible) => !visible);
            }
        });
    },
};
