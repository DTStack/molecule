import 'reflect-metadata';
import { container } from 'tsyringe';
import { IMenuBarService, MenuBarService } from '../menuBarService';

describe('Test menuBarService', () => {
    const menuBarService = container.resolve<IMenuBarService>(MenuBarService);
    const builtInMenuData = [
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

    test('Test menuBarService Class instance', () => {
        expect(menuBarService).not.toBeUndefined();
        expect(menuBarService.getState().data).not.toBeUndefined();
    });

    test('Test menuBarService init menuBarData', () => {
        menuBarService.initMenu(builtInMenuData);
        const result = menuBarService.getState();
        expect(result.data).toEqual(builtInMenuData);
    });

    test('Test menuBarService add for menuBar', () => {
        menuBarService.add(
            {
                id: '5',
                name: 'd',
                icon: 'check',
            },
            '2'
        );
        const result = menuBarService.getState();
        expect(result?.data).toEqual([
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
    test('Test menuBarService remove for menuBar', () => {
        menuBarService.remove('5');
        const result = menuBarService.getState();
        expect(result?.data).toEqual([
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
        ]);
    });
    test('Test menuBarService update for menuBar', () => {
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
    test('Test menuBarService getMenuById for menuBar', () => {
        const currentMenu = menuBarService.getMenuById('3');
        expect(currentMenu).toEqual({
            id: '3',
            name: 'modifierc',
            icon: 'check',
        });
    });

    test('Test menuBarService addRootMenu for menuBar', () => {
        menuBarService.addRootMenu({ id: '10', name: 'root10' });
        const result = menuBarService.getState();
        expect(result.data).toEqual([
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
            {
                id: '10',
                name: 'root10',
            },
        ]);
    });
});
