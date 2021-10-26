import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { IActionBarItemProps } from '../../actionBar';
import Input, { InfoTypeEnums } from '../input';
import { Search } from '../index';
import {
    replaceBtnClassName,
    replaceContainerClassName,
    validationInfoInputClassName,
    validationWarningInputClassName,
    validationBaseInputClassName,
} from '../base';

const { Group } = Input;

const TEST_ID = 'test';

const mockData: IActionBarItemProps[] = [
    {
        id: TEST_ID,
        name: 'mockDataTitle',
        title: 'mockDataTitle',
        icon: 'add',
        checked: true,
        'data-testid': TEST_ID,
    },
];

describe('Test Input Component', () => {
    test('Match the Group Input snapshot', () => {
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

        expect(div.classList).toContain(INPUT_CLASSNAME);
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
        const div = textArea.nextElementSibling as HTMLDivElement;

        expect(div.textContent).toBe(TEST_ID);
        expect(div.classList).toContain(validationBaseInputClassName);
        expect(div.classList).toContain(validationWarningInputClassName);
    });

    test('Input change', () => {
        const TEST_FN = jest.fn();
        const wrapper = render(<Input onChange={TEST_FN} />);
        const textarea = wrapper.container.querySelector<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        );

        fireEvent.keyDown(textarea!, {
            key: 'Enter',
            keyCode: 13,
        });
        expect(TEST_FN).toBeCalled();
    });
});

describe('Test Search Component', () => {
    test('Match the Search snapshot', () => {
        const componentInput = renderer.create(<Search />);
        const search = componentInput.toJSON();

        expect(search).toMatchSnapshot();
    });

    test('Search className', () => {
        const INPUT_CLASSNAME = 'test-name';
        const wrapper = render(<Search className={INPUT_CLASSNAME} />);
        const div = wrapper.container.firstElementChild as HTMLDivElement;

        expect(div.classList).toContain(INPUT_CLASSNAME);
    });

    test('Search style', () => {
        const INPUT_STYLE = { background: 'red' };
        const wrapper = render(<Search style={INPUT_STYLE} />);
        const div = wrapper.container.firstElementChild as HTMLDivElement;

        expect(div.getAttribute('style')).toBe('background: red;');
    });

    test('Search value', () => {
        const INPUT_VALUE = 'test';
        const wrapper = render(
            <Search data-testid={TEST_ID} values={[INPUT_VALUE]} />
        );
        const textarea = wrapper.container.querySelector<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        );

        expect(textarea!.value).toBe(INPUT_VALUE);
    });

    test('Search dafult placeholder', () => {
        const INPUT_VALUE = 'test';
        const wrapper = render(<Search values={[INPUT_VALUE]} />);
        const textarea = wrapper.container.querySelector<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        );

        expect(textarea!.value).toBe(INPUT_VALUE);
    });

    test('Search placeholder', () => {
        const DEFAULT_VALUE = 'Search';
        const wrapper = render(<Search />);
        const textarea = wrapper.container.querySelector<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        );

        expect(textarea!.placeholder).toBe(DEFAULT_VALUE);
    });

    test('Search addons', () => {
        const { getByTestId } = render(<Search addons={[mockData]} />);

        expect(getByTestId(TEST_ID)).toBeInTheDocument();
    });

    test('Search validationInfo', () => {
        const TEST_TEXT = 'molecule';
        const wrapper = render(<Search validationInfo={TEST_TEXT} />);
        const textarea = wrapper.container.querySelector<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        );
        expect(textarea!.classList).toContain(validationInfoInputClassName);

        fireEvent.focus(textarea!);
        const div = textarea!.nextElementSibling as HTMLDivElement;
        expect(div!.classList).toContain(validationInfoInputClassName);
        expect(div!.textContent).toContain(TEST_TEXT);
    });

    test('Search change event', () => {
        const TEST_CHANGE_FN = jest.fn();
        const TEST_SEARCH_FN = jest.fn();
        const TEST_VALUE = 'molecule';
        const wrapper = render(
            <Search onChange={TEST_CHANGE_FN} onSearch={TEST_SEARCH_FN} />
        );
        const textarea = wrapper.container.querySelector<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        );

        fireEvent.change(textarea!, { target: { value: TEST_VALUE } });
        expect(TEST_CHANGE_FN).toBeCalled();
        expect(TEST_SEARCH_FN).toBeCalled();
    });

    test('Search onButtonClick and replace show', () => {
        const TEST_FN = jest.fn();
        const INPUT_VALUE = 'test';
        const wrapper = render(
            <Search
                addons={[, mockData]}
                values={[, INPUT_VALUE]}
                onButtonClick={TEST_FN}
            />
        );
        const icon = wrapper.container.getElementsByClassName(
            replaceBtnClassName
        )[0];
        expect(icon).not.toBeNull();

        fireEvent.click(icon);
        expect(TEST_FN).toBeCalled();

        const input = wrapper.container.getElementsByClassName(
            replaceContainerClassName
        )[0];
        expect(input).toBeInTheDocument();

        const textarea = wrapper.container.querySelectorAll<HTMLTextAreaElement>(
            `textarea[autoCorrect='off']`
        )[1];
        expect(textarea!.value).toBe(INPUT_VALUE);

        expect(wrapper.getByTestId(TEST_ID)).toBeInTheDocument();
    });
});
