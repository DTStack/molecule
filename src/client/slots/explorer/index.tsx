import { useMemo } from 'react';
import { Collapse } from 'mo/client/components/collapse';
import useConnector from 'mo/client/hooks/useConnector';
import type { IExplorerController } from 'mo/controllers/explorer';
import { sortByIndex } from 'mo/utils';

export default function Explorer({ onToolbarClick, onCollapseChange }: IExplorerController) {
    const explorer = useConnector('explorer');
    const folderTree = useConnector('folderTree');
    const rootFolderName = folderTree.data?.at(0)?.name;
    // Replace collapse' name with folderTree's root folder name
    const data = useMemo(() => {
        if (!explorer.data.length) return [];
        const next = explorer.data.concat().sort(sortByIndex);
        if (!rootFolderName) return next;
        // FIXME: better way to resolve folderTree's root name
        const idx = next.findIndex((item) => item.id === 'sidebar.explore.folders');
        next[idx].name = rootFolderName;
        return next;
    }, [explorer.data, rootFolderName]);

    if (!data.length) return null;
    return (
        <Collapse
            data={data}
            observer
            activePanelKeys={explorer.activePanelKeys}
            onCollapseChange={onCollapseChange}
            onToolbarClick={onToolbarClick}
        />
    );
}
