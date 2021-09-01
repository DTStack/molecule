import logger from 'mo/common/logger';
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
    fireEvent.dragOver(target);
    fireEvent.drop(target);
    fireEvent.dragEnd(source);
}
