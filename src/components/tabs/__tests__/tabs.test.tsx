import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Tabs, tabsClassName } from '..';
import { ITabProps, tabItemActiveClassName, tabItemClassName } from '../tab';
import { dragToTargetNode } from '@test/utils';

const mockData: ITabProps[] = [
    {
        id: '1',
        name: 'test-title-1',
        renderPane: <div data-testid="test1">test1</div>,
        closable: true,
    },
    {
        id: '2',
        name: 'test-title-2',
        renderPane: <div data-testid="test2">test2</div>,
        closable: true,
    },
];

afterEach(cleanup);

function mockClientOffset(boundingRectSize: number, size: number) {
    // @ts-ignore
    HTMLDivElement.prototype.getBoundingClientRect = jest.fn(() => ({
        right: boundingRectSize,
        left: boundingRectSize,
    }));

    // @ts-ignore
    Event.prototype.clientX = size;
    // @ts-ignore
    Event.prototype.clientY = size;
}

describe('The Tabs Components', () => {
    test('The snapshot', () => {
        const component = renderer.create(<Tabs data={mockData} />);
        const tabs = component.toJSON();
        expect(tabs).toMatchSnapshot();
    });

    test('Should render nothing', () => {
        const { container } = render(<Tabs />);
        const header = container.querySelector('.mo-tabs__header');

        expect(header?.childElementCount).toBe(0);
    });

    test('Default type is line', () => {
        const { container } = render(
            <Tabs data={mockData} className="test-tabs" />
        );

        const body = container.querySelector(`.${tabsClassName}`)!;
        expect(body.classList).toContain('mo-tabs--line');
        expect(body.classList).toContain('test-tabs');
    });

    test('Should render card type', () => {
        const { container } = render(<Tabs type="card" data={mockData} />);

        const body = container.querySelector(`.${tabsClassName}`)!;
        expect(body.classList).toContain('mo-tabs--card');
    });

    test('Should active specific tab', () => {
        const { getByText } = render(<Tabs activeTab="1" data={mockData} />);
        const testHeader = getByText('test-title-1');
        expect(testHeader?.classList).toContain(tabItemActiveClassName);
    });

    test('Should trigger events', async () => {
        const mockSelectTabFn = jest.fn();
        const mockContextFn = jest.fn();
        const mockCloseFn = jest.fn();
        const mockMoveFn = jest.fn();
        const { getByText } = render(
            <Tabs
                activeTab="1"
                data={mockData}
                onSelectTab={mockSelectTabFn}
                onContextMenu={mockContextFn}
                onCloseTab={mockCloseFn}
                onMoveTab={mockMoveFn}
            />
        );

        const testHeader = getByText('test-title-1');
        fireEvent.click(testHeader);

        expect(mockSelectTabFn).toBeCalled();
        expect(mockSelectTabFn.mock.calls[0][0]).toBe('1');

        fireEvent.contextMenu(testHeader);
        expect(mockContextFn).toBeCalled();

        fireEvent.mouseOver(testHeader.querySelector('.mo-tab__item__op')!);
        await waitFor(() => {
            fireEvent.click(testHeader.querySelector('.codicon-close')!);
        });

        expect(mockCloseFn).toBeCalled();
        expect(mockCloseFn.mock.calls[0][0]).toBe('1');

        dragToTargetNode(getByText('test-title-2'), getByText('test-title-1'));
        expect(mockMoveFn).toBeCalled();
        expect(mockMoveFn.mock.calls[0][0]).toEqual([
            {
                id: '2',
                name: 'test-title-2',
                renderPane: <div data-testid="test2">test2</div>,
                closable: true,
            },
            {
                id: '1',
                name: 'test-title-1',
                renderPane: <div data-testid="test1">test1</div>,
                closable: true,
            },
        ]);
    });

    test('Should NOT onMove', () => {
        const originalBoundingClientRect =
            HTMLDivElement.prototype.getBoundingClientRect;
        //@ts-ignore
        const originalClientX = Event.prototype.clientX;
        //@ts-ignore
        const originalClientY = Event.prototype.clientY;

        const mockFn = jest.fn();
        const { container } = render(
            <Tabs activeTab="1" data={mockData} onMoveTab={mockFn} />
        );

        const tabs = container.querySelectorAll<HTMLDivElement>(
            `.${tabItemClassName}`
        )!;

        // drag up
        mockClientOffset(5, 10);
        dragToTargetNode(tabs[1], tabs[0]);
        expect(mockFn).not.toBeCalled();

        // drag down
        mockClientOffset(20, 10);
        dragToTargetNode(tabs[0], tabs[1]);
        expect(mockFn).not.toBeCalled();

        // drag to itself
        mockClientOffset(20, 10);
        dragToTargetNode(tabs[0], tabs[0]);
        expect(mockFn).not.toBeCalled();

        // reset mock function
        HTMLDivElement.prototype.getBoundingClientRect = originalBoundingClientRect;
        // @ts-ignore
        Event.prototype.clientX = originalClientX;
        // @ts-ignore
        Event.prototype.clientY = originalClientY;
    });
});
