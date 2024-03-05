import { classNames } from 'mo/client/classNames';
import type { IStatusBarItem } from 'mo/models/statusBar';
import type { ContextMenuHandler } from 'mo/types';
import { getNameForTitle } from 'mo/utils';

import Prevent from '../prevent';
import variables from './index.scss';

export interface IStatusItemProps {
    data: IStatusBarItem;
    onClick: React.DOMAttributes<HTMLAnchorElement>['onClick'];
    onContextMenu?: ContextMenuHandler<[item?: IStatusBarItem]>;
}

export default function StatusItem({ data, onClick, onContextMenu }: IStatusItemProps) {
    const { className, style, name, hidden, disabled, title, role, render } = data;

    if (hidden) return null;
    return (
        <Prevent
            className={classNames(variables.container, disabled && variables.disabled, className)}
            onContextMenu={(e) => !disabled && onContextMenu?.({ x: e.pageX, y: e.pageY }, data)}
        >
            <a
                className={variables.label}
                role={role || 'button'}
                title={title || getNameForTitle(name)}
                style={style}
                onClick={(e) => !disabled && onClick?.(e)}
            >
                {render ? render(data) : name}
            </a>
        </Prevent>
    );
}
