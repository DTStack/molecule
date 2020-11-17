import * as React from 'react';
import { useCallback } from 'react'
import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Tabs, { TabPane } from 'rc-tabs';

import WrapTabNode from './Tab';
import { prefixClaName } from 'mo/common/className';
import './style.scss'

export interface ITab {
    active?: string;
    id?: number;
    name?: string;
    mode?: string;
    data?: [];
    value?: string;
    renderPane?: string | React.ReactNode;
}
interface ITabsProps {
    data: ITab[];
    closeTab?: (index: number) => void;
    changeTab?: (tabs: ITab[]) => void;
    selectTab: (index: number) => void;
    children: React.ReactNode | JSX.Element
}

const DraggleTabs: React.FC<ITabsProps> = (props: ITabsProps) => {

    const { data, changeTab, selectTab } = props;

    const moveTab = useCallback((dragIndex, hoverIndex) => {
      const dragTab = data[dragIndex]
      changeTab?.(update(data, {
        $splice: [[dragIndex, 1], [ hoverIndex, 0, dragTab]],
      }))
    }, [data])

    const onTabClick = key => {
      console.log(`onTabClick ${key}`)
      selectTab(key)
    }
  
    const renderTabBar = (props, DefaultTabBar) => {
      return ( <DefaultTabBar {...props}>
          {node => {
            return (<WrapTabNode key={node.key} index={node.key} moveTab={moveTab}>{node}
            </WrapTabNode>)
          }}
        </DefaultTabBar>
      )
    }

    return (
        <div className={prefixClaName('tabs-container')}>
          <DndProvider backend={HTML5Backend}>
            <Tabs   
              renderTabBar={renderTabBar}
              onChange={onTabClick}
              editable={{ showAdd: false, onEdit: () => { console.log(1)} }}
            >
              {data?.map(({ active, id, name }: ITab, index) => {
                return (
                  <TabPane tab={`${name}`} key={index}/>
                )
              })}
            </Tabs>
          </DndProvider>
        </div>
    );
};

export default DraggleTabs
