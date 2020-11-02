import 'mo/workbench/sidebar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { ISidebar, ISidebarPane } from 'mo/model/workbench/sidebar';

function Sidebar(props: ISidebar) {
    const { panes = [], render } = props;

    let sidebarPane: React.ReactNode = panes?.map(
        (pane: ISidebarPane) => {
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
                            pane.render ? pane.render() : null
                        }
                    </div>
                </div>
            );
        });

    if (render) {
        sidebarPane = render();
    }

    return (
        <div className={prefixClaName('sidebar')}>
            { sidebarPane }
        </div>
    );
};

export default Sidebar;
