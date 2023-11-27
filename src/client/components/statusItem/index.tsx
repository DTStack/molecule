import { classNames } from 'mo/client/classNames';
import useContextMenu from 'mo/client/hooks/useContextMenu';
import type { IStatusBarItem } from 'mo/models/statusBar';
import type { ContextMenuEventHandler } from 'mo/types';

import Dropdown from '../dropdown';
import variables from './index.scss';

export interface IStatusItemProps {
    data: IStatusBarItem;
    onClick: React.DOMAttributes<HTMLAnchorElement>['onClick'];
    onContextMenuClick?: ContextMenuEventHandler;
}

export default function StatusItem({ data, onClick, onContextMenuClick }: IStatusItemProps) {
    const { className, style, name, hidden, title, role, render } = data;
    const contextMenuData = useContextMenu('statusBar', data);

    if (hidden) return null;

    return (
        <Dropdown
            trigger="contextMenu"
            data={contextMenuData}
            stopPropagation
            onClick={onContextMenuClick}
        >
            <div
                className={classNames(variables.container, className)}
                style={style}
                title={title}
                role={role}
            >
                <a className={variables.label} role="button" title={name} onClick={onClick}>
                    {render ? render(data) : name}
                </a>
            </div>
        </Dropdown>
    );
}
