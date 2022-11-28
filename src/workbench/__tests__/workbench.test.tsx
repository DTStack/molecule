import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WorkbenchView, Workbench } from '../workbench';
import {
    ActivityBarModel,
    AuxiliaryModel,
    IActivityBar,
    IAuxiliaryBar,
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
    IMenuBarViewState,
    MenuBarMode,
} from 'mo/model/workbench/layout';
import { select, selectAll } from 'mo/common/dom';
import {
    sashHorizontalClassName,
    splitClassName,
    paneItemClassName,
} from 'mo/components/split/base';
import { sleep } from '@test/utils';

function expectElementInOrNot(
    ele: Element | null,
    InDocument: boolean,
    horizontal: boolean = true
) {
    if (InDocument) {
        expect(
            ele?.parentElement?.style[horizontal ? 'height' : 'width']
        ).not.toBe('0px');
    } else {
        expect(ele?.parentElement?.style[horizontal ? 'height' : 'width']).toBe(
            '0px'
        );
    }
}

/**
 * Should display the Editor, Panel, Sidebar, ActivityBar, StatusBar, and MenuBar so on Views
 * @param container
 */
function expectBasicPartsInTheDocument() {
    expectElementInOrNot(select('.mo-editor'), true);
    expectElementInOrNot(select('.mo-panel'), true);
    expectElementInOrNot(select('.mo-sidebar'), true);
    expect(select('.mo-activityBar')).toBeInTheDocument();
    expect(select('.mo-statusBar')).toBeInTheDocument();
    expect(select('.mo-menuBar')).toBeInTheDocument();
}

