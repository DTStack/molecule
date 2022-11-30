import React from 'react';
import { tabActiveClassName, tabClassName, tabsClassName } from './base';
import { classNames } from 'mo/common/className';
import type { IAuxiliaryBar } from 'mo/model';
import type { IAuxiliaryController } from 'mo/controller';

export default function AuxiliaryBarTab({
    mode,
    data,
    current,
    onClick,
}: IAuxiliaryBar & IAuxiliaryController) {
    if (mode === 'default') return null;

    return (
        <ul className={tabsClassName}>
            {data?.map((item) => (
                <li
                    key={item.key}
                    className={classNames(
                        tabClassName,
                        current === item.key && tabActiveClassName
                    )}
                    onClick={() => onClick?.(item.key)}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    );
}
