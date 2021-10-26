import { NotificationStatus } from 'mo/model';
import 'reflect-metadata';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { container } from 'tsyringe';
import { NotificationService } from '..';

const notificationService = container.resolve(NotificationService);

const mockNotice = {
    id: 1,
    value: 'test',
};

describe('The Notification Service', () => {
    afterEach(() => {
        notificationService.reset();
    });

    test('Should support to add notifications', () => {
        notificationService.add([mockNotice]);
        const notifications = notificationService.getState().data;
        expect(notifications).toHaveLength(1);
        expect(notifications?.[0]).toEqual({
            ...mockNotice,
            status: NotificationStatus.WaitRead,
        });
    });

    test('Should support to generate random id for notices which without id', () => {
        const notices = {
            id: 'test',
            value: 'test',
        };
        notificationService.add([notices]);
        const notifications = notificationService.getState().data;
        expect(notifications).toHaveLength(1);
        expect(Object.keys(notifications?.[0]!)).toContain('id');
    });

    test('Should check the params valid when add notifications', () => {
        const result = notificationService.add([]);
        const notifications = notificationService.getState().data;
        expect(notifications).toHaveLength(0);
        expect(result).toBeNull();
    });

    test('Should check notification before remove', () => {
        expectLoggerErrorToBeCalled(() => {
            notificationService.remove(1);
        });
    });

    test("Should log error when did't find the notification", () => {
        expectLoggerErrorToBeCalled(() => {
            notificationService.add([mockNotice]);
            notificationService.remove(2);
        });
    });

    test('Should support to remove notification', () => {
        notificationService.add([mockNotice]);
        notificationService.remove(1);
        const notifications = notificationService.getState().data;
        expect(notifications).toHaveLength(0);
    });

    test('Should check params valid before update notifications', () => {
        expectLoggerErrorToBeCalled(() => {
            let result = notificationService.update(mockNotice);
            expect(result).toBeNull();

            notificationService.add([mockNotice]);
            result = notificationService.update({ id: 2, value: 'test' });
            expect(result).toBeNull();
        });
    });

    test('Should support to update notification', () => {
        notificationService.add([mockNotice]);
        notificationService.update({ id: 1, value: 'test' });
        const notifications = notificationService.getState().data;

        expect(notifications).toHaveLength(1);
        expect(notifications?.[0]).toEqual({
            ...mockNotice,
            status: NotificationStatus.WaitRead,
            value: 'test',
        });
    });

    test('Should support to toggle notifications show or hide', () => {
        expect(notificationService.getState().showNotifications).toBeFalsy();

        notificationService.toggleNotification();
        expect(notificationService.getState().showNotifications).toBeTruthy();
    });
});
