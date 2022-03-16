import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    ITabComponent,
    Tab,
    tabItemActiveClassName,
    tabItemClassName,
} from '../tab';
import { dragToTargetNode } from '@test/utils';

const tabData = {
    id: '1',
    index: 1,
    name: 'test',
};

function DTab(args: Partial<ITabComponent>) {
    return (
        <DndProvider backend={HTML5Backend} context={window}>
            <Tab tab={tabData} {...args} />
        </DndProvider>
    );
}

afterEach(cleanup);

describe('The Tab Component', () => {
    test('Should render name in tab', () => {
        const { container } = render(<DTab />);
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;
        expect(wrapper.innerHTML).toContain('test');
    });

    test('Should render icon in tab', () => {
        const { container, getByTestId, rerender } = render(
            <DTab tab={{ ...tabData, icon: 'placeholder' }} />
        );

        expect(container.querySelector('.codicon-placeholder')).not.toBeNull();

        rerender(<DTab tab={{ ...tabData, icon: <i data-testid="icon" /> }} />);
        expect(getByTestId('icon')).toBeInTheDocument();
    });

    test('Should active classNames when active tab', () => {
        const { container } = render(<DTab active />);
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;
        expect(wrapper.classList).toContain(tabItemActiveClassName);
    });

    test('Should render close icon', async () => {
        const mockFn = jest.fn();
        const { container } = render(<DTab onCloseTab={mockFn} />);
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;

        // text element doesn't count
        expect(wrapper.childElementCount).toBe(1);

        fireEvent.mouseOver(wrapper);
        fireEvent.click(wrapper.children[0].firstChild!);

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toBe(tabData.id);
    });

    test('Should trigger contextmenu event', () => {
        const mockFn = jest.fn();
        const { container } = render(<DTab onContextMenu={mockFn} />);
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;

        fireEvent.contextMenu(wrapper);

        expect(mockFn).toBeCalled();
    });

    test('Should render support to sort via drag and drop', () => {
        const mockFn = jest.fn();
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <Tab onDrag={mockFn} tab={tabData} />
                <Tab onDrag={mockFn} tab={{ id: '2', name: 'test2' }} />
                <Tab onDrag={mockFn} tab={{ id: '3', name: 'test3' }} />
            </DndProvider>
        );

        const tabs = container.querySelectorAll<HTMLDivElement>(
            `.${tabItemClassName}`
        )!;

        // Tab doesn't distinguish between source and target
        dragToTargetNode(tabs[1], tabs[1]);
        expect(mockFn).toBeCalled();

        expect(mockFn.mock.calls[0][0]).toEqual({ id: '2', name: 'test2' });
        expect(mockFn.mock.calls[0][1]).toEqual({ id: '2', name: 'test2' });
    });

    test('Support to render status icon', () => {
        const { container, rerender, getByTestId } = render(
            <DTab tab={{ ...tabData, status: 'edited' }} />
        );

        expect(
            container.querySelector('.codicon-primitive-dot')
        ).not.toBeNull();

        // @ts-ignore
        rerender(<DTab tab={{ ...tabData, status: 'test' }} />);

        // render a close icon in default
        expect(container.querySelector('.codicon-close')).not.toBeNull();

        rerender(
            <DTab
                tab={{
                    ...tabData,
                    status: () => <i data-testid="test-icon">test</i>,
                }}
            />
        );

        expect(getByTestId('test-icon')).toBeInTheDocument();
    });

    test('Should NOT render close icon when closable is false', () => {
        const { container, rerender } = render(<DTab tab={{ ...tabData }} />);

        // There is a close icon when didn't specify the closable attr
        expect(container.querySelector('.codicon-close')).not.toBeNull();

        rerender(<DTab tab={{ ...tabData, closable: false }} />);
        expect(container.querySelector('.codicon-close')).toBeNull();

        rerender(<DTab tab={{ ...tabData, closable: true }} />);
        expect(container.querySelector('.codicon-close')).not.toBeNull();
    });
});
