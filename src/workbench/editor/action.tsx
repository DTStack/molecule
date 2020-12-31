import * as React from 'react';
import { memo, useCallback } from 'react';
import { Icon } from 'mo/components/icon';
import { IMenuItem, Menu } from 'mo/components/menu';
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
        menu = [],
        isActiveGroup = false,
        onSplitEditorRight,
    } = props;
    const overlay =
        menu.length > 0 ? (
            <Menu style={{ width: 200 }} data={menu} />
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
        [actions, menu]
    );

    return (
        <div className={groupActionsClassName}>
            {actions.map((action: IMenuItem) => (
                <div
                    className={groupActionsItemClassName}
                    key={action.id}
                    onClick={action.onClick}
                    title={action.title}
                >
                    {action.icon}
                </div>
            ))}
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
