import { classNames } from 'mo/client/classNames';
import type { IStatusBarItem } from 'mo/models/statusBar';
import { getDataAttributionsFromProps } from 'mo/utils';

import variables from './index.scss';

export interface IStatusItemProps {
    data: IStatusBarItem;
    onClick: React.DOMAttributes<HTMLAnchorElement>['onClick'];
}

export default function StatusItem({ data, onClick }: IStatusItemProps) {
    const { className, style, name, render, ...restProps } = data;

    const attrProps = getDataAttributionsFromProps(restProps);

    return (
        <div className={classNames(variables.container, className)} style={style} {...attrProps}>
            <a
                tabIndex={-1}
                className={variables.label}
                role="button"
                title={name}
                onClick={onClick}
            >
                {render ? render(data) : name}
            </a>
        </div>
    );
}
