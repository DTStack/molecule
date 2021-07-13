import * as React from 'react';
import { memo } from 'react';
import { Icon } from 'mo/components/icon';
import { Menu } from 'mo/components/menu';
import { DropDown, DropDownRef } from 'mo/components/dropdown';
import { EditorActionsProps, IEditorAction } from 'mo/model';
import {
    groupActionItemDisabledClassName,
    groupActionsClassName,
    groupActionsItemClassName,
} from './base';
import { IEditorController } from 'mo/controller/editor';
import { classNames } from 'mo/common/className';

export interface IEditorActionProps extends IEditorAction {
    isActiveGroup: boolean;
}

const MAX_ACTIONS_LENGTH = 6;

function splitActions(actions: EditorActionsProps[]) {
    const outerActions: EditorActionsProps[] = [];
    const ellipsisActions: EditorActionsProps[] = [];

    actions.forEach((action) => {
        if (action.place === 'outer') {
            outerActions.push(action);
        } else {
            ellipsisActions.push(action);
        }
    });

    if (outerActions.length > MAX_ACTIONS_LENGTH) {
        const surplusActions = outerActions.splice(
            0,
            MAX_ACTIONS_LENGTH - outerActions.length
        );

        ellipsisActions.concat(surplusActions);
    }

    return [outerActions, ellipsisActions];
}

function EditorAction(props: IEditorActionProps & IEditorController) {
    const { actions = [], isActiveGroup = false, onClickActions } = props;
    const [outer, ellipsis] = splitActions(actions);

    const childRef = React.useRef<DropDownRef>(null);

    const handleOnMenuClick = (_, item) => {
        onClickActions(item);
        childRef.current?.dispose();
    };

    const handleActionsClick = (action) => {
        onClickActions(action);
    };

    const overlay =
        ellipsis.length > 0 ? (
            <Menu
                style={{ width: 200 }}
                data={ellipsis}
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

    return (
        <div className={groupActionsClassName}>
            {isActiveGroup &&
                outer.map((action) => (
                    <div
                        key={action.id}
                        onClick={() => handleActionsClick(action)}
                        className={classNames(
                            groupActionsItemClassName,
                            action.disabled && groupActionItemDisabledClassName
                        )}
                        title={action.name?.toString()}
                    >
                        {action.icon ? (
                            <Icon type={action.icon} />
                        ) : (
                            action.name
                        )}
                    </div>
                ))}
            {Boolean(ellipsis.length) && (
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
            )}
        </div>
    );
}

export default memo(EditorAction);
