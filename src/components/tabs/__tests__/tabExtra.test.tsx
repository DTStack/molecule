import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabExtra from '../tabExtra';
import { expectFnCalled } from '@test/utils';

afterEach(cleanup);

describe('The Tab Component', () => {
    test('Should render default value', async () => {
        const { findByTestId } = render(
            <TabExtra renderStatus={() => <div data-testid="test">1</div>} />
        );
        expect(await findByTestId('test')).toBeInTheDocument();
    });

    test('Should render with classNames', () => {
        const { container } = render(<TabExtra classNames="test" />);
        const wrapper = container.querySelector('.test');
        expect(wrapper).toBeInTheDocument();
    });

    test('Should support to the click event', () => {
        expectFnCalled((fn) => {
            const { container } = render(
                <TabExtra classNames="test" onClick={fn} />
            );
            const wrapper = container.querySelector('.test');
            expect(wrapper).not.toBeUndefined();

            fireEvent.click(wrapper!);
        });
    });

    test('Should pass through hover status when mouseOver and mouseOut', async () => {
        const mockFn = jest.fn();
        const { container } = render(
            <TabExtra classNames="test" renderStatus={mockFn} />
        );
        const wrapper = container.querySelector('.test');
        expect(mockFn.mock.calls[0][0]).toBe(false);

        fireEvent.mouseOver(wrapper!);

        expect(mockFn.mock.calls[1][0]).toBe(true);

        fireEvent.mouseOut(wrapper!);

        expect(mockFn.mock.calls[2][0]).toBe(false);
    });
});
