---
title: 自定义工作台（Workbench）
sidebar_label: 自定义工作台
---

Molecule 默认的 **Workbench** UI 是一个 **VSCode** 的克隆版本。但是我们在实际的开发场景中，往往不能满足我们的需求。

除了内置的一些原子 [Components](../api/namespaces/molecule.component) 以外，Molecule 同时提供了基本的 **Workbench、SideBar、Editor、ActivityBar、MenuBar、Panel、StatusBar** 等核心[**UI 部件**](./../guides/extend-workbench.md)，以便开发者根据自己的需求**重新组装**自己的 **Workbench**。

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo) 项目为基础演示。
:::

## 自定义 Workbench 示例

![Custom Workbench](/img/advanced/custom-workbench.png)

Molecule 默认的是 **VSCode 布局**的 Workbench。在上图示例中，我们将 **MenuBar** 水平置于了**顶部**的位置，在编辑器的右侧，我们又自定义了一个**右边栏（RightSideBar)**。

:::info
目前 **MenuBar 置顶布局**功能已内置，我们会在未来的版本中，将**右边栏（RightSideBar）**也作为 Molecule 的**内置**功能。
:::

### 重组 Workbench

首先我们打开 Molecule [源码](https://github.com/DTStack/molecule)仓库，找到 `src/workbench` 目录，拷贝 `workbench.tsx` 文件到项目的 `views` 或其他目录下，将其重命名为 `myWorkbench.tsx` 文件：

```tsx
<div className={workbenchFinalClassName}>
    <Display visible={isMenuBarHorizontal}>
        <MenuBarView mode={MenuBarMode.horizontal} />
    </Display>
    <div className={mainBenchClassName}>
        <div className={compositeBarClassName}>
            <Display visible={isMenuBarVertical}>
                <MenuBarView mode={MenuBarMode.vertical} />
            </Display>
            <Display
                visible={!activityBar.hidden}
                className={displayActivityBarClassName}
            >
                <ActivityBarView />
            </Display>
        </div>
        <SplitPane
            split="vertical"
            primary="first"
            allowResize={true}
            onChange={onPaneSizeChange as any}
        >
            <Pane
                minSize="170px"
                initialSize={splitPanePos[0]}
                maxSize="80%"
                className={sidebar.hidden ? 'hidden' : ''}
            >
                <SidebarView />
            </Pane>
            <SplitPane
                primary="first"
                split="horizontal"
                allowResize={true}
                // react-split-pane onChange: (newSizes: [size, ratio]) => void；
                onChange={onHorizontalPaneSizeChange as any}
            >
                {getContent(!!panel.panelMaximized, !!panel.hidden)}
            </SplitPane>
        </SplitPane>
    </div>
</div>
```

代码中，`horizontal` 模式下和 `vertical` 模式下的 `MenuBarView` 分别放在了不同的位置，`SplitPane` 组件中默认包含了 `SidebarView` 和右侧的 **Editor** 和 **Panel** 面板，并没有包含 **RightSideBar** 面板。

具体改造如下：

```tsx title="/src/views/myWorkbench.tsx"
<div className={workbenchClassName}>
    {!menuBar.hidden && <MyMenuBarView />}
    <div className={mainBenchClassName}>
        <div className={compositeBarClassName}>
            {!activityBar.hidden && <ActivityBarView />}
        </div>
        <SplitPane
            split="vertical"
            primary="first"
            allowResize={true}
            onChange={onPaneSizeChange as any}
        >
            <Pane
                minSize="170px"
                initialSize={splitPanePos[0]}
                maxSize="80%"
                className={sidebar.hidden && 'hidden'}
            >
                <SidebarView />
            </Pane>
            <SplitPane
                primary="first"
                split="horizontal"
                allowResize={true}
                // react-split-pane onChange: (newSizes: [size, ratio]) => void；
                onChange={onHorizontalPaneSizeChange as any}
            >
                {getContent(!!panel.panelMaximized, !!panel.hidden)}
            </SplitPane>
            <Pane
                minSize="40px"
                initialSize="240px"
                maxSize="40%"
                className={'rightSidebar'}
            >
                <Sidebar current={MySidePane.id} panes={[MySidePane]} />
            </Pane>
        </SplitPane>
    </div>
</div>
```

:::caution
以上代码仅仅是 `myWorkbench.tsx` 文件的部分代码，完整代码请查看 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/views/myWorkbench.tsx)
:::

