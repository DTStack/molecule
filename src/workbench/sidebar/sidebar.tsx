import 'mo/workbench/sidebar/style.scss';
import * as React from 'react';
import { memo } from 'react';
import { prefixClaName } from 'mo/common/className';
import { ISidebar, ISidebarPane } from 'mo/model/workbench/sidebar';

export interface IHeaderProps {
    title: string;
    toolbar: React.ReactNode;
}

export const Header = memo<IHeaderProps>(function Header(props: IHeaderProps) {
    return (
        <header className={'pane-header'}>
            <div className={'pane-title'}>
                <h2>{props.title}</h2>
            </div>
            <div className={'pane-toolbar'}>
                { props.toolbar || null }
            </div>
        </header>
    )
});

export function Content(props: React.ComponentProps<any>) {
    return (
        <div className="pane-content">
            {props.children}
        </div>
    )
}

export function Sidebar(props: ISidebar) {
    const { panes = [], render, current } = props;

    let sidebarPane: React.ReactNode = panes?.map((pane: ISidebarPane) => {
        return (
            <div
                key={pane.id}
                data-id={pane.id}
                style={{ display: pane.id === current ? 'block' : 'none' }}
                className={prefixClaName('pane', 'sidebar')}
            >
                { pane.render ? pane.render() : null }
            </div>
        );
    });

    if (render) {
        sidebarPane = render();
    }

    return <div className={prefixClaName('sidebar')}>{sidebarPane}</div>;
}