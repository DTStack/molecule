import * as React from 'react';
import Collapse, { Panel } from '@/components/collapse';
import { prefixClaName } from '@/common/className';
import { MoleculeCtx } from '@/provider/molecule';
import { IMolecule } from '@/core/molecule';

interface IExplorerProps {

}

export const Explorer: React.FunctionComponent<IExplorerProps> = (IExplorerProps) => {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);

    const AddABar = function() {
        const id = Math.random() * 10 + 1;
        moleculeCtx.activityBar.push({
            id: id + '',
            name: 'folder' + id,
            iconName: 'codicon-edit',
        });
    };

    return (
        <div className={prefixClaName('explorer', 'sidebar')}>
            <Collapse className="dee">
                <Panel header="OPEN EDITORS">
                    OPEN EDITORS
                    <button onClick={AddABar}>Add Bar</button>
                </Panel>
                <Panel header="Sample-Folder"></Panel>
                <Panel header="OUTLINE">
                    OUTLINE
                </Panel>
            </Collapse>
        </div>
    );
};
