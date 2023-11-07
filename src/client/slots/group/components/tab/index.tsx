import { memo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { throttle } from 'lodash-es';
import { classNames } from 'mo/client/classNames';
import Dropdown from 'mo/client/components/dropdown';
import Icon from 'mo/client/components/icon';
import type { EditorGroupModel } from 'mo/models/editor';
import type {
    ContextMenuEditorHandler,
    IDragProps,
    IMenuItemProps,
    UniqueId,
} from 'mo/types';
import { DragAction } from 'mo/types';

type IDataItem = EditorGroupModel['data'][number];

export interface ITabsProps {
  contextMenu?: IMenuItemProps[];
  onContextMenu?: ContextMenuEditorHandler;
  onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
  group: EditorGroupModel;
  tab: IDataItem;
  onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
  onDrag?: (props: IDragProps) => void;
  variables: Record<string, string>;
};

function HeaderTabs(props: ITabsProps) {
  const {
    contextMenu,
    onContextMenu,
    group,
    tab,
    onSelectTab,
    onCloseTab,
    onDrag,
    variables,
  } = props;
  const ref = useRef<HTMLDivElement>(null);

  const [, drag] = useDrag({
    collect: (monitor: any) => ({ isDragging: monitor?.isDragging?.() }),
    type: 'DND_NODE',
    item: { groupId: group.id, tabId: tab.id },
  });

  const actionHoc = (type: DragAction) => throttle((item, monitor) => {
    if (!ref.current) return;
    const component = ref.current;
    const hoverBoundingRect = component?.getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect?.right - hoverBoundingRect?.left) / 2;
    const clientOffset = monitor?.getClientOffset?.();
    const hoverClientX = (clientOffset as { x: number; y: number })?.x - hoverBoundingRect?.left;

    const info: IDragProps['info'] = {
        hoverMiddleX,
        hoverClientX,
    };
    const targetItem = { groupId: group?.id, tabId: tab.id };
    onDrag?.({ from: item, to: targetItem, info, type });
  }, 500);

  const [, drop] = useDrop({
    accept: 'DND_NODE',
    hover: actionHoc(DragAction.hover),
    // drop: actionHoc(DragAction.drop),
  });

  drag(drop(ref));

  const hasActive = group.activeTab === tab.id;

  return (
    <Dropdown
      data={contextMenu}
      stopPropagation
      trigger="contextMenu"
      alignPoint={false}
      onClick={(item) => onContextMenu?.(item, tab.id, group.id)}
    >
      <div
        ref={ref}
        className={classNames(
            variables.tab,
            hasActive && variables.active
        )}
        onClick={() => onSelectTab?.(tab.id, group.id)}
      >
        <Icon type={tab.icon} />
        {tab.name}
        <Icon
            type={tab.modified ? 'primitive-dot' : 'close'}
            onClick={(e) => {
                e.stopPropagation();
                onCloseTab?.(tab.id, group.id);
            }}
            className={classNames(
                variables.extra,
                tab.modified && variables.activeExtra
            )}
        />
      </div>
  </Dropdown>
  );
};


export default memo(HeaderTabs);
