---
title: 内置 UI 组件
sidebar_label: 内置 UI 组件
---

## 简介

在 Molecule 中，我们基于 核心 UI 模块，默认内置了很多在 IDE Workbench 中常用的模块，以便我们可以快速的满足我们的开发需求。

-   **浏览（explorer）**：`explorer` 作为 Workbench 中的一个重要的**导航**模块，它负责展示当前工作的目录信息，以及当前打开的文件，以及相关的文件夹等信息。另外，我们顺带内置了 **Outline** 模块，不过想要让 outline 工作起来，仍然需要配合其他的**语言**库来实现。

    想要扩展 `explorer` 模块, 可以通过 [molecule.explorer](./api/classes/molecule.ExplorerService) 对象来实现。

-   **文件树（folderTree）**： `folderTree` 是 `explorer` 中负责目录展示的子模块，默认内置了创建**文件夹**，创建**文件**，**刷新**等默认事件。我们一般可以通过 [molecule.folderTree](./api/classes/molecule.FolderTreeService) 对象来对它进行扩展和操作，例如**数据渲染**，节点的增删改查等。
-   **编辑器树（editorTree）**：`editorTree` 是 `explorer` 中负责展示当前正在工作的一些打开文件。我们一般可以通过 [molecule.editorTree](./api/classes/molecule.EditorTreeService) 对象来对它进行扩展。
-   **搜索（search）**：`search` 是默认的搜索面板，我们可以利用它实现常见的**搜索**、**替换**等功能。
-   **通知（notification）**：`notification` 是一个默认的通知栏，我们可以利用它实现常见的**提示**、**警告**等功能。
-   **问题（problems）**：`problems` 模块用来展示工作区中的一些**问题**，例如**语法错误**、**参数问题**等等。

### 浏览面板（Explorer)

### 文件树（FolderTree)

### 搜索面板（Search)

另外，[Output](/docs/api/interfaces/molecule.IPanelService#appendoutput) 和 [Problems](/docs/api/interfaces/molecule.IProblemsService) 面板为 2 个内置组件，
如果想要更新 Output 组件中的内容，可以使用如下 API：

### 输出面板（Output）

```ts
molecule.output.appendOutput('typing...'); // Append the content into Output
molecule.output.cleanOutput(); // Clean the Output
```

### 问题面板（Problems）

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
    children: [
        {
            id: 3,
            name: '0-1',
            isLeaf: true,
            value: {
                code: 'endLineNumber',
                message: 'Syntax Error',
                startLineNumber: 0,
                startColumn: 1,
                endLineNumber: 0,
                endColumn: 1,
                status: 8,
            },
            children: [],
        },
    ],
});

// Remove the problems item which the id is 1
molecule.problems.remove(1);
```

:::tip
**这里需要注意的是，Output** 和 **Problems** 同为 **Panel** 的内置 UI 组件，目前我们并没有为 **Output** 面板提供独立的**服务（Service）**对象, 仍然需要借助 `molecule.panel` 服务来进行操作。
:::

### 通知栏（Notification）

通知面板的操作，主要是通过 [`molecule.notification`](/docs/api/interfaces/molecule.INotificationService)服务对象来处理的：

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
