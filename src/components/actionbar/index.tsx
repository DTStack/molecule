import './style.scss';
import * as React from 'react';
import { prefixClaName, classNames } from 'mo/common/className';

export interface IActionBarItem<T = any> extends React.ComponentProps<any> {
    id: string;
    name?: string;
    title?: string;
    iconName?: string;
    disabled?: boolean;
    data?: T;
    className?: string;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}

export interface IActionBar<T = any> {
    data: IActionBarItem<T>[];
    className?: string;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}

const rootClassName = 'action-bar';

export function ActionBarItem(props: IActionBarItem) {
    const { id, title, name, onClick } = props;
    const click = (e: React.MouseEvent) => {
        if (onClick) {
            onClick(e, props);
        }
    };
    const disabled = props.disabled ? 'disabled' : null;
    const claNames = classNames(
        'action-label',
        'codicon',
        props.iconName,
        disabled
    );
    return (
        <li
            className={classNames('action-item', disabled)}
            onClick={click}
            key={`${id}`}
        >
            <a className={claNames} title={title}>
                {name}
            </a>
        </li>
    );
}

export default function ActionBar<T = any>(props: IActionBar<T>) {
    const { data = [], onClick, className, ...others } = props;

    const claNames = classNames(prefixClaName(rootClassName), className);

    const items = data.map((item: IActionBarItem<T>) => (
        <ActionBarItem key={item.id} {...item} />
    ));

    return (
        <div className={claNames} {...others}>
            <ul className={prefixClaName('container', rootClassName)}>
                {items}
            </ul>
        </div>
    );
}
