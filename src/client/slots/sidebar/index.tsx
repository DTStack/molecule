import ActionBar from 'mo/client/components/actionBar';
import useConnector from 'mo/client/hooks/useConnector';
import type { IMenuItemProps } from 'mo/types';

import variables from './index.scss';

export default function Sidebar() {
    const sidebar = useConnector('sidebar');
    const explorer = useConnector('explorer');

    const pane = sidebar.panes.find((i) => i.id === sidebar.current);

    if (!pane) return null;

    const toolbar = pane.toolbar || [];
    if (pane.id === 'sidebar.explore.title') {
        toolbar.push(
            ...explorer.data.map<IMenuItemProps>((i) => ({
                id: i.id,
                name: i.name,
                icon: i.hidden ? undefined : 'check',
            }))
        );
    }

    return (
        <div className={variables.container}>
            {/* FIXME: support keep-alive */}
            <div className={variables.pane}>
                <section className={variables.header}>
                    <div className={variables.title}>
                        <h2>{pane.title}</h2>
                    </div>
                    {!!toolbar.length && (
                        <div className={variables.toolbar}>
                            <ActionBar data={toolbar} />
                        </div>
                    )}
                </section>
                <div className={variables.content}>{pane.render?.()}</div>
            </div>
        </div>
    );
}
