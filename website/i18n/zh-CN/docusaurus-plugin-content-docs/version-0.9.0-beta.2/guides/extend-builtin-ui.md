---
title: 内置部件
sidebar_label: 内置部件
---

在 Molecule 中，我们基于 [6 大核心 UI ](./extend-workbench.md)模块，默认内置了很多在 IDE Workbench 中常用的 UI 模块，以便可以快速的满足开发者的需求。
这些模块内置了一系列**服务（Service）**，允许我们通过 **Extension** 的方式进行操作或者扩展。

![molecule](/img/guides/builtin-ui.png)

如图: 目前**内置部件**主要包含 [浏览面板（Explorer)](#浏览面板explorer)、[文件树（FolderTree)](#文件树foldertree)、[编辑器树（EditorTree)](#编辑器树editortree)、[搜索面板（Search)](#搜索面板search)、[输出面板（Output）](#输出面板output)、[问题面板（Problems）](#问题面板problems)、[通知栏（Notification）)](#通知栏notification) 等 **7** 个模块。

让我们看看如何使用这些模块。

## [浏览面板（Explorer)](../api/classes/molecule.ExplorerService)

[Explorer](../api/classes/molecule.ExplorerService) 作为 Workbench 中的一个重要的**导航**模块，它负责展示当前工作的**目录信息**，以及当前正在**编辑的标签**，以及相关的文件夹等信息。

如果想自定义浏览面板 **Action Bar UI**，则使用：

```ts
molecule.explore.addAction({
    id: 'actionId',
    name: 'actionName',
    icon: 'add',
});
```

添加新的**面板项**：

```ts
molecule.explore.addPanel({
    id: 'panelId',
    name: 'panelName',
    renderPanel: () => <span>Panel Content</span>,
    toolbar: [],
});
```

[`renderPanel`](../api/interfaces/molecule.model.IExplorerPanelItem#renderpanel) 为自定义渲染的面板内容，[`toolbar`](../api/interfaces/molecule.model.IExplorerPanelItem#toolbar) 为自定义的工具栏。

监听 Explorer 的**事件**：

```ts
// 监听面板 Toolbar 单击事件
molecule.explore.onPanelToolbarClick(
    (panel: IExplorerPanelItem, toolbarId: string) => {
        // do something
    }
);

// 移除面板
molecule.explore.onRemovePanel((panel: IExplorerPanelItem) => {
    // do something
});
```

另外，我们顺带内置了 **Outline** 模块，不过想要让 Outline 工作起来，则需要配合其他的**语言**库来实现。

## [文件树（FolderTree)](../api/interfaces/molecule.IFolderTreeService)

[FolderTree](../api/interfaces/molecule.IFolderTreeService) 是 [Explorer](#浏览面板explorer) 中负责**文件树**展示的子模块，默认内置了创建**文件夹**，创建**文件**，**刷新**等默认事件。

给 FolderTree **添加/删除节点**：

```ts
// Add the tree data into folderTree
molecule.folderTree.add({
     id: 0,
    name: "Molecule-Demo",
    fileType: "RootFolder",
    location: "Molecule-Demo",
    isLeaf: false,
    data: "",
    children: [{
            id: 1,
            name: "test.js",
            location: "Molecule-Demo/test.js",
            fileType: "File",
            isLeaf: true,
            data: {},
        }]
    }]
})

// Remove the tree node which id is 0
molecule.folderTree.remove(0);
```

监听 FolderTree 的**事件**

```ts
// Listen to the create node event
molecule.folderTree.onCreate((type: FileType, id?: UniqueId) => {
    // do something
});

// Listen to the remove node event
molecule.folderTree.onRemove((id?: UniqueId) => {
    // do something
});

// Listen to the select node event
molecule.folderTree.onSelectFile((file: IFolderTreeNodeProps) => {
    // do something
});
```

更多关于 FolderTree 的使用，请参考 [API](../api/classes/molecule.FolderTreeService) 文档。

## [编辑器树（EditorTree)](../api/interfaces/molecule.IEditorTreeService)

[EditorTree](../api/interfaces/molecule.IEditorTreeService) 是 [Explorer](#浏览面板explorer) 中负责展示当前正在工作的一些**编辑标签**。Molecule 目前并未提供太多的 API 来支持扩展这个 UI, 更多还是一些基本的**事件处理**。

监听 EditorTree 基本操作的**事件**：

```ts
// Listen to the tab close event
molecule.editorTree.onClose((tabId: UniqueId, groupId: UniqueId) => {
    // do something
});

// Listen to the tab close event
molecule.editorTree.onSelect((tabId: UniqueId, groupId: UniqueId) => {
    // do something
});
```

## [搜索面板（Search)](../api/interfaces/molecule.ISearchService)

[Search](../api/interfaces/molecule.ISearchService) 是一个内置的**搜索面板**，它包含一些常见的**搜索**、**替换** 等 UI 功能。Molecule 内置的搜索模块只是基础的 UI 模块，具体的**搜索**，或者**替换**功能，需要开发者通过一些 API 来完成：

监听**搜索输入控件**的输入内容：

```ts
// Listen to the search input changed
molecule.search.onChange((tabId: UniqueId, groupId: UniqueId) => {
    // do something
});

// Listen to the event about replace all text in result
molecule.search.onReplaceAll((tabId: UniqueId, groupId: UniqueId) => {
    // do something
});
```

使用 `setResult` 来展示**搜索结果**：

```ts
// Display the result in panel
molecule.search.setResult([]);
```

## [输出面板（Output）](../api/interfaces/molecule.IPanelService)

[Output](../api/interfaces/molecule.IPanelService#appendoutput) 面板目前并未提供独立的 API **服务对象**，而是将它封装在 [Panel 服务对象](../api/interfaces/molecule.IPanelService)中了。所以如果想要更新 **Output** 组件中的内容，应该使用如下 API：

```ts
molecule.panel.appendOutput('typing...'); // Append the content into Output
molecule.panel.cleanOutput(); // Clean the Output
```

关于搜索面板的详细使用，我们可以参考一下 [molecule-example](https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/src/extensions/theFirstExtension/searchPaneController.ts)

:::caution
**Output** 和 **Problems** 同为 **Panel** 的内置 UI 组件，目前我们并没有为 **Output** 面板提供独立的**服务（Service）**对象, 仍然需要借助 `molecule.panel` 服务来进行操作。
:::

## [问题面板（Problems）](../api/interfaces/molecule.IProblemsService)

[Problems](../api/interfaces/molecule.IProblemsService) 可以用来展示工作区中的一些**问题**，例如**语法错误**、**参数问题**等。
和 [Output](#输出面板output) 一样，同为 **Panel** 的内置部件。但不同的是，我们为 **Problems** 提供了独立的服务的对象，所有针对 Problems 操作的 API 是这样：

```ts
// Add problems Items
molecule.problems.add({
    id: 1,
    name: 'text.tsx',
    isLeaf: false,
    value: {
        code: 'text.tsx',
        message: 'Folder',
        startLineNumber: 0,
        startColumn: 1,
        endLineNumber: 0,
        endColumn: 1,
        status: 1,
    },
    children: [],
});

// Remove the problems item which the id is 1
molecule.problems.remove(1);
```

添加 Problems 项使用 `add`， 移除则使用 `remove`。

## [通知栏（Notification）](../api/interfaces/molecule.INotificationService)

[Notification](../api/interfaces/molecule.INotificationService) 是内置的通知栏 UI 部件，我们可以利用它实现常见的**提示**、**警告**等功能。

添加通知内容：

```ts
import molecule from '@dtinsight/molecule';
import { INotificationItem } from '@dtinsight/molecule/esm/model';

const notification: INotificationItem = {
    id: '1',
    status: ,
    render: () => <p>Test notification!</p>
};
// Add the notification
molecule.notification.add(notification);

// Remove the notification
molecule.notification.remove(notification.id);
```

:::caution
**通知内容**需要开发者使用 `render` 函数来自定义。
:::

**展示/隐藏** 通知面板：

```ts
import molecule from '@dtinsight/molecule';
// Display or hide the Notification pane
molecule.notification.toggleNotification();
```
