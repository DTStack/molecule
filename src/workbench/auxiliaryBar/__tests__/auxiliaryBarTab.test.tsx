import { render } from '@testing-library/react';
import { AuxiliaryModel } from 'mo/model';
import React from 'react';
import AuxiliaryBarTab from '../auxiliaryBarTab';

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
});
