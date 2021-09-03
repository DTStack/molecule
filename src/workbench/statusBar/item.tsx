import React from 'react';
import { classNames } from 'mo/common/className';
import { IStatusBarItem } from 'mo/model/workbench/statusBar';
import { IStatusBarController } from 'mo/controller/statusBar';
import { itemClassName } from './base';

export function StatusItem(props: IStatusBarItem & IStatusBarController) {
    const { className, onClick, id, name, data, render, ...extra } = props;
    const clsName = classNames(itemClassName, className);
    const events = {
        onClick: function (e: React.MouseEvent) {
            onClick?.(e, props);
        },
    };

    return (
        <div className={clsName} id={id} {...extra}>
            <a tabIndex={-1} title={name} {...events}>
                {render ? render(props) : name}
            </a>
        </div>
    );
}
