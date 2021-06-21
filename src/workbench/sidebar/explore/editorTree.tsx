import React from 'react';
import { IEditorTreeController } from 'mo/controller';
import {
    EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS,
    EXPLORER_TOGGLE_SAVE_GROUP,
    FileTypes,
    IEditor,
    IEditorGroup,
} from 'mo/model';
import {
    IActionBarItemProps,
    Icon,
    IMenuItemProps,
    ITabProps,
    Menu,
    Toolbar,
    useContextView,
} from 'mo/components';
import { IFolderTreeService } from 'mo/services';
import {
    editorTreeActiveItemClassName,
    editorTreeClassName,
    editorTreeCloseIconClassName,
    editorTreeFileIconClassName,
    editorTreeFileNameClassName,
    editorTreeFilePathClassName,
    editorTreeGroupClassName,
    editorTreeItemClassName,
} from './base';
import { classNames } from 'mo/common/className';
import { getEventPosition } from 'mo/common/dom';
import { localize } from 'mo/i18n/localize';

// override onContextMenu
type UnionEditor = Omit<IEditor & IEditorTreeController, 'onContextMenu'>;
export interface IOpenEditProps extends UnionEditor {
    getFileIconByExtensionName: IFolderTreeService['getFileIconByExtensionName'];
    /**
     * Group Header toolbar
     */
    groupToolbar?: IActionBarItemProps<IEditorGroup>[];
    /**
     * Item context menus
     */
    contextMenu?: IMenuItemProps[];
    /**
     * Group Header context menus
     * It'll use the value of contextMenu if specify contextMenu but not specify headerContextMenu
     */
    headerContextMenu?: IMenuItemProps[];
    onContextMenu?: (
        menu: IMenuItemProps,
        groupId: number,
        file?: ITabProps
    ) => void;
}

const EditorTree = (props: IOpenEditProps) => {
    const {
        current,
        groups,
        groupToolbar,
        contextMenu = [],
        headerContextMenu,
        getFileIconByExtensionName,
        onSelect,
        onSaveGroup,
        onContextMenu,
        onCloseGroup,
        onClose,
    } = props;
    if (!groups || !groups.length) return null;

    const contextView = useContextView();

    const handleCloseClick = (group: IEditorGroup, file: ITabProps) => {
        onClose?.(file.id!, group.id!);
    };

    const handleItemClick = (group: IEditorGroup, file: ITabProps) => {
        if (group.id !== current?.id || file.id !== current?.tab?.id) {
            onSelect?.(file.id!, group.id!);
        }
    };

    const handleOnMenuClick = (
        menu: IMenuItemProps,
        group: IEditorGroup,
        file?: ITabProps
    ) => {
        contextView.hide();
        onContextMenu?.(menu, group.id!, file);
    };

    const handleRightClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        group: IEditorGroup,
        file: ITabProps
    ) => {
        e.preventDefault();
        contextView.show(getEventPosition(e), () => (
            <Menu
                onClick={(_, item) => handleOnMenuClick(item!, group, file)}
                data={contextMenu}
            />
        ));
    };

    const handleHeaderRightClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        group: IEditorGroup
    ) => {
        e.preventDefault();
        const groupHeaderContext = headerContextMenu || contextMenu;
        contextView.show(getEventPosition(e), () => (
            <Menu
                onClick={(_, item) => handleOnMenuClick(item!, group)}
                data={groupHeaderContext}
            />
        ));
    };

    // click group title will open the first file in this group
    const handleGroupClick = (e, group: IEditorGroup) => {
        const { target } = e;
        const firstFile = group.data?.[0];
        if (target.nextElementSibling && firstFile) {
            onSelect?.(firstFile.id!, group.id!);
            target.nextElementSibling.focus();
        }
    };

    const handleToolBarClick = (
        e: React.MouseEvent<Element, MouseEvent>,
        item: IActionBarItemProps,
        group: IEditorGroup
    ) => {
        e.stopPropagation();
        switch (item.id) {
            case EXPLORER_TOGGLE_CLOSE_GROUP_EDITORS:
                onCloseGroup?.(group.id!);
                break;
            case EXPLORER_TOGGLE_SAVE_GROUP:
                onSaveGroup?.(group.id!);
                break;
            default:
                // default behavior
                break;
        }
    };

    return (
        <div className={editorTreeClassName}>
            {groups.map((group, index) => {
                return (
                    <React.Fragment key={index}>
                        {groups.length !== 1 && (
                            <div
                                className={editorTreeGroupClassName}
                                onClick={(e) => handleGroupClick(e, group)}
                                onContextMenu={(e) =>
                                    handleHeaderRightClick(e, group)
                                }
                                key={index}
                            >
                                {localize(
                                    'sidebar.explore.openEditor.group',
                                    'Group',
                                    (index + 1).toString()
                                )}
                                {groupToolbar && (
                                    <Toolbar
                                        data={groupToolbar}
                                        onClick={(e, item) =>
                                            handleToolBarClick(e, item, group)
                                        }
                                    />
                                )}
                            </div>
                        )}
                        {group.data?.map((file) => {
                            const isActive =
                                group.id === current?.id &&
                                file.id === current?.tab?.id;
                            return (
                                <div
                                    title={`${file.data.path}/${file.name}`}
                                    className={classNames(
                                        editorTreeItemClassName,
                                        isActive &&
                                            editorTreeActiveItemClassName
                                    )}
                                    tabIndex={0}
                                    key={`${index}_${file.id}`}
                                    onClick={() => handleItemClick(group, file)}
                                    onContextMenu={(e) =>
                                        handleRightClick(e, group, file)
                                    }
                                >
                                    <Icon
                                        className={editorTreeCloseIconClassName}
                                        onClick={() =>
                                            handleCloseClick(group, file)
                                        }
                                        type="close"
                                    />
                                    <Icon
                                        className={editorTreeFileIconClassName}
                                        type={getFileIconByExtensionName(
                                            file.name!,
                                            FileTypes.File
                                        )}
                                    />
                                    <span
                                        className={editorTreeFileNameClassName}
                                    >
                                        {file.name}
                                    </span>
                                    <span
                                        className={editorTreeFilePathClassName}
                                    >
                                        {file.data.path}
                                    </span>
                                </div>
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export { EditorTree };
