---
title: 工作台核心部件（Workbench）
sidebar_label: 核心部件
---

工作台是 Molecule 中最核心的部件, 我们使用 React 组件复刻了 VSCode Workbench 的设计，提供了一个简单的工作台界面, 并且可以被用来扩展其他功能。

## Workbench

![molecule](/img/guides/workbench.png)

如上图所示，我们把 Molecule 的工作台 UI 划分成了`menuBar`, `activityBar`, `sideBar`, `editor`, `panel`, `statusBar` 主要**6**大模块：

-   **菜单栏（menuBar）**：主要负责 Workbench 主菜单的显示和管理，例如常见的 **文件（File）**、**编辑（Edit）**、**选择（Selection）** 、**视图（View）**等菜单项。
-   **活动栏（activityBar）**：其主要负责展示工作台当前的活动项，例如**浏览（Explorer）**，**搜索（Search）**等模块，需要注意的是，`activityBar` 通常需要配合其他模块一起来使用，例如我们在 `sideBar` 和 `activityBar` 中都有内置的浏览（Explorer）模块，其中 `sideBar` 负责展示， 而 `activityBar` 负责切换浏览（Explorer）模块的面板。
-   **边栏（sideBar）**：在工作台的左侧，其内置的**浏览（Explorer）**模块为 Workbench 重要的导航模块。需要注意点是，`sideBar` 常常需要和 `activityBar` 或者 `editor` 等模块联动，来展示相关信息。
-   **编辑区（editor）**：通过编辑器标签页来展示具体的工作任务，例如编辑代码，或者自定义渲染其他操作界面。当没有打开编辑器标签页的时候，Molecule 会渲染一个**入口（Entry）**页面在这块区域。当然，这个入口页面是支持**自定义**的。
-   **面板（panel）**：在 `editor` 的下方，通常会展示例如**问题（Problems）**, **输出（Output）**, **终端（Terminal）** 等模块。
-   **状态栏（statusBar）**：位于整个 Workbench 的最底部。通常来说，我们可以放**状态信息**在这里，比如说当前标签页的**语言(Language)**，当前光标所在**行和列**，**通知栏（Notification）**等等信息。

