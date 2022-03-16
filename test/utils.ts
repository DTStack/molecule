import {
    Logger as logger,
    getElementClientCenter,
} from '@dtinsight/molecule-common';
import { fireEvent } from '@testing-library/react';

/**
 * Expect the `logger.error` method to be called when exec action
 */
export function expectLoggerErrorToBeCalled(action: () => void) {
    const originalLog = logger.error;
    logger.error = jest.fn();

    action();
    expect(logger.error).toBeCalled();

    logger.error = originalLog;
}

/**
 * Expect the `testFn` function to be called when exec action
 * @param action
 */
export function expectFnCalled(action: (testFn: jest.Mock<any, any>) => void) {
    const testFn = jest.fn();

    action(testFn);
    expect(testFn).toBeCalled();
}

export function querySelector(className) {
    return document.body.querySelector(className);
}

/**
 * Drag the specific Element to target Element
 * @param source Source Element
 * @param target Target Element
 */
export function dragToTargetNode(
    source: HTMLElement,
    target: HTMLElement
): void {
    fireEvent.dragStart(source);
    fireEvent.dragEnter(target);
    fireEvent.dragOver(target);
    fireEvent.drop(target);
    fireEvent.dragEnd(source);
}

export const sleep = (ms) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

type DragOptionsType = {
    to?: {
        x: number;
        y: number;
    };
    delta?: {
        x: number;
        y: number;
    };
    steps?: number;
    duration?: number;
};

/**
 * Mock the Drag event for a HTML element,
 * the `fireEvent.drag` event doesn't works in some situations
 * @param element Drag target HTML Element
 * @param options Drag Options
 */
export async function drag(element: HTMLElement, options: DragOptionsType) {
    const { to: inTo, delta, steps = 20, duration = 500 } = options;
    let to = Object.assign({}, inTo, { x: 0, y: 0 });
    const from = getElementClientCenter(element);

    if (delta) {
        to = {
            x: from.x + delta.x,
            y: from.y + delta.y,
        };
    }

    const step = {
        x: (to.x - from.x) / steps,
        y: (to.y - from.y) / steps,
    };

    const current = {
        clientX: from.x,
        clientY: from.y,
    };

    fireEvent.mouseEnter(element, current);
    fireEvent.mouseOver(element, current);
    fireEvent.mouseMove(element, current);
    fireEvent.mouseDown(element, current);

    for (let i = 0; i < steps; i++) {
        current.clientX += step.x;
        current.clientY += step.y;
        await sleep(duration / steps);
        fireEvent.mouseMove(element, current);
    }

    fireEvent.mouseUp(element, current);
}
