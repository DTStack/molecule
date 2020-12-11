import 'mo/workbench/statusBar/style.scss';

import * as React from 'react';
import { memo } from 'react';

import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IStatusBar, IStatusBarItem } from 'mo/model/workbench/statusBar';
import StatusItem from './item';
import { mergeFunctions } from 'mo/common/utils';

export const statusBarClassName = prefixClaName('statusBar');
const leftItemsClassName = getBEMElement(statusBarClassName, 'left-items');
const rightItemsClassName = getBEMElement(statusBarClassName, 'right-items');

function sortByIndex(a: IStatusBarItem, b: IStatusBarItem) {
    return a.sortIndex - b.sortIndex;
}

function StatusBar(props: IStatusBar) {
    const { leftItems = [], onClick, rightItems = [] } = props;

    const renderItems = (data: IStatusBarItem[]) => {
        return data
            .sort(sortByIndex)
            .map((item: IStatusBarItem) => (
                <StatusItem
                    key={item.id}
                    {...item}
                    onClick={mergeFunctions(item.onClick, onClick)}
                />
            ));
    };

    return (
        <div className={statusBarClassName}>
            <div className={leftItemsClassName}>{renderItems(leftItems)}</div>
            <div className={rightItemsClassName}>{renderItems(rightItems)}</div>
        </div>
    );
}

export default memo(StatusBar);
