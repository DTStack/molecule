import * as React from 'react';
import { memo, useRef } from 'react';
import { IFolderTree } from 'mo';
import Tree, { FileTypes } from 'mo/components/tree';
import { Menu } from 'mo/components/menu';
import { getEventPosition } from 'mo/common/dom';
import { Button } from 'mo/components/button';
import { IFolderTreeController } from 'mo/controller/explorer/folderTree';
import { useContextView } from 'mo/components/contextView';
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

    const handleRightClick = ({ event, node }) => {
        const menuItems = filterContextMenu?.(contextMenu, node.data);
        const handleOnMenuClick = (e: React.MouseEvent, item) => {
            onClickContextMenu?.(e, item, node.data, onFocus);
            contextView.hide();
        };
        contextView?.show(getEventPosition(event), () => (
            <Menu onClick={handleOnMenuClick} data={menuItems} />
        ));
    };

    const onFocus = () => {
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        });
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
                    onSelectFile?.({
                        ...node,
                        name: newName,
                    });
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
        <>
            <Tree
                data={data}
                draggable
                onSelectFile={onSelectFile}
                onRightClick={handleRightClick}
                renderTitle={renderTitle}
                {...restProps}
            />
            {/* test service */}
            <div style={{ marginTop: '100px' }}>
                <Button
                    onClick={() => {
                        explorerService.addRootFolder?.(
                            new TreeNodeModel({
                                name: `tree_${Math.random() * 10 + 1}`,
                                fileType: 'rootFolder',
                            })
                        );
                    }}
                >
                    Add Folder
                </Button>
                <Button
                    onClick={() => {
                        console.log('test');
                        explorerService.newFile?.();
                    }}
                >
                    New File
                </Button>
            </div>
        </>
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
