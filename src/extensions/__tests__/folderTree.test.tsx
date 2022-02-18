import React from 'react';
import '@testing-library/jest-dom';
import molecule, { MoleculeProvider, Workbench } from 'mo';
import { cleanup, fireEvent, render } from '@testing-library/react';
import type { ITreeNodeItemProps } from 'mo/components';
import type { IEditorTab } from 'mo/model/workbench/editor';

const testFileId = 'testFileId';
const testFileName = 'testFileName';
const mockTreeData: ITreeNodeItemProps[] = [
    {
        id: 'root',
        name: 'root',
        isLeaf: false,
        children: [
            {
                id: testFileId,
                name: testFileName,
                isLeaf: true,
                isEditable: true,
            },
        ],
    },
];
const mockTabData: IEditorTab = {
    id: testFileId,
    name: testFileName,
    data: {
        value: '',
        path: testFileName,
    },
};

describe('folderTree extension', () => {
    afterEach(cleanup);

    test('Execute the listener function of onUpdateFileName', () => {
        const { getByRole } = render(
            <MoleculeProvider>
                <Workbench />
            </MoleculeProvider>
        );

        molecule.folderTree.setState({ folderTree: { data: mockTreeData } });
        expect(molecule.folderTree.getState().folderTree?.data).toEqual(
            mockTreeData
        );

        molecule.editor.open(mockTabData);
        expect(molecule.editor.getState().current?.data?.length).toBe(1);

        const input = getByRole('input');
        expect(input).toBeTruthy();

        // Update filename to a valid name
        const mockEnterValue = 'test-enter';
        fireEvent.keyDown(input, {
            keyCode: 13,
            target: { value: mockEnterValue },
        });
        expect(molecule.editor.getState().current?.tab?.name).toBe(
            mockEnterValue
        );

        molecule.folderTree.update({
            id: testFileId,
            isEditable: true,
        });
        const input2 = getByRole('input');
        expect(input2).toBeTruthy();

        // Update filename to an invalid name
        const mockEmptyValue = '';
        fireEvent.keyDown(input2, {
            keyCode: 13,
            target: { value: mockEmptyValue },
        });
        expect(molecule.editor.getState().current?.tab?.name).toBe(
            mockEnterValue
        );
    });
});
