import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TabExtra from '../tabExtra';

const mockData = {
    modified: false,
    active: false,
    buttonHover: false,
};

afterEach(cleanup);

describe('The Tab Component', () => {
    test('Should render default placeholder', () => {
        const { container } = render(
            <TabExtra classNames="test" {...mockData} />
        );
        const wrapper = container.querySelector('.test');
        const context = wrapper?.querySelector('.test__placeholder');
        expect(context).toBeInTheDocument();
    });

    test('Should render dot icon modified', () => {
        const { container } = render(
            <TabExtra classNames="test" {...mockData} modified />
        );
        const wrapper = container.querySelector('.test');
        const context = wrapper?.querySelector('.test__dot');
        expect(context).toBeInTheDocument();
    });

    test('Should render close icon when buttonHover is true', () => {
        const { container } = render(
            <TabExtra classNames="test" {...mockData} buttonHover />
        );
        const closeIcon = container?.querySelector('.codicon-close');
        expect(closeIcon).toBeInTheDocument();
    });

    test('Should render close icon when active is true', () => {
        const { container } = render(
            <TabExtra classNames="test" {...mockData} active />
        );
        const closeIcon = container?.querySelector('.codicon-close');
        expect(closeIcon).toBeInTheDocument();
    });

    test('Should render close icon when mouseover', async () => {
        const { container } = render(
            <TabExtra classNames="test" {...mockData} modified />
        );
        const wrapper = container.querySelector('.test');
        fireEvent.mouseOver(wrapper!);

        await waitFor(() => {
            const closeIcon = wrapper?.querySelector('.codicon-close');
            expect(closeIcon).toBeInTheDocument();
        });

        fireEvent.mouseOut(wrapper!);

        await waitFor(() => {
            const closeIcon = wrapper?.querySelector('.codicon-close');
            expect(closeIcon).not.toBeInTheDocument();
        });
    });

    test('Should hide after click event', async () => {
        const mockFn = jest.fn();
        const { container } = render(
            <TabExtra classNames="test" onClick={mockFn} {...mockData} />
        );
        const wrapper = container.querySelector('.test');
        fireEvent.mouseOver(wrapper!);

        await waitFor(() => {
            const closeIcon = wrapper?.querySelector('.codicon-close');
            expect(closeIcon).toBeInTheDocument();
        });

        fireEvent.click(container.querySelector('.test__button')!);

        await waitFor(() => {
            const closeIcon = wrapper?.querySelector('.codicon-close');
            expect(closeIcon).not.toBeInTheDocument();

            expect(mockFn).toBeCalled();
        });
    });

    test('Should have default value', () => {
        const { container } = render(<TabExtra />);
        const context = container.querySelector('.__placeholder');

        expect(context).toBeInTheDocument();
    });
});
