import logger from '../src/common/logger';

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
