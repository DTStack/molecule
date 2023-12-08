import ActionBar from 'mo/client/components/actionBar';
import Flex from 'mo/client/components/flex';
import Progress from 'mo/client/components/progress';
import useConnector from 'mo/client/hooks/useConnector';
import { ISideBarController } from 'mo/controllers/sidebar';
import { sortByIndex } from 'mo/utils';

import variables from './index.scss';

export default function Sidebar({ onToolbarClick }: ISideBarController) {
    const sidebar = useConnector('sidebar');

    const pane = sidebar.panes.find((i) => i.id === sidebar.current);

    if (!pane) return <div className={variables.container} />;

    const toolbar = (pane.toolbar || []).concat().sort(sortByIndex);

    return (
        <div className={variables.container}>
            {/* FIXME: support keep-alive */}
            <div className={variables.pane}>
                <Flex className={variables.header} justifyContent="space-between">
                    <div className={variables.title}>
                        <h2 title={pane.title}>{pane.title}</h2>
                    </div>
                    {!!toolbar.length && (
                        <div className={variables.toolbar}>
                            <ActionBar
                                data={toolbar}
                                onClick={(item) => onToolbarClick?.(item, pane.id)}
                            />
                        </div>
                    )}
                </Flex>
                <div className={variables.content}>
                    <Progress active={sidebar.loading} />
                    {pane.render?.()}
                </div>
            </div>
        </div>
    );
}
