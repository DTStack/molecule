import React, { useRef } from 'react';
import { ITreeNodeItemProps } from '.';
import {
    indentClassName,
    indentGuideClassName,
    treeNodeTitleClassName,
} from './base';

interface TreeNodeProps {
    data: ITreeNodeItemProps;
    indent: number;
    className?: string;
    draggable?: boolean;
    renderIcon: () => JSX.Element | null;
    renderTitle: () => React.ReactNode;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onNodeDragStart?: (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => void;
    onNodeDragEnter?: (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => void;
    onNodeDragOver?: (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => void;
    onNodeDragEnd?: (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => void;
    onNodeDrop?: (
        e: React.DragEvent<HTMLDivElement>,
        node: ITreeNodeItemProps
    ) => void;
}
const INDENT = 8;

export default ({
    data,
    indent,
    className,
    renderIcon,
    renderTitle,
    draggable,
    onContextMenu,
    onClick,
    onNodeDragStart,
    onNodeDragEnter,
    onNodeDragOver,
    onNodeDrop,
    onNodeDragEnd,
}: TreeNodeProps) => {
    const uuid = data.key || data.id;
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

    return (
        <div
            ref={ref}
            key={`${uuid}-${indent}`}
            tabIndex={0}
            data-indent={indent}
            data-key={uuid}
            className={className}
            draggable={draggable}
            onContextMenu={onContextMenu}
            onClick={onClick}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
        >
            <div className={indentClassName} style={{ width: INDENT * indent }}>
                {new Array(indent).fill('').map((_, index) => (
                    <div key={index} className={indentGuideClassName} />
                ))}
            </div>
            {renderIcon()}
            <span className={treeNodeTitleClassName}>{renderTitle()}</span>
        </div>
    );
};
