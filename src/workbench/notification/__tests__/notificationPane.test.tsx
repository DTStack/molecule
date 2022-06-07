import 'reflect-metadata';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import {
    defaultNotificationClassName,
    NotificationPane,
} from '../notificationPane';
import { select } from 'mo/common/dom';
import { expectFnCalled } from '@test/utils';
import { container } from 'tsyringe';
import { ExtendsLocales } from 'mo/extensions/locales-defaults';
import { LocaleService } from 'mo/i18n';

describe('Test NotificationPane Component', () => {
    // initial locales
    const localeService = container.resolve(LocaleService);
    localeService.initialize(ExtendsLocales.contributes!.languages!, 'en');

    test('Match The NotificationPane snapshot', () => {
        const component = renderer.create(
            <NotificationPane data={[{ id: 1, value: '' }]} id="test" />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Render the data', () => {
        const { getByTestId, rerender, queryByText } = render(
            <NotificationPane id="test" />
        );

        expect(select('.mo-notification__body')?.innerHTML).toBe('');

        rerender(
            <NotificationPane
                data={[{ id: 1, value: 'testRender' }]}
                id="test"
            />
        );

        expect(queryByText('testRender')).toBeInTheDocument();

        rerender(
            <NotificationPane
                data={[
                    {
                        id: 1,
                        value: '',
                        render: () => <span data-testid="tid"></span>,
                    },
                ]}
                id="test"
            />
        );
        expect(getByTestId('tid')).toBeInTheDocument();
    });

    test('Display the Notification Pane', () => {
        const { rerender } = render(<NotificationPane id="test" />);

        expect(
            select<HTMLDivElement>('.' + defaultNotificationClassName)!.style
                .display
        ).toBe('none');

        rerender(<NotificationPane id="test" showNotifications />);
        expect(
            select<HTMLDivElement>('.' + defaultNotificationClassName)!.style
                .display
        ).toBe('block');
    });

    test('Listen to the onActionBarClick event', () => {
        expectFnCalled((fn) => {
            const { getByTestId } = render(
                <NotificationPane
                    id="test"
                    onActionBarClick={fn}
                    actionBar={[
                        {
                            id: 'test',
                            'data-testid': 'test',
                        },
                    ]}
                />
            );
            fireEvent.click(getByTestId('test'));
        });
    });

    test('Listen to the onCloseNotification event', () => {
        expectFnCalled((fn) => {
            render(
                <NotificationPane
                    id="test"
                    onCloseNotification={fn}
                    data={[
                        {
                            id: 1,
                            value: '',
                            render: () => <span data-testid="tid"></span>,
                        },
                    ]}
                />
            );
            const testDom = select<HTMLDivElement>('.mo-notification--close');
            fireEvent.click(testDom!);
        });
    });
});
