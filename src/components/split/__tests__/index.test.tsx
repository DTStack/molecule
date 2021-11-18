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
import SplitPane from '../SplitPane';

afterEach(cleanup);

describe('Test The SplitPane Component', () => {
    let original;
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 500,
            height: 0,
        });
    });

    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
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
        fireEvent.mouseMove(wrapper, { clientX: 10, clientY: 10 });
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
        const mockFn = jest.fn();
        mockFn
            .mockImplementationOnce(() => ['keep', 'keep', 'pave'])
            .mockImplementationOnce(() => 'keep')
            .mockImplementationOnce(() => undefined);
        const { container } = render(
            <SplitPane
                role="split"
                sizes={['10%', '10px']}
                style={{ width: 500 }}
                onChange={jest.fn()}
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

            // Trigger the window resize event.
            fireEvent(window, new Event('resize'));
            await sleep(150);
        });

        let panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );
        expect(mockFn).toBeCalled();
        // normal strategy, to specify one pane to be pave
        expect(panes[0].style.width).toBe('50px');
        expect(panes[1].style.width).toBe('10px');
        expect(panes[2].style.width).toBe('940px');

        await act(async () => {
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                width: 1500,
                height: 0,
            });

            // Trigger the window resize event.
            fireEvent(window, new Event('resize'));
            await sleep(150);
        });

        panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );
        expect(mockFn).toBeCalled();
        // to specify global strategy to be keep
        expect(panes[0].style.width).toBe('50px');
        expect(panes[1].style.width).toBe('10px');
        expect(panes[2].style.width).toBe('940px');

        await act(async () => {
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                width: 2000,
                height: 0,
            });

            // Trigger the window resize event.
            fireEvent(window, new Event('resize'));
            await sleep(150);
        });

        panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );
        expect(mockFn).toBeCalled();
        // abnormal strategy, same as returns 'pave', we don't recommend to set it
        expect(panes[0].style.width).toBe(`${2000 / 3}px`);
        expect(panes[1].style.width).toBe(`${2000 / 3}px`);
        expect(panes[2].style.width).toBe(`${2000 / 3}px`);
    });
});
