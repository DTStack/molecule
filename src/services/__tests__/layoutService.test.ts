import { ID_APP } from 'mo/common/id';
import { LayoutEvents, MenuBarMode, Position } from 'mo/model/workbench/layout';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { LayoutService } from '../workbench';

describe('The layout service', () => {
    describe('The container property of layout service', () => {
        afterEach(() => {
            container.reset();
        });

        test('Should mount on document.body', () => {
            const layoutService = container.resolve(LayoutService);
            expect(layoutService.container).toEqual(document.body);
        });

        test('Should mount on molecule dom', () => {
            const layoutService = container.resolve(LayoutService);
            const mo = document.createElement('div');
            mo.id = ID_APP;
            document.body.appendChild(mo);

            expect(layoutService.container).toEqual(mo);
        });
    });

    describe('The methods of layout service', () => {
        const layoutService = container.resolve(LayoutService);

        afterEach(() => {
            layoutService.reset();
        });

        test('Should support to toggle menu bar visibility', () => {
            const state = layoutService.getState();
            expect(state.menuBar.hidden).toBeFalsy();

            layoutService.toggleMenuBarVisibility();
            expect(state.menuBar.hidden).toBeTruthy();
        });

        test('Should support to toggle panel visibility', () => {
            const state = layoutService.getState();
            expect(state.panel.hidden).toBeFalsy();

            layoutService.togglePanelVisibility();
            expect(state.panel.hidden).toBeTruthy();
        });

        test('Should support to toggle side bar visibility', () => {
            const state = layoutService.getState();
            expect(state.sidebar.hidden).toBeFalsy();

            layoutService.toggleSidebarVisibility();
            expect(state.sidebar.hidden).toBeTruthy();
        });

        test('Should support to toggle activity bar visibility', () => {
            const state = layoutService.getState();
            expect(state.activityBar.hidden).toBeFalsy();

            layoutService.toggleActivityBarVisibility();
            expect(state.activityBar.hidden).toBeTruthy();
        });

        test('Should support to toggle status bar visibility', () => {
            const state = layoutService.getState();
            expect(state.statusBar.hidden).toBeFalsy();

            layoutService.toggleStatusBarVisibility();
            expect(state.statusBar.hidden).toBeTruthy();
        });

        test('Should support to set the position of side bar', () => {
            const state = layoutService.getState();

            expect(state.sidebar.position).toBe(Position.left);
            layoutService.setSideBarPosition(Position.right);
            expect(state.sidebar.position).toBe(Position.right);
        });

        test("Should not set the postion while postion did't change", () => {
            const state = layoutService.getState();
            const originalRender = layoutService.render;
            layoutService.render = jest.fn();

            expect(state.sidebar.position).toBe(Position.left);
            layoutService.setSideBarPosition(Position.left);
            expect(layoutService.render).not.toBeCalled();

            layoutService.render = originalRender;
        });

        test('Should support to maximize the size of panel', () => {
            const state = layoutService.getState();
            expect(state.panel.panelMaximized).toBeFalsy();

            layoutService.togglePanelMaximized();
            expect(state.panel.panelMaximized).toBeTruthy();
        });

        test('Should support to resize pane size', () => {
            const state = layoutService.getState();
            expect(state.splitPanePos).toEqual(['300px', 'auto']);

            const nextSize = ['auto', '300px'];
            layoutService.setPaneSize(nextSize);
            expect(state.splitPanePos).toEqual(nextSize);
        });

        test('Should support to resize horizontal pane size', () => {
            const state = layoutService.getState();
            expect(state.horizontalSplitPanePos).toEqual(['70%', 'auto']);

            const nextSize = ['auto', '300px'];
            layoutService.setHorizontalPaneSize(nextSize);
            expect(state.horizontalSplitPanePos).toEqual(nextSize);
        });

        test('Should support to change the direction of editor group', () => {
            const state = layoutService.getState();
            expect(state.editorGroupDirection).toBe(MenuBarMode.vertical);

            layoutService.setEditorGroupDirection(MenuBarMode.horizontal);
            expect(state.editorGroupDirection).toBe(MenuBarMode.horizontal);

            layoutService.setEditorGroupDirection((prev) =>
                prev === MenuBarMode.vertical
                    ? MenuBarMode.horizontal
                    : MenuBarMode.vertical
            );
            expect(state.editorGroupDirection).toBe(MenuBarMode.vertical);
        });

        test('Should support to set the visibility of auxiliary bar', () => {
            // hidden in default
            expect(layoutService.getState().auxiliaryBar.hidden).toBe(true);

            layoutService.setAuxiliaryBar(false);
            expect(layoutService.getState().auxiliaryBar.hidden).toBe(false);

            layoutService.setAuxiliaryBar((pre) => !pre);
            expect(layoutService.getState().auxiliaryBar.hidden).toBe(true);
        });

        test('Should support to listen to the Workbench did mount event', () => {
            const mockFn = jest.fn();
            layoutService.onWorkbenchDidMount(mockFn);

            layoutService.emit(LayoutEvents.OnWorkbenchDidMount);

            expect(mockFn).toBeCalled();
        });
    });
});
