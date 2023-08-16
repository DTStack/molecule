import Display from 'mo/client/components/display';

import useConnector from '../../hooks/useConnector';
import useSlots from '../../hooks/useSlots';
import 'normalize.css';
import variables from './index.scss';

export interface IWorkbenchProps {
    onSideChange?: (pos: number[]) => void;
    onEditorChange?: (pos: number[]) => void;
}

export default function Workbench() {
    const layout = useConnector('layout');
    const StatusBar = useSlots('statusBar');

    return (
        <main className={variables.container} tabIndex={0}>
            <section>menuBar</section>
            <section className={variables.main}>
                {!layout.activityBar.hidden && <section>activityBar</section>}
                {!layout.sidebar.hidden && <section>sideBar</section>}
                <section style={{ flex: 1 }}>editor</section>
                <section>auxiliaryBar</section>
            </section>
            <Display visible={!layout.statusBar.hidden}>{StatusBar}</Display>
        </main>
    );
}
