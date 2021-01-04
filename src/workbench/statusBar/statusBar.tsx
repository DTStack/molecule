import * as React from 'react';
import { memo } from 'react';

import { IStatusBar, IStatusBarItem } from 'mo/model/workbench/statusBar';
import StatusItem from './item';
import { mergeFunctions } from 'mo/common/utils';
import { IStatusBarController } from 'mo/controller/statusBar';
import {
    leftItemsClassName,
    rightItemsClassName,
    sortByIndex,
    statusBarClassName,
} from './base';

function StatusBar(props: IStatusBar & IStatusBarController) {
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
