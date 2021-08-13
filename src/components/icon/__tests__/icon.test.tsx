import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Icon } from '../index';

describe('Test Icon Component', () => {
    test('Match the Icon snapshot', () => {
        const component = renderer.create(<Icon type="github" />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Click the Icon', () => {
        const mockCallback = jest.fn();
        const body = render(
            <Icon data-testid="myIcon" type="github" onClick={mockCallback} />
        );
        fireEvent.click(body.getByTestId('myIcon'));
        expect(mockCallback).toHaveBeenCalled();
    });

    test('Icon type is string', () => {
        const expected = 'beaker';
        const body = render(<Icon data-testid="myIcon" type={expected} />);
        expect(body.getByTestId('myIcon').className).toContain(expected);
    });

    test('Icon type is JSX.Element', () => {
        const expected = 'codicon-beaker';
        const body = render(
            <Icon type={<span data-testid="myIcon" className={expected} />} />
        );
        expect(body.getByTestId('myIcon').className).toContain(expected);
    });

    test('The both of Icon children and type are undefined', () => {
        const body = render(<Icon data-testid="myIcon" />);
        expect(body.queryByTestId('myIcon')).toBeNull();
    });

    test('Custom the Icon children', () => {
        const body = render(
            <Icon data-testid="myIcon">
                <span>ss</span>
            </Icon>
        );
        expect(body.getByText(/ss/)).not.toBeNull();
    });

    test('Spin a Icon', () => {
        const body = render(<Icon data-testid="myIcon" type="beaker ~spin" />);
        expect(body.getByTestId('myIcon').className).toContain('spin');
    });
});
