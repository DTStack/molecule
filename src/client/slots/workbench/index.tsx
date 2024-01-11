import { Display, Split } from 'mo/client/components';
import useDynamic from 'mo/client/hooks/useDynamic';

import useConnector from '../../hooks/useConnector';
import 'normalize.css';
import '../../classNames/common.css';
import variables from './index.scss';

export interface IWorkbenchProps {
    onSideChange?: (pos: number[]) => void;
    onEditorChange?: (pos: number[]) => void;
}

export default function Workbench({ onSideChange, onEditorChange }: IWorkbenchProps) {
    const layout = useConnector('layout');
    const StatusBar = useDynamic('statusBar');
    const MenuBar = useDynamic('menuBar');
    const ActivityBar = useDynamic('activityBar');
    const Sidebar = useDynamic('sidebar');
    const Panel = useDynamic('panel');
    const Editor = useDynamic('editor');
    const ContextMenu = useDynamic('contextMenu');

    const bothVisibility = !layout.sidebar.hidden && !layout.auxiliaryBar.hidden;
    const sidebarHidden = layout.sidebar.hidden;
    const auxiliaryBarHidden = layout.auxiliaryBar.hidden;
    const panelHidden = layout.panel.hidden;
    const panelMaximized = layout.panel.panelMaximized;

    const getContentSize = () => {
        if (bothVisibility) return layout.splitPanePos;
        if (sidebarHidden) return auxiliaryBarHidden ? [0, '100%', 0] : [0, 'auto', layout.splitPanePos[2]];
        return [layout.splitPanePos[0], 'auto', 0];
    };

    const getContentSashes = () => {
        if (bothVisibility) return true;
        if (sidebarHidden) return auxiliaryBarHidden ? false : [false, true];
        return [true, false];
    };

    const getSizes = () => {
        if (panelHidden) return ['100%', 0];
        if (panelMaximized) return [0, '100%'];
        return layout.horizontalSplitPanePos;
    };

    return (
        <main className={variables.container} tabIndex={0}>
            {ContextMenu}
            <Display visible={!layout.menuBar.hidden}>{MenuBar}</Display>
            <section className={variables.main}>
                <Display visible={!layout.activityBar.hidden}>{ActivityBar}</Display>
                <Split
                    sizes={getContentSize()}
                    split="vertical"
                    showSashes={getContentSashes()}
                    onChange={onSideChange}
                >
                    <Split.Pane minSize={170} maxSize="80%">
                        <Display visible={!layout.sidebar.hidden}>{Sidebar}</Display>
                    </Split.Pane>
                    <Split
                        sizes={getSizes()}
                        showSashes={!layout.panel.hidden && !layout.panel.panelMaximized}
                        allowResize={[true, false]}
                        split="horizontal"
                        onChange={onEditorChange}
                    >
                        <Split.Pane minSize="10%" maxSize="80%">
                            {Editor}
                        </Split.Pane>
                        <Display visible={!layout.panel.hidden}>{Panel}</Display>
                    </Split>
                </Split>
            </section>
            <Display visible={!layout.statusBar.hidden}>{StatusBar}</Display>
        </main>
    );
}
