import React from 'react';
// import { fireEvent, screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Select, Option } from '../index';

function SelectTest(props) {
    return (
        <Select
            id="demo1"
            key="demo1"
            defaultValue="1"
            style={{
                width: 200,
                color: 'rgba(255, 255, 255, 0.4)',
                background: '#252526',
            }}
            {...props}
        >
            <Option value="1">option - 1</Option>
            <Option value="2">option - 2</Option>
            <Option value="3">option - 3</Option>
            <Option value="4" description="Test option one">
                option - 4
            </Option>
        </Select>
    );
}

describe('Test Select Component', () => {
    // Clean up the html manually
    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('Match the Select snapshot', () => {
        const component = renderer.create(<SelectTest />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Listen to the onSelect event', () => {
        // const body = render(<SelectTest />);
        // expect(tree).toMatchSnapshot();
    });
});
