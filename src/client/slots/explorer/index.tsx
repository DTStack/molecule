import { Collapse } from 'mo/client/components/collapse';
import useConnector from 'mo/client/hooks/useConnector';
import type { IExplorerController } from 'mo/controllers/explorer';
import { sortByIndex } from 'mo/utils';

export default function Explorer({
    onToolbarClick,
    onCollapseChange,
    onContextMenu,
}: IExplorerController) {
    const explorer = useConnector('explorer');
    const data = explorer.data.concat().sort(sortByIndex);

    if (!data.length) return null;
    return (
        <Collapse
            data={data}
            observer
            activePanelKeys={explorer.activePanelKeys}
            onCollapseChange={onCollapseChange}
            onToolbarClick={onToolbarClick}
            onContextMenu={onContextMenu}
        />
    );
}