我们去掉了 `vertical` 模式下的 MenuBar，并直接根据 `menuBar.hidden` 来渲染自己定义的 `MyMenuBarView` 组件。在 `SplitPane` 组件中新增了一个 `className` 为 `rightSidebar` 的面板，使用了内置的 `Sidebar` 组件，并在 `Sidebar` 中使用了自定义的 `MySidePane` 组件。

### 自定义 MenuBar

上图中 MenuBar 包含了一个自定义的 **Logo** 元素，MenuBar 并使用了**横向（Horizontal）**的布局。 与 Workbench 一样，我们从 `src/workbench/menuBar` 下拷贝默认的 `menuBar.tsx` 组件，重命名为 `myMenuBar.tsx`：

```tsx title="/src/views/myMenuBar/index.tsx"
<div className="myMenuBar">
    <Logo alt="logo" src="logo@3x.png" />
    <Menu
        role="menu"
        mode={MenuMode.Horizontal}
        trigger="click"
        onClick={handleClick}
        style={{ width: '100%' }}
        data={addKeybindingForData(data)}
    />
</div>
```

代码中新增了 `Logo` 组件，并替换了原来的 [DropDown](../api/namespaces/molecule.component#dropdown) 为 [Menu](../api/namespaces/molecule.component#menu) 组件。

:::tip
上面 MenuBar 的自定义 **Logo** 和**横向（Horizontal）**布局功能，目前已内置，具体可查看 [菜单栏（MenuBar）](../guides/extend-workbench#菜单栏menubar)
:::

### 自定义 RightSideBar

与 `MenuBar` 稍有不同的是，因为复用了内置的 [Sidebar](../api/namespaces/molecule#sidebar-1) 组件，所以这里我们只需要传入 [ISidebarPane](../api/interfaces/molecule.model.ISidebarPane) 类型的组件：

```tsx title="/src/views/mySidePane.tsx"
import React from 'react';
import molecule from '@dtinsight/molecule';
import { Header, Content } from '@dtinsight/molecule/esm/workbench/sidebar';
import { IActionBarItemProps } from '@dtinsight/molecule/esm/components';
import { localize } from '@dtinsight/molecule/esm/i18n/localize';
import { ISidebarPane } from '@dtinsight/molecule/esm/model';

const Toolbar = molecule.component.Toolbar;

export function MySidePaneView() {
    const renderHeaderToolbar = React.useCallback((): IActionBarItemProps[] => {
        return [
            {
                icon: 'editor-layout',
                id: 'tools',
                title: 'Layout the right SidePane',
            },
        ];
    }, []);

    return (
        <div className={'mySidePane'}>
            <Header
                title={localize('demo.rightSidebar.title', 'Tools')}
                toolbar={<Toolbar data={renderHeaderToolbar()} />}
            />
            <Content>
                <p style={{ textAlign: 'center' }}>Right Side Pane</p>
            </Content>
        </div>
    );
}

export const MySidePane: ISidebarPane = {
    id: 'mySidePane',
    title: 'Tools',
    render: () => {
        return <MySidePaneView />;
    },
};
```

完成这些操作后，即可在界面中看到如上图所示的布局了。完整示例请参考 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo)

## 总结

上例中使用了很多 Molecule **内置**的 UI 组件来实现自定义，然而使用[内置组件](../api/namespaces/molecule.component)是有一定上手成本的，需要开发者对内置的 UI 组件有比较好了解。我们会在后序的版本中，持续优化**文档**和**API**，以减轻上手成本，并尽可能的提供更多的使用**示例**。
