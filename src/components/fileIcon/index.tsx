import './style.scss';
import * as React from 'react';
import {
    getIconForFile,
    getIconForFolder,
    getIconForOpenFolder,
} from 'vscode-icons-js';
import { prefixClaName, classNames } from 'mo/common/className';

const ICON_BASE_PATH = '/assets/fileIcons/';

export interface Props {
    fileName: string;
    type?: 'folder' | 'folderOpen' | 'file';
    className?: string;
}

export default function FileIcon({ fileName, type, className }: Props) {
    const iconPath: string | undefined =
        type === 'file'
            ? getIconForFile(fileName)
            : type === 'folder'
            ? getIconForFolder(fileName)
            : getIconForOpenFolder(fileName);
    return (
        <i
            className={classNames(prefixClaName('file-icon'), className)}
            style={{ backgroundImage: `url(${ICON_BASE_PATH + iconPath})` }}
        />
    );
}
