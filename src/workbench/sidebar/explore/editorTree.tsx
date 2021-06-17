import React from 'react';
import { IEditorTreeController } from 'mo/controller';
import { FileTypes, IEditor, IEditorGroup } from 'mo/model';
import { Icon, ITabProps } from 'mo/components';
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

type UnionEditor = IEditor & IEditorTreeController;

interface IOpenEditProps extends UnionEditor {
    getFileIconByExtensionName: IFolderTreeService['getFileIconByExtensionName'];
}

const EditorTree = (props: IOpenEditProps) => {
    const {
        current,
        groups,
        getFileIconByExtensionName,
        onSelect,
        onClose,
    } = props;
    if (!groups || !groups.length) return null;

    const handleCloseClick = (group: IEditorGroup, file: ITabProps) => {
        onClose?.(file.id!, group.id!);
    };

    const handleItemClick = (group: IEditorGroup, file: ITabProps) => {
        if (group.id !== current?.id || file.id !== current?.tab?.id) {
            onSelect?.(file.id!, group.id!);
        }
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

    return (
        <div className={editorTreeClassName}>
            {groups.map((group, index) => {
                return (
                    <React.Fragment key={index}>
                        {groups.length !== 1 && (
                            <div
                                className={editorTreeGroupClassName}
                                onClick={(e) => handleGroupClick(e, group)}
                                key={index}
                            >
                                {`第 ${index + 1} 组`}
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
