import 'reflect-metadata';
import React, { memo, useRef, useEffect, useLayoutEffect } from 'react';
import { IFolderTree, IFolderTreeNodeProps } from 'mo/model';
import { select, getEventPosition } from 'mo/common/dom';
import Tree, { ITreeProps } from 'mo/components/tree';
import { IMenuItemProps, Menu } from 'mo/components/menu';
import { Button } from 'mo/components/button';
import type { IFolderTreeController } from 'mo/controller/explorer/folderTree';
import { useContextMenu } from 'mo/components/contextMenu';
import {
    folderTreeClassName,
    folderTreeEditClassName,
    folderTreeInputClassName,
} from './base';
import { classNames } from 'mo/common/className';
import { Scrollbar, useContextViewEle } from 'mo/components';
import { ICollapseItem } from 'mo/components/collapse';

export interface IFolderTreeProps extends IFolderTreeController, IFolderTree {
    panel: ICollapseItem;
}

const detectHasEditableStatus = (data) => {
    const stack = [...data];
    let res = false;
    while (stack.length) {
        const headElm = stack.pop();
        if (headElm?.isEditable) {
            res = true;
            break;
        } else {
            stack.push(...(headElm?.children || []));
        }
    }
    return res;
};

/**
 * A simple wrapper Input, achieve autoFucus & auto select file name
 */
const Input = React.forwardRef(
    (
        // same as raw input
        props: React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        ref: React.LegacyRef<HTMLInputElement>
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        useLayoutEffect(() => {
            if (inputRef.current) {
                const ext = ((props.defaultValue || '') as string).lastIndexOf(
                    '.'
                );
                inputRef.current.selectionStart = 0;
                inputRef.current.selectionEnd =
                    // if period at position of 0, then this period means hidden file
                    ext > 0
                        ? ext
                        : ((props.defaultValue || '') as string).length;
            }
        }, []);
        return <input {...props} ref={inputRef} />;
    }
);

const FolderTree: React.FunctionComponent<IFolderTreeProps> = (props) => {
    const {
        folderTree = {},
        entry,
        panel,
        onUpdateFileName,
        onSelectFile,
        onDropTree,
        onClickContextMenu,
        onRightClick,
        onLoadData,
        createTreeNode,
        onExpandKeys,
        ...restProps
    } = props;

    const {
        data = [],
        folderPanelContextMenu = [],
        expandKeys,
        loadedKeys,
        current,
    } = folderTree;

    const inputRef = useRef<HTMLInputElement>(null);
    // tree context view
    const contextMenu = useRef<ReturnType<typeof useContextMenu>>();

    // panel context view
    const contextView = useContextViewEle();

    // to detect current tree whether is editable
    const hasEditable = detectHasEditableStatus(data);

    const onClickMenuItem = (e, item) => {
        onClickContextMenu?.(item);
        contextMenu.current?.hide();
    };

    // init context menu
    const initContextMenu = () => {
        return useContextMenu({
            anchor: select(`.${folderTreeClassName}`),
            render: () => (
                <Menu
                    role="menu"
                    onClick={onClickMenuItem}
                    data={folderPanelContextMenu}
                />
            ),
        });
    };

    const handleMenuClick = (
        item: IMenuItemProps,
        data: IFolderTreeNodeProps
    ) => {
        onClickContextMenu?.(item, data);
        contextView?.hide();
    };

    const handleRightClick: ITreeProps['onRightClick'] = (event, data) => {
        if ((event.target as HTMLElement).nodeName !== 'INPUT') {
            event.preventDefault();
            const menuItems = onRightClick?.(data) || [];

            menuItems.length &&
                contextView?.show(getEventPosition(event), () => (
                    <Menu
                        role="menu"
                        onClick={(_, item) => handleMenuClick(item!, data)}
                        data={menuItems}
                    />
                ));
        }
    };

    const handleUpdateFile = (
        e: HTMLInputElement,
        node: IFolderTreeNodeProps
    ) => {
        const newName = e.value;
        onUpdateFileName?.({
            ...node,
            name: newName,
        });
    };

    /**
     * update file info when input blur
     */
    const handleInputBlur = (
        e: React.FocusEvent<HTMLInputElement>,
        node: IFolderTreeNodeProps
    ) => {
        handleUpdateFile(e.target, node);
    };

    /**
     * update file info when press `Enter` or `esc`
     */
    const handleInputKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        node: IFolderTreeNodeProps
    ) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            handleUpdateFile(e.target as EventTarget & HTMLInputElement, node);
        }
    };

    const renderTitle = (node: IFolderTreeNodeProps) => {
        const { isEditable, name } = node;

        return isEditable ? (
            <Input
                role="input"
                className={folderTreeInputClassName}
                type="text"
                defaultValue={name}
                ref={inputRef}
                onKeyDown={(e) => handleInputKeyDown(e, node)}
                autoComplete="off"
                autoFocus
                onBlur={(e) => handleInputBlur(e, node)}
                onClick={(e) => e.stopPropagation()}
            />
        ) : (
            name!
        );
    };

    const handleTreeClick = () => {
        onSelectFile?.();
    };

    const handleDropTree = (source, target) => {
        onDropTree?.(source, target);
    };

    const handleAddRootFolder = () => {
        createTreeNode?.('RootFolder');
    };

    useEffect(() => {
        if (folderPanelContextMenu.length > 0) {
            contextMenu.current = initContextMenu();
        }
        return () => {
            contextMenu.current?.dispose();
        };
    }, [data.length]);

    const welcomePage = (
        <div data-content={panel.id}>
            {entry ? (
                <>{entry}</>
            ) : (
                <div style={{ padding: '10px 5px' }}>
                    you have not yet opened a folder
                    <Button onClick={handleAddRootFolder}>Add Folder</Button>
                </div>
            )}
        </div>
    );

    if (!data.length) return welcomePage;

    return (
        <Scrollbar isShowShadow>
            <div data-content={panel.id} style={{ height: '100%' }}>
                <Tree
                    // root folder do not render
                    activeKey={current?.id}
                    expandKeys={expandKeys}
                    loadedKeys={loadedKeys}
                    data={data[0]?.children || []}
                    className={classNames(
                        folderTreeClassName,
                        hasEditable && folderTreeEditClassName
                    )}
                    draggable={!hasEditable}
                    onDropTree={handleDropTree}
                    onSelect={onSelectFile}
                    onTreeClick={handleTreeClick}
                    onRightClick={handleRightClick}
                    renderTitle={renderTitle}
                    onLoadData={onLoadData}
                    onExpand={onExpandKeys}
                    {...restProps}
                />
            </div>
        </Scrollbar>
    );
};
export default memo(FolderTree);
