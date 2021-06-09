import * as React from 'react';
import { useState } from 'react';
import RcCollapse, { Panel as CollapsePanel } from 'rc-collapse';
import { Toolbar } from 'mo/components/toolbar';
import { Icon } from 'mo/components/icon';
import { IActionBarItemProps } from 'mo/components/actionBar';
import {
    prefixClaName,
    classNames,
    getBEMElement,
    getBEMModifier,
} from 'mo/common/className';

type RenderFunctionProps = (data: DataBaseProps) => JSX.Element | null;

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
const toolbarCollapseClassName = getBEMModifier(
    getBEMElement(defaultCollapseClassName, 'content'),
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
    if (filterData.length !== filterData.length) {
        console.warn(new SyntaxError('collapse data must have id'));
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
                    .map((panel) => (
                        <CollapsePanel
                            tabIndex={-1}
                            key={panel.id}
                            panelKey={panel.id}
                            header={panel.name}
                            className={panel.className}
                            extra={
                                activePanelKeys.includes(panel.id) && (
                                    <Toolbar
                                        className={toolbarCollapseClassName}
                                        key={panel.id}
                                        data={panel.toolbar || []}
                                        onClick={(e, item) =>
                                            handleToolbarClick(e, item, panel)
                                        }
                                    />
                                )
                            }
                        >
                            {renderPanels(panel, panel.renderPanel)}
                        </CollapsePanel>
                    ))}
            </RcCollapse>
        </div>
    );
}

export { CollapsePanel };
