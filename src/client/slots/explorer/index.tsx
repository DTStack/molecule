import { useMemo } from 'react';
import { Collapse } from 'mo/client/components/collapse';
import useConnector from 'mo/client/hooks/useConnector';

export default function Explorer() {
    const explorer = useConnector('explorer');
    const folderTree = useConnector('folderTree');
    const rootFolderName = folderTree.data?.at(0)?.name;
    // Replace collapse' name with folderTree's root folder name
    const data = useMemo(() => {
        if (!explorer.data.length) return [];
        if (!rootFolderName) return explorer.data;
        const next = explorer.data.concat();
        // FIXME: better way to resolve folderTree's root name
        const idx = next.findIndex((item) => item.id === 'sidebar.explore.folders');
        next[idx].name = rootFolderName;
        return next;
    }, [explorer.data, rootFolderName]);

    if (!data.length) return null;
    return (
        <Collapse
            data={data}
            activePanelKeys={explorer.activePanelKeys}
            // onCollapseChange={onCollapseChange}
            // onToolbarClick={onToolbarClick}
        />
    );
}