describe('Test Workbench Component', () => {
    let original;
    const observerFnCollection: any[] = [];
    beforeEach(() => {
        original = HTMLElement.prototype.getBoundingClientRect;
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 500,
            height: 500,
        });

        global.ResizeObserver = jest.fn().mockImplementation((fn) => {
            fn();
            observerFnCollection.push(fn);
            return {
                observe: jest.fn(),
                unobserve: jest.fn(),
                disconnect: jest.fn(),
            };
        });
    });

    afterEach(() => {
        HTMLElement.prototype.getBoundingClientRect = original;
        observerFnCollection.length = 0;
    });

    function workbenchModel(): IWorkbench & ILayout {
        const panel = new PanelModel();
        const activityBar = new ActivityBarModel();
        const auxiliaryBar = new AuxiliaryModel();
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
        const auxiliaryBarState = Object.assign<IAuxiliaryBar, ViewVisibility>(
            auxiliaryBar,
            layout.activityBar
        );
        const menuBarState = Object.assign<IMenuBar, IMenuBarViewState>(
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
            groupSplitPos: layout.groupSplitPos,
            editorGroupDirection: layout.editorGroupDirection,
            auxiliaryBar: auxiliaryBarState,
        };
    }

    test('Match The WorkbenchView snapshot', () => {
        const component = render(<WorkbenchView {...workbenchModel()} />);
        const tree = component.asFragment();
        expect(tree).toMatchSnapshot();
    });

    test('Should Match Snapshots', () => {
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 1000,
            height: 1000,
        });

        console.log('workbenchModel():', workbenchModel());

        expect(
            render(<WorkbenchView {...workbenchModel()} />).asFragment()
        ).toMatchSnapshot();

        expect(
            render(
                <WorkbenchView
                    {...workbenchModel()}
                    sidebar={{ ...workbenchModel().sidebar, hidden: true }}
                />
            ).asFragment()
        ).toMatchSnapshot();

        expect(
            render(
                <WorkbenchView
                    {...workbenchModel()}
                    auxiliaryBar={{ hidden: true }}
                />
            ).asFragment()
        ).toMatchSnapshot();

        expect(
            render(
                <WorkbenchView
                    {...workbenchModel()}
                    sidebar={{ ...workbenchModel().sidebar, hidden: true }}
                    auxiliaryBar={{ hidden: false }}
                />
            ).asFragment()
        ).toMatchSnapshot();
    });

    test('Workbench should render all basic parts', () => {
        render(<Workbench />);
        expectBasicPartsInTheDocument();
    });

    test('WorkbenchView should render all basic parts', async () => {
        const workbench = workbenchModel();
        render(<WorkbenchView {...workbench} />);
        expectBasicPartsInTheDocument();
    });

    test('Listen to The WorkbenchView onPaneSizeChange event', async () => {
        // @ts-ignore
        HTMLElement.prototype.getBoundingClientRect = () => ({
            width: 1000,
            height: 1000,
        });

        const fn = jest.fn();
        const { rerender } = render(
            <WorkbenchView {...workbenchModel()} onPaneSizeChange={fn} />
        );

        const sashs = selectAll<HTMLDivElement>('div[role="Resizer"]');
        const wrapper = select<HTMLDivElement>(`.${splitClassName}`);

        // 1. Both auxiliary and sidebar are visible
        fireEvent.mouseDown(sashs[0], { screenX: 0, screenY: 0 });
        fireEvent.mouseMove(wrapper!, { screenX: 10, screenY: 10 });
        fireEvent.mouseUp(wrapper!);

        expect(fn).toBeCalled();
        // Compare the splitPanePos arguments
        expect(fn.mock.calls[0][0]).toEqual([310, 390, 300]);

        // 2. hidden the sidebar
        rerender(
            <WorkbenchView
                {...workbenchModel()}
                sidebar={{ ...workbenchModel().sidebar, hidden: true }}
                onPaneSizeChange={fn}
            />
        );
        fireEvent.mouseDown(sashs[sashs.length - 1], {
            screenX: 0,
            screenY: 0,
        });
        fireEvent.mouseMove(wrapper!, { screenX: 10, screenY: 10 });
        fireEvent.mouseUp(wrapper!);
        // Compare the splitPanePos arguments
        expect(fn.mock.calls[1][0]).toEqual([300, 410, 290]);

        // 3. hidden the sidebar and auxiliary
        rerender(
            <WorkbenchView
                {...workbenchModel()}
                sidebar={{ ...workbenchModel().sidebar, hidden: true }}
                auxiliaryBar={{ hidden: true }}
                onPaneSizeChange={fn}
            />
        );
        fireEvent.mouseDown(sashs[0], { screenX: 0, screenY: 0 });
        fireEvent.mouseMove(wrapper!, { screenX: 10, screenY: 10 });
        fireEvent.mouseUp(wrapper!);
        // Compare the splitPanePos arguments
        expect(fn.mock.calls[2][0]).toEqual([300, 400, 300]);
    });

    test('Listen to The WorkbenchView onHorizontalPaneSizeChange event', async () => {
        const fn = jest.fn();
        render(
            <WorkbenchView
                {...workbenchModel()}
                onHorizontalPaneSizeChange={fn}
            />
        );
        const sashs = selectAll<HTMLDivElement>(`.${sashHorizontalClassName}`);
        const wrapper = selectAll<HTMLDivElement>(`.${splitClassName}`)[1];

        fireEvent.mouseDown(sashs[0], { screenX: 0, screenY: 0 });
        fireEvent.mouseMove(wrapper!, { screenX: 10, screenY: 10 });
        fireEvent.mouseUp(wrapper!);

        expect(fn).toBeCalled();
    });

    test('Hide the Panel view', async () => {
        const workbench = workbenchModel();
        const { rerender } = render(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-panel'), true);
        workbench.panel.hidden = true;
        rerender(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-panel'), false);
    });

    test('Maximize the Panel', async () => {
        const workbench = workbenchModel();
        const { rerender } = render(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-editor'), true);
        workbench.panel.panelMaximized = true;
        rerender(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-editor'), false);

        workbench.panel.panelMaximized = false;
        rerender(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-editor'), true);
    });

    test('Set the panel hidden and panelMaximized', async () => {
        const workbench = workbenchModel();

        workbench.panel.panelMaximized = true;
        const { rerender } = render(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-editor'), false);
        expectElementInOrNot(select('.mo-panel'), true);

        workbench.panel.hidden = true;
        workbench.panel.panelMaximized = true;
        rerender(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-editor'), true);
        expectElementInOrNot(select('.mo-panel'), false);
    });

    test('Hide the Sidebar', async () => {
        const workbench = workbenchModel();
        const { rerender } = render(<WorkbenchView {...workbench} />);
        expectElementInOrNot(select('.mo-sidebar'), true, false);
        workbench.sidebar.hidden = true;
        rerender(<WorkbenchView {...workbench} />);

        expectElementInOrNot(select('.mo-sidebar'), false, false);
    });

    test('Hide the StatusBar', async () => {
        const workbench = workbenchModel();
        const { rerender } = render(<WorkbenchView {...workbench} />);
        expect(select('.mo-statusBar')).toBeInTheDocument();
        workbench.statusBar.hidden = true;
        rerender(<WorkbenchView {...workbench} />);
        expect(select('.mo-statusBar')?.parentElement?.style.display).toBe(
            'none'
        );
    });

    test('Should support to change the layout mode of MenuBar', async () => {
        const workbench = workbenchModel();
        workbench.menuBar.mode = MenuBarMode.vertical;
        const { rerender } = render(<WorkbenchView {...workbench} />);
        expect(select('.mo-menuBar')).toBeInTheDocument();

        workbench.menuBar.mode = MenuBarMode.horizontal;
        rerender(<WorkbenchView {...workbench} />);
        expect(select('.mo-menuBar--horizontal')).toBeInTheDocument();
    });

    test('Should resize panes when called on ResizeObserver', async () => {
        const workbench = workbenchModel();
        const horizontalMockFn = jest.fn();
        const paneChangeMockFn = jest.fn();
        const { container } = render(
            <WorkbenchView
                {...workbench}
                onHorizontalPaneSizeChange={horizontalMockFn}
                onPaneSizeChange={paneChangeMockFn}
            />
        );

        await act(async () => {
            // mock resize
            // @ts-ignore
            HTMLElement.prototype.getBoundingClientRect = () => ({
                width: 1000,
                height: 1000,
            });
            observerFnCollection.forEach((f) => f());
            await sleep(150);
        });

        const panes = container.querySelectorAll<HTMLDivElement>(
            `.${paneItemClassName}`
        );

        // sidebar + editor + auxiliary bar = 1000
        // IDE content + panel = 1000
        expect(panes.length).toBe(5);
        // sidebar
        expect(panes[0].style.width).toBe('300px');
        // editor
        expect(panes[1].style.width).toBe('400px');
        // IDE content
        expect(panes[2].style.height).toBe('850px');
        // panel
        expect(panes[3].style.height).toBe('150px');
        // auxiliary bar
        expect(panes[4].style.width).toBe('300px');
    });
});
