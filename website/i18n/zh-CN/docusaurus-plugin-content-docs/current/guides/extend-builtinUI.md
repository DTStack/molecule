---
title: 扩展部件
sidebar_label: 扩展部件
---

在 Molecule 中，我们基于 核心 UI 模块，默认内置了很多在 IDE Workbench 中常用的模块，以便我们可以快速的满足我们的开发需求。
同样的，我们通用内置了一系列**服务（Service）**，允许我们通过 **Extension** 的方式，针对这些内置部件进行扩展。

![molecule](/img/guides/workbench.png)

## [浏览面板（Explorer)](/docs/api/classes/molecule.ExplorerService)

`explorer` 作为 Workbench 中的一个重要的**导航**模块，它负责展示当前工作的目录信息，以及当前打开的文件，以及相关的文件夹等信息。

#### 自定义浏览面板 Action

```ts
molecule.explore.addAction({
    id: 'actionId',
    name: 'actionName',
    icon: 'add',
});
```

#### 添加自定义面板

```ts
molecule.explore.addPanel({
    id: 'panelId',
    name: 'panelName',
    renderPanel: () => <span>Panel Content</span>,
    toolbar: [],
});
```

[renderPanel](/docs/api/interfaces/molecule.models.IExplorerPanelItem#renderpanel) 为自定义渲染的面板内容，[toolbar](/docs/api/interfaces/molecule.models.IExplorerPanelItem#toolbar) 为自定义的工具栏。

#### 事件处理

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

另外，我们顺带内置了 **Outline** 模块，不过想要让 outline 工作起来，仍然需要配合其他的**语言**库来实现。

## [文件树（FolderTree)](/docs/api/interfaces/molecule.IFolderTreeService)

**FolderTree** 是 **Explorer** 中负责目录展示的子模块，默认内置了创建**文件夹**，创建**文件**，**刷新**等默认事件。

#### 基本操作：

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

#### 事件处理

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

更多关于 [molecule.folderTree](./api/classes/molecule.FolderTreeService) 的使用，请参考 API 文档。

## [编辑器树（EditorTree)](/docs/api/interfaces/molecule.IEditorTreeService)

`editorTree` 是 `explorer` 中负责展示当前正在工作的一些打开文件，我们默认并未提供太多的扩展这个 UI 的 API,
更多还是对这个 UI 部件的事件处理。

#### 常用 API

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

## [搜索面板（Search)](/docs/api/interfaces/molecule.ISearchService#setresult)

**Search** 是默认的搜索面板，我们可以利用它实现常见的**搜索**、**替换**等功能。Molecule 内置的搜索模块只是基础的 UI 模块，
实现具体的功能，需要通过一些 API 来完成：

#### 基本使用

```ts
// Listen to the search input changed
molecule.search.onChange((tabId: UniqueId, groupId: UniqueId) => {
    // do something
});

// Listen to the event about replace all text in result
molecule.search.onReplaceAll((tabId: UniqueId, groupId: UniqueId) => {
    // do something
});

// Display the result in panel
molecule.search.setResult([]);
```

## [输出面板（Output）](/docs/api/interfaces/molecule.IPanelService)

[Output](/docs/api/interfaces/molecule.IPanelService#appendoutput) 面板目前并未提供独立的 API 服务对象，而是将其基础接口
封装在 Panel 服务对象中了。所以如果想要更新 **Output** 组件中的内容，应该使用如下 API：

```ts
molecule.output.appendOutput('typing...'); // Append the content into Output
molecule.output.cleanOutput(); // Clean the Output
```

关于搜索面板的详细使用，我们可以参考一下 [molecule-example](https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/src/extensions/theFirstExtension/searchPaneController.ts)

:::tip
**Output** 和 **Problems** 同为 **Panel** 的内置 UI 组件，目前我们并没有为 **Output** 面板提供独立的**服务（Service）**对象, 仍然需要借助 `molecule.panel` 服务来进行操作。
:::

## [问题面板（Problems） ](/docs/api/interfaces/molecule.IProblemsService)

**Problems** 可以用来展示工作区中的一些**问题**，例如**语法错误**、**参数问题**等。和 Output 一样，同为 Panel 区的内置部件。但
不同的是，我们为 **Problems** 提供了独立的服务的对象，所有我们可以这样来操作：

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

## [通知栏（Notification）](/docs/api/interfaces/molecule.INotificationService)

**Notification** 是默认的通知栏部件，我们可以利用它实现常见的**提示**、**警告**等功能。

#### 基本操作

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

主动 **展示/隐藏** 通知面板

```ts
import molecule from '@dtinsight/molecule';
// Display or hide the Notification pane
molecule.notification.toggleNotification();
```
