import { sleep } from '@test/utils';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import {
    paneItemClassName,
    sashDisabledClassName,
    sashHoverClassName,
    sashItemClassName,
} from '../base';
import Pane from '../pane';
import SplitPane from '../SplitPane';

afterEach(cleanup);

describe('Test The SplitPane Component', () => {
    let original;
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 500,
            height: 500,
        });
        global.ResizeObserver = jest.fn().mockImplementation((fn) => {
            fn();
            return {
                observe: jest.fn(),
                unobserve: jest.fn(),
                disconnect: jest.fn(),
            };
        });
    });

    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
    });

    test('Match Snapshot', () => {
        const { asFragment } = render(
            <SplitPane sizes={[100, 200]} onChange={jest.fn()}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Match Snapshot in horizontal', () => {
        const { asFragment } = render(
            <SplitPane
                sizes={[100, 200]}
                split="horizontal"
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should NOT resizable', () => {
        const { container } = render(
            <SplitPane
                sizes={[100, 200]}
                showSashes={false}
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );

        const sashs = container.querySelectorAll(`.${sashItemClassName}`);

        expect(sashs.length).toBe(2);
        expect(
            Array.prototype.every.call(sashs, (sash: Element) =>
                sash.classList.contains(sashDisabledClassName)
            )
        ).toBeTruthy();
    });

    test('Should support each resizable', () => {
        const { container } = render(
            <SplitPane
                sizes={[20, 20]}
                showSashes={[false, true]}
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );

        const sashs = container.querySelectorAll(`.${sashItemClassName}`);

        expect(sashs.length).toBe(2);
        expect(sashs[0].classList.contains(sashDisabledClassName)).toBeTruthy();
        expect(sashs[1].classList.contains(sashDisabledClassName)).toBeFalsy();
    });

    test('Should convert "auto" and "xxxpx" and "xxx%" to absolute number ', () => {
        const { container } = render(
            <SplitPane
                sizes={['10%', '10px']}
                style={{ width: 500 }}
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );

        const panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );

        expect(panes.length).toBe(3);
        expect(panes[0].style.width).toBe('50px');
        expect(panes[1].style.width).toBe('10px');
        expect(panes[2].style.width).toBe('440px');
    });

    test('Should support to adjust panes', () => {
        const mockFn = jest.fn();
        const { container, getByRole } = render(
            <SplitPane
                role="split"
                sizes={[100, 200]}
                style={{ width: 500 }}
                onChange={mockFn}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );

        const wrapper = getByRole('split');
        const sashs = container.querySelectorAll(`.${sashItemClassName}`);
        fireEvent.mouseDown(sashs[0], { screenX: 0 });
        fireEvent.mouseMove(wrapper, { screenX: 50 });
        fireEvent.mouseUp(wrapper);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([150, 150, 200]);
    });

    test('Should with hover className in sashs', async () => {
        const { container } = render(
            <SplitPane
                role="split"
                sizes={['10%', '10px']}
                style={{ width: 500 }}
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );

        const sashs = container.querySelectorAll(`.${sashItemClassName}`);

        await act(async () => {
            fireEvent.mouseEnter(sashs[1]);
            await sleep(150);
        });

        expect(sashs[0].classList).not.toContain(sashHoverClassName);
        expect(sashs[1].classList).toContain(sashHoverClassName);

        fireEvent.mouseLeave(sashs[1]);
        expect(sashs[1].classList).not.toContain(sashHoverClassName);
    });

    test('Should support to resize', async () => {
        const mockFn = jest.fn();
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 1000,
            height: 500,
        });
        const { container } = render(
            <SplitPane role="split" sizes={[250, 250]} onChange={mockFn}>
                <div>1</div>
                <div>2</div>
            </SplitPane>
        );

        const panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );

        expect(panes.length).toBe(2);
        expect(panes[0].style.width).toBe('500px');
        expect(panes[1].style.width).toBe('500px');
    });

    test('Only the specified panel can be resized', async () => {
        const mockFn = jest.fn();
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 1000,
            height: 500,
        });
        const { container } = render(
            <SplitPane
                role="split"
                sizes={[250, 250]}
                allowResize={[false]}
                onChange={mockFn}
            >
                <div>1</div>
                <div>2</div>
            </SplitPane>
        );

        const panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );

        expect(panes.length).toBe(2);
        expect(panes[0].style.width).toBe('250px');
        expect(panes[1].style.width).toBe('750px');
    });

    test('Should have limited sizes', () => {
        const mockFn = jest.fn();
        const { container, getByRole } = render(
            <SplitPane role="split" sizes={[100, 200]} onChange={mockFn}>
                <Pane maxSize={150} minSize="50px">
                    <div>1</div>
                </Pane>
                <Pane maxSize={280}>
                    <div>2</div>
                </Pane>
                <div>3</div>
            </SplitPane>
        );

        const wrapper = getByRole('split');
        const sashs = container.querySelectorAll(`.${sashItemClassName}`);
        fireEvent.mouseDown(sashs[0], { screenX: 0 });
        fireEvent.mouseMove(wrapper, { screenX: -60 });

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([50, 250, 200]);

        fireEvent.mouseMove(wrapper, { screenX: 1000 });
        expect(mockFn.mock.calls[1][0]).toEqual([150, 150, 200]);

        fireEvent.mouseUp(wrapper);
    });
});
