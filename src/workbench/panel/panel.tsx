import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IPanel } from 'mo/model/workbench/panel';
import { IPanelController } from 'mo/controller/panel';
import { Tabs } from 'mo/components/tabs';
import { ActionBar } from 'mo/components/actionBar';

const defaultClassName = prefixClaName('panel');
const panelHeaderClassName = getBEMElement(defaultClassName, 'header');
const panelToolbarClassName = getBEMElement(defaultClassName, 'toolbar');
const panelContainerClassName = getBEMElement(defaultClassName, 'container');

export function Panel(props: IPanel & IPanelController) {
    const { data, current, toolbox = [], onTabChange, onToolbarClick } = props;
    let toolboxData = toolbox;
    if (current && current.toolbox) {
        toolboxData = current.toolbox.concat(toolbox);
    }

    const content =
        typeof current?.renderPane === 'function'
            ? current?.renderPane?.(current)
            : current?.renderPane;

    return (
        <div className={defaultClassName}>
            <div className={panelHeaderClassName}>
                <Tabs
                    activeTab={current?.id}
                    data={data}
                    onSelectTab={onTabChange}
                />
                <ActionBar
                    className={panelToolbarClassName}
                    data={toolboxData || []}
                    onClick={onToolbarClick}
                />
            </div>
            <div className={panelContainerClassName} tabIndex={0}>
                {content}
            </div>
        </div>
    );
}

export default Panel;
