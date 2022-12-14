import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { ScrollBar, DirectionKind, IScrollRef } from '../index';
import {
    scrollBarClassName,
    scrollBarThumbClassName,
    scrollBarTrackClassName,
    scrollBarTrackHiddenClassName,
} from '../base';
import '@testing-library/jest-dom';

const length = 200;

// to make sure the ScrollBar component not be mocked by global
jest.mock('mo/components/scrollBar', () => {
    const originalModule = jest.requireActual('mo/components/scrollBar');
    return {
        ...originalModule,
    };
});

describe('The ScrollBar Component', () => {
    beforeEach(() => {
        // to make sure each ScrollBar is supported to scrolled
        Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
            configurable: true,
            value: 500,
        });
    });

    let original;
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = jest.fn(() => ({
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        }));

        HTMLElement.prototype.scrollTo = jest.fn();
    });

    let originalRFA;
    beforeEach(() => {
        originalRFA = window.requestAnimationFrame;
        window.requestAnimationFrame = jest.fn((cb) => {
            cb(1);
            return 1;
        });
    });

    afterEach(cleanup);
    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
        window.requestAnimationFrame = originalRFA;
    });

    test('Match Snapshot', () => {
        const { asFragment } = render(
            <ScrollBar>
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('Match Horizontal Snapshot', () => {
        const { asFragment } = render(
            <ScrollBar direction={DirectionKind.horizontal}>
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('Should support click track', () => {
        const scrollFn = jest.fn();
        const { container } = render(
            <ScrollBar
                style={{ height: 200, width: 100 }}
                inactiveHidden={false}
                onScroll={scrollFn}
                onScrollStart={scrollFn}
                onScrollEnd={scrollFn}
            >
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        const track = container.querySelector<HTMLDivElement>(
            `.${scrollBarTrackClassName}`
        );

        fireEvent.click(track!, { clientY: 100 });

        expect(scrollFn).toBeCalledTimes(3);
    });

    test('Should support wheel event on wrapper', () => {
        const scrollFn = jest.fn();
        const { container } = render(
            <ScrollBar
                style={{ height: 200, width: 100 }}
                inactiveHidden={false}
                onScroll={scrollFn}
                onScrollStart={scrollFn}
                onScrollEnd={scrollFn}
            >
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        const wrapper = container.querySelector(`.${scrollBarClassName}`);

        fireEvent.wheel(wrapper!);

        waitFor(() => {
            expect(scrollFn).toBeCalledTimes(3);
        });
    });

    test('Should support mousemove', () => {
        const scrollFn = jest.fn();
        const { container } = render(
            <ScrollBar
                style={{ height: 200, width: 100 }}
                inactiveHidden={false}
                onScroll={scrollFn}
                onScrollStart={scrollFn}
                onScrollEnd={scrollFn}
            >
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        const thumb = container.querySelector(`.${scrollBarThumbClassName}`);

        fireEvent.mouseDown(thumb!);

        expect(scrollFn).toBeCalledTimes(1);
        // mousemove would disable the use-select
        expect(document.body.style.userSelect).toBe('none');

        fireEvent.mouseMove(window);
        expect(scrollFn).toBeCalledTimes(2);

        fireEvent.mouseUp(window);
        expect(scrollFn).toBeCalledTimes(3);
        // reset the user-select after mouseup
        expect(document.body.style.getPropertyValue('user-select')).toBe('');
    });

    test('Should visible when mouse over', () => {
        const { container } = render(
            <ScrollBar style={{ height: 200, width: 100 }}>
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        const track = container.querySelector(`.${scrollBarTrackClassName}`);
        expect(track?.className).toContain(scrollBarTrackHiddenClassName);

        const wrapper = container.querySelector(`.${scrollBarClassName}`)!;

        fireEvent.mouseEnter(wrapper);

        waitFor(() => {
            expect(track?.className).not.toContain(
                scrollBarTrackHiddenClassName
            );
        });

        fireEvent.mouseLeave(wrapper);

        waitFor(() => {
            expect(track?.className).toContain(scrollBarTrackHiddenClassName);
        });
    });

    test('Should support to get instance function from ref', () => {
        const ref = React.createRef<IScrollRef>();

        (HTMLElement.prototype.getBoundingClientRect as jest.Mock)
            .mockClear()
            .mockImplementationOnce(() => ({
                height: 100,
            }))
            .mockImplementationOnce(() => ({
                height: 200,
            }))
            .mockImplementationOnce(() => ({
                height: 100,
            }));

        const { container } = render(
            <ScrollBar
                ref={ref}
                style={{ height: 200, width: 100 }}
                inactiveHidden={false}
            >
                {new Array(length).fill(1).map((_, idx) => (
                    <div key={idx}>{idx}</div>
                ))}
            </ScrollBar>
        );

        waitFor(() => {
            expect(ref.current?.scrollTo).toBeInstanceOf(Function);
        });

        ref.current?.scrollTo(100);

        expect(
            container.querySelector<HTMLDivElement>(
                `.${scrollBarThumbClassName}`
            )?.style.top
        ).toBe('20px');
    });
});
