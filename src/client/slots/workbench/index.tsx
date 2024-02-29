import { Display, Split } from 'mo/client/components';
import { useAutoPos, useConnector, useDynamic } from 'mo/client/hooks';
import type { ILayoutController } from 'mo/controllers/layout';
import { Toaster } from 'sonner';

import 'normalize.css';
import '../../classNames/common.css';
import variables from './index.scss';

export type IWorkbenchProps = ILayoutController;

export default function Workbench({ onSideChange, onEditorChange }: IWorkbenchProps) {
    const layout = useConnector('layout');
    const StatusBar = useDynamic('statusBar');
    const MenuBar = useDynamic('menuBar');
    const ActivityBar = useDynamic('activityBar');
    const Sidebar = useDynamic('sidebar');
    const Panel = useDynamic('panel');
    const Editor = useDynamic('editor');
    const ContextMenu = useDynamic('contextMenu');

    const [sideRef, sidePos, sideChange] = useAutoPos<HTMLDivElement>(layout.splitPanePos);
    const [editorRef, editorPos, editorChange] = useAutoPos<HTMLDivElement>(
        layout.panel.panelMaximized ? [0, 'auto'] : layout.horizontalSplitPanePos,
        'horizontal'
    );

    return (
        <main className={variables.container} tabIndex={0}>
            {ContextMenu}
            <Display visible={!layout.menuBar.hidden}>{MenuBar}</Display>
            <section className={variables.main}>
                <Display visible={!layout.activityBar.hidden}>{ActivityBar}</Display>
                <Split ref={sideRef} sizes={sidePos} split="vertical" onChange={sideChange(onSideChange)}>
                    <Split.Pane minSize={170} maxSize={800} hidden={layout.sidebar.hidden}>
                        {Sidebar}
                    </Split.Pane>
                    <Split.Pane>
                        <Split
                            ref={editorRef}
                            sizes={editorPos}
                            split="horizontal"
                            onChange={editorChange(onEditorChange)}
                        >
                            <Split.Pane minSize={150} maxSize={600}>
                                {Editor}
                            </Split.Pane>
                            <Split.Pane hidden={layout.panel.hidden}>{Panel}</Split.Pane>
                        </Split>
                    </Split.Pane>
                </Split>
            </section>
            <Display visible={!layout.statusBar.hidden}>{StatusBar}</Display>
            <Toaster className={variables.toaster} expand hotkey={[]} />
        </main>
    );
}
