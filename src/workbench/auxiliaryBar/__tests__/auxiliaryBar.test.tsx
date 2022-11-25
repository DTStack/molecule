import React from 'react';
import { render } from '@testing-library/react';
import AuxiliaryBar from '../auxiliaryBar';
import { AuxiliaryModel } from 'mo/model';

const props = new AuxiliaryModel();

describe('The Auxiliary Bar Component', () => {
    test('Should match snapshot', () => {
        expect(
            render(<AuxiliaryBar {...props} />).asFragment()
        ).toMatchSnapshot();
    });
});
