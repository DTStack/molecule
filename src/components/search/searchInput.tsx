import * as React from 'react';
import Toolbar from 'mo/components/toolbar';
import { classNames } from 'mo/common/className';
import {
    defaultSearchClassName,
    searchContainerClassName,
    searchToolBarClassName
} from './base';

export interface ISearchInput {
}

export function SearchInput<T>(props: ISearchInput) {
    const addons = [
        {
            id: 'MatchCase',
            title: 'Match Case',
            disabled: false,
            iconName: 'codicon-case-sensitive',
        },
        {
            id: 'MatchWholeWord',
            title: 'Match Whole Word',
            disabled: false,
            iconName: 'codicon-whole-word',
        },
        {
            id: 'UseRegularExpression',
            disabled: false,
            title: 'Use Regular Expression',
            iconName: 'codicon-regex',
        }
    ]
    const onClick = (e, item) => {
        console.log('onClick:', e, item);
    };
    return <div className={classNames(defaultSearchClassName, searchContainerClassName)}>
        <input />
        <Toolbar className={searchToolBarClassName} data={addons} onClick={onClick} />
    </div>
}