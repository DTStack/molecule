import * as React from 'react';
import { memo, useCallback } from 'react';
import { Icon } from 'mo/components/icon';
import { Menu } from 'mo/components/menu';
import { DropDown } from 'mo/components/dropdown';
import { IEditorAction } from 'mo/model';
import { groupActionsClassName, groupActionsItemClassName } from './base';
import { IEditorController } from 'mo/controller/editor';

export interface IEditorActionProps extends IEditorAction {
    isActiveGroup: boolean;
}

function EditorAction(props: IEditorActionProps & IEditorController) {
    const {
        actions = [],
        isActiveGroup = false,
        onClickContextMenu,
        onSplitEditorRight,
    } = props;

    const childRef = React.useRef();

    const handleOnMenuClick = (e: React.MouseEvent, item) => {
        onClickContextMenu?.(e, item);
        (childRef.current as any)!.dispose();
    };

    const overlay =
        actions.length > 0 ? (
            <Menu
                style={{ width: 200 }}
                data={actions}
                onClick={handleOnMenuClick}
            />
        ) : (
            <span
                style={{
                    padding: 15,
                    fontSize: 14,
                }}
            >
                No more actions
            </span>
        );

    const handleSplitEditor = useCallback(
        (e: React.MouseEvent) => {
            onSplitEditorRight?.();
        },
        [actions]
    );
    return (
        <div className={groupActionsClassName}>
            {isActiveGroup ? (
                <div
                    onClick={handleSplitEditor}
                    className={groupActionsItemClassName}
                    title="Split Editor Right"
                >
                    <Icon type="split-horizontal" />
                </div>
            ) : null}
            <DropDown
                ref={childRef}
                placement="bottom"
                className={groupActionsItemClassName}
                trigger="click"
                title="More Actions..."
                overlay={overlay}
            >
                <Icon type="ellipsis" />
            </DropDown>
        </div>
    );
}

export default memo(EditorAction);
