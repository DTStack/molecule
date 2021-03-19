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
import { TreeNodeModel, IFolderInputEvent } from 'mo/model';

const FolderTree: React.FunctionComponent<IFolderTree> = (
    props: IFolderTree & IFolderTreeController
) => {
    const {
        data = [],
        contextMenu = [],
        folderPanelContextMenu = [],
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
        explorerService.updateFileName(
            {
                ...node,
                name: newName,
            },
            () => {
                if (node?.fileType === FileTypes.file && newName) {
                    onSelectFile?.(
                        {
                            ...node,
                            modify: false,
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
                    // test
                    explorerService.addRootFolder?.(
                        new TreeNodeModel({
                            name: 'molecule_temp',
                            fileType: 'rootFolder',
                            children: [
                                new TreeNodeModel({
                                    name: 'test_sql',
                                    fileType: 'file',
                                    icon: 'symbol-file',
                                    value: `show tables;
SELECT 1;
DESC 6d_target_test;
create table if not exists ods_order_header1213 (
     order_header_id     string comment '订单头id'
    ,order_date          bigint comment '订单日期'
    ,shop_id             string comment '店铺id'
    ,customer_id         string comment '客户id'
    ,order_status        bigint comment '订单状态'
    ,pay_date            bigint comment '支付日期'
)comment '销售订单明细表'
PARTITIONED BY (ds string) lifecycle 1000;
`,
                                }),
                            ],
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
