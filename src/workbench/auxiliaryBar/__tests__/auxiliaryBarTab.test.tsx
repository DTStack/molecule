import { fireEvent, render } from '@testing-library/react';
import { AuxiliaryModel } from 'mo/model';
import React from 'react';
import AuxiliaryBarTab from '../auxiliaryBarTab';
import { tabClassName } from '../base';

const props = new AuxiliaryModel();

describe('The Auxiliary Bar Tab Component', () => {
    test('Should match snapshot', () => {
        expect(
            render(<AuxiliaryBarTab {...props} />).asFragment()
        ).toMatchSnapshot();
    });

    test('Should match snapshot in tabs mode', () => {
        expect(
            render(<AuxiliaryBarTab {...props} mode="tabs" />).asFragment()
        ).toMatchSnapshot();
    });

    test('Should match snapshot with data', () => {
        expect(
            render(
                <AuxiliaryBarTab
                    {...props}
                    mode="tabs"
                    data={[{ key: 1, title: 1 }]}
                />
            ).asFragment()
        ).toMatchSnapshot();
    });

    test('Should match snapshot with active data', () => {
        expect(
            render(
                <AuxiliaryBarTab
                    {...props}
                    mode="tabs"
                    data={[{ key: 1, title: 1 }]}
                    current={1}
                />
            ).asFragment()
        ).toMatchSnapshot();
    });

    test('Should expect call onClick', () => {
        const clickFn = jest.fn();
        const { container } = render(
            <AuxiliaryBarTab
                {...props}
                mode="tabs"
                data={[{ key: 1, title: 1 }]}
                onClick={clickFn}
            />
        );

        const dom = container.querySelector(`.${tabClassName}`);
        expect(dom).not.toBe(null);
        fireEvent.click(dom!);

        expect(clickFn).toBeCalled();
    });
});
