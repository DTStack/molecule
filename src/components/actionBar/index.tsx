import * as React from 'react';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';
import { mergeFunctions } from 'mo/common/utils';

export interface IActionBarItem<T = any> {
    id: string;
    name?: string;
    title?: string;
    iconName?: string;
    disabled?: boolean;
    checked?: boolean;
    data?: T;
    className?: string;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}

export interface IActionBar<T = any> {
    data: IActionBarItem<T>[];
    className?: string;
    onClick?(event: React.MouseEvent, item: IActionBarItem): void;
}

const defaultActionBarClassName = prefixClaName('action-bar');
const containerClassName = getBEMElement(
    defaultActionBarClassName,
    'container'
);
const itemClassName = getBEMElement(defaultActionBarClassName, 'item');
const itemDisabledClassName = getBEMModifier(itemClassName, 'disabled');
const itemCheckedClassName = getBEMModifier(itemClassName, 'checked');
const labelClassName = getBEMElement(defaultActionBarClassName, 'label');

export function ActionBarItem(props: IActionBarItem) {
    const { id, title, name, onClick } = props;
    const handClick = (e: React.MouseEvent) => {
        onClick?.(e, props);
    };
    const disabled = props.disabled ? itemDisabledClassName : null;
    const checked = props.checked ? itemCheckedClassName : null;
    const claNames = classNames(
        labelClassName,
        'codicon',
        props.iconName,
        disabled,
        checked
    );
    return (
        <li
            className={classNames(itemClassName, disabled)}
            onClick={handClick}
            key={`${id}`}
        >
            <a className={claNames} title={title}>
                {name}
            </a>
        </li>
    );
}

export default function ActionBar<T = any>(props: IActionBar<T>) {
    const { data = [], onClick, className, ...custom } = props;

    const claNames = classNames(defaultActionBarClassName, className);

    const items = data.map((item: IActionBarItem<T>) => (
        <ActionBarItem
            key={item.id}
            {...item}
            onClick={mergeFunctions(onClick, item.onClick)}
        />
    ));

    return (
        <div className={claNames} {...custom}>
            <ul className={containerClassName}>{items}</ul>
        </div>
    );
}
