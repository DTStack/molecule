import * as React from 'react';
import Toolbar from 'mo/components/toolbar';
import { classNames } from 'mo/common/className';
import {
    defaultSearchClassName,
    replaceContainerClassName,
    searchToolBarClassName,
} from './base';

export interface IReplaceInput {}

export function ReplaceInput(props: IReplaceInput) {
    const addons = [
        {
            id: 'PreserveCase',
            title: 'Preserve Case',
            disabled: false,
            iconName: 'codicon-preserve-case',
        },
        {
            id: 'Replace All',
            title: 'ReplaceAll',
            disabled: false,
            iconName: 'codicon-replace-all',
        },
    ];
    const onClick = (e, item) => {
        console.log('onClick:', e, item);
    };
    return (
        <div
            className={classNames(
                defaultSearchClassName,
                replaceContainerClassName
            )}
        >
            <input />
            <Toolbar
                className={searchToolBarClassName}
                data={addons}
                onClick={onClick}
            />
        </div>
    );
}
