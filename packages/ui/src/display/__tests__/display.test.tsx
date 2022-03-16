import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Display from '../index';

describe('The Display Component', () => {
    afterEach(cleanup);

    test('Match Snapshot', () => {
        const component = renderer.create(<Display />);
        const toolbar = component.toJSON();
        expect(toolbar).toMatchSnapshot();
    });

    test('When the visible attribute is false, it should be hidden', () => {
        const testId = 'display';
        const wrapper = render(
            <Display visible={false} data-testid={testId} />
        );
        const elem = wrapper.getByTestId(testId);
        expect(elem.style.display).toBe('none');
    });
});
