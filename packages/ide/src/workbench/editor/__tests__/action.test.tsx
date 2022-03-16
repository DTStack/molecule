import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { IEditorActionsProps } from 'mo/model/workbench/editor';
import { expectFnCalled } from '@test/utils';
import '@testing-library/jest-dom';

import EditorAction from '../action';

const current: IEditorActionsProps = {
    id: '1',
    place: 'inner',
    icon: 'warning',
};
const actions = [current];
const TEST_ID = 'test-id';

jest.mock('@dtinsight/molecule-ui', () => {
    const originalModule = jest.requireActual('@dtinsight/molecule-ui');
    return {
        ...originalModule,
        DropDown: ({ overlay }) => {
            return <>{overlay}</>;
        },
        Menu: ({ onClick }) => {
            return <div data-testid={TEST_ID} onClick={onClick} />;
        },
    };
});

describe('The Editor Component', () => {
    afterEach(cleanup);

    test('Should support to set entry', () => {
        expectFnCalled((fn) => {
            const { getByTestId } = render(
                <EditorAction
                    isActiveGroup={true}
                    actions={actions}
                    onClickActions={fn}
                />
            );

            fireEvent.click(getByTestId(TEST_ID));
        });
    });

    test('Should support to set entry', () => {
        const mockAction: IEditorActionsProps[] = Array(8)
            .fill(1)
            .map((_, index) => ({
                id: index.toString(),
                place: 'outer',
                icon: 'warning',
            }));

        const { container } = render(
            <EditorAction
                isActiveGroup={true}
                actions={mockAction}
                onClickActions={jest.fn()}
            />
        );

        expect(container.querySelector(`.codicon-warning`)).toBeInTheDocument();
        expect(container.querySelectorAll(`.codicon-warning`)!.length).toBe(8);
    });
});
