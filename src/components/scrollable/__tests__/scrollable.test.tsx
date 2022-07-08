import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IScrollbarProps, Scrollable } from '../index';
import { act } from 'react-test-renderer';
import { sleep } from '@test/utils';

// to make sure the Scrollable component not be mocked by global
jest.mock('mo/components/scrollable', () => {
    const originalModule = jest.requireActual('mo/components/scrollable');
    return {
        ...originalModule,
    };
});

function TestScrollable(props: IScrollbarProps) {
    return (
        <div>
            <Scrollable {...(props as any)}>
                <div data-testid="mytest">
                    {Array(100)
                        .fill('')
                        .map((_, index) => {
                            return <div key={index}>{index}</div>;
                        })}
                </div>
            </Scrollable>
        </div>
    );
}

function thumbElement(container: HTMLElement): HTMLSpanElement {
    return container.querySelector<HTMLSpanElement>('.ScrollbarsCustom-Thumb')!;
}

function trackElement(container: HTMLElement): HTMLSpanElement {
    return container.querySelector<HTMLSpanElement>('.ScrollbarsCustom-Track')!;
}

describe('Test Scrollable Component', () => {
    test('Match the Scrollable snapshot', () => {
        const component = render(<TestScrollable />);
        expect(component.asFragment()).toMatchSnapshot();
    });

    test('Show shadow style', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(container.querySelector('.shadow')).not.toBeInTheDocument();

        rerender(<TestScrollable isShowShadow />);
        expect(container.querySelector('.shadow')).toBeInTheDocument();

        rerender(<TestScrollable isShowShadow={false} />);
        expect(container.querySelector('.shadow')).not.toBeInTheDocument();
    });

    test('Custom the Track style', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(trackElement(container).style.width).toBe('10px');

        rerender(<TestScrollable trackStyle={{ width: '12px' }} />);
        expect(trackElement(container).style.width).toBe('12px');
    });

    test('Custom the className', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(
            container.querySelector<HTMLSpanElement>('.myclass')
        ).not.toBeInTheDocument();

        rerender(<TestScrollable className="myclass" />);
        expect(
            container.querySelector<HTMLSpanElement>('.myclass')
        ).toBeInTheDocument();
    });

    test('Custom the Thumb style', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(thumbElement(container).style.width).toBe('100%');

        rerender(<TestScrollable thumbStyle={{ width: '12px' }} />);
        expect(thumbElement(container).style.width).toBe('12px');
    });

    test('Mouse move on the scrollable content', () => {
        const { container, getByTestId } = render(<TestScrollable />);
        const rootEle = getByTestId('mytest');
        fireEvent.mouseEnter(rootEle);
        expect(trackElement(container).style.opacity).toBe('1');

        fireEvent.mouseLeave(rootEle);
        expect(trackElement(container).style?.opacity).toBe('0');
    });

    test('Scrolling the content', async () => {
        const { container, getByTestId } = render(
            <TestScrollable isShowShadow />
        );
        const rootEle = getByTestId('mytest');
        await act(async () => {
            fireEvent.mouseEnter(rootEle);
            await sleep(300);
        });

        expect(trackElement(container).style.opacity).toBe('1');
    });

    test('Should NOT render active shadow when scorllTop is 0', () => {
        const original = React.useState;
        React.useState = jest
            .fn()
            .mockImplementation((args) => [args, () => {}]);

        const { container } = render(<TestScrollable isShowShadow />);

        const shadowDom = container.querySelector('.shadow');
        expect(shadowDom?.classList).not.toContain('active');

        React.useState = original;
    });

    test("Should render active shadow when scrollTop isn't 0", () => {
        const original = React.useState;
        React.useState = jest
            .fn()
            .mockImplementation((args) => [
                typeof args === 'number' ? 100 : args,
                () => {},
            ]);

        const { container } = render(<TestScrollable isShowShadow />);

        const shadowDom = container.querySelector('.shadow');
        expect(shadowDom?.classList).toContain('active');

        React.useState = original;
    });
});
