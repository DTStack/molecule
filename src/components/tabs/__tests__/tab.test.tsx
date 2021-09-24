import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
    ITabEvent,
    ITabProps,
    Tab,
    tabItemActiveClassName,
    tabItemClassName,
} from '../tab';
import DragAndDrop from '../dragAndDrop';
import { dragToTargetNode } from '@test/utils';

const tabData = {
    id: '1',
    active: false,
    index: 1,
    name: 'test',
};

function DTab(args: ITabProps & ITabEvent) {
    return (
        <DragAndDrop>
            <Tab {...tabData} {...args} />
        </DragAndDrop>
    );
}

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

afterEach(cleanup);

describe('The Tab Component', () => {
    test('Should render name in tab', () => {
        const { container } = render(<DTab />);
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;
        expect(wrapper.innerHTML).toContain('test');
    });

    test('Should render icon in tab', () => {
        const { container, getByTestId, rerender } = render(
            <DTab icon="placeholder" />
        );

        expect(container.querySelector('.codicon-placeholder')).not.toBeNull();

        rerender(<DTab icon={<i data-testid="icon" />} />);
        expect(getByTestId('icon')).toBeInTheDocument();
    });

    test('Should active classNames when active tab', () => {
        const { container } = render(<DTab active />);
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;
        expect(wrapper.classList).toContain(tabItemActiveClassName);
    });

    test('Should render extra when editable and closable', async () => {
        const mockFn = jest.fn();
        const { container } = render(
            <DTab editable closable onCloseTab={mockFn} />
        );
        const wrapper = container.querySelector(`.${tabItemClassName}`)!;

        expect(wrapper.childElementCount).toBe(3);

        fireEvent.mouseOver(wrapper);
        fireEvent.click(wrapper.children[1].firstChild!);
        fireEvent.click(wrapper.children[2].firstChild!);

        await waitFor(() => {
            expect(mockFn).toBeCalledTimes(2);
            expect(mockFn.mock.calls[0][0]).toBe(tabData.id);
        });

        fireEvent.mouseOut(wrapper);
        fireEvent.click(wrapper.children[1].firstChild!);
        mockFn.mockClear();
        await waitFor(() => {
            expect(mockFn).not.toBeCalled();
        });
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
            <DragAndDrop>
                <Tab onMoveTab={mockFn} id="1" name="test1" index={1} />
                <Tab onMoveTab={mockFn} id="2" name="test2" index={2} />
                <Tab onMoveTab={mockFn} id="3" name="test3" index={3} />
            </DragAndDrop>
        );

        const tabs = container.querySelectorAll<HTMLDivElement>(
            `.${tabItemClassName}`
        )!;

        // Same source and target will do nothing;
        dragToTargetNode(tabs[1], tabs[1]);
        expect(mockFn).not.toBeCalled();

        // normal
        dragToTargetNode(tabs[1], tabs[0]);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(2);
        expect(mockFn.mock.calls[0][1]).toBe(1);
    });

    test('Should do nothing when drag up', () => {
        const originalBoundingClientRect =
            HTMLDivElement.prototype.getBoundingClientRect;
        //@ts-ignore
        const originalClientX = Event.prototype.clientX;
        //@ts-ignore
        const originalClientY = Event.prototype.clientY;

        const mockFn = jest.fn();
        const { container } = render(
            <DragAndDrop>
                <Tab onMoveTab={mockFn} id="1" name="test1" index={1} />
                <Tab onMoveTab={mockFn} id="2" name="test2" index={2} />
                <Tab onMoveTab={mockFn} id="3" name="test3" index={3} />
            </DragAndDrop>
        );

        const tabs = container.querySelectorAll<HTMLDivElement>(
            `.${tabItemClassName}`
        )!;

        mockClientOffset(5, 10);
        mockFn.mockClear();
        dragToTargetNode(tabs[1], tabs[0]);
        expect(mockFn).not.toBeCalled();

        // reset mock function
        HTMLDivElement.prototype.getBoundingClientRect = originalBoundingClientRect;
        // @ts-ignore
        Event.prototype.clientX = originalClientX;
        // @ts-ignore
        Event.prototype.clientY = originalClientY;
    });

    test('Should do nothing when drag down', () => {
        const originalBoundingClientRect =
            HTMLDivElement.prototype.getBoundingClientRect;
        //@ts-ignore
        const originalClientX = Event.prototype.clientX;
        //@ts-ignore
        const originalClientY = Event.prototype.clientY;

        const mockFn = jest.fn();
        const { container } = render(
            <DragAndDrop>
                <Tab onMoveTab={mockFn} id="1" name="test1" index={1} />
                <Tab onMoveTab={mockFn} id="2" name="test2" index={2} />
                <Tab onMoveTab={mockFn} id="3" name="test3" index={3} />
            </DragAndDrop>
        );

        const tabs = container.querySelectorAll<HTMLDivElement>(
            `.${tabItemClassName}`
        )!;

        mockClientOffset(20, 10);
        mockFn.mockClear();
        dragToTargetNode(tabs[0], tabs[1]);
        expect(mockFn).not.toBeCalled();

        // reset mock function
        HTMLDivElement.prototype.getBoundingClientRect = originalBoundingClientRect;
        // @ts-ignore
        Event.prototype.clientX = originalClientX;
        // @ts-ignore
        Event.prototype.clientY = originalClientY;
    });
});
