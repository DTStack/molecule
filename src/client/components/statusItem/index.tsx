import { classNames } from 'mo/client/classNames';
import type { IStatusBarItem } from 'mo/models/statusBar';
import type { ContextMenuWithItemHandler } from 'mo/types';

import Prevent from '../prevent';
import variables from './index.scss';

export interface IStatusItemProps {
    data: IStatusBarItem;
    onClick: React.DOMAttributes<HTMLAnchorElement>['onClick'];
    onContextMenu?: ContextMenuWithItemHandler<[item?: IStatusBarItem]>;
}

export default function StatusItem({ data, onClick, onContextMenu }: IStatusItemProps) {
    const { className, style, name, hidden, title, role, render } = data;

    if (hidden) return null;
    return (
        <Prevent
            className={classNames(variables.container, className)}
            onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, data)}
        >
            <a
                className={variables.label}
                role={role || 'button'}
                title={title || name}
                style={style}
                onClick={onClick}
            >
                {render ? render(data) : name}
            </a>
        </Prevent>
    );
}
