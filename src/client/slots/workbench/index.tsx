import Display from 'mo/client/components/display';
import { Pane, SplitPane } from 'mo/client/components/split';

import useConnector from '../../hooks/useConnector';
import useSlots from '../../hooks/useSlots';
import 'normalize.css';
import variables from './index.scss';

export interface IWorkbenchProps {
    onSideChange?: (pos: number[]) => void;
    onEditorChange?: (pos: number[]) => void;
}

export default function Workbench({ onSideChange, onEditorChange }: IWorkbenchProps) {
    const layout = useConnector('layout');
    const StatusBar = useSlots('statusBar');
    const MenuBar = useSlots('menuBar');
    const ActivityBar = useSlots('activityBar');
    const Sidebar = useSlots('sidebar');
    const Panel = useSlots('panel');
    const Editor = useSlots('editor');

    const bothVisibility = !layout.sidebar.hidden && !layout.auxiliaryBar.hidden;
    const sidebarHidden = layout.sidebar.hidden;
    const auxiliaryBarHidden = layout.auxiliaryBar.hidden;
    const panelHidden = layout.panel.hidden;
    const panelMaximized = layout.panel.panelMaximized;

    const getContentSize = () => {
        if (bothVisibility) return layout.splitPanePos;
        if (sidebarHidden)
            return auxiliaryBarHidden ? [0, '100%', 0] : [0, 'auto', layout.splitPanePos[2]];
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
            <Display visible={!layout.menuBar.hidden}>{MenuBar}</Display>
            <section className={variables.main}>
                <Display visible={!layout.activityBar.hidden}>{ActivityBar}</Display>
                <SplitPane
                    sizes={getContentSize()}
                    split="vertical"
                    showSashes={getContentSashes()}
                    onChange={onSideChange}
                >
                    <Pane minSize={170} maxSize="80%">
                        <Display visible={!layout.sidebar.hidden}>{Sidebar}</Display>
                    </Pane>
                    <SplitPane
                        sizes={getSizes()}
                        showSashes={!layout.panel.hidden && !layout.panel.panelMaximized}
                        allowResize={[true, false]}
                        split="horizontal"
                        onChange={onEditorChange}
                    >
                        <Pane minSize="10%" maxSize="80%">
                            {Editor}
                        </Pane>
                        <Display visible={!layout.panel.hidden}>{Panel}</Display>
                    </SplitPane>
                    <Pane minSize={100} maxSize="80%">
                        <section>auxiliaryBar</section>
                    </Pane>
                </SplitPane>
            </section>
            <Display visible={!layout.statusBar.hidden}>{StatusBar}</Display>
        </main>
    );
}
