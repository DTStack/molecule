import useConnector from '../../hooks/useConnector';
import useSlots from '../../hooks/useSlots';
import 'normalize.css';
import variables from './index.scss';

export interface IWorkbenchProps {
    onSideChange?: (pos: number[]) => void;
    onEditorChange?: (pos: number[]) => void;
}

export default function Workbench({}: IWorkbenchProps) {
    const layout = useConnector('layout');
    const AuxiliaryBar = useSlots(import('../../slots/auxiliaryBar'));

    return (
        <main className={variables.container} tabIndex={0}>
            <section>menuBar</section>
            <section className={variables.main}>
                {!layout.activityBar.hidden && <section>activityBar</section>}
                {!layout.sidebar.hidden && <section>sideBar</section>}
                <section style={{ flex: 1 }}>editor</section>
                {AuxiliaryBar}
            </section>
            <section>statusBar</section>
        </main>
    );
}
