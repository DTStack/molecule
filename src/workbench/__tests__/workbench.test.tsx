import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WorkbenchView, Workbench } from '../workbench';
import {
    ActivityBarModel,
    IActivityBar,
    IMenuBar,
    IPanel,
    ISidebar,
    IStatusBar,
    IWorkbench,
    MenuBarModel,
    PanelModel,
    SidebarModel,
    StatusBarModel,
} from 'mo/model';
import {
    ILayout,
    IPanelViewState,
    ISidebarViewState,
    LayoutModel,
    ViewVisibility,
} from 'mo/model/workbench/layout';
import { drag } from '@test/utils';

describe('Test Workbench Component', () => {
    function workbenchModel(): IWorkbench & ILayout {
        const panel = new PanelModel();
        const activityBar = new ActivityBarModel();
        const menuBar = new MenuBarModel();
        const statusBar = new StatusBarModel();
        const sidebar = new SidebarModel();
        const layout = new LayoutModel();

        const panelState = Object.assign<IPanel, IPanelViewState>(
            panel,
            layout.panel
        );
        const activityBarState = Object.assign<IActivityBar, ViewVisibility>(
            activityBar,
            layout.activityBar
        );
        const menuBarState = Object.assign<IMenuBar, ViewVisibility>(
            menuBar,
            layout.menuBar
        );
        const statusBarState = Object.assign<IStatusBar, ViewVisibility>(
            statusBar,
            layout.statusBar
        );
        const sidebarState = Object.assign<ISidebar, ISidebarViewState>(
            sidebar,
            layout.sidebar
        );

        return {
            panel: panelState,
            activityBar: activityBarState,
            menuBar: menuBarState,
            statusBar: statusBarState,
            sidebar: sidebarState,
            splitPanePos: layout.splitPanePos,
            horizontalSplitPanePos: layout.horizontalSplitPanePos,
        };
    }

    /**
     * Should display the Editor, Panel, Sidebar, ActivityBar, StatusBar, and MenuBar so on Views
     * @param container
     */
    function expectBasicPartsInTheDocument(container: HTMLElement) {
        expect(container.querySelector('.mo-editor')).toBeInTheDocument();
        expect(container.querySelector('.mo-panel')).toBeInTheDocument();
        expect(container.querySelector('.mo-sidebar')).toBeInTheDocument();
        expect(container.querySelector('.mo-activityBar')).toBeInTheDocument();
        expect(container.querySelector('.mo-statusBar')).toBeInTheDocument();
        expect(container.querySelector('.mo-menuBar')).toBeInTheDocument();
    }

    test('Match The WorkbenchView snapshot', () => {
        const component = render(<WorkbenchView {...workbenchModel()} />);
        const tree = component.asFragment();
        expect(tree).toMatchSnapshot();
    });

    test('Workbench should render all basic parts', () => {
        const { container } = render(<Workbench />);
        expectBasicPartsInTheDocument(container);
    });

    test('WorkbenchView should render all basic parts', async () => {
        const workbench = workbenchModel();
        const { container } = render(<WorkbenchView {...workbench} />);
        expectBasicPartsInTheDocument(container);
    });

    test('Listen to The WorkbenchView onPaneSizeChange event', async () => {
        const fn = jest.fn();
        const { container } = render(
            <WorkbenchView {...workbenchModel()} onPaneSizeChange={fn} />
        );
        const source = container.querySelector<HTMLDivElement>(
            'div[data-type="Resizer"]'
        );
        if (source) {
            await drag(source, { delta: { x: 100, y: 0 } });
        }
        expect(fn).toBeCalled();
        // Compare the splitPanePos arguments
        expect(fn.mock.calls[0][0].length).toBe(2);
    });

    test('Listen to The WorkbenchView onHorizontalPaneSizeChange event', async () => {
        const fn = jest.fn();
        const { container } = render(
            <WorkbenchView
                {...workbenchModel()}
                onHorizontalPaneSizeChange={fn}
            />
        );
        const source = container.querySelector<HTMLDivElement>(
            'div[data-attribute="horizontal"]'
        );
        if (source) {
            await drag(source, { delta: { x: 0, y: 50 } });
        }
        expect(fn).toBeCalled();
    });

    test('Hide the Panel view', async () => {
        const workbench = workbenchModel();
        const { container, rerender } = render(
            <WorkbenchView {...workbench} />
        );
        expect(container.querySelector('.mo-panel')).toBeInTheDocument();
        workbench.panel.hidden = true;
        rerender(<WorkbenchView {...workbench} />);
        expect(container.querySelector('.mo-panel')).not.toBeInTheDocument();
    });

    test('Maximize the Panel', async () => {
        const workbench = workbenchModel();
        const { container, rerender } = render(
            <WorkbenchView {...workbench} />
        );
        expect(container.querySelector('.mo-editor')).toBeInTheDocument();
        workbench.panel.panelMaximized = true;
        rerender(<WorkbenchView {...workbench} />);
        expect(container.querySelector('.mo-editor')).not.toBeInTheDocument();

        workbench.panel.panelMaximized = false;
        rerender(<WorkbenchView {...workbench} />);
        expect(container.querySelector('.mo-editor')).toBeInTheDocument();
    });

    test('Hide the Sidebar', async () => {
        const workbench = workbenchModel();
        const { container, rerender } = render(
            <WorkbenchView {...workbench} />
        );
        expect(container.querySelector('.mo-sidebar')).toBeInTheDocument();
        workbench.sidebar.hidden = true;
        rerender(<WorkbenchView {...workbench} />);
        expect(container.querySelector('.mo-sidebar')).not.toBeInTheDocument();
    });

    test('Hide the StatusBar', async () => {
        const workbench = workbenchModel();
        const { container, rerender } = render(
            <WorkbenchView {...workbench} />
        );
        expect(container.querySelector('.mo-statusBar')).toBeInTheDocument();
        workbench.statusBar.hidden = true;
        rerender(<WorkbenchView {...workbench} />);
        expect(
            container.querySelector('.mo-statusBar')
        ).not.toBeInTheDocument();
    });
});
