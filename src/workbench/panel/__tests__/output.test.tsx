import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Output from '../output';

describe('Test Output Component', () => {
    test('Match the Output snapshot', () => {
        const component = renderer.create(<Output id="output" />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
