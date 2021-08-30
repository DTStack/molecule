import logger from 'mo/common/logger';
/**
 * Test the action whether log error
 */
export function logErrorFn(action: () => void) {
    const originalLog = logger.error;
    logger.error = jest.fn();

    action();
    expect(logger.error).toBeCalled();

    logger.error = originalLog;
}

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
