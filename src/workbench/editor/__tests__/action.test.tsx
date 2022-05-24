import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { IEditorActionsProps } from 'mo/model/workbench/editor';
import { expectFnCalled } from '@test/utils';
import '@testing-library/jest-dom';

import EditorAction from '../action';
import { groupActionItemDisabledClassName } from '../base';

const current: IEditorActionsProps = {
    id: '1',
    place: 'inner',
    icon: 'warning',
};
const actions = [current];
const TEST_ID = 'test-id';

jest.mock('mo/components/dropdown', () => {
    const originalModule = jest.requireActual('mo/components/dropdown');
    return {
        ...originalModule,
        DropDown: ({ overlay }) => {
            return <>{overlay}</>;
        },
    };
});

jest.mock('mo/components/menu', () => {
    const originalModule = jest.requireActual('mo/components/menu');
    return {
        ...originalModule,
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

    test('The EditorAction item disabled', () => {
        const mockAction: IEditorActionsProps[] = Array(8)
            .fill(1)
            .map((_, index) => ({
                id: index.toString(),
                place: 'outer',
                icon: 'warning',
            }));
        mockAction[0].disabled = true;
        const mockCallback = jest.fn();

        const { container } = render(
            <EditorAction
                isActiveGroup={true}
                actions={mockAction}
                onClickActions={jest.fn()}
            />
        );

        const liDom = container.querySelector(
            `.${groupActionItemDisabledClassName}`
        );

        expect(liDom).not.toBeNull();
        liDom && fireEvent.click(liDom);
        expect(mockCallback).not.toBeCalled();
    });
});
