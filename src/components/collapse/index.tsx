import * as React from 'react';
import { useState } from 'react';
import Logger from 'mo/common/logger';
import RcCollapse, { Panel as CollapsePanel } from 'rc-collapse';
import { Toolbar } from 'mo/components/toolbar';
import { Icon } from 'mo/components/icon';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { prefixClaName, classNames, getBEMElement } from 'mo/common/className';

type RenderFunctionProps = (data: DataBaseProps) => React.ReactNode;

interface DataBaseProps {
    id: React.Key;
    name: string;
    className?: string;
    hidden?: boolean;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;

    [key: string]: any;
}

export interface ICollapseProps {
    data?: Partial<DataBaseProps>[];
    className?: string;
    onCollapseChange?: (keys: React.Key[]) => void;
    onToolbarClick?: (
        item: IActionBarItemProps,
        parentPanel: DataBaseProps
    ) => void;
}

const defaultCollapseClassName = prefixClaName('collapse');
const toolbarCollapseClassName = getBEMElement(
    defaultCollapseClassName,
    'toolbar'
);

export function Collapse(props: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<React.Key[]>([]);

    const {
        className,
        data = [],
        onCollapseChange,
        onToolbarClick,
        ...restProps
    } = props;

    const handleChangeCallback = (key: React.Key[]) => {
        onCollapseChange?.(key);
        setActivePanelKeys(key || []);
    };

    const handleToolbarClick = (
        e: React.MouseEvent,
        item: IActionBarItemProps,
        panel: DataBaseProps
    ) => {
        e.stopPropagation();
        onToolbarClick?.(item, panel);
    };

    const renderPanels = (
        data: DataBaseProps,
        render?: RenderFunctionProps
    ) => {
        if (render) {
            return render(data);
        }
        return null;
    };

    const filterData = data.filter((panel) => panel.id) as DataBaseProps[];
    if (filterData.length < data.length) {
        Logger.warn(new SyntaxError('collapse data must have id'));
    }

    return (
        <div className={classNames(defaultCollapseClassName, className)}>
            <RcCollapse
                onChange={handleChangeCallback}
                expandIcon={({ isActive }: { isActive: boolean }) => (
                    <Icon type={isActive ? 'chevron-down' : 'chevron-right'} />
                )}
                {...restProps}
            >
                {filterData
                    .filter((p) => !p.hidden)
                    .map((panel) => {
                        const content = renderPanels(panel, panel.renderPanel);
                        return (
                            <CollapsePanel
                                tabIndex={-1}
                                key={panel.id}
                                panelKey={panel.id}
                                header={panel.name}
                                className={classNames(
                                    panel.className,
                                    content === null && 'empty'
                                )}
                                extra={
                                    activePanelKeys.includes(panel.id) && (
                                        <Toolbar
                                            className={toolbarCollapseClassName}
                                            key={panel.id}
                                            data={panel.toolbar || []}
                                            onClick={(e, item) =>
                                                handleToolbarClick(
                                                    e,
                                                    item,
                                                    panel
                                                )
                                            }
                                        />
                                    )
                                }
                            >
                                {content}
                            </CollapsePanel>
                        );
                    })}
            </RcCollapse>
        </div>
    );
}

export { CollapsePanel };
