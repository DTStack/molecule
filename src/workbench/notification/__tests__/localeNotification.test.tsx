import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';
import LocaleNotification from '../notificationPane/localeNotification';

describe('The LocaleNotification Component', () => {
    test('Match Snapshot', () => {
        const component = create(<LocaleNotification locale="chinese" />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should support to reload via button', () => {
        const originalFunction = window.location.reload;
        const mockFn = jest.fn();
        Reflect.deleteProperty(window, 'location');
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { reload: mockFn },
        });
        const { getByText } = render(<LocaleNotification locale="chinese" />);

        fireEvent.click(getByText('Confirm Reload'));

        expect(jest.isMockFunction(window.location.reload)).toBeTruthy();
        expect(mockFn).toBeCalled();

        window.location.reload = originalFunction;
    });

    test('Should support to reload by pressing the Enter key.', async () => {
        const originalFunction = window.location.reload;
        const mockFn = jest.fn();
        Reflect.deleteProperty(window, 'location');
        Object.defineProperty(window, 'location', {
            writable: true,
            value: { reload: mockFn },
        });
        render(<LocaleNotification locale="zh-CN" />);

        await new Promise((resolve) => {
            setTimeout(() => {
                fireEvent.keyDown(document, { key: 'Enter', code: 'Enter' });
                fireEvent.keyUp(document, { key: 'Enter', code: 'Enter' });
                resolve(true);
            }, 1000);
        });

        expect(jest.isMockFunction(window.location.reload)).toBeTruthy();
        expect(mockFn).toBeCalled();

        window.location.reload = originalFunction;
    });
});
