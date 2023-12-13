import { useRef } from 'react';
import Dropdown from 'mo/client/components/dropdown';
import { IMenuItemProps, KeyboardEventHandler } from 'mo/types';
import { TreeNodeModel } from 'mo/utils/tree';

import variables from './index.scss';

type ITreeNodeItemProps = TreeNodeModel<any>;

interface ITreeNodeProps {
    data: ITreeNodeItemProps;
    indent: number;
    name?: string;
    className?: string;
    draggable?: boolean;
    contextMenu?: IMenuItemProps[];
    renderIcon: () => JSX.Element | null;
    renderTitle: () => React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onNodeDragStart?: (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => void;
    onNodeDragEnter?: (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => void;
    onNodeDragOver?: (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => void;
    onNodeDragEnd?: (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => void;
    onNodeDrop?: (e: React.DragEvent<HTMLDivElement>, node: ITreeNodeItemProps) => void;
    onTreeItemKeyDown?: KeyboardEventHandler;
    onContextMenu?: (node: ITreeNodeItemProps) => void;
    onContextMenuClick?: (item: IMenuItemProps, node: ITreeNodeItemProps) => void;
}
const INDENT = 8;

export default ({
    data,
    indent,
    className,
    name,
    draggable,
    contextMenu,
    renderIcon,
    renderTitle,
    onClick,
    onNodeDragStart,
    onNodeDragEnter,
    onNodeDragOver,
    onNodeDrop,
    onNodeDragEnd,
    onTreeItemKeyDown,
    onContextMenu,
    onContextMenuClick,
}: ITreeNodeProps) => {
    const uuid = data.id;
    const ref = useRef<HTMLDivElement>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onNodeDragStart?.(e, data);
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', '');
        } catch (error) {
            // empty
        }
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onNodeDragEnter?.(e, data);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onNodeDragOver?.(e, data);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onNodeDrop?.(e, data);
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        onNodeDragEnd?.(e, data);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        // https://medium.com/trabe/react-syntheticevent-reuse-889cd52981b6
        e.persist();
        e.preventDefault();
        onTreeItemKeyDown?.(e, data);
    };

    const handleVisibleChange = (visible: boolean) => {
        if (visible) {
            onContextMenu?.(data);
        }
    };

    // calculate key automatically via parent path and self id
    const nodeKey = `${indent ? indent + '_' : ''}${data.id}`;

    return (
        <Dropdown
            data={contextMenu}
            stopPropagation
            trigger="contextMenu"
            alignPoint
            onClick={(item) => onContextMenuClick?.(item, data)}
            onVisibleChange={handleVisibleChange}
        >
            <div
                ref={ref}
                key={`${uuid}-${indent}`}
                tabIndex={0}
                data-indent={indent}
                data-key={uuid}
                data-id={`mo_treeNode_${nodeKey}`}
                className={className}
                title={name}
                draggable={draggable}
                onClick={onClick}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragEnd={handleDragEnd}
                onDrop={handleDrop}
                onKeyDown={handleKeyDown}
            >
                <div className={variables.indent} style={{ width: INDENT * indent }}>
                    {new Array(indent).fill('').map((_, index) => (
                        <div key={index} className={variables.guide} />
                    ))}
                </div>
                {renderIcon()}
                <span className={variables.treeNodeTitle}>{renderTitle()}</span>
            </div>
        </Dropdown>
    );
};
