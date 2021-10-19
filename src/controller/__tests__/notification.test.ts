import {
    NotificationService,
    StatusBarService,
    BuiltinService,
} from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { NotificationController } from '../notification';

const notificationController = container.resolve(NotificationController);
const notificationService = container.resolve(NotificationService);
const statusBarService = container.resolve(StatusBarService);
const builtinService = container.resolve(BuiltinService);

jest.mock('react-dom', () => {
    return {
        render: jest.fn(),
    };
});

describe('The notification controller', () => {
    test('Should support initialize the service', () => {
        notificationController.initView();

        const states = notificationService.getState();
        const actionBar = [
            modules.NOTIFICATION_CLEAR_ALL,
            modules.NOTIFICATION_HIDE,
        ];
        const defaults = {
            ...modules.builtInNotification,
            actionBar,
        };
        expect(states).toEqual(expect.objectContaining(defaults));

        const { rightItems } = statusBarService.getState();
        expect(rightItems).toHaveLength(1);
        expect(rightItems[0]).toEqual(expect.objectContaining(defaults));

        statusBarService.reset();
        notificationService.reset();
    });

    test('Should support to reset the actionBar', () => {
        builtinService.inactiveModule('NOTIFICATION_CLEAR_ALL');
        builtinService.inactiveModule('NOTIFICATION_HIDE');
        notificationController.initView();

        const states = notificationService.getState();
        const actionBar = [];
        const defaults = {
            ...modules.builtInNotification,
            actionBar,
        };
        expect(states).toEqual(expect.objectContaining(defaults));

        const { rightItems } = statusBarService.getState();
        expect(rightItems).toHaveLength(1);
        expect(rightItems[0]).toEqual(expect.objectContaining(defaults));

        statusBarService.reset();
        notificationService.reset();
    });

    test('Should support to adjust the default value', () => {
        builtinService.inactiveModule('builtInNotification');
        notificationController.initView();
        const states = notificationService.getState();
        expect(states).toEqual({
            id: '',
            name: '',
            data: [],
            sortIndex: 1,
            showNotifications: false,
            actionBar: [],
            render: undefined,
        });

        const { rightItems } = statusBarService.getState();
        expect(rightItems).toHaveLength(0);

        statusBarService.reset();
        notificationService.reset();
    });

    test('Should support to onCloseNotification', () => {
        const mockItem = { id: 1, value: 'test' };
        notificationService.add<string>([mockItem]);
        expect(notificationService.getState().data).toHaveLength(1);
        expect(notificationService.getState().data![0]).toEqual(mockItem);

        notificationController.onCloseNotification(mockItem);
        expect(notificationService.getState().data).toHaveLength(0);
    });

    test('Should support to toggleNotifications', () => {
        expect(
            (notificationController as any)._notificationPane
        ).toBeUndefined();
        expect(notificationService.getState().showNotifications).toBeFalsy();
        notificationController.toggleNotifications();

        expect(
            (notificationController as any)._notificationPane
        ).not.toBeUndefined();
        expect(notificationService.getState().showNotifications).toBeTruthy();
    });

    test('Should support to execute onClick', () => {
        expect(notificationService.getState().showNotifications).toBeTruthy();

        notificationController.onClick({} as any, { id: 'test' });

        expect(notificationService.getState().showNotifications).toBeFalsy();
    });

    test('Should support to execute onActionBarClick', () => {
        expect(notificationService.getState().showNotifications).toBeFalsy();
        notificationController.onActionBarClick({} as any, {
            id: constants.NOTIFICATION_CLEAR_ALL_ID,
        });
        expect(notificationService.getState().showNotifications).toBeTruthy();

        notificationController.onActionBarClick({} as any, {
            id: constants.NOTIFICATION_HIDE_ID,
        });
        expect(notificationService.getState().showNotifications).toBeFalsy();
    });
});
