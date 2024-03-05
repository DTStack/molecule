import { useEffect, useRef, useState } from 'react';
import useLatest from 'react-use/esm/useLatest';
import useMeasure from 'react-use/esm/useMeasure';
import { classNames } from 'mo/client/classNames';
import { useBatchRef } from 'mo/client/hooks';
import type { ContextMenuHandler, HTMLElementProps, IMenuItemProps, IterableItem, Render, UniqueId } from 'mo/types';
import { getNameForTitle, searchById } from 'mo/utils';

import ActionBar from '../actionBar';
import Display from '../display';
import Flex from '../flex';
import Icon from '../icon';
import Prevent from '../prevent';
import Progress from '../progress';
import Split from '../split';
import variables from './index.scss';

export interface ICollapseItem
    extends HTMLElementProps,
        Render<ICollapseItem>,
        Omit<IterableItem, 'icon' | 'disabled'> {
    toolbar?: IMenuItemProps[];
    config?: {
        /**
         * Specify how much of the remaining space should be assigned to the item, default is 1
         *
         * It unfolds in its own content height or the `MAX_GROW_HEIGHT` rather than in calculated height
         */
        grow?: number;
    };
}

export interface ICollapseProps extends HTMLElementProps {
    activePanelKeys?: UniqueId[];
    data?: ICollapseItem[];
    onCollapseChange?: (keys: UniqueId[]) => void;
    onToolbarClick?: (item: IMenuItemProps, panelId: UniqueId) => void;
    onContextMenu?: ContextMenuHandler<[panel: ICollapseItem]>;
}

// default collapse height, only contains header
export const HEADER_HEIGHT = parseInt(variables.headerSize, 10);

export default function Collapse({
    data = [],
    activePanelKeys = [],
    className,
    title,
    style,
    role,
    onCollapseChange,
    onToolbarClick,
    onContextMenu,
}: ICollapseProps) {
    const contentRefs = useBatchRef<HTMLDivElement>();
    const [ref, rect] = useMeasure<HTMLDivElement>();
    const [sizes, setSizes] = useState<number[]>(new Array(data.length).fill(HEADER_HEIGHT));
    const timeout = useRef(0);
    const activeKeysRef = useLatest(activePanelKeys);

    const mutationObserver = useRef<MutationObserver | undefined>();
    useEffect(() => {
        mutationObserver.current = new MutationObserver((mutationList) => {
            mutationList.forEach((mutation) => {
                setHeightWithEle(mutation.target as HTMLDivElement);
            });
        });

        return () => {
            mutationObserver.current?.disconnect();
            window.clearTimeout(timeout.current);
        };
    }, []);

    const watchEle = (id: UniqueId) => {
        timeout.current = window.setTimeout(() => {
            // To keep height same as the pane which grow is 0
            const ele = contentRefs.current[id]?.firstElementChild as HTMLElement;
            if (ele) {
                mutationObserver.current?.observe(ele, {
                    childList: false,
                    attributes: true,
                    subtree: false,
                    attributeFilter: ['style'],
                });
                setHeightWithEle(ele);
            }
        }, 0);
    };

    const performSizes = () => {
        const next = data.map((i) => (i.hidden ? 0 : HEADER_HEIGHT));
        const unExpanded = data.filter((item) => !activePanelKeys.includes(item.id) && !item.hidden);
        let total = rect.height - unExpanded.length * HEADER_HEIGHT;
        let pieces = 0;
        const tmpGrow: number[] = [];
        activePanelKeys.forEach((key) => {
            const idx = data.findIndex(searchById(key));
            const item = data[idx];
            if (item.hidden) return;
            const grow = item.config?.grow;
            if (grow === 0) {
                const ele = contentRefs.current[item.id]?.firstElementChild as HTMLElement;
                const height = (ele?.getBoundingClientRect().height ?? 0) + HEADER_HEIGHT;
                next[idx] = height;
                total -= height;
                watchEle(item.id);
            } else {
                pieces += grow ?? 1;
                tmpGrow.push(idx);
            }
        });
        const per = total / pieces;
        tmpGrow.forEach((idx) => {
            const item = data[idx];
            const grow = item.config?.grow ?? 1;
            next[idx] = per * grow;
        });
        setSizes(next);
    };

    useEffect(() => {
        performSizes();
    }, [data, activePanelKeys, rect.height]);

    function setHeightWithEle(ele: HTMLElement) {
        if (ele) {
            const parent = ele.parentElement as HTMLDivElement;
            const idx = data.findIndex((i) => i.id === parent.dataset.contentKey);
            const height = ele.getBoundingClientRect().height;
            setSizes((prev) => {
                const diff = height + HEADER_HEIGHT - prev[idx];
                prev[idx] = height + HEADER_HEIGHT;
                const nextExpand = data.findIndex((i, index) => activeKeysRef.current.includes(i.id) && index > idx);
                if (nextExpand === -1) return [...prev];
                prev[nextExpand] -= diff;
                return [...prev];
            });
        }
    }

    const handleChangeCallback = (key: UniqueId) => {
        const currentKeys = [...activePanelKeys];
        if (currentKeys.includes(key)) {
            const idx = currentKeys.indexOf(key);
            currentKeys.splice(idx, 1);
        } else {
            currentKeys.push(key);
        }
        onCollapseChange?.(currentKeys);
    };

    const loading = rect.height === 0 || sizes.every((size) => size === 0);

    return (
        <div ref={ref} className={classNames(variables.collapse, className)} title={title} style={style} role={role}>
            <Progress active={loading} />
            <Split sizes={sizes} split="horizontal" paneClassName={classNames(variables.pane)} onChange={setSizes}>
                {data.map((panel, index) => {
                    const isActive = activePanelKeys.includes(panel.id);
                    const prevExpand = activePanelKeys.includes(data[index - 1]?.id);
                    const bothExpand = isActive && prevExpand;
                    const noneGrow = panel.config?.grow !== 0 && data[index - 1]?.config?.grow !== 0;
                    return (
                        <Split.Pane
                            key={panel.id}
                            minSize={HEADER_HEIGHT}
                            maxSize={isActive ? Infinity : HEADER_HEIGHT}
                            resizable={bothExpand && noneGrow}
                            hidden={panel.hidden}
                        >
                            <div className={classNames(variables.item, panel.className, isActive && variables.active)}>
                                <Prevent onContextMenu={(e) => onContextMenu?.({ x: e.pageX, y: e.pageY }, panel)}>
                                    <Flex
                                        className={variables.header}
                                        tabIndex={0}
                                        justifyContent="space-between"
                                        onClick={() => handleChangeCallback(panel.id)}
                                    >
                                        <Flex title={panel.title || getNameForTitle(panel.name)}>
                                            <Icon type={isActive ? 'chevron-down' : 'chevron-right'} />
                                            <span className={variables.title}>{panel.name}</span>
                                        </Flex>
                                        {isActive && (
                                            <ActionBar
                                                className={variables.extra}
                                                key={panel.id}
                                                data={panel.toolbar || []}
                                                onClick={(item) => onToolbarClick?.(item, panel.id)}
                                            />
                                        )}
                                    </Flex>
                                </Prevent>
                                <Display visible={isActive} delay={Number(variables.transitionDelay)}>
                                    <div
                                        className={variables.content}
                                        tabIndex={0}
                                        ref={contentRefs(panel.id)}
                                        data-content-key={panel.id}
                                    >
                                        {panel.render?.(panel)}
                                    </div>
                                </Display>
                            </div>
                        </Split.Pane>
                    );
                })}
            </Split>
        </div>
    );
}
