import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    IStatusBarService,
    StatusBarService,
} from '../workbench/statusBarService';
import { Float, StatusBarEvent } from 'mo/model/workbench/statusBar';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { modules } from '../builtinService/const';

const mockStatusData = {
    ...modules.STATUS_EDITOR_INFO(),
};

const anotherStatusData = {
    id: 'test-id',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0,
    },
    name: 'for test',
};

describe('Test StatusBarService', () => {
    const statusBarService =
        container.resolve<IStatusBarService>(StatusBarService);

    afterEach(() => {
        statusBarService.reset();
    });

    test('Should NOT have default value when initialize', () => {
        expect(statusBarService).not.toBeUndefined();

        const state = statusBarService.getState();
        expect(state.leftItems).toEqual([]);
        expect(state.rightItems).toEqual([]);
        expect(state.contextMenu).toEqual([]);
    });

    test('Should support to add a status data into the specific position', () => {
        statusBarService.add(mockStatusData, Float.left);
        statusBarService.add(anotherStatusData, Float.right);

        const result = statusBarService.getStatusBarItem(mockStatusData.id);
        expect(result).toEqual(mockStatusData);
        expect(statusBarService.getStatusBarItem(anotherStatusData.id)).toEqual(
            anotherStatusData
        );
    });

    test('Should log error when add failed', () => {
        expectLoggerErrorToBeCalled(() => {
            statusBarService.add(mockStatusData, Float.right);
            // there is a status item whose id is ${mockStatusData.id}, so it'll add failed
            statusBarService.add(mockStatusData, Float.right);
        });
    });

    test('Should support to update item in specific position', () => {
        // Add same status items both into left and right sides
        statusBarService.add(mockStatusData, Float.left);
        statusBarService.add(mockStatusData, Float.right);
        statusBarService.update(
            {
                id: mockStatusData.id,
                sortIndex: 1,
            },
            Float.left
        );

        const expected = statusBarService.getStatusBarItem(
            mockStatusData.id,
            Float.left
        );
        expect(expected).toEqual({ ...mockStatusData, sortIndex: 1 });
        // there is already a status item whose id is ${mockStatusData.id} in right,
        // so we should ensure only update the left one, and keep the right one as it is
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.right)
        ).toEqual(mockStatusData);
    });

    test('Should support to update left first and then right postion', () => {
        statusBarService.add(anotherStatusData, Float.left);
        statusBarService.add(mockStatusData, Float.right);

        statusBarService.update({ id: anotherStatusData.id, sortIndex: 1 });

        const expected = statusBarService.getStatusBarItem(
            anotherStatusData.id
        );

        expect(expected).toEqual({ ...anotherStatusData, sortIndex: 1 });

        statusBarService.update({
            id: modules.STATUS_EDITOR_INFO().id,
            sortIndex: 0,
        });

        expect(
            statusBarService.getStatusBarItem(modules.STATUS_EDITOR_INFO().id)
                ?.sortIndex
        ).toBe(0);
    });

    test('Should log error when update failed', () => {
        expectLoggerErrorToBeCalled(() => {
            statusBarService.update({
                id: anotherStatusData.id,
                sortIndex: 1,
            });
        });
    });

    test('Should support to remove a item in specific position', () => {
        statusBarService.add(mockStatusData, Float.right);
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id)
        ).not.toBeNull();

        statusBarService.remove(mockStatusData.id, Float.right);
        expect(statusBarService.getStatusBarItem(mockStatusData.id)).toBeNull();
    });

    test('Should support to remove a item in left first and the right', () => {
        statusBarService.add(mockStatusData, Float.left);
        statusBarService.add(mockStatusData, Float.right);

        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.left)
        ).not.toBeNull();
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.right)
        ).not.toBeNull();

        statusBarService.remove(mockStatusData.id);
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.left)
        ).toBeNull();
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.right)
        ).not.toBeNull();

        statusBarService.remove(mockStatusData.id);
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.left)
        ).toBeNull();
        expect(
            statusBarService.getStatusBarItem(mockStatusData.id, Float.right)
        ).toBeNull();
    });

    test('Should log error when remove failed', () => {
        expectLoggerErrorToBeCalled(() => {
            statusBarService.remove(anotherStatusData.id);
        });
    });

    test('Should support to subscribe onClick event', () => {
        const mockFn = jest.fn();
        statusBarService.onClick(mockFn);

        statusBarService.emit(StatusBarEvent.onClick, anotherStatusData);

        expect(mockFn).toBeCalled();

        expect(mockFn.mock.calls[0][0]).toEqual(anotherStatusData);
    });
});
