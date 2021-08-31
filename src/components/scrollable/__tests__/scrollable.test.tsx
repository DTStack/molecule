import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IScrollbarProps, Scrollable } from '../index';

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
        expect(container.querySelector('.shadow')).toBeNull();

        rerender(<TestScrollable isShowShadow />);
        expect(container.querySelector('.shadow')).not.toBeNull();

        rerender(<TestScrollable isShowShadow={false} />);
        expect(container.querySelector('.shadow')).toBeNull();
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
        fireEvent.scroll(rootEle);
        expect(trackElement(container).style.opacity).toBe('1');
    });
});