这**6**大模块目前仅仅是做简单的渲染，并没有什么实际的功能，想要完成具体的业务场景，需要我们联合各个模块来实现。另外，我们基于这几个基础模块，[内置](#内置-ui-模块)了几个常用的 UI 模块，以便快速满足我们的开发需求。

:::info
我们需要注意点是，想要发挥这些模块的**扩展**能力，需要我们去了解每个模块的[API](./api/namespaces/molecule#variables)。
:::

## 扩展工作台（Workbench)

这里我们将详细展示，通过 **Extension** 和内置的 **API** ，如何扩展 **Workbench**。同样的，我们从一个场景开始，如下图所示：

![Extend Workbench](/img/guides/extend-workbench.png)

如上图所示，我们创建了和一个数据源管理的界面。在这个场景中，我们分别对 **MenuBar**, **ActivityBar**、**SideBar**、**Editor**、**Panel**、**StatusBar** 等核心模块进行了扩展。接下来我们逐一看看如何实现。

首先，我们在 **extensions** 下新建了一个 **dataSource** 的目录, 用来存放与其相关扩展的代码。这里我们创建一个 `index.ts` 和 `base.tsx` 文件，分别用来声明**扩展入口**和定义基本的**公共**模块，目录如下：

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

如上所示，我们声明了一个实现 `IExtension` 接口的 `DataSourceExtension` 扩展，在 `initUI` 方法中，我们分别针对
`sidebar`、`activityBar `进行了扩展，在 `dispose` 扩展时，移除了激活时所添加的 UI。

我们先看看活动栏是如何扩展的。

### [活动栏（ActivityBar）](/docs/api/interfaces/molecule.IActivityBarService)

添加活动栏，我们需要使用 [`activityBar.add`](/docs/api/interfaces/molecule.IActivityBarService#add) 方法。首先，我们在 `base.tsx` 中定义了一个 `IActivityBarItem` 类型的对象：

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

如上所示，`dataSourceActivityBar` 字面量对象的 `id`属性为 **DataSource**，其 `icon` 名称为 **database**, 另外添加了一个 `sortIndex` 属性，默认设置排在 **activityBar** 的最顶部。

### [边栏（SideBar）](/docs/api/interfaces/molecule.ISidebarService)

同 activityBar 一样，我们先在 base.tsx 中声明一个`ISidebarPane`类型的对象 **dataSourceSidebar**，然后使用[`sidebar.add`](/docs/api/interfaces/molecule.ISidebarService#add) 方法。

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

这里与 `IActivityBarItem` 类型的对象的区别则是，我们的 `sidebar` 的面板上一个 `render` 函数，最后返回的是一个 `ReactNode` 的组件。这里 `DataSourceView` 组件则是我们根据我们的业务需求定义的一个**业务组件**。

完整示例请参考这里 [molecule-examples](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/dataSource)。

:::tip
示例中的 `dataSourceSidebar` 和 `dataSourceActivityBar` 两个对象的 `id` 都是使用的统一个 `DATA_SOURCE_ID`, 主要是保证切换**activityBar** 时能正确的显示 `dataSourceSidebar` 的面板内容。
:::

### [编辑器（Editor）](/docs/api/interfaces/molecule.IEditorService)

如上图示例所示，我们在编辑器中打开了一个名叫`Create Data Source`的标签，而标签内容则是一个创建数据源的**表单（Form)**。同样的，我们首先声明一个 IEditorTab 的对象，然后利用 [editor.open](/docs/api/interfaces/molecule.IEditorService#open) API 来打开。

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

`createDataSourceTab` 对象的 `renderPane` 为 **Editor Tab** 内容的**渲染函数**，这里返回的是 **CreateDataSourceView** 组件。需要注意到是，editor 标签默认打开渲染的是 **monaco-editor** 实例，例如我们想要编辑一个 **SQL** 类型的文本，则可这样来调用：

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

这里并没有设置 `renderPane` 函数，我们可以参考一下[第一个扩展](../the-first-extension.md)这个示例。

### [面板（Panel）](/docs/api/interfaces/molecule.IPanelService)

这里我们以常见的 **Terminal** 面板为例, 为了区分上面的数据源示例，这里我们在 `extensions` 下新建了一个叫 `terminal` 的文件夹。这里我们先声明一个 IPanelItem 类型的对象 `terminalPanel`，然后利用 `panel.add` API 将其添加到视图中。

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

同样的， 我们在 index.ts 中声明了一个叫 TerminalExtension 的扩展对象：

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

在 activate 方法中，我们使用 `panel.add` 添加了 `terminalPanel` 对象。完成示例代码请参考[Terminal](https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/terminal)。

### [状态栏（StatusBar）](/docs/api/interfaces/molecule.IStatusBarService)

想要对 StatusBar 进行增加、更新、删除操作，我们整个是围绕 [IStatusBarItem](/docs/api/interfaces/molecule.models.IStatusBarItem) 类型的对象来进行的，例如：

#### 基本操作

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

#### 自定义渲染图标

如果我们想要自定义 **StatusBar** 的渲染内容，例如是一个图标的话，我们可以使用 `render` 自定义函数：

```ts
import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';

const languageBar: IStatusBarItem = {
    id: 'languageBar',
    name: 'Javascript',
    render: () => <Icon onClick={onClick} type="bell" />,
};
```

### 菜单栏（MenuBar)

默认 Molecule 内置了基本的**文件（File）**、**编辑（Edit）**、**选择（Selection）**、**视图（View）**、**运行（Run）**和**帮助（Help）**的菜单项，通常我们可以直接在这些基础上进行扩展, 例如：

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

上例则是在**文件（File）**下新增了一个菜单项 **Create Data Source**，移除则使用 `molecule.menuBar.remove` 方法。如果想重置所有 MenuBar 的数据，
可以使用 [`molecule.menuBar.setMenus()` ](/docs/api/interfaces/molecule.IMenuBarService#setmenus)。

更多关于 MenuBar 的操作，请查看 [MenuBar API](/docs/api/interfaces/molecule.IMenuBarService) 文档。
