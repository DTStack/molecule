import {
    builtInExplorerHeaderToolbar,
    ExplorerEvent,
    IExplorerPanelItem,
} from 'mo/model';
import 'reflect-metadata';
import { logErrorFn } from '@test/utils';
import { container } from 'tsyringe';
import { searchById } from '../helper';
import { ExplorerService } from '../workbench';

const explorerService = container.resolve(ExplorerService);

const panelData: IExplorerPanelItem = {
    id: 'test',
    name: 'test',
    sortIndex: 1,
};

const anotherPanelData: IExplorerPanelItem = {
    id: 'another',
    name: 'another',
    sortIndex: 2,
};

const actionData = {
    id: 'action-test',
    name: 'action',
    title: 'action',
    icon: 'check',
};

describe('Test the Explorer Service', () => {
    afterEach(() => {
        explorerService.reset();
    });

    test('Should have defualt header bar tool', () => {
        const state = explorerService.getState();
        expect(state.data).toEqual([]);
        expect(state.headerToolBar).toEqual(builtInExplorerHeaderToolbar());
    });

    describe('Test the panel data', () => {
        test('Should support to add a panel into explorer', () => {
            explorerService.addPanel(panelData);

            const state = explorerService.getState();
            expect(state.data).toHaveLength(1);
        });

        test('Should support to batch add panels into explorer', () => {
            explorerService.addPanel([panelData, anotherPanelData]);

            const state = explorerService.getState();
            expect(state.data).toHaveLength(2);
            // has correct order
            expect(state.data).toEqual([anotherPanelData, panelData]);
        });

        test('Should support to add panels meanwhile add actions', () => {
            explorerService.addPanel([panelData]);

            const state = explorerService.getState();
            expect(state.data).toHaveLength(1);
            expect(state.headerToolBar?.contextMenu).toHaveLength(1);
        });

        test('Should log error when add panels failed', () => {
            logErrorFn(() => {
                explorerService.addPanel([panelData]);
                explorerService.addPanel([panelData]);
            });
        });

        test('Should support to update the specific panel', () => {
            explorerService.addPanel([panelData]);

            const state = explorerService.getState();
            expect(state.data?.find(searchById(panelData.id))).toEqual(
                panelData
            );

            explorerService.updatePanel({
                id: panelData.id,
                name: 'mock-panel',
            });
            expect(state.data?.find(searchById(panelData.id))?.name).toBe(
                'mock-panel'
            );
        });

        test('Should log error when update failed', () => {
            logErrorFn(() => {
                explorerService.updatePanel({
                    name: 'test',
                });
            });

            logErrorFn(() => {
                explorerService.updatePanel({
                    id: 'test',
                    name: 'test',
                });
            });
        });

        test('Should support to remove a panel', () => {
            explorerService.addPanel([panelData]);

            explorerService.removePanel(panelData.id);
            const state = explorerService.getState();
            expect(state.data).toHaveLength(0);
            // Meanwhile, remove the action
            expect(state.headerToolBar?.contextMenu).toHaveLength(0);
        });

        test('Should support to toggle the visibility of the panel', () => {
            explorerService.addPanel([panelData]);

            const state = explorerService.getState();
            expect(
                state.data!.find(searchById(panelData.id))!.hidden
            ).toBeFalsy();
            expect(
                state.headerToolBar?.contextMenu?.find(searchById(panelData.id))
                    ?.icon
            ).toBe('check');

            explorerService.togglePanel(panelData.id);

            expect(
                state.data!.find(searchById(panelData.id))!.hidden
            ).toBeTruthy();
            // Meanwhile, update the status of the action
            expect(
                state.headerToolBar?.contextMenu?.find(searchById(panelData.id))
                    ?.icon
            ).toBe('');
        });
    });

    describe('Test the actions data in toolbar actions', () => {
        test('Should get undefined before add', () => {
            const res = explorerService.getAction(actionData.id);
            expect(res).toBeUndefined();
        });

        test('Should support to add a action', () => {
            explorerService.addAction(actionData);

            expect(explorerService.getAction(actionData.id)).toEqual(
                actionData
            );
        });

        test('Should support to batch add actions', () => {
            explorerService.addAction([actionData]);

            expect(explorerService.getAction(actionData.id)).toEqual(
                actionData
            );
        });

        test('Should log error when add actions failed', () => {
            logErrorFn(() => {
                explorerService.addAction([actionData]);
                explorerService.addAction([actionData]);
            });
        });

        test('Should support to update the action', () => {
            explorerService.addAction(actionData);

            expect(explorerService.getAction(actionData.id)).toEqual(
                actionData
            );

            explorerService.updateAction({ id: actionData.id, name: 'test' });
            expect(explorerService.getAction(actionData.id)?.name).toBe('test');
        });

        test('Should log error when update the action failed', () => {
            logErrorFn(() => {
                explorerService.updateAction({
                    name: 'test',
                });
            });

            logErrorFn(() => {
                explorerService.updateAction({
                    id: 'test',
                    name: 'test',
                });
            });
        });

        test('Should support to remove a action', () => {
            explorerService.addAction(actionData);

            explorerService.removeAction(actionData.id);
            expect(explorerService.getAction(actionData.id)).toBeUndefined();
        });

        test('Should support to toggle the status of the action', () => {
            explorerService.addAction(actionData);

            expect(explorerService.getAction(actionData.id)?.icon).toBe(
                'check'
            );

            explorerService.toggleHeaderBar(actionData.id);
            expect(explorerService.getAction(actionData.id)?.icon).toBe('');

            explorerService.toggleHeaderBar(actionData.id);
            expect(explorerService.getAction(actionData.id)?.icon).toBe(
                'check'
            );
        });
    });

    test('Should support to subscribe onClick event', () => {
        const mockFn = jest.fn();
        explorerService.onClick(mockFn);

        explorerService.emit(
            ExplorerEvent.onClick,
            new Event('click'),
            panelData
        );

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBeInstanceOf(Event);
        expect(mockFn.mock.calls[0][1]).toEqual(panelData);
    });

    test('Should support to subscribe onRemovePanel event', () => {
        const mockFn = jest.fn();
        explorerService.onRemovePanel(mockFn);

        explorerService.emit(ExplorerEvent.onRemovePanel, panelData);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(panelData);
    });

    test('Should support to subscribe onPanelToolbarClick event', () => {
        const mockFn = jest.fn();
        explorerService.onPanelToolbarClick(mockFn);

        explorerService.emit(
            ExplorerEvent.onPanelToolbarClick,
            panelData,
            'toolbar-id'
        );

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(panelData);
        expect(mockFn.mock.calls[0][1]).toEqual('toolbar-id');
    });
});
