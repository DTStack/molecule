import { Collapse } from 'mo/client/components/collapse';
import useConnector from 'mo/client/hooks/useConnector';

export default function Explorer() {
    const explorer = useConnector('explorer');
    return (
        <Collapse
            data={explorer.data}
            activePanelKeys={explorer.activePanelKeys}
            // onCollapseChange={onCollapseChange}
            // onToolbarClick={onToolbarClick}
        />
    );
}
