import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ID_ACTIVITY_BAR } from '@dtinsight/molecule-common';
import type { IActivityBarItem } from 'mo/workbench';
import { itemCheckedClassName, itemClassName } from '../base';
import ActivityBar from '../activityBar';

const mockData: IActivityBarItem[] = [
    {
        id: 'test',
        name: 'test',
        icon: 'account',
        type: 'global',
    },
    {
        id: 'test2',
        name: 'test2',
        icon: 'settings-gear',
        type: 'global',
    },
    {
        id: 'test3',
        name: 'test3',
        icon: 'debug',
    },
];

describe('The ActivityBar Component', () => {
    test('match the snapshot', () => {
        const component = renderer.create(<ActivityBar data={mockData} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to specify the selected one', () => {
        const { container } = render(
            <ActivityBar data={mockData} selected="test3" />
        );

        const selectedOne = container.querySelector('#test3');
        expect(selectedOne?.classList).toContain(itemCheckedClassName);

        const unselected = container.querySelector('#test');
        expect(unselected?.classList).not.toContain(itemCheckedClassName);
    });

    test('Should trigger onClick event and onChange event', () => {
        const mockClickFn = jest.fn();
        const mockChangeFn = jest.fn();
        const { container } = render(
            <ActivityBar
                data={mockData}
                onClick={mockClickFn}
                onChange={mockChangeFn}
            />
        );

        const item = container.querySelector('#test3')!;
        const globalItem = container.querySelector('#test')!;

        fireEvent.click(item);

        expect(mockChangeFn).toBeCalledTimes(1);
        expect(mockClickFn).toBeCalledTimes(1);

        fireEvent.click(globalItem);

        // global item won't trigger onChange
        expect(mockChangeFn).toBeCalledTimes(1);
        expect(mockClickFn).toBeCalledTimes(2);

        expect(mockClickFn.mock.calls[0][0]).toBe('test3');
        expect(mockClickFn.mock.calls[0][1]).toEqual(
            expect.objectContaining({
                id: 'test3',
                name: 'test3',
                icon: 'debug',
            })
        );

        expect(mockChangeFn.mock.calls[0][0]).toBeUndefined();
        expect(mockChangeFn.mock.calls[0][1]).toBe('test3');
    });

    test('Should support to show contextMenu when not above item', () => {
        const originalFunc = document.elementsFromPoint;
        const mockFn = jest.fn();
        const contextMenus = [
            {
                id: 'menus',
                name: 'menus',
                icon: 'check',
            },
        ];
        const { container, getByRole } = render(
            <ActivityBar
                data={mockData}
                contextMenu={contextMenus}
                onContextMenuClick={mockFn}
            />
        );

        document.elementsFromPoint = jest.fn(() => {
            return [document.createElement('div')];
        });

        fireEvent.contextMenu(container.querySelector(`#${ID_ACTIVITY_BAR}`)!);

        const menus = getByRole('menu');
        expect(menus).toBeInTheDocument();

        fireEvent.click(menus.firstElementChild!);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][1]).toEqual(
            expect.objectContaining(contextMenus[0])
        );

        document.elementsFromPoint = originalFunc;
    });

    test('Should show different contextMenu when rightClick above item', () => {
        const originalFunc = document.elementsFromPoint;
        const contextMenus = [
            {
                id: 'menus',
                name: 'menus',
                icon: 'check',
            },
        ];
        const { container, getByRole } = render(
            <ActivityBar data={mockData} contextMenu={contextMenus} />
        );

        // mock elementsFromPoint to make ensure current cursor above the item
        document.elementsFromPoint = jest.fn(() => {
            const div = document.createElement('div');
            div.id = 'menus';
            div.classList.add(itemClassName);
            return [div];
        });

        fireEvent.contextMenu(container.querySelector(`#${ID_ACTIVITY_BAR}`)!);

        const menus = getByRole('menu');
        expect(menus).toBeInTheDocument();

        expect(menus.firstElementChild).not.toBeNull();
        expect(
            menus.firstElementChild!.querySelector('.codicon-check')
        ).toBeInTheDocument();
        expect(getByRole('separator')).toBeInTheDocument();

        document.elementsFromPoint = originalFunc;
    });
});
