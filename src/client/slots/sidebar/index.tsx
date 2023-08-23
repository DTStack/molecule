// export interface IHeaderProps {
//     title: React.ReactNode;
//     toolbar: React.ReactNode;
// }

import ActionBar from 'mo/client/components/actionBar';
import useConnector from 'mo/client/hooks/useConnector';

import variables from './index.scss';

export default function Sidebar() {
    const sidebar = useConnector('sidebar');

    const pane = sidebar.panes.find((i) => i.id === sidebar.current);

    if (!pane) return null;
    return (
        <div className={variables.container}>
            {/* FIXME: support keep-alive */}
            <div className={variables.pane}>
                <section className={variables.header}>
                    <div className={variables.title}>
                        <h2>{pane.title}</h2>
                    </div>
                    {!!pane.toolbar?.length && (
                        <div className={variables.toolbar}>
                            <ActionBar data={pane.toolbar} />
                        </div>
                    )}
                </section>
                <div className={variables.content}>{pane.render?.() || null}</div>
            </div>
        </div>
    );
}
