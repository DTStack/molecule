import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Checkbox } from '../index';

const mockData = {
    id: 'm1',
};

const flag = 'molecule';

describe('Test ActionBar Component', () => {
    test('Checkbox renders correctly', () => {
        const component = renderer.create(<Checkbox {...mockData} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    test('Checkbox id attribute correctly', () => {
        const component = renderer.create(<Checkbox id={flag} />);
        const componentInstance = component.root;

        expect(componentInstance.findByType('input').props.id).toBe(flag);
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
            return <p className="sub">{flag}</p>;
        }
        const component = renderer.create(
            <Checkbox {...mockData}>
                <SubComponent />
            </Checkbox>
        );
        const componentInstance = component.root;
        const nodeParagraph = componentInstance.findByType('label').children[0]
            .children[0];

        expect(nodeParagraph.children).toEqual([flag]);
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
        let [id, value] = ['', ''];
        const testValue = 'mo';

        render(
            <Checkbox
                value={testValue}
                id={flag}
                onChange={(_, target) => {
                    id = target?.id || '';
                    value = target?.value || '';
                }}
            />
        );
        fireEvent.click(screen.getByText(/.*/i, { selector: 'label' }));
        expect(id).toBe(flag);
        expect(value).toBe(testValue);
    });

    test('Checkbox customer properties correctly', () => {
        const customProps = {
            ['data-meta']: flag,
        };
        const wrapper = render(
            <Checkbox data-testid="checkbox" {...mockData} {...customProps} />
        );
        const metaData = wrapper.getByTestId('checkbox').dataset.meta;

        expect(metaData).toBe(flag);
    });
});
