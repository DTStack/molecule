import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Input, { InfoTypeEnums } from '../input';
import {
    validationWarningInputClassName,
    validationBaseInputClassName,
} from '../base';

const { Group } = Input;

const TEST_ID = 'test';

describe('Input snapshot', () => {
    test('Input with Group snapshot', () => {
        const componentInput = renderer.create(<Input />);
        const treeInput = componentInput.toJSON();

        expect(treeInput).toMatchSnapshot();

        const componentGroupWithChildren = renderer.create(
            <Group>
                <Input />
                <Input />
            </Group>
        );
        const treeChilren = componentGroupWithChildren.toJSON();

        expect(treeChilren).toMatchSnapshot();
    });

    test('Input with Group snapshot', () => {
        render(
            <Group>
                <Input />
            </Group>
        );

        const textArea = screen.getByText(/.*/i, { selector: 'textarea' });

        expect(textArea).not.toBeNull();
    });

    test('Input className', () => {
        const INPUT_CLASSNAME = 'test-name';

        render(<Input className={INPUT_CLASSNAME} />);

        const div = screen.getByText(/.*/i, {
            selector: 'textarea',
        }).parentNode as HTMLDivElement;

        expect(div?.classList).toContain(INPUT_CLASSNAME);
    });

    test('Input placeholder', () => {
        const INPUT_PLACEHOLDER = 'molecule';

        render(<Input placeholder={INPUT_PLACEHOLDER} />);

        const div = screen.getByText(/.*/i, {
            selector: 'textarea',
        });

        expect(div.getAttribute('placeholder')).toBe(INPUT_PLACEHOLDER);
    });

    test('Input info', () => {
        const INPUT_INFO = { type: InfoTypeEnums.warning, text: TEST_ID };
        render(<Input info={INPUT_INFO} />);

        const textArea = screen.getByText(/.*/i, {
            selector: 'textarea',
        });
        expect(textArea.classList).toContain(validationWarningInputClassName);

        fireEvent.focus(textArea);
        const div = textArea.nextElementSibling;

        expect(div?.textContent).toBe(TEST_ID);
        expect(div?.classList).toContain(validationBaseInputClassName);
        expect(div?.classList).toContain(validationWarningInputClassName);
    });
});
