import { memo, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { throttle } from 'lodash-es';
import { classNames } from 'mo/client/classNames';
import Dropdown from 'mo/client/components/dropdown';
import Icon from 'mo/client/components/icon';
import type { EditorGroupModel } from 'mo/models/editor';
import type {
    ContextMenuEditorHandler,
    IMenuItemProps,
    UniqueId,
} from 'mo/types';

type IDataItem = EditorGroupModel['data'][number];

export enum Action {
  hover = 'hover',
  drop = 'drop',
};

export interface ITabsProps {
  contextMenu?: IMenuItemProps[];
  onContextMenu?: ContextMenuEditorHandler;
  onSelectTab?: (tabId: UniqueId, groupId: UniqueId) => void;
  group: EditorGroupModel;
  tab: IDataItem;
  onCloseTab?: (tabId: UniqueId, groupId: UniqueId) => void;
  onDrag?: (source: IDataItem, target: IDataItem, dragInfos: Record<string, any>, type: Action) => void;
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
    item: tab,
  });

  const actionHoc = (type: Action) => throttle((item, monitor) => {
    if (!ref.current) return;
    const component = ref.current;
    const hoverBoundingRect = component?.getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor?.getClientOffset?.();
    const hoverClientX = (clientOffset as { x: number; y: number }).x - hoverBoundingRect.left;

    const dragInfo = {
        hoverMiddleX,
        hoverClientX,
    };
    onDrag?.(item, tab, dragInfo, type);
  });

  const [, drop] = useDrop({
    accept: 'DND_NODE',
    hover: actionHoc(Action.hover),
    drop: actionHoc(Action.drop),
  });

  drag(drop(ref));

  const hasActive = group.activeTab === tab.id;
  const hasCovered = group.coveredTabInMove === tab.id;

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
            hasActive && variables.active,
            (!hasActive && hasCovered) && variables.coveredTab
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
