import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { IScrollbarProps, Scrollable } from '../index';

function TestScrollable(props: IScrollbarProps) {
    return (
        <div>
            <Scrollable {...(props as any)}>
                {Array(100)
                    .fill('')
                    .map((_, index) => {
                        return <div key={index}>{index}</div>;
                    })}
            </Scrollable>
        </div>
    );
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

        rerender(<TestScrollable isShowShadow={true} />);
        expect(container.querySelector('.shadow')).not.toBeNull();
    });

    test('Custom the Track style', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(
            container.querySelector<HTMLSpanElement>('.ScrollbarsCustom-Track')
                ?.style?.width
        ).toBe('10px');

        rerender(<TestScrollable trackStyle={{ width: '12px' }} />);
        expect(
            container.querySelector<HTMLSpanElement>('.ScrollbarsCustom-Track')
                ?.style?.width
        ).toBe('12px');
    });

    test('Custom the className', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(container.querySelector<HTMLSpanElement>('.myclass')).toBeNull();

        rerender(<TestScrollable className="myclass" />);
        expect(
            container.querySelector<HTMLSpanElement>('.myclass')
        ).not.toBeNull();
    });

    test('Custom the Thumb style', () => {
        const { container, rerender } = render(<TestScrollable />);
        expect(
            container.querySelector<HTMLSpanElement>('.ScrollbarsCustom-Thumb')
                ?.style?.width
        ).toBe('100%');

        rerender(<TestScrollable thumbStyle={{ width: '12px' }} />);
        expect(
            container.querySelector<HTMLSpanElement>('.ScrollbarsCustom-Thumb')
                ?.style?.width
        ).toBe('12px');
    });
});
