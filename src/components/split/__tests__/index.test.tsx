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
    const observerFnCollection: any[] = [];
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 500,
            height: 0,
        });

        global.ResizeObserver = jest.fn().mockImplementation((fn) => {
            observerFnCollection.push(fn);
            return {
                observe: jest.fn(),
                unobserve: jest.fn(),
                disconnect: jest.fn(),
            };
        });
    });

    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
        observerFnCollection.length = 0;
    });

    test('Match Snapshot', () => {
        const { asFragment } = render(
            <SplitPane sizes={[20, 20]} onChange={jest.fn()}>
                <div>1</div>
                <div>2</div>
            </SplitPane>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Match Snapshot in horizontal', () => {
        const { asFragment } = render(
            <SplitPane sizes={[20, 20]} split="horizontal" onChange={jest.fn()}>
                <div>1</div>
                <div>2</div>
            </SplitPane>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should NOT resizable', () => {
        const { container } = render(
            <SplitPane
                sizes={[20, 20]}
                allowResize={false}
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
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
                allowResize={[false, true]}
                onChange={jest.fn()}
            >
                <div>1</div>
                <div>2</div>
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
                sizes={['10%', '10px']}
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
        fireEvent.mouseDown(sashs[2]);
        fireEvent.mouseMove(wrapper, { screenX: 10, screenY: 10 });
        fireEvent.mouseUp(wrapper);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([50, 20, 430]);
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
        const mockFn = jest
            .fn()
            .mockImplementationOnce(() => ['keep', 'keep', 'pave'])
            .mockImplementationOnce(() => 'keep')
            .mockImplementationOnce(() => undefined);
        const mockChange = jest.fn();
        render(
            <SplitPane
                role="split"
                sizes={['10%', '10px']}
                style={{ width: 500 }}
                onChange={mockChange}
                onResizeStrategy={mockFn}
            >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </SplitPane>
        );

        await act(async () => {
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                width: 1000,
                height: 0,
            });
            observerFnCollection.forEach((f) => f());
            await sleep(150);
        });

        expect(mockFn).toBeCalledTimes(1);
        // normal strategy, to specify one pane to be pave
        expect(mockChange.mock.calls[0][0]).toEqual([50, 10, 940]);

        await act(async () => {
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                width: 1500,
                height: 0,
            });
            observerFnCollection.forEach((f) => f());
            await sleep(150);
        });

        expect(mockFn).toBeCalledTimes(2);
        // to specify global strategy to be keep
        expect(mockChange.mock.calls[1][0]).toEqual([50, 10, 440]);

        await act(async () => {
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                width: 2000,
                height: 0,
            });
            observerFnCollection.forEach((f) => f());
            await sleep(150);
        });

        expect(mockFn).toBeCalledTimes(3);
        // abnormal strategy, same as returns 'pave', we don't recommend to set it
        expect(mockChange.mock.calls[2][0]).toEqual([
            2000 / 3,
            2000 / 3,
            2000 / 3,
        ]);
    });

    test('Should have limited sizes', () => {
        const mockFn = jest.fn();
        const { container, getByRole } = render(
            <SplitPane
                role="split"
                sizes={['10%', '10px']}
                style={{ width: 500 }}
                onChange={mockFn}
            >
                <Pane maxSize={100} minSize="20px">
                    <div>1</div>
                </Pane>
                <Pane maxSize={50}>
                    <div>2</div>
                </Pane>
                <div>3</div>
            </SplitPane>
        );

        const wrapper = getByRole('split');
        const sashs = container.querySelectorAll(`.${sashItemClassName}`);
        fireEvent.mouseDown(sashs[1]);
        fireEvent.mouseMove(wrapper, { screenX: -10, screenY: -10 });

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual([40, 20, 440]);

        fireEvent.mouseMove(wrapper, { screenX: -20, screenY: -20 });
        expect(mockFn.mock.calls[1][0]).toEqual([30, 30, 440]);

        fireEvent.mouseMove(wrapper, { screenX: -30, screenY: -30 });
        expect(mockFn.mock.calls[2][0]).toEqual([20, 40, 440]);

        // Invalid mouseMove will reset sizes by the prev valid sizes
        fireEvent.mouseMove(wrapper, { screenX: -40, screenY: -40 });
        expect(mockFn.mock.calls[3][0]).toEqual([20, 40, 440]);

        fireEvent.mouseUp(wrapper);
    });
});
