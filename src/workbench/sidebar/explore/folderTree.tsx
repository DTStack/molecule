import 'reflect-metadata';
import * as React from 'react';
import { memo, useRef, useEffect, useCallback } from 'react';
import { IFolderTreeSubItem } from 'mo/model';
import { select } from 'mo/common/dom';
import Tree from 'mo/components/tree';
import { Menu } from 'mo/components/menu';
import { getEventPosition } from 'mo/common/dom';
import { Button } from 'mo/components/button';
import { IFolderTreeController } from 'mo/controller/explorer/folderTree';
import { useContextView } from 'mo/components/contextView';
import { useContextMenu } from 'mo/components/contextMenu';
import { IFolderInputEvent } from 'mo/model';

const FolderTree: React.FunctionComponent<IFolderTreeSubItem> = (
    props: IFolderTreeSubItem & IFolderTreeController
) => {
    const {
        data = [],
        contextMenu = [],
        folderPanelContextMenu = [],
        onUpdateFileName,
        onSelectFile,
        onDropTree,
        filterContextMenu,
        onClickContextMenu,
        getInputEvent,
        ...restProps
    } = props;
    const inputRef = useRef<any>(null);

    const contextView = useContextView();

    let contextViewMenu;
    const onClickMenuItem = useCallback(
        (e, item) => {
            onClickContextMenu?.(e, item);
            contextViewMenu?.dispose();
        },
        [folderPanelContextMenu]
    );
    const renderContextMenu = () => (
        <Menu onClick={onClickMenuItem} data={folderPanelContextMenu} />
    );

    useEffect(() => {
        if (folderPanelContextMenu.length > 0) {
            contextViewMenu = useContextMenu({
                anchor: select('.samplefolder'),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu?.dispose();
        };
    });

    const onFocus = () => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        });
    };

    const setInputValue = (val) => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.value = val;
            }
        });
    };

    const inputEvents: IFolderInputEvent = {
        onFocus,
        setValue: (val) => setInputValue(val),
    };

    const handleRightClick = ({ event, node }) => {
        const menuItems = filterContextMenu?.(contextMenu, node.data);
        const handleOnMenuClick = (e: React.MouseEvent, item) => {
            onClickContextMenu?.(
                e,
                item,
                node.data,
                getInputEvent?.(inputEvents)
            );
            contextView.hide();
        };
        contextView?.show(getEventPosition(event), () => (
            <Menu onClick={handleOnMenuClick} data={menuItems} />
        ));
    };

    const handleUpdateFile = (e, node) => {
        const newName = (e.target as HTMLInputElement).value;
        onUpdateFileName?.({
            ...node,
            name: newName,
        });
    };

    const renderTitle = (node, index) => {
        const { isEditable, name } = node;

        const handleInputKeyDown = (
            e: React.KeyboardEvent<HTMLInputElement>
        ) => {
            if (e.keyCode === 13) {
                handleUpdateFile(e, node);
            }
        };
        const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            handleUpdateFile(e, node);
        };

        return isEditable ? (
            <input
                type="text"
                ref={inputRef}
                onKeyDown={handleInputKeyDown}
                autoComplete="off"
                onBlur={handleInputBlur}
            />
        ) : (
            name
        );
    };

    const renderByData = (
        <Tree
            // root folder do not render
            data={data[0]?.children || []}
            draggable
            onSelectNode={onSelectFile}
            onRightClick={handleRightClick}
            renderTitle={renderTitle}
            {...restProps}
        />
    );

    const renderInitial = (
        <div style={{ padding: '10px 5px' }}>
            you have not yet opened a folder
            <Button>Add Folder</Button>
        </div>
    );

    return data?.length > 0 ? renderByData : renderInitial;
};
export default memo(FolderTree);
