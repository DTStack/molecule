import logger from 'mo/common/logger';

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
export function expectFnCalled(
    action: (testFn: (...args: any) => void) => void
) {
    const testFn = jest.fn();

    action(testFn);
    expect(testFn).toBeCalled();
}

export function querySelector(className) {
    return document.body.querySelector(className);
}
