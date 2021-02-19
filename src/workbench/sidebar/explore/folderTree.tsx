import * as React from 'react';
import { memo, useRef } from 'react';
import { IFolderTree } from 'mo';
import Tree from 'mo/components/tree';
import { Menu } from 'mo/components/menu';
import { getEventPosition } from 'mo/common/dom';
import { Button } from 'mo/components/button';
import { IFolderTreeController } from 'mo/controller/explorer/folderTree';
import { useContextView } from 'mo/components/contextView';

const FolderTree: React.FunctionComponent<IFolderTree> = (
    props: IFolderTree & IFolderTreeController
) => {
    const {
        data = [],
        contextMenu = [],
        onSelectFile,
        onCreateFile,
        onUpdateFile,
        onRename,
        onDeleteFile,
        onDropTree,
        filterContextMenu,
        onClickContextMenu,
        ...restProps
    } = props;

    const inputRef = useRef<any>(null);

    const contextView = useContextView();

    const handleRightClick = ({ event, node }) => {
        const menuItems = filterContextMenu?.(contextMenu, node);
        const handleOnMenuClick = (e: React.MouseEvent, item) => {
            onClickContextMenu?.(e, item, node);
            contextView.hide();
        };
        contextView?.show(getEventPosition(event), () => (
            <Menu onClick={handleOnMenuClick} data={menuItems} />
        ));
    };

    const renderTitle = (node, index) => {
        const { modify, name } = node;

        const handleInputKeyDown = (
            e: React.KeyboardEvent<HTMLInputElement>
        ) => {
            if (e.keyCode === 13) {
                const fileName = (e.target as HTMLInputElement).value;
                onUpdateFile?.(node, fileName, index);
            }
        };
        const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
            const fileName = (e.target as HTMLInputElement).value;
            onUpdateFile?.(node, fileName, index);
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
            <Button onClick={onCreateFile}>New Folder</Button>
        </span>
    );

    return data?.length > 0 ? renderByData : renderInitial;
};
export default memo(FolderTree);
