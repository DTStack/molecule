import 'mo/workbench/sidebar/style.scss';
import * as React from 'react';
import { prefixClaName } from 'mo/common/className';
import { ISidebar, ISidebarPane } from 'mo/core/sidebar';
import { memo } from 'react';

interface ISidebarProps extends ISidebar {
    // sidebar: ISidebar;
}

function Sidebar(props: ISidebarProps) {
    const { panes = [], render } = props;
    console.log('Sidebar render:', props);

    let sidebarPane: React.ReactElement | React.ReactElement[] = panes?.map(
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
                            pane.render()
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

export default memo(Sidebar);
