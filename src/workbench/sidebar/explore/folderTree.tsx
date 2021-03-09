import * as React from 'react';
import { memo, useRef, useEffect, useCallback } from 'react';
import { IFolderTree } from 'mo';
import { select } from 'mo/common/dom';
import Tree, { FileTypes } from 'mo/components/tree';
import { Menu } from 'mo/components/menu';
import { getEventPosition } from 'mo/common/dom';
import { Button } from 'mo/components/button';
import { IFolderTreeController } from 'mo/controller/explorer/folderTree';
import { useContextView } from 'mo/components/contextView';
import { useContextMenu } from 'mo/components/contextMenu';
import { explorerService } from 'mo/services';
import { TreeNodeModel } from 'mo/model';

const FolderTree: React.FunctionComponent<IFolderTree> = (
    props: IFolderTree & IFolderTreeController
) => {
    const {
        data = [],
        contextMenu = [],
        onSelectFile,
        onDropTree,
        filterContextMenu,
        onClickContextMenu,
        ...restProps
    } = props;
    const inputRef = useRef<any>(null);

    const contextView = useContextView();

    let contextViewMenu;
    const folderContextMenu = [{
        id: 'addFolder',
        name: 'Add Folder to Workspace',
        onClick: () => {
            explorerService.addRootFolder?.(
                new TreeNodeModel({
                    name: `molecule_temp${Math.random()}`,
                    fileType: 'rootFolder',
                })
            );
        }
    }]
    const onClickMenuItem = useCallback(
        (e, item) => {
            contextViewMenu?.dispose();
        },
        [folderContextMenu]
    );
    const renderContextMenu = () => (
        <Menu onClick={onClickMenuItem} data={folderContextMenu} />
    );

    useEffect(() => {
        if (folderContextMenu.length > 0) {
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

    const setInputVal = (val) => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.value = val;
            }
        });
    };

    const inputEvents = {
        onFocus,
        setValue: (val) => setInputVal(val),
    };

    const handleRightClick = ({ event, node }) => {
        const menuItems = filterContextMenu?.(contextMenu, node.data);
        const handleOnMenuClick = (e: React.MouseEvent, item) => {
            onClickContextMenu?.(e, item, node.data, inputEvents);
            contextView.hide();
        };
        contextView?.show(getEventPosition(event), () => (
            <Menu onClick={handleOnMenuClick} data={menuItems} />
        ));
    };

    const handleUpdateFile = (e, node) => {
        const newName = (e.target as HTMLInputElement).value;
        explorerService.updateFile(
            {
                ...node,
                name: newName,
            },
            () => {
                if (node?.fileType === FileTypes.file && newName) {
                    onSelectFile?.(
                        {
                            ...node,
                            name: newName,
                        },
                        true
                    );
                }
            }
        );
    };

    const renderTitle = (node, index) => {
        const { modify, name } = node;

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

        return modify ? (
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
            data={data}
            draggable
            onSelectFile={onSelectFile}
            onRightClick={handleRightClick}
            renderTitle={renderTitle}
            {...restProps}
        />
    );

    const renderInitial = (
        <span>
            you have not yet opened a folder
            <Button
                onClick={() => {
                    console.log('test');
                    explorerService.addRootFolder?.(
                        new TreeNodeModel({
                            name: 'molecule_temp',
                            fileType: 'rootFolder',
                        })
                    );
                }}
            >
                Add Folder
            </Button>
        </span>
    );
    return data?.length > 0 ? renderByData : renderInitial;
};
export default memo(FolderTree);
