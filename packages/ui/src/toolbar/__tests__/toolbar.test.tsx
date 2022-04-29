import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Toolbar, toolbarClassName } from '..';

const toolbarData = [
    {
        id: 'action1',
        title: 'mock action title',
    },
    {
        id: 'action2',
        title: 'mock action title',
    },
];

afterEach(cleanup);

describe('The Toolbar Component', () => {
    test('Match Snapshot', () => {
        const component = renderer.create(<Toolbar data={toolbarData} />);
        const toolbar = component.toJSON();
        expect(toolbar).toMatchSnapshot();
    });

    test('should render extra classNames', () => {
        const testClassNames = 'test-classNames';
        const { container } = render(
            <Toolbar className={testClassNames} data={toolbarData} />
        );
        const toolbar = container.querySelector(`.${toolbarClassName}`);
        expect(toolbar?.classList).toContain(testClassNames);
    });

    test('Should pass throught params to ActionBar', async () => {
        const testId = 'test-toolbar';
        const { findByTestId } = render(
            <Toolbar data-testid={testId} data={toolbarData} />
        );
        const toolbar = await findByTestId(testId);
        expect(toolbar.parentElement?.classList).toContain(toolbarClassName);
    });
});
