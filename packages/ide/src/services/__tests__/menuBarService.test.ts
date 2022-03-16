import { Logger as logger } from '@dtinsight/molecule-common';
import { MenuBarEvent } from 'mo/model';
import 'reflect-metadata';
import { container } from 'tsyringe';

import { IMenuBarService, MenuBarService } from '../workbench/menuBarService';

const menuBarService = container.resolve<IMenuBarService>(MenuBarService);

const mockData = [
    {
        id: '1',
        name: 'root',
        data: [
            {
                id: '2',
                name: 'a',
                data: [{ id: '3', name: 'c' }],
            },
            {
                id: '4',
                name: 'b',
            },
        ],
    },
];

/**
 * 测试某一行为是否会输出错误日志
 * @param action
 */
function logError(action) {
    const original = logger.error;
    logger.error = jest.fn();

    action();

    expect(logger.error).toBeCalled();
    logger.error = original;
}

describe('Test menuBarService', () => {
    afterEach(() => {
        menuBarService.reset();
    });
    test('Should have default value data', () => {
        const state = menuBarService.getState();
        expect(state.data).toEqual([]);
    });

    test('Should support to set menu data', () => {
        menuBarService.setMenus(mockData);

        const state = menuBarService.getState();
        expect(state.data).toEqual(mockData);
    });

    test('Should support append into data ', () => {
        menuBarService.setMenus(mockData);
        menuBarService.append(
            {
                id: '5',
                name: 'd',
                icon: 'check',
            },
            '2'
        );
        const state = menuBarService.getState();
        expect(state.data).toEqual([
            {
                id: '1',
                name: 'root',
                data: [
                    {
                        id: '2',
                        name: 'a',
                        data: [
                            { id: '3', name: 'c' },
                            { id: '5', name: 'd', icon: 'check' },
                        ],
                    },
                    {
                        id: '4',
                        name: 'b',
                    },
                ],
            },
        ]);
    });

    test('Should support to append a data without data property', () => {
        menuBarService.setMenus(mockData);
        menuBarService.append(
            {
                id: '5',
                name: 'd',
                icon: 'check',
            },
            '4'
        );
        const state = menuBarService.getState();
        expect(state.data).toEqual([
            {
                id: '1',
                name: 'root',
                data: [
                    {
                        id: '2',
                        name: 'a',
                        data: [{ id: '3', name: 'c' }],
                    },
                    {
                        id: '4',
                        name: 'b',
                        data: [{ id: '5', name: 'd', icon: 'check' }],
                    },
                ],
            },
        ]);
    });

    test('Should log error when append failed', () => {
        logError(() =>
            menuBarService.append(
                {
                    id: '5',
                    name: 'd',
                    icon: 'check',
                },
                '2'
            )
        );
    });

    test('Should support to remove the specific menu', () => {
        menuBarService.setMenus(mockData);
        menuBarService.remove('4');
        const state = menuBarService.getState();
        expect(state.data).toEqual([
            {
                id: '1',
                name: 'root',
                data: [
                    {
                        id: '2',
                        name: 'a',
                        data: [{ id: '3', name: 'c' }],
                    },
                ],
            },
        ]);
    });

    test('Should log error when remove failed', () => {
        logError(() => menuBarService.remove('4'));
    });

    test('Should support to update the specific menu', () => {
        menuBarService.setMenus(mockData);
        menuBarService.update('3', {
            id: '3',
            icon: 'check',
            name: 'modifierc',
        });
        const result = menuBarService.getState();
        expect(result?.data).toEqual([
            {
                id: '1',
                name: 'root',
                data: [
                    {
                        id: '2',
                        name: 'a',
                        data: [{ id: '3', name: 'modifierc', icon: 'check' }],
                    },
                    {
                        id: '4',
                        name: 'b',
                    },
                ],
            },
        ]);
    });

    test('Should support to log error when update failed', () => {
        logError(() => menuBarService.update('4', {}));
    });

    test('Should support to get nested menu data', () => {
        menuBarService.setMenus(mockData);
        const currentMenu = menuBarService.getMenuById('3');
        expect(currentMenu).toEqual({
            id: '3',
            name: 'c',
        });

        const nilMenu = menuBarService.getMenuById('10');
        expect(nilMenu).toBeUndefined();
    });

    test('Should support to subscribe the onSelect event', () => {
        const mockFn = jest.fn();
        const mockMenuId = '1';
        menuBarService.onSelect(mockFn);

        expect(mockFn).not.toBeCalled();
        menuBarService.emit(MenuBarEvent.onSelect, mockMenuId);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockMenuId);
    });
});
