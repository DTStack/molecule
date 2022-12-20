---
title: 工作台（Workbench）
sidebar_label: 工作台
---

[工作台（Workbench）][workbench-url] 是 Molecule 中最核心的部件, 我们使用 **React 组件**复刻了 **VSCode Workbench** 优秀的设计，提供了一个简单的**Workbench UI**, 并支持**扩展机制**，可以高度**自定义**。

## 核心概念

![molecule](/img/guides/workbench-ui.png)

我们把 Molecule 的工作台 UI 划分成了 [MenuBar](#菜单栏menubar)、[ActivityBar](#活动栏activitybar)、[Sidebar](#边栏sidebar),、[Editor](#编辑器editor)、[Panel](#面板panel)、[StatusBar](#状态栏statusbar) 以及 [AuxiliaryBar](#辅助侧边栏v130-支持)(`v1.3.0+` 支持) 主要**7**大模块：

-   **菜单栏（MenuBar）**：主要负责 Workbench **主菜单**的显示和管理，例如常见的 **文件（File）**、**编辑（Edit）**、**选择（Selection）** 、**视图（View）**等菜单项；
-   **活动栏（ActivityBar）**：主要负责展示工作台当前的**活动项**，例如[浏览（Explorer）](./extend-builtin-ui.md#浏览面板explorer)，[搜索（Search）](./extend-builtin-ui.md#搜索面板search)等模块。需要注意的是，ActivityBar 通常需要配合其他模块一起**联动**，例如切换 ActivityBar 后，Sidebar 则需要展示相对应的面板；
-   **边栏（Sidebar）**：工作台的**左边栏**，其内置的[浏览（Explorer）](./extend-builtin-ui.md#浏览面板explorer)模块为 Workbench 重要的**导航**模块；
-   **编辑区（Editor）**：通过编辑器标签页来展示具体的工作内容，例如**编辑代码**，或者渲染自定义的操作界面。当没有打开编辑器标签页的时候，Molecule 会渲染一个**入口（Entry）**页面在这块区域。当然，这个入口页面是支持**自定义**的；
-   **面板（Panel）**：在 Editor 的下方，通常会展示例如 [问题（Problems）](./extend-builtin-ui.md#问题面板problems-), [输出（Output）](extend-builtin-ui.md#输出面板output), **终端（Terminal）**等模块；
-   **状态栏（StatusBar）**：位于整个 Workbench 的最底部, 用来展示**状态信息**。例如当前编辑器中文件的**语言(Language)**，当前光标所在**行（Ln）和列（Col）**，[通知（Notification）](./extend-builtin-ui.md#通知栏notification)等信息。
-   **辅助侧边栏**: 通常来说，辅助侧边栏的作用是作为补充展示的手段。在边栏中展示重要信息，而在辅助侧边栏中展示次要信息。

:::tip
这**7**大模块仅仅是做简单的渲染，并没有什么实际的功能，想要完成具体的业务场景，需要我们联合其他模块来实现，例如 **ActivityBar** 与 **Sidebar** **联动，FolderTree** 与 **Editor** 联动等等。

另外，为了减轻 UI 开发的工作量，我们在 6 大组件的基础上，扩展来不少[**内置部件**](extend-builtin-ui.md)，详细使用情[参考](./extend-builtin-ui.md)
:::

## 扩展工作台（Workbench)

这部分内容将详细的展示，我们是如何通过 **Extension** 和内置的 **API** 扩展 **Workbench**的。

同样的，我们从一个场景开始：

![Extend Workbench](/img/guides/extend-workbench.png)

如上图所示，我们模拟了一个简单的**数据库管理**的界面。在这个场景中，我们会分别对 [MenuBar](#菜单栏menubar)、[ActivityBar](#活动栏activitybar)、[Sidebar](#边栏sidebar),、[Editor](#编辑器editor)、[Panel](#面板panel)、[StatusBar](#状态栏statusbar) 6 大模块逐一进行扩展。

:::tip
本文内容中的所有代码，都以 [Quick Start](../quick-start) 中的 [molecule-demo](https://github.com/DTStack/molecule-examples/tree/main/molecule-demo) 项目为基础演示。
:::

首先，我们在 `extensions` 下新建了一个 `dataSource` 的目录, 用来存放与其相关扩展的代码。然后新建 `index.ts` 和 `base.tsx` 文件，分别用来声明**扩展入口**和定义**公共代码**，目录如下：

```ts
src/extensions/dataSource
├── base.tsx
└── index.ts
```

`index.ts` 的代码如下：

```tsx title="src/extensions/dataSource/index.ts"
export class DataSourceExtension implements IExtension {
    id: string = DATA_SOURCE_ID;
    name: string = 'Data Source';

    activate(extensionCtx: IExtensionService): void {
        this.initUI();
    }

    initUI() {
        molecule.sidebar.add(dataSourceSidebar);
        molecule.activityBar.add(dataSourceActivityBar);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.sidebar.remove(dataSourceSidebar.id);
        molecule.activityBar.remove(dataSourceActivityBar.id);
    }
}
```

如上所示，我们声明了一个实现 `IExtension` 接口的 `DataSourceExtension` 对象，在 `initUI` 方法中，我们分别使用
`molecule.sidebar.add`、`molecule.activityBar.add` 方法添加了新的 UI 组件扩展项。在 `dispose` 方法，**移除**了激活时所添加的 UI 项。

接下来我们先看看活动栏是如何扩展的。

### [活动栏（ActivityBar）](../api/interfaces/molecule.IActivityBarService)

添加活动栏，我们需要使用 [`molecule.activityBar.add`](../api/interfaces/molecule.IActivityBarService#add) 方法。首先，我们在 `base.tsx` 中定义了一个 [`IActivityBarItem`](../api/namespaces/molecule#iactivitybaritem) 类型的对象：

```ts title="src/extensions/dataSource/base.tsx"
export const DATA_SOURCE_ID = 'DataSource';

export const dataSourceActivityBar: IActivityBarItem = {
    id: DATA_SOURCE_ID,
    sortIndex: 1, // sorting the dataSource to the first position
    name: 'Data Source',
    title: 'Data Source Management',
    icon: 'database',
};
```

`dataSourceActivityBar` 字面量对象的 `id`属性为 **DataSource**，其 `icon` 名称为 **database**, 另外添加了一个 `sortIndex` 属性，设置该 UI 显示在 **activityBar** 的最顶部。

### [边栏（SideBar）](../api/interfaces/molecule.ISidebarService)

同 ActivityBar 一样，我们先在 base.tsx 中声明一个 [`ISidebarPane`](../api/interfaces/molecule.model.ISidebarPane) 类型的对象 `dataSourceSidebar`，然后使用[`molecule.sidebar.add`](../api/interfaces/molecule.ISidebarService#add) 方法。

```ts title="src/extensions/dataSource/base.tsx"
import DataSourceView from '../../views/dataSource/dataSourceSidebar';

export const DATA_SOURCE_ID = 'DataSource';

export const dataSourceSidebar: ISidebarPane = {
    id: DATA_SOURCE_ID,
    title: 'DataSourcePane',
    render: () => {
        return <DataSourceView />;
    },
};
```

这里与 `IActivityBarItem` 类型的对象的区别则是，我们的 Sidebar 面板上定义了一个 `render` 函数，最后返回的是一个 `ReactNode` 类型的组件。这里 `DataSourceView` 组件则是我们根据我们的业务需求定义的一个**业务组件**。

完整示例请参考这里 [molecule-examples](https://github.com/DTStack/molecule-examples/tree/main/molecule-demo/src/extensions/dataSource)。

:::caution
示例中的 `dataSourceSidebar` 和 `dataSourceActivityBar` 两个对象的 `id` 都是使用的统一个 `DATA_SOURCE_ID`, 主要是保证切换**ActivityBar** 项时能正确的在 **Sidebar** 中显示 `dataSourceSidebar` 的面板内容。
:::

### [编辑器（Editor）](../api/interfaces/molecule.IEditorService)

在上图中，我们在 Editor 中打开了一个名叫 **Create Data Source** 的标签，而标签内容则是一个**添加数据库**的**表单（Form)**。同样的，我们首先声明一个 [IEditorTab](../api/interfaces/molecule.model.IEditorTab) 的对象，然后利用 [molecule.editor.open](../api/interfaces/molecule.IEditorService#open) 方法打开：

```ts title="src/extensions/dataSource/base.tsx"
import CreateDataSourceView from '../../views/dataSource/createDataSource';

export const createDataSourceTab: IEditorTab = {
    id: DATA_SOURCE_ID,
    name: 'Create Data Source',
    renderPane: () => {
        return <CreateDataSourceView />;
    },
};

export function openCreateDataSourceView() {
    molecule.editor.open(createDataSourceTab);
}
```

`createDataSourceTab` 对象的 `renderPane` 为**标签内容**的自定义**渲染函数**，这里返回的是 `CreateDataSourceView` 组件。需要注意到是，Editor 标签默认渲染的是 **monaco-editor** 视图，例如我们想要编辑一个 **SQL** 类型的文本，则可这样来调用：

```ts
molecule.editor.open({
    id: 'test',
    name: 'test.sql',
    data: {
        value: 'select * from test',
        language: 'sql',
    },
});
```

这里并没有设置 `renderPane` 函数。关于打开编程语言的例子，可以参考一下[第一个扩展](../the-first-extension.md)这个示例。

### [面板（Panel）](../api/interfaces/molecule.IPanelService)

关于[面板（Panel）](../api/interfaces/molecule.IPanelService)，我们以常见的 **Terminal** 面板为示例。为了区分上面的**数据库**示例，这里我们在 `extensions` 下新建了一个叫 `terminal` 的文件夹。

首先，我们先声明一个 [IPanelItem](../api/interfaces/molecule.model.IPanelItem) 类型的对象 `terminalPanel`：

```ts title="src/extensions/terminal/base.tsx"
import { localize } from '@dtinsight/molecule/esm/i18n/localize';
import { IPanelItem } from '@dtinsight/molecule/esm/model';
import { Terminal } from '../../views/terminal/terminalPanelView';

export const TERMINAL_ID = 'terminalID';

export const terminalPanel: IPanelItem = {
    id: TERMINAL_ID,
    name: localize('demo.terminal', 'Terminal'),
    title: 'Terminal',
    sortIndex: 1,
    renderPane: () => {
        return <Terminal />;
    },
};
```

然后在 `index.ts` 中声明了一个叫 `TerminalExtension` 的扩展对象：

```ts title="src/extensions/terminal/base.tsx"
import molecule from '@dtinsight/molecule';
import { IExtension } from '@dtinsight/molecule/esm/model/extension';
import { IExtensionService } from '@dtinsight/molecule/esm/services';
import { terminalPanel } from './base';

export class TerminalExtension implements IExtension {
    id: string = 'Terminal';
    name: string = 'Terminal';

    activate(extensionCtx: IExtensionService): void {
        molecule.panel.add(terminalPanel);
    }

    dispose(extensionCtx: IExtensionService): void {
        molecule.panel.remove(terminalPanel.id);
    }
}
```

在 `activate` 方法中，利用 [`molecule.panel.add`](../api/interfaces/molecule.IPanelService#add) 将 `terminalPanel` 添加到 Panel 视图中。

完整代码请参考 [Terminal](https://github.com/DTStack/molecule-examples/tree/main/molecule-demo/src/extensions/terminal)。

### [状态栏（StatusBar）](../api/interfaces/molecule.IStatusBarService)

[状态栏（StatusBar）](../api/interfaces/molecule.IStatusBarService) 整个是围绕 [IStatusBarItem](../api/interfaces/molecule.model.IStatusBarItem) 类型的对象来进行**增加、更新、删除**等基本操作的，例如：

```ts
import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';

const languageBar: IStatusBarItem = {
    id: 'languageBar',
    name: 'Javascript',
};
// Add language bar to the StatusBar right
molecule.statusBar.add(languageBar, Float.right); // Float.left/Float.right

// Get the language bar
const existLanguageBar = molecule.statusBar.getStatusBarItem(
    languageBar.id,
    Float.right
);

// Update the language bar
molecule.statusBar.update({ ...existLanguageBar, name: 'HTML' }, Float.right);

// Remove the language bar which the id is `languageBar`
molecule.statusBar.remove(languageBar.id, Float.right);
```

代码中的 `Float.left/Float.right` 用来表示显示在状态栏的**左侧**或者**右侧**。

如果我们想要 **自定义 StatusBar** 的渲染内容，我们可以使用 `render` 自定义函数，例如自定义[**图标**](./icons.md)：

```ts
import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';

const languageBar: IStatusBarItem = {
    id: 'languageBar',
    name: 'Javascript',
    render: () => <Icon onClick={onClick} type="bell" />,
};
```

### [菜单栏（MenuBar)](../api/interfaces/molecule.IMenuBarService)

[菜单栏（MenuBar)](../api/interfaces/molecule.IMenuBarService) 默认内置了基本的**文件（File）**、**编辑（Edit）**、**选择（Selection）**、**视图（View）**、**运行（Run）**和**帮助（Help）**的菜单项，通常我们可以直接在这些基础上进行扩展：

```ts
activate(extensionCtx: IExtensionService): void {
    molecule.menuBar.append({
        id: 'menu.createDataSource',
        name: localize('menu.createDataSource', 'Create Data Source'),
        icon: ''
    }, 'File');
}
dispose(extensionCtx: IExtensionService): void {
    // Remove the menuItem which name is `menu.createDataSource`
    molecule.menuBar.remove('menu.createDataSource');
}
```

上例中，我们在**文件（File）**下新增了一个菜单项 **Create Data Source**，移除则使用 `molecule.menuBar.remove` 方法。如果想重置所有 MenuBar 的数据，
可以使用 [`molecule.menuBar.setMenus` ](../api/interfaces/molecule.IMenuBarService#setmenus)。

MenuBar 的布局默认是 `vertical` 模式，可通过菜单 **视图（View）**-> **外观（Appearance）**-> **菜单栏水平模式（Menu Bar Horizontal Mode）** 切换至 `horizontal` 模式，在该模式下，可通过 MenuBar 组件的 logo 属性，设置 MenuBar 的 logo。

更多关于 MenuBar 的操作，请查看 [MenuBar API](../api/interfaces/molecule.IMenuBarService) 文档。

### [辅助侧边栏](../api/interfaces/molecule.IAuxiliaryBarService)(v1.3.0+ 支持)

在辅助侧边栏中有 2 种模式，分别是 `default` and `tabs`。

在 `default` 模式下，辅助侧边栏的交互行为和边栏类似，可以通过调用 [`molecule.layout.setAuxiliaryBar`](../api/interfaces/molecule.ILayoutService#setauxiliarybar) 方法来切换辅助侧边栏的展开与收起。

而 `tabs` 模式和 `default` 模式下有一些不同。首先，你可以通过调用 [`molecule.auxiliaryBar.setMode`](../api/interfaces/molecule.IAuxiliaryBarService#setmode) 来改变模式。一旦你把模式改成 `tabs`，那么其交互行为会像一个 tab。

```ts
molecule.auxiliaryBar.setMode('tabs');
```

当设置模式为 `tabs` 的时候, 最好同时通过调用 [`molecule.auxiliaryBar.addAuxiliaryBar`](../api/interfaces/molecule.IAuxiliaryBarService#addauxiliarybar) 该方法来设置 tabs 的标题。

```ts
molecule.auxiliaryBar.setMode('tabs');
molecule.auxiliaryBar.addAuxiliaryBar([
    {
        key: ~~(Math.random() * 10) + new Date().getTime(),
        title: '任务属性',
    },
]);
```

不论是哪种模式，以上的代码只会影响内容区域的展开与收起。如果想要改变内容区域的渲染，你可以通过监听辅助侧边栏的点击事件，然后通过调用 [`molecule.auxiliaryBar.setChildren`](../api/interfaces/molecule.IAuxiliaryBarService#setchildren) 来渲染内容物.

```tsx
molecule.auxiliaryBar.onTabClick(() => {
    const tab = molecule.auxiliaryBar.getCurrentTab();
    const TabContent = () => {
        return <div>Do anything you like</div>;
    };

    if (tab) {
        molecule.auxiliaryBar.setChildren(<TabContent />);
    }

    molecule.layout.setAuxiliaryBar(!tab);
});
```

[workbench-url]: ../api/namespaces/molecule#workbench
[demo-url]: https://github.com/DTStack/molecule-examples/tree/main/molecule-demo
