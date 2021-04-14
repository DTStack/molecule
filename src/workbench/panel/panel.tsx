import * as React from 'react';
import { getBEMElement, prefixClaName } from 'mo/common/className';
import { IPanel } from 'mo/model/workbench/panel';
import { IPanelController } from 'mo/controller/panel';
import { Tabs } from 'mo/components/tabs';
import ActionBar from 'mo/components/actionBar';

const defaultClassName = prefixClaName('panel');
const panelHeaderClassName = getBEMElement(defaultClassName, 'header');

const panelToolbarClassName = getBEMElement(defaultClassName, 'toolbar');

const panelContainerClassName = getBEMElement(defaultClassName, 'container');

function Panel(props: IPanel & IPanelController) {
    const { data, current, toolbox = [], onTabChange, onToolbarClick } = props;
    let toolboxData = toolbox;
    if (current && current.toolbox) {
        toolboxData = current.toolbox.concat(toolbox);
    }

    const content =
        typeof current?.renderPanel === 'function'
            ? current?.renderPanel?.(current)
            : current?.renderPanel;

    return (
        <div className={defaultClassName}>
            <div className={panelHeaderClassName}>
                <Tabs data={data} onSelectTab={onTabChange} />
                <ActionBar
                    className={panelToolbarClassName}
                    data={toolboxData || []}
                    onClick={onToolbarClick}
                />
            </div>
            <div className={panelContainerClassName}>{content}</div>
        </div>
    );
}

export default Panel;
