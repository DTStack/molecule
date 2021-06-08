import * as React from 'react';
import { memo } from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { ISidebar, ISidebarPane } from 'mo/model/workbench/sidebar';

export interface IHeaderProps {
    title: ReactNode;
    toolbar: React.ReactNode;
}

const defaultClassName = prefixClaName('sidebar');
const paneClassName = getBEMElement(defaultClassName, 'pane');
const headerClassName = getBEMElement(defaultClassName, 'header');
const titleClassName = getBEMElement(defaultClassName, 'title');
const contentClassName = getBEMElement(defaultClassName, 'content');
const toolbarClassName = getBEMElement(defaultClassName, 'toolbar');

export const Header = memo<IHeaderProps>(function Header(props: IHeaderProps) {
    return (
        <header className={headerClassName}>
            <div className={titleClassName}>
                <h2>{props.title}</h2>
            </div>
            <div className={toolbarClassName}>{props.toolbar || null}</div>
        </header>
    );
});

export function Content(props: React.ComponentProps<any>) {
    return <div className={contentClassName}>{props.children}</div>;
}

export function Sidebar(props: ISidebar) {
    const { panes = [], current } = props;

    const sidebarPane: React.ReactNode = panes?.map((pane: ISidebarPane) => {
        return (
            <div
                key={pane.id}
                data-id={pane.id}
                style={{ display: pane.id === current ? 'block' : 'none' }}
                className={paneClassName}
            >
                {pane.render ? pane.render() : null}
            </div>
        );
    });

    return <div className={defaultClassName}>{sidebarPane}</div>;
}
