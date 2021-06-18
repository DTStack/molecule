import * as React from 'react';
import { useState } from 'react';
import Logger from 'mo/common/logger';
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

// default collapse height, only contains header
const HEADER_HEIGTH = 26;

export function Collapse(props: ICollapseProps) {
    const [activePanelKeys, setActivePanelKeys] = useState<React.Key[]>([]);
    const wrapper = React.useRef<HTMLDivElement>(null);

    const {
        className,
        data = [],
        onCollapseChange,
        onToolbarClick,
        ...restProps
    } = props;

    // assets data must have id
    const filterData = data.filter((panel) => panel.id) as DataBaseProps[];
    if (filterData.length < data.length) {
        Logger.warn(new SyntaxError('collapse data must have id'));
    }

    // to save position temporarily, empty array when rerender
    const _cachePosition: number[][] = [];
    let _cacheWrapperHeight = React.useRef(0);

    const handleResize = React.useCallback(() => {
        // just want to trigger rerender
        setActivePanelKeys((keys) => keys.concat());
    }, []);

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useLayoutEffect(() => {
        filterData.forEach((panel) => {
            const isActive = activePanelKeys.includes(panel.id);
            let isEmpty = true;
            if (isActive) {
                const contentDom = document.querySelector(
                    `.${collapseContentClassName}[data-content='${panel.id}']`
                );
                isEmpty = !contentDom?.hasChildNodes();
            }
            panel._isEmpty = isEmpty;
            const [height, top] = calcPosition(
                activePanelKeys,
                panel,
                filterData
            );
            _cachePosition.push([height, top]);
            const dom = document.querySelector<HTMLElement>(
                `.${collapseItemClassName}[data-content='${panel.id}']`
            );
            if (dom) {
                dom.style.height = `${height}px`;
                dom.style.top = `${top}px`;
            }
        });
    }, [activePanelKeys]);

    const handleChangeCallback = (key: React.Key) => {
        const currentKeys = activePanelKeys.concat();
        if (currentKeys.includes(key)) {
            currentKeys.splice(currentKeys.indexOf(key), 1);
        } else {
            currentKeys.push(key);
        }
        onCollapseChange?.(currentKeys);
        setActivePanelKeys(currentKeys);
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

    /**
     * Calculate the position of the panel in view
     * @param keys Current active keys
     * @param panel Current panel
     * @param panels All panels array
     * @returns Tuple - [height, top]
     */
    const calcPosition = (
        keys: React.Key[],
        panel: DataBaseProps,
        panels: DataBaseProps[]
    ) => {
        // init a Tuple save height and top
        const res = [0, 0];
        const isActive = keys.includes(panel.id);
        // calculate height for current panel
        if (!isActive || panel._isEmpty) {
            // the height of inactive panel or empty panel is a fixed value
            res[0] = HEADER_HEIGTH;
        } else {
            // total height
            const wrapperHeight =
                wrapper.current?.getBoundingClientRect().height ||
                _cacheWrapperHeight.current;
            _cacheWrapperHeight.current = wrapperHeight;
            // count active panels
            const activeCount = keys.length;
            // count the height for active panels
            const activePanelHeight =
                wrapperHeight - HEADER_HEIGTH * (panels.length - activeCount);
            // count the non-empty & active panels in active panels
            const nonEmptyAndActivePanels = keys.filter((key) => {
                const targetPanel = panels.find((panel) => panel.id === key);
                if (!targetPanel) {
                    return false;
                } else if (typeof targetPanel._isEmpty === 'boolean') {
                    return !targetPanel._isEmpty;
                } else {
                    const content = renderPanels(panel, panel.renderPanel);
                    return !!content;
                }
            });

            // the height for active panels is divided equally by non-empty & active panels
            res[0] =
                (activePanelHeight -
                    HEADER_HEIGTH *
                        (keys.length - nonEmptyAndActivePanels.length)) /
                nonEmptyAndActivePanels.length;
        }

        // calculate top for current panel
        let topCount = 0;
        for (let index = 0; index < panels.length; index++) {
            const element = panels[index];
            // only count the position of front panel
            if (element === panel) {
                break;
            }
            // if this element is a active panel, then get height via cache
            // else count default height in
            if (keys.includes(element.id)) {
                const [cacheHeight] = _cachePosition[index];
                topCount += cacheHeight;
            } else {
                topCount += HEADER_HEIGTH;
            }
        }
        res[1] = topCount;
        return res;
    };

    return (
        <div
            className={classNames(defaultCollapseClassName, className)}
            ref={wrapper}
            {...restProps}
        >
            {filterData
                .filter((p) => !p.hidden)
                .map((panel) => {
                    const isActive = activePanelKeys.includes(panel.id);
                    return (
                        <div
                            className={classNames(
                                collapseItemClassName,
                                isActive && collapseActiveClassName
                            )}
                            data-content={panel.id}
                            key={panel.id}
                        >
                            <div
                                className={collapseHeaderClassName}
                                tabIndex={0}
                                onClick={() => handleChangeCallback(panel.id)}
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
                                className={collapseContentClassName}
                                data-content={panel.id}
                                tabIndex={0}
                            >
                                {renderPanels(panel, panel.renderPanel)}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
