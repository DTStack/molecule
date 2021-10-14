import React from 'react';
import { EditorService } from '../editorService';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { EditorEvent, IEditorTab } from 'mo/model';
import { expectFnCalled } from '@test/utils';
import { modules } from 'mo/services/builtinService/const';
import { cloneDeep } from 'lodash';

describe('Test EditorService', () => {
    let mockTab: IEditorTab;

    beforeEach(() => {
        mockTab = Object.assign(
            {},
            {
                id: 'testTab',
                name: 'testTab',
            }
        );
    });

    test('Container resolve the EditorService', () => {
        const instance = container.resolve(EditorService);
        expect(instance).not.toBeNull();
    });

    test('Open tab in Editor Group View, get a tab by id', () => {
        const editor = new EditorService();

        // Open in default Group
        editor.open(mockTab);
        expect(editor.getState().current?.activeTab).toBe(mockTab.id);

        const state = editor.getState();
        expect(
            state.current?.data?.find((tab) => tab.id === mockTab.id)
        ).not.toBeUndefined();

        // Open in existed Group
        const tab2 = Object.assign({}, mockTab, { id: 'tab2' });
        const currentGroup = state.current!;
        editor.open(tab2, currentGroup.id);
        const tab = editor.getTabById(tab2.id, currentGroup);
        expect(tab).not.toBeUndefined();

        // Open in isn't exist Group
        editor.open(tab2, 3);
        expect(editor.getState().current).not.toBeUndefined();
        expect(
            editor.getState().current?.data?.find((tab) => tab.id === tab2.id)
        ).not.toBeUndefined();
    });

    test('Listen to the tab opening event', () => {
        const editor = new EditorService();
        expectFnCalled((fun) => {
            editor.onOpenTab(fun);
            // Open in default Group
            editor.open(mockTab);

            expect(fun.mock.calls[0][0]).toEqual(mockTab);
        });
    });

    test('Update the editor options', () => {
        const editor = new EditorService();
        editor.updateEditorOptions({
            tabSize: 8,
        });
        expect(editor.getState().editorOptions?.tabSize).toBe(8);
    });

    test('Judge the tab whether is opened', () => {
        const editor = new EditorService();
        expect(editor.isOpened(mockTab.id!)).toBeFalsy();
        editor.open(mockTab);
        expect(editor.isOpened(mockTab.id!)).not.toBeFalsy();
        expect(
            editor.isOpened(mockTab.id!, editor.getState().groups)
        ).not.toBeFalsy();
    });

    test('Set default actions', () => {
        const editor: any = new EditorService();
        expect(editor.defaultActions.length).toBe(0);
        editor.setDefaultActions([{ id: 'test' }]);
        expect(editor.defaultActions.length).toBe(1);
    });

    test('Set the Entry', () => {
        const editor = new EditorService();
        expect(editor.getState().entry).toBeUndefined();
        editor.setEntry(<div>test</div>);
        expect(editor.getState().entry).not.toBeUndefined();
    });

    test('Update the Group actions', () => {
        const editor = new EditorService();

        expect(editor.updateActions([])).toBeUndefined();
        editor.setDefaultActions(modules.builtInEditorInitialActions);
        editor.open(mockTab);

        const defaultAction = cloneDeep(modules.builtInEditorInitialActions);
        defaultAction[0].name = 'test';
        editor.updateActions(defaultAction);
        const updatedActions = editor.getState().current?.actions;
        expect(updatedActions![0].name).toBe('test');

        const currentGroup = editor.cloneGroup();

        editor.updateActions(defaultAction, currentGroup.id);
        const updatedActions1 = editor.getState().current?.actions;
        expect(updatedActions1![0].name).toBe('test');
    });

    test('Monaco editorInstance default should is undefined', () => {
        const editor = new EditorService();
        expect(editor.editorInstance).toBeUndefined();
    });

    test('Update the tab', () => {
        const editor = new EditorService();
        editor.open(mockTab);
        expect(editor.getState().current?.activeTab).toBe(mockTab.id);

        let updated = editor.updateTab(
            Object.assign(mockTab, { name: 'updated' })
        );

        expect(updated.name).toBe('updated');
        expect(
            editor.getTabById(mockTab.id!, editor.getState().current!)!.name
        ).toBe('updated');

        updated = editor.updateTab(
            Object.assign(mockTab, { name: 'updated1' }),
            editor.getState().current?.id
        );

        expect(updated.name).toBe('updated1');
        expect(
            editor.getTabById(mockTab.id!, editor.getState().current!)!.name
        ).toBe('updated1');
    });

    test('Close a tab', () => {
        const editor: any = new EditorService();
        editor.disposeModel = jest.fn();
        editor.open(mockTab);
        expect(
            editor.getTabById(mockTab.id!, editor.getState().current!)
        ).not.toBeUndefined();

        // Close a tab in an undefined group
        expect(editor.closeTab(mockTab.id!, 10)).toBeUndefined();

        // Close in the only one group and tab
        const currentGroup = editor.getState().current!;
        editor.closeTab(mockTab.id!, currentGroup.id!);
        expect(editor.getState().current!).toBeUndefined();

        // Close a tab in a group which tabs count is more than one
        editor.open(mockTab);
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });
        editor.open(tab2);
        editor.closeTab(tab2.id!, currentGroup.id!);
        expect(
            editor.getTabById(tab2.id!, editor.getState().current!)
        ).toBeUndefined();
    });

    test('Close other tabs', () => {
        const editor = new EditorService();
        (editor as any).disposeModel = jest.fn();
        editor.open(mockTab);
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });
        editor.open(tab2);

        // Close in an undefined group
        expect(editor.closeOther(tab2, 3)).toBeUndefined();

        // Close the all tabs expect mockTab
        expect(
            editor.getTabById(tab2.id!, editor.getState().current!)
        ).not.toBeUndefined();
        expect(editor.getState().current?.activeTab).toBe(tab2.id);

        editor.closeOther(mockTab, editor.getState().current!.id!);

        expect(
            editor.getTabById(tab2.id!, editor.getState().current!)
        ).toBeUndefined();
        expect(editor.getState().current?.activeTab).toBe(mockTab.id);
    });

    test('Close to right tabs', () => {
        const editor = new EditorService();
        (editor as any).disposeModel = jest.fn();
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });
        editor.open(mockTab);
        editor.open(tab2);

        expect(editor.closeToRight(mockTab, 100)).toBeUndefined();
        expect(
            editor.closeToRight(
                { id: 'unknown' },
                editor.getState().current!.id!
            )
        ).toBeUndefined();

        expect(
            editor.getTabById(tab2.id!, editor.getState().current!)
        ).not.toBeUndefined();

        editor.closeToRight(mockTab, editor.getState().current!.id!);

        expect(
            editor.getTabById(tab2.id!, editor.getState().current!)
        ).toBeUndefined();

        expect(editor.getState().current?.activeTab).toBe(mockTab.id);
    });

    test('Close to left tabs', () => {
        const editor = new EditorService();
        (editor as any).disposeModel = jest.fn();
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });
        const tab3 = Object.assign({}, mockTab, { id: 'fefe3' });
        editor.open(mockTab);
        editor.open(tab2);
        editor.open(tab3);

        expect(editor.closeToLeft(mockTab, 100)).toBeUndefined();
        expect(
            editor.closeToLeft(
                { id: 'unknown' },
                editor.getState().current!.id!
            )
        ).toBeUndefined();

        expect(
            editor.getTabById(mockTab.id!, editor.getState().current!)
        ).not.toBeUndefined();
        expect(editor.getState().current?.activeTab).toBe(tab3.id);

        editor.closeToLeft(tab2, editor.getState().current!.id!);

        expect(
            editor.getTabById(mockTab.id!, editor.getState().current!)
        ).toBeUndefined();

        expect(editor.getState().current?.activeTab).toBe(tab2.id);
    });
    test('Close all tabs', () => {
        const editor = new EditorService();
        (editor as any).disposeModel = jest.fn();
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });
        const tab3 = Object.assign({}, mockTab, { id: 'fefe3' });
        editor.open(mockTab);
        editor.open(tab2);
        editor.open(tab3);

        const group = editor.getState().current;
        expect(group?.data?.length).toBe(3);
        editor.closeAll(group?.id!);
        expect(editor.getState().current).toBeUndefined();
    });

    test('Get a group by ID', () => {
        const editor = new EditorService();
        editor.open(mockTab);
        expect(
            editor.getGroupById(editor.getState().current!.id!)
        ).not.toBeUndefined();
    });

    test('Get a group index by ID', () => {
        const editor = new EditorService();
        editor.open(mockTab);
        const index = editor.getGroupIndexById(editor.getState().current!.id!);
        expect(index).toBe(0);
    });

    test('Set the active tab', () => {
        const editor = new EditorService();
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });

        editor.open(mockTab);
        editor.open(tab2);
        const current = editor.getState().current!;
        expect(current.activeTab).toBe(tab2.id);

        editor.setActive(current.id!, mockTab.id!);

        expect(editor.getState().current!.activeTab).toBe(mockTab.id);
    });

    test('Clone the Group', () => {
        const editor = new EditorService();
        editor.open(mockTab);
        expect(editor.getState().groups?.length).toBe(1);

        // Clone the default Group
        const oldCurrent = editor.getState().current;
        const cloned = editor.cloneGroup();
        expect(cloned).not.toEqual(oldCurrent);
        expect(editor.getState().groups?.length).toBe(2);
        const current = editor.getState().current;
        expect(cloned).toEqual(current);
        expect(editor.getState().current).toEqual(cloned);

        // Clone the exist group
        const cloned2 = editor.cloneGroup(cloned.id);
        expect(cloned2).not.toEqual(cloned);
        expect(editor.getState().groups?.length).toBe(3);
        expect(editor.getState().current).toEqual(cloned2);
    });

    test('Update the Group', () => {
        const editor = new EditorService();
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });

        editor.open(mockTab);
        const current = editor.getState().current!;

        expect(current.tab).not.toBeUndefined();

        editor.updateGroup(current.id!, {
            name: 'updateGroup',
            actions: [],
            tab: tab2,
        });

        const updated = editor.getGroupById(current.id!);
        expect(updated!.name).toBe('updateGroup');
        expect(updated!.tab).toEqual(tab2);
        expect(updated!.actions?.length).toBe(0);
    });

    test('Update the current Group', () => {
        const editor = new EditorService();
        const tab2 = Object.assign({}, mockTab, { id: 'fefe' });

        editor.open(mockTab);
        const current = editor.getState().current!;
        expect(current.tab).toEqual(mockTab);
        expect(current.name).toBeUndefined();

        editor.updateCurrentGroup({
            name: 'updateGroup',
            tab: tab2,
        });

        const updated = editor.getState().current!;
        expect(updated.tab).toEqual(tab2);
        expect(updated.name).toBe('updateGroup');
    });

    test('Should support to get the groupId via tab', () => {
        const editor = new EditorService();
        editor.open(mockTab);

        let groupId = editor.getGroupIdByTab(mockTab.id!);
        expect(groupId).toBe(1);

        groupId = editor.getGroupIdByTab('non-exist');
        expect(groupId).toBeNull();

        editor.open(mockTab, 2);
        const groups = editor.getState().groups;
        expect(groups).toHaveLength(2);
        // To be sure mockTab is opened both in two groups
        expect(
            groups!.every((group) => editor.getTabById(mockTab.id!, group))
        ).toBeTruthy();

        // Only get the first one
        groupId = editor.getGroupIdByTab(mockTab.id!);
        expect(groupId).toBe(1);
    });

    test('Listen to the Tab update event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onUpdateTab(testFn);
            editor.emit(EditorEvent.OnUpdateTab, mockTab);
            expect(testFn.mock.calls[0][0]).toEqual(mockTab);
        });
    });

    test('Listen to the Tab move event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onMoveTab(testFn);
            const expected = [mockTab, 1];
            editor.emit(EditorEvent.OnMoveTab, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the Tab select event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onSelectTab(testFn);
            const expected = [mockTab, 1];
            editor.emit(EditorEvent.OnSelectTab, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the close all opened Tabs event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onCloseAll(testFn);
            const expected = [1];
            editor.emit(EditorEvent.OnCloseAll, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the close Tab event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onCloseTab(testFn);
            const expected = [1, 1];
            editor.emit(EditorEvent.OnCloseTab, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the close other Tab event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onCloseOther(testFn);
            const expected = [1];
            editor.emit(EditorEvent.OnCloseOther, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the close to left Tab event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onCloseToLeft(testFn);
            const expected = [mockTab];
            editor.emit(EditorEvent.OnCloseToLeft, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the close to right Tab event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onCloseToRight(testFn);
            const expected = [mockTab];
            editor.emit(EditorEvent.OnCloseToRight, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });

    test('Listen to the Actions click event', () => {
        const editor = new EditorService();
        expectFnCalled((testFn) => {
            editor.onActionsClick(testFn);
            const expected = [1, { id: 1 }];
            editor.emit(EditorEvent.onActionsClick, ...expected);
            expect(testFn.mock.calls[0]).toEqual(expected);
        });
    });
});
