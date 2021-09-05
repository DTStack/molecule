import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Checkbox } from '../index';

const mockData = {
    id: 'm1',
};

const TEST_FLAG = 'molecule';

describe('Test ActionBar Component', () => {
    test('Checkbox renders correctly', () => {
        const component = renderer.create(<Checkbox {...mockData} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Checkbox id attribute correctly', () => {
        const component = renderer.create(<Checkbox id={TEST_FLAG} />);
        const componentInstance = component.root;

        expect(componentInstance.findByType('input').props.id).toBe(TEST_FLAG);
    });

    test('Checkbox value attribute correctly', () => {
        const value = 'moleculeCheckbox';
        const component = renderer.create(
            <Checkbox {...mockData} value={value} />
        );
        const componentInstance = component.root;

        expect(componentInstance.findByType('input').props.value).toBe(value);
    });

    test('Checkbox children render correctly', () => {
        function SubComponent() {
            return <p className="sub">{TEST_FLAG}</p>;
        }
        const component = renderer.create(
            <Checkbox {...mockData}>
                <SubComponent />
            </Checkbox>
        );
        const componentInstance = component.root;
        const nodeParagraph = (componentInstance.findByType('label')
            .children[0] as renderer.ReactTestInstance)
            .children[0] as renderer.ReactTestInstance;

        expect(nodeParagraph.children).toEqual([TEST_FLAG]);
    });

    test('Checkbox classname attribute correctly', () => {
        const className = 'testClassName';
        const wrapper = render(
            <Checkbox
                data-testid="checkbox"
                {...mockData}
                className={className}
            />
        );
        const existClass = wrapper
            .getByTestId('checkbox')
            .classList.contains(className);

        expect(existClass).toBeTruthy;
    });

    test('Checkbox change event correctly', () => {
        const mockCallback = jest.fn();
        const testValue = 'mo';

        render(
            <Checkbox
                value={testValue}
                id={TEST_FLAG}
                onChange={mockCallback}
            />
        );
        fireEvent.click(screen.getByText(/.*/i, { selector: 'label' }));
        expect(mockCallback).toBeCalled();
    });

    test('Checkbox customer properties correctly', () => {
        const customProps = {
            ['data-meta']: TEST_FLAG,
        };
        const wrapper = render(
            <Checkbox data-testid="checkbox" {...mockData} {...customProps} />
        );
        const metaData = wrapper.getByTestId('checkbox').dataset.meta;

        expect(metaData).toBe(TEST_FLAG);
    });
});
