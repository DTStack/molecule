import { IMenuItem } from 'mo/components/menu';
import { ITreeNodeItem, FileTypes, FileType } from 'mo/components/tree';
import Modal from 'mo/components/dialog';
const confirm = Modal.confirm;

export const getFolderDefaultContextMenu = (
    fileType?: FileType,
    activeData?: ITreeNodeItem,
    props?
): IMenuItem[] => {
    const { createFile, rename, deleteFile, onFocus } = props;
    let contextMenu: IMenuItem[] = [];
    const handleDelte = (activeData) => {
        confirm({
            title: `Are you sure you want to delete '${activeData?.name}' ?`,
            content: 'This action is irreversible!',
            onOk() {
                deleteFile && deleteFile(activeData);
            },
            onCancel() { },
        });
    };
    const commContextMenu = [
        {
            id: 'rename',
            name: 'Rename',
            onClick: (e, active) => {
                rename?.(activeData, onFocus);
            },
        },
        {
            id: 'delete',
            name: 'Delete',
            onClick: (e, active) => {
                handleDelte(activeData);
            },
        },
    ];
    if (fileType === FileTypes.FOLDER) {
        contextMenu = [
            {
                id: 'newFile',
                name: 'New File',
                onClick: (e, active) => {
                    createFile?.(
                        activeData,
                        FileTypes.FILE as FileType,
                        onFocus
                    );
                },
            },
            {
                id: 'newFolder',
                name: 'New Folder',
                onClick: (e, active) => {
                    createFile?.(
                        activeData,
                        FileTypes.FOLDER as FileType,
                        onFocus
                    );
                },
            },
        ].concat(commContextMenu);
    } else if (fileType === FileTypes.FILE) {
        contextMenu = [
            {
                id: 'openToSide',
                name: 'Open to the side',
            },
        ].concat(commContextMenu);
    }
    return contextMenu;
};
