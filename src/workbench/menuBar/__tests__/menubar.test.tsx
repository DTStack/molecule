import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import MenuBar, { actionClassName } from '../menuBar';
import { MenuBarMode } from 'mo/model/workbench/layout';
import { sleep } from '@test/utils';

const TEST_ID = 'test-id';
const TEST_DATA = 'test-data';
const menuData = [
    {
        id: TEST_ID,
        name: TEST_ID,
        data: [
            {
                id: 'New File',
                name: 'New File',
            },
            {
                id: 'OpenFile',
                name: 'Open',
            },
            {
                id: TEST_DATA,
                name: TEST_DATA,
            },
        ],
    },
];
const TEST_FN: jest.Mock<any, any> = jest.fn();

describe('Test MenuBar Component', () => {
    afterEach(() => {
        cleanup();
        document.body.innerHTML = '';
    });

    test('Match the MenuBar snapshot', () => {
        const component = renderer.create(
            <MenuBar data={menuData} onClick={TEST_FN} />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to set status for item', () => {
        const { container, queryByText, getByRole } = render(
            <MenuBar data={menuData} onClick={TEST_FN} />
        );
        const component = container.firstElementChild!
            .firstElementChild as HTMLDivElement;
        expect(component!.className).toContain(actionClassName);

        fireEvent.click(component);
        const span = queryByText(TEST_ID) as HTMLSpanElement;
        expect(span).not.toBeNull();

        const menuBar = getByRole('menu').firstElementChild as HTMLLIElement;
        expect(menuBar).toBeInTheDocument();
    });

    test('Should support to get the focus element', () => {
        const mockFn = jest.fn();
        render(
            <MenuBar
                data={menuData}
                onClick={TEST_FN}
                updateFocusinEle={mockFn}
            />
        );

        const input = document.createElement('input');
        document.body.append(input);

        input.focus();

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(input);
    });

    test('Match the snapshot of menuBar in horizontal mode', () => {
        const component = renderer.create(
            <MenuBar
                data={menuData}
                onClick={TEST_FN}
                mode={MenuBarMode.horizontal}
            />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to execute the onClick method in vertical mode', () => {
        const mockFn = jest.fn();
        const { container, getByText } = render(
            <MenuBar
                data={menuData}
                onClick={mockFn}
                mode={MenuBarMode.vertical}
            />
        );
        const component = container.firstElementChild!
            .firstElementChild as HTMLDivElement;

        fireEvent.click(component);
        const elem = getByText(TEST_DATA);
        fireEvent.click(elem);
        expect(mockFn).toBeCalled();
    });

    test('Should support to execute the onClick method in horizontal mode', () => {
        const mockFn = jest.fn();
        const { container, getByText } = render(
            <MenuBar
                data={menuData}
                onClick={mockFn}
                mode={MenuBarMode.horizontal}
            />
        );
        const component = container.firstElementChild!
            .firstElementChild as HTMLDivElement;

        fireEvent.click(component);
        const elem = getByText(TEST_DATA);
        fireEvent.click(elem);
        expect(mockFn).toBeCalled();
    });

    test('Should support to hide the menu by clicking the menu item at the root', async () => {
        const { getByText } = render(
            <MenuBar
                data={menuData}
                onClick={TEST_FN}
                mode={MenuBarMode.horizontal}
            />
        );
        const elem = getByText(TEST_ID);
        const liElem = elem.closest('li');
        const elemArr = liElem ? [liElem] : [];
        const spanElem = getByText(TEST_DATA);
        const ulElem = spanElem.closest('ul');
        const originalFunc = document.elementsFromPoint;
        document.elementsFromPoint = jest.fn(() => elemArr);

        await act(async () => {
            fireEvent.click(elem);
            await sleep(300);
        });
        expect(ulElem?.style.opacity).toBe('1');

        await act(async () => {
            fireEvent.click(elem);
            await sleep(300);
        });
        expect(ulElem?.style.opacity).toBe('0');

        document.elementsFromPoint = originalFunc;
    });

    test('Should support to hide menu by clicking the menu item of the submenu', async () => {
        const { getByText } = render(
            <MenuBar
                data={menuData}
                onClick={TEST_FN}
                mode={MenuBarMode.horizontal}
            />
        );
        const elem = getByText(TEST_ID);
        const liElem = elem.closest('li');
        const elemArr = liElem ? [liElem] : [];
        const spanElem = getByText(TEST_DATA);
        const ulElem = spanElem.closest('ul');
        const originalFunc = document.elementsFromPoint;
        document.elementsFromPoint = jest.fn(() => elemArr);

        fireEvent.click(elem);
        await waitFor(() => {
            expect(ulElem?.style.opacity).toBe('1');
        });

        fireEvent.click(spanElem);
        await waitFor(() => {
            expect(ulElem?.style.opacity).toBe('0');
        });

        document.elementsFromPoint = originalFunc;
    });

    test('Should support to execute the clearAutoDisplay method in HorizontalView', async () => {
        const { getByText } = render(
            <MenuBar
                data={menuData}
                onClick={TEST_FN}
                mode={MenuBarMode.horizontal}
            />
        );
        const elem = getByText(TEST_ID);
        const liElem = elem.closest('li');
        const elemArr = liElem ? [liElem] : [];
        const spanElem = getByText(TEST_DATA);
        const ulElem = spanElem.closest('ul');
        const originalFunc = document.elementsFromPoint;
        document.elementsFromPoint = jest.fn(() => elemArr);

        fireEvent.click(elem);
        await waitFor(() => {
            expect(ulElem?.style.opacity).toBe('1');
        });

        fireEvent.click(document.body);
        await waitFor(() => {
            expect(ulElem?.style.opacity).toBe('0');
        });

        document.elementsFromPoint = originalFunc;
    });
});
