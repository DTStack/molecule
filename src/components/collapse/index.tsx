import React, { useState } from 'react';
import { Toolbar } from 'mo/components/toolbar';
import { Icon } from 'mo/components/icon';
import { IActionBarItemProps } from 'mo/components/actionBar';
import { classNames } from 'mo/common/className';
import {
    defaultCollapseClassName,
    collapseItemClassName,
    collapseActiveClassName,
    collapseHeaderClassName,
    collapseExtraClassName,
    collapseContentClassName,
} from './base';
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane';
import { searchById } from 'mo/services/helper';
import logger from 'mo/common/logger';

type RenderFunctionProps = (data: DataBaseProps) => React.ReactNode;
export interface DataBaseProps {
    id: React.Key;
    name: string;
    className?: string;
    hidden?: boolean;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;
    config?: {
        size?: string;
        resizable?: boolean;
    };

    [key: string]: any;
}

export interface ICollapseProps {
    data?: DataBaseProps[];
    className?: string;
    onCollapseChange?: (keys: React.Key[]) => void;
    onToolbarClick?: (
        item: IActionBarItemProps,
        parentPanel: DataBaseProps
    ) => void;
}

// default collapse height, only contains header
export const HEADER_HEIGTH = 22;

export function Collapse(props: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<React.Key[]>([]);
    const wrapper = React.useRef<HTMLDivElement>(null);
    const sizesCache = React.useRef<string[]>([]);
    const splitPane = React.useRef<any>(null);

    const {
        className,
        data = [],
        onCollapseChange,
        onToolbarClick,
        ...restProps
    } = props;

    const handleChangeCallback = (key: React.Key) => {
        const splitPaneRef = splitPane.current;
        const currentKeys = activePanelKeys.concat();
        const sizes = splitPaneRef.getSizes();
        const index = data.findIndex(searchById(key));
        if (currentKeys.includes(key)) {
            currentKeys.splice(currentKeys.indexOf(key), 1);
            if (index > -1) {
                sizes[index] = `${HEADER_HEIGTH}px`;
            }
        } else {
            currentKeys.push(key);
            if (index > -1) {
                const currentSize = sizesCache.current[index];
                const size = data[index].config?.size || '1';
                sizes[index] =
                    size === 'auto' ? `0 0 auto` : currentSize || size;
            }
        }
        onCollapseChange?.(currentKeys);
        setActivePanelKeys(currentKeys);

        requestAnimationFrame(() => {
            splitPaneRef.setState({
                sizes,
            });
        });
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

    React.useLayoutEffect(() => {
        const collapse = wrapper.current;
        const splitPaneRef = splitPane.current;

        if (collapse && splitPaneRef) {
            const panes = collapse.querySelectorAll<HTMLDivElement>('.pane');

            panes.forEach((pane) => {
                const resizer = pane.nextSibling as HTMLDivElement | null;
                if (resizer) {
                    const nextSibling = resizer.nextSibling as HTMLDivElement | null;
                    // Only sibling of two side both can resize, the resizer could work
                    const isDisabled =
                        pane.className.includes('disabled') ||
                        nextSibling?.className.includes('disabled');

                    resizer.style.cursor = isDisabled
                        ? 'initial'
                        : 'row-resize';
                    resizer.style.pointerEvents = isDisabled ? 'none' : 'auto';
                }
            });
        }
    }, [activePanelKeys]);

    const handleChange = (values: string[]) => {
        data.forEach((item, index) => {
            if (item.config?.size === 'auto') {
                values[index] = '0 0 auto';
            }
        });
    };

    const handleResizeEnd = (values: string[]) => {
        sizesCache.current = values.concat();
    };

    return (
        <div
            className={classNames(defaultCollapseClassName, className)}
            ref={wrapper}
            {...restProps}
        >
            <SplitPane
                ref={splitPane}
                split="horizontal"
                // @ts-ignore
                onChange={handleChange}
                // @ts-ignore
                onResizeEnd={handleResizeEnd}
            >
                {data.map((panel, index) => {
                    if (!panel.id) {
                        logger.warn(
                            'Please make sure the children of collapse must have id'
                        );
                        return null;
                    }
                    const sizes = splitPane.current?.getSizes() || [];
                    if (panel.hidden)
                        return (
                            <Pane
                                key={panel.id}
                                initialSize={sizes[index]}
                                maxSize="0px"
                            ></Pane>
                        );

                    const isActive = activePanelKeys.includes(panel.id);
                    const resizable =
                        typeof panel.config?.resizable === 'undefined'
                            ? true
                            : panel.config?.resizable;

                    return (
                        <Pane
                            className={classNames('pane', {
                                disabled: !isActive || !resizable,
                            })}
                            key={panel.id}
                            initialSize={sizes[index] || `${HEADER_HEIGTH}px`}
                            minSize={`${HEADER_HEIGTH}px`}
                        >
                            <div
                                className={classNames(
                                    collapseItemClassName,
                                    isActive && collapseActiveClassName
                                )}
                            >
                                <div
                                    className={collapseHeaderClassName}
                                    tabIndex={0}
                                    style={{
                                        borderTop:
                                            index === 0 ? 'none' : undefined,
                                    }}
                                    onClick={() =>
                                        handleChangeCallback(panel.id)
                                    }
                                >
                                    <Icon
                                        type={
                                            isActive
                                                ? 'chevron-down'
                                                : 'chevron-right'
                                        }
                                    />
                                    {panel.name}
                                    <div className={collapseExtraClassName}>
                                        {isActive && (
                                            <Toolbar
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
                                        )}
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        collapseContentClassName,
                                        isActive && 'active'
                                    )}
                                    tabIndex={0}
                                >
                                    {renderPanels(panel, panel.renderPanel)}
                                </div>
                            </div>
                        </Pane>
                    );
                })}
            </SplitPane>
        </div>
    );
}
