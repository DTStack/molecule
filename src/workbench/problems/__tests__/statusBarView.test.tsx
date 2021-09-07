import React from 'react';
import { cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { ProblemsStatusBarView } from '..';

const mockProStatus = {
    errors: 10,
    warnings: 20,
    infos: 30,
};

describe('The StatusBarView Component', () => {
    afterEach(cleanup);

    test('Match Snapshot', () => {
        const component = create(
            <ProblemsStatusBarView id="test" data={mockProStatus} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Match Snapshot with defualt value', () => {
        const component = create(<ProblemsStatusBarView id="test" />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
