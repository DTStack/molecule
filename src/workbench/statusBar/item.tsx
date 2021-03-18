import { classNames } from 'mo/common/className';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import * as React from 'react';
import { memo } from 'react';
import { statusBarService } from 'mo/services';
import { itemClassName } from './base';

function StatusItem(props: IStatusBarItem) {
    const { className, onClick, name, data, render, ...extra } = props;
    const clsName = classNames(itemClassName, className);
    const { hidden } = statusBarService.getState();
    const display = hidden ? 'none' : 'block';
    const events = {
        onClick: function (e: React.MouseEvent) {
            onClick?.(e, props);
        },
    };

    return (
        <div className={clsName} {...extra} style={{ display }}>
            <a tabIndex={-1} title={name} {...events}>
                {render ? render(props) : name}
            </a>
        </div>
    );
}

export default memo(StatusItem);
