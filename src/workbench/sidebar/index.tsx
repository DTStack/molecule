import './sidebar.scss';
import * as React from 'react';
import { prefixClaName } from '@/common/className';
import { MoleculeCtx } from '@/provider/molecule';
import { IMolecule } from '@/core/molecule';
import { ISidebarPane } from '@/core/sidebar';

const Sidebar: React.FunctionComponent = () => {
    const moleculeCtx: IMolecule = React.useContext(MoleculeCtx);
    const { sidebar } = moleculeCtx;

    let sidebarPane: React.ReactElement | React.ReactElement[] = sidebar
        .panes?.map((pane: ISidebarPane) => {
            return (
                <div key={pane.id} data-id={pane.id} className={prefixClaName('pane', 'sidebar')}>
                    <header className={'pane-header'}>
                        <div className={'pane-title'}>
                            <h2>{pane.name}</h2>
                        </div>
                        <div className={'pane-toolbar'}></div>
                    </header>
                    <div className="pane-content">
                        {
                            pane.render()
                        }
                    </div>
                </div>
            );
        });

    if (sidebar.render) {
        sidebarPane = sidebar.render();
    }

    console.log('Sidebar render:', moleculeCtx);

    return (
        <div className={prefixClaName('sidebar')}>
            { sidebarPane }
        </div>
    );
};
export default Sidebar;
