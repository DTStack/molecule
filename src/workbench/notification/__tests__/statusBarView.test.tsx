import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { NotificationStatusBarView } from '../statusBarView';
import { select } from 'mo/common/dom';
import { expectFnCalled } from '@test/utils';

describe('Test Notification StatusBar View Component', () => {
    test('Match The NotificationStatusBarView snapshot', () => {
        const component = renderer.create(
            <NotificationStatusBarView
                data={[{ id: '', value: '' }]}
                id="test"
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Should display the bell dot icon', () => {
        const { rerender } = render(<NotificationStatusBarView id="test" />);
        expect(select('.codicon-bell-dot')).not.toBeInTheDocument();
        rerender(
            <NotificationStatusBarView
                id="test"
                data={[{ id: '', value: '' }]}
            />
        );
        expect(select('.codicon-bell-dot')).toBeInTheDocument();
    });

    test('Listen to the onClick event', () => {
        expectFnCalled((fn) => {
            const { container } = render(
                <NotificationStatusBarView id="test" onClick={fn} />
            );
            fireEvent.click(container.firstElementChild!);
        });
    });
});
