import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Tabs, tabsClassName, tabsContentActiveClassName } from '..';
import { ITabProps, tabItemActiveClassName } from '../tab';
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

describe('The Tabs Components', () => {
    test('The snapshot', () => {
        const component = renderer.create(<Tabs data={mockData} />);
        const tabs = component.toJSON();
        expect(tabs).toMatchSnapshot();
    });

    test('Should render nothing', () => {
        const { container } = render(<Tabs />);
        const content = container.querySelector('.mo-tabs__content');
        const header = container.querySelector('.mo-tabs__header');

        expect(content?.childElementCount).toBe(0);
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

    test('Should support to renderPane via function', () => {
        const data = mockData.concat();
        data.push({
            id: '3',
            name: 'test-title-3',
            renderPane: () => <div data-testid="test3">test3</div>,
            closable: true,
        });
        const { getByTestId } = render(<Tabs data={data} />);
        expect(getByTestId('test3')).toBeInTheDocument();
    });

    test('Should render card type', () => {
        const { container } = render(<Tabs type="card" data={mockData} />);

        const body = container.querySelector(`.${tabsClassName}`)!;
        expect(body.classList).toContain('mo-tabs--card');
    });

    test('Should active specific tab', () => {
        const { getByText, getByTestId } = render(
            <Tabs activeTab="1" data={mockData} />
        );
        const testHeader = getByText('test-title-1');
        const testContent = getByTestId('test1').parentElement;
        expect(testHeader?.classList).toContain(tabItemActiveClassName);
        expect(testContent?.classList).toContain(tabsContentActiveClassName);
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
});
