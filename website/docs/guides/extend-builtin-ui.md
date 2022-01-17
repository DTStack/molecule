---
title: Built-in Parts
sidebar_label: Built-in Parts
---

In Molecule, we are based on the [6 core UI](./extend-workbench.md) modules, and many commonly used UI modules in IDE Workbench are built in by default, so that we can quickly meet the needs of developers. These modules have built-in a series of **Service**, allowing us to operate or extend through **Extension**.

![molecule](/img/guides/builtin-ui.png)

As shown in the picture above, the current **built-in parts** mainly include 7 modules: [Explorer](#explorer), [FolderTree](#foldertree), [EditorTree](#editortree), [Search](#search), [Output](#output), [Problems](#problems) and [Notification](#notification).

Let's see how to use these parts.

## [Explorer](../api/classes/molecule.ExplorerService)

[Explorer](../api/classes/molecule.ExplorerService) as an important **navigation** module in Workbench, it is responsible for displaying the current work **directory** information, as well as the **tags** currently being edited, and related folders and other information.

If you want to customize the **Action Bar UI**，use：

```ts
molecule.explore.addAction({
    id: 'actionId',
    name: 'actionName',
    icon: 'add',
});
```

Add a new **panel item**：

```ts
molecule.explore.addPanel({
    id: 'panelId',
    name: 'panelName',
    renderPanel: () => <span>Panel Content</span>,
    toolbar: [],
});
```

[`renderPanel`](../api/interfaces/molecule.model.IExplorerPanelItem#renderpanel) returns the content of the custom rendered panel, [`toolbar`](../api/interfaces/molecule.model.IExplorerPanelItem#toolbar) is used to customize the toolbar.

Listen to Explorer **events**：

```ts
// Listen to the click event of the Toolbar
molecule.explore.onPanelToolbarClick(
    (panel: IExplorerPanelItem, toolbarId: string) => {
        // do something
    }
);

// Remove panel
molecule.explore.onRemovePanel((panel: IExplorerPanelItem) => {
    // do something
});
```

In addition, we have built-in the **Outline** module by the way, but if you want Outline to work, you need to cooperate with other **language** libraries to implement it.

## [FolderTree](../api/interfaces/molecule.IFolderTreeService)

[FolderTree](../api/interfaces/molecule.IFolderTreeService) is the sub-module responsible for **file tree** display in [Explorer](#explorer). Default events such as **folder** creation, **file** creation, and **refresh** are built-in by default.

**Add/Remove** nodes to FolderTree:

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

Listen to **events** of FolderTree

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

Enable sorting

```ts
// Toggle whether to enable sorting, which is disabled by default.
molecule.folderTree.toggleAutoSort();
```

For more information about the use of FolderTree, please refer to the [API](../api/classes/molecule.FolderTreeService) documentation.

:::caution
We don't have default node removal logic built into FolderTree, but you can customize it using `remove` method.
:::

## [EditorTree](../api/interfaces/molecule.IEditorTreeService)

[EditorTree](../api/interfaces/molecule.IEditorTreeService) is responsible for displaying some **editing tags** currently working in [Explorer](#explorer). Molecule currently does not provide too many APIs to support the extension of this UI, but more basic **event handling**.

Listen to **events** of the basic operations of EditorTree:

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

## [Search](../api/interfaces/molecule.ISearchService)

[Search](../api/interfaces/molecule.ISearchService) is a built-in **search panel**, which contains some common **search**, **replace** and other UI functions. The built-in search module of Molecule is just a basic UI module. The specific **search** or **replacement** function needs to be completed by the developer through some APIs:

Listen to the input of the **search input control**:

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

Use `setResult` to show search results :

```ts
// Display the result in panel
molecule.search.setResult([]);
```

## [Output](../api/interfaces/molecule.IPanelService)

The [Output](../api/interfaces/molecule.IPanelService#appendoutput) panel currently does not provide an independent API **service object**, but encapsulates it in the [Panel service](../api/interfaces/molecule.IPanelService) object. So if you want to update the content in the **Output** component, you should use the following API:

```ts
molecule.panel.appendOutput('typing...'); // Append the content into Output
molecule.panel.cleanOutput(); // Clean the Output
```

Regarding the detailed use of the search panel, we can refer to [molecule-example](https://github.com/DTStack/molecule-examples/blob/main/packages/molecule-demo/src/extensions/theFirstExtension/searchPaneController.ts)

:::caution
**Output** and **Problems** are both **Panel**'s built-in UI components. At present, we do not provide a independent **Service** object for the **Output** panel, and we still need to use the `molecule.panel` service to operate.
:::

## [Problems](../api/interfaces/molecule.IProblemsService)

[Problems](../api/interfaces/molecule.IProblemsService) can be used to show some **problems** in the workspace, such as **syntax errors**, **parameter problems**, etc. Like [Output](#output), it is also a built-in component of **Panel**. But the difference is that we provide an independent service object for **Problems**, and all APIs for Problems operations are like this:

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

Use `add` to add Problems item, and `remove` to remove it.

## [Notification](../api/interfaces/molecule.INotificationService)

[Notification](../api/interfaces/molecule.INotificationService) is a built-in notification bar UI component, we can use it to achieve common **prompts**, **warnings** and other functions.

Add notification content:

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
The **notification content** needs to be customized by the developer using the `render` function.
:::

**Show/hide** notification panel:

```ts
import molecule from '@dtinsight/molecule';
// Display or hide the Notification pane
molecule.notification.toggleNotification();
```
