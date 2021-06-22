import 'reflect-metadata';
import React, {
    memo,
    useRef,
    useEffect,
    useCallback,
    useLayoutEffect,
} from 'react';
import { IFolderTreeSubItem, TreeNodeModel } from 'mo/model';
import { select, getEventPosition } from 'mo/common/dom';
import Tree, { ITreeNodeItemProps } from 'mo/components/tree';
import { IMenuItemProps, Menu } from 'mo/components/menu';
import { Button } from 'mo/components/button';
import { IFolderTreeController } from 'mo/controller/explorer/folderTree';
import { useContextView } from 'mo/components/contextView';
import { useContextMenu } from 'mo/components/contextMenu';
import {
    folderTreeClassName,
    folderTreeEditClassName,
    folderTreeInputClassName,
} from './base';
import { classNames } from 'mo/common/className';

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

const FolderTree: React.FunctionComponent<IFolderTreeSubItem> = (
    props: IFolderTreeSubItem & IFolderTreeController
) => {
    const {
        data = [],
        contextMenu: rawContextMenu = [],
        folderPanelContextMenu = [],
        onUpdateFileName,
        onSelectFile,
        onDropTree,
        filterContextMenu,
        onClickContextMenu,
        onNewRootFolder,
        getInputEvent,
        ...restProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    // tree context view
    const contextMenu = useRef<ReturnType<typeof useContextMenu>>();

    // panel context view
    const contextView = useContextView();

    // to detect current tree whether is editable
    const hasEditable = detectHasEditableStatus(data);

    const onClickMenuItem = useCallback(
        (e, item) => {
            onClickContextMenu?.(e, item);
            contextMenu.current?.hide();
        },
        [folderPanelContextMenu]
    );

    // init context menu
    const initContextMenu = () => {
        return useContextMenu({
            anchor: select(`.${folderTreeClassName}`),
            render: () => (
                <Menu onClick={onClickMenuItem} data={folderPanelContextMenu} />
            ),
        });
    };

    const handleOnMenuClick = (
        e: React.MouseEvent,
        item: IMenuItemProps,
        data: TreeNodeModel
    ) => {
        onClickContextMenu?.(e, item, data);
        contextView.hide();
    };

    const handleRightClick = ({ event, node }) => {
        const { data } = node;
        const menuItems = filterContextMenu?.(rawContextMenu, data);

        contextView?.show(getEventPosition(event), () => (
            <Menu
                onClick={(e, item) => handleOnMenuClick(e, item!, data)}
                data={menuItems}
            />
        ));
    };

    const handleUpdateFile = (
        e: HTMLInputElement,
        node: ITreeNodeItemProps
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
        node: ITreeNodeItemProps
    ) => {
        handleUpdateFile(e.target, node);
    };

    /**
     * update file info when press `Enter` or `esc`
     */
    const handleInputKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        node: ITreeNodeItemProps
    ) => {
        if (e.keyCode === 13 || e.keyCode === 27) {
            handleUpdateFile(e.target as EventTarget & HTMLInputElement, node);
        }
    };

    const handlAddRootFolder = () => {
        onNewRootFolder?.();
    };

    const renderTitle = (node: ITreeNodeItemProps) => {
        const { isEditable, name } = node;

        return isEditable ? (
            <Input
                className={folderTreeInputClassName}
                type="text"
                defaultValue={name}
                ref={inputRef}
                onKeyDown={(e) => handleInputKeyDown(e, node)}
                autoComplete="off"
                autoFocus
                onBlur={(e) => handleInputBlur(e, node)}
            />
        ) : (
            name!
        );
    };

    useEffect(() => {
        if (folderPanelContextMenu.length > 0) {
            contextMenu.current = initContextMenu();
        }
        return () => {
            contextMenu.current?.dispose();
        };
    }, [data?.length]);

    const renderByData = (
        <Tree
            // root folder do not render
            data={data[0]?.children || []}
            className={classNames(
                folderTreeClassName,
                hasEditable && folderTreeEditClassName
            )}
            draggable={!hasEditable}
            onSelectNode={onSelectFile}
            onRightClick={handleRightClick}
            renderTitle={renderTitle}
            {...restProps}
        />
    );

    const renderInitial = (
        <div style={{ padding: '10px 5px' }}>
            you have not yet opened a folder
            <Button onClick={handlAddRootFolder}>Add Folder</Button>
        </div>
    );

    return data?.length > 0 ? renderByData : renderInitial;
};
export default memo(FolderTree);
