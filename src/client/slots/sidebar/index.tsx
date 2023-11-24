import ActionBar from 'mo/client/components/actionBar';
import useConnector from 'mo/client/hooks/useConnector';
import { ISideBarController } from 'mo/controllers/sidebar';
import type { IMenuItemProps } from 'mo/types';

import variables from './index.scss';

export default function Sidebar({ onToolbarClick }: ISideBarController) {
    const sidebar = useConnector('sidebar');
    const explorer = useConnector('explorer');

    const pane = sidebar.panes.find((i) => i.id === sidebar.current);

    if (!pane) return <div className={variables.container} />;

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
                            <ActionBar
                                data={toolbar}
                                onClick={(item: IMenuItemProps) => onToolbarClick?.(item, pane.id)}
                            />
                        </div>
                    )}
                </section>
                <div className={variables.content}>{pane.render?.()}</div>
            </div>
        </div>
    );
}
