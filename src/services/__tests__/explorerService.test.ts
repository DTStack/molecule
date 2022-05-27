import { ExplorerEvent, IExplorerPanelItem } from 'mo/model';
import 'reflect-metadata';
import { expectFnCalled, expectLoggerErrorToBeCalled } from '@test/utils';
import { container } from 'tsyringe';
import { searchById } from 'mo/common/utils';
import { ExplorerService } from '../workbench';
import { BuiltinService } from '../builtinService';
import { modules } from '../builtinService/const';

const explorerService = container.resolve(ExplorerService);
const builtinService = container.resolve(BuiltinService);

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

    test('Should NOT have defualt header bar tool', () => {
        const state = explorerService.getState();
        expect(state.data).toEqual([]);
        expect(state.headerToolBar).toBeUndefined();
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
            // initialize the header tool bar
            explorerService.setState({
                headerToolBar: modules.builtInExplorerHeaderToolbar(),
            });
            explorerService.addPanel([panelData]);

            const state = explorerService.getState();
            expect(state.data).toHaveLength(1);
            expect(state.headerToolBar?.contextMenu).toHaveLength(1);
        });

        test('Should log error when add panels failed', () => {
            expectLoggerErrorToBeCalled(() => {
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
            expectLoggerErrorToBeCalled(() => {
                explorerService.updatePanel({
                    name: 'test',
                });
            });

            expectLoggerErrorToBeCalled(() => {
                explorerService.updatePanel({
                    id: 'test',
                    name: 'test',
                });
            });
        });

        test('Should support to remove a panel', () => {
            // initialize the header tool bar
            explorerService.setState({
                headerToolBar: modules.builtInExplorerHeaderToolbar(),
            });
            explorerService.addPanel([panelData]);

            explorerService.removePanel(panelData.id);
            const state = explorerService.getState();
            expect(state.data).toHaveLength(0);
            // Meanwhile, remove the action
            expect(state.headerToolBar?.contextMenu).toHaveLength(0);
        });

        test('Should support to toggle the visibility of the panel', () => {
            // initialize the header tool bar
            explorerService.setState({
                headerToolBar: modules.builtInExplorerHeaderToolbar(),
            });
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
        beforeEach(() => {
            // initialize the header tool bar
            explorerService.setState({
                headerToolBar: modules.builtInExplorerHeaderToolbar(),
            });
        });
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
            expectLoggerErrorToBeCalled(() => {
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
            expectLoggerErrorToBeCalled(() => {
                explorerService.updateAction({
                    name: 'test',
                });
            });

            expectLoggerErrorToBeCalled(() => {
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

        test('Should NOT remove a action without headerToolbar', () => {
            // reset the headerToolbar
            explorerService.reset();
            expectLoggerErrorToBeCalled(() => {
                explorerService.addAction(actionData);
            });
            expectLoggerErrorToBeCalled(() => {
                explorerService.removeAction(actionData.id);
            });
            expectLoggerErrorToBeCalled(() => {
                explorerService.toggleHeaderBar(actionData.id);
            });
            expectLoggerErrorToBeCalled(() => {
                explorerService.updateAction(actionData);
            });
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

    test('Should support to subscribe onCollapseAllFolders event', () => {
        expectFnCalled((fn) => {
            explorerService.onCollapseAllFolders(fn);

            explorerService.emit(ExplorerEvent.onCollapseAllFolders);
        });
    });

    test('Should support to set expanded panels', () => {
        const constants = builtinService.getConstants();
        const { SAMPLE_FOLDER_PANEL_ID } = constants as {
            SAMPLE_FOLDER_PANEL_ID: string;
        };
        explorerService.setExpandedPanels([SAMPLE_FOLDER_PANEL_ID]);
        const state = explorerService.getState();
        expect(state.activePanelKeys).toEqual([SAMPLE_FOLDER_PANEL_ID]);
    });
});
