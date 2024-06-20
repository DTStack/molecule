import { useEffect, useRef } from 'react';
import { Display, Split } from 'mo/client/components';
import { useAutoPos, useConnector, useDynamic } from 'mo/client/hooks';
import type { ILayoutController } from 'mo/controllers/layout';
import { PosType } from 'mo/types';
import { Toaster } from 'sonner';

import 'normalize.css';
import '../../classNames/common.css';
import variables from './index.scss';

export type IWorkbenchProps = ILayoutController;

export default function Workbench({ onSideChange, onEditorChange }: IWorkbenchProps) {
    const layout = useConnector('layout');
    const auxiliaryBar = useConnector('auxiliaryBar');
    const StatusBar = useDynamic('statusBar');
    const MenuBar = useDynamic('menuBar');
    const AuxiliaryBar = useDynamic('auxiliaryBar');
    const ActivityBar = useDynamic('activityBar');
    const Sidebar = useDynamic('sidebar');
    const Panel = useDynamic('panel');
    const Editor = useDynamic('editor');
    const ContextMenu = useDynamic('contextMenu');
    const ref = useRef<HTMLElement>(null);

    const getPosOverBar = (pos: PosType[]) => {
        const verticalPos = [...pos];
        const isActiveAuxiliaryBar = !!auxiliaryBar.current;
        if (!isActiveAuxiliaryBar) {
            verticalPos[verticalPos.length - 1] = 25;
        }
        return verticalPos;
    };

    const [sideRef, sidePos, sideChange] = useAutoPos<HTMLDivElement>(getPosOverBar(layout.splitPanePos));
    const [editorRef, editorPos, editorChange] = useAutoPos<HTMLDivElement>(
        layout.panel.panelMaximized ? [0, 'auto'] : layout.horizontalSplitPanePos,
        'horizontal'
    );

    useEffect(() => {
        ref.current?.focus();
    }, []);

    return (
        <main className={variables.container} tabIndex={0} ref={ref}>
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
                            <Split.Pane minSize={150}>
                                {Editor}
                            </Split.Pane>
                            <Split.Pane hidden={layout.panel.hidden}>{Panel}</Split.Pane>
                        </Split>
                    </Split.Pane>
                    <Split.Pane minSize={150} maxSize={300} hidden={layout.auxiliaryBar.hidden} resizable={!!auxiliaryBar.current}>
                        {AuxiliaryBar}
                    </Split.Pane>
                </Split>
            </section>
            <Display visible={!layout.statusBar.hidden}>{StatusBar}</Display>
            <Toaster className={variables.toaster} expand hotkey={[]} />
        </main>
    );
}
