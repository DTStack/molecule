import { classNames, getBEMElement } from 'mo/common/className';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import * as React from 'react';
import { memo } from 'react';
import { statusBarClassName } from './statusBar';

function StatusItem(props: IStatusBarItem) {
    const itemClassName = getBEMElement(statusBarClassName, 'item');

    const { className, onClick, name, render, ...extra } = props;

    const clsName = classNames(itemClassName, className);
    const events = {
        onClick: function (e: React.MouseEvent) {
            onClick?.(e, props);
        },
    };

    return (
        <div className={clsName} {...extra}>
            <a tabIndex={-1} title={name} {...events}>
                {render ? render() : name}
            </a>
        </div>
    );
}

export default memo(StatusItem);
