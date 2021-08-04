import 'reflect-metadata';
import { container } from 'tsyringe';
import { IStatusBarService, StatusBarService } from '../statusBarService';
import { STATUS_EDITOR_INFO } from 'mo/model/workbench/statusBar';

describe('Test StatusBarService', () => {
    const statusBarService = container.resolve<IStatusBarService>(
        StatusBarService
    );

    test('Test StatusBarService Class instance', () => {
        expect(statusBarService).not.toBeUndefined();
        expect(statusBarService.getState()).not.toBeUndefined();
    });

    test('Test StatusBarService getStatusBarItem method', () => {
        const expected = Object.assign({}, STATUS_EDITOR_INFO, {
            id: 'test-id',
        });
        statusBarService.add(expected, 'left');
        const result = statusBarService.getStatusBarItem(expected.id);
        expect(result).not.toBeUndefined();
    });

    test('Test StatusBarService add a new item', () => {
        const expected = Object.assign({}, STATUS_EDITOR_INFO, {
            id: 'test-id',
        });
        statusBarService.add(expected, 'left');
        const result = statusBarService.getStatusBarItem(expected.id);
        expect(result).not.toBeUndefined();
    });

    test('Test StatusBarService update a item', () => {
        const expected = Object.assign({}, STATUS_EDITOR_INFO, {
            data: {
                ln: 1,
                col: 2,
            },
        });

        statusBarService.update(expected);
        const result = statusBarService.getStatusBarItem(expected.id);
        expect(result).toEqual(expected);
    });

    test('Test StatusBarService remove a item', () => {
        let result = statusBarService.getStatusBarItem(STATUS_EDITOR_INFO.id);
        expect(result).not.toBeUndefined();
        statusBarService.remove(STATUS_EDITOR_INFO.id);
        result = statusBarService.getStatusBarItem(STATUS_EDITOR_INFO.id);
        expect(result).toBeUndefined();
    });
});
