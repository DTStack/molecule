---
id: 'molecule.model.StatusBarModel'
title: 'Class: StatusBarModel'
sidebar_label: 'StatusBarModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).StatusBarModel

## Implements

-   [`IStatusBar`](../interfaces/molecule.model.IStatusBar)

## Constructors

### constructor

• **new StatusBarModel**(`leftItems?`, `rightItems?`, `contextMenu?`)

#### Parameters

| Name          | Type                                                                      | Default value |
| :------------ | :------------------------------------------------------------------------ | :------------ |
| `leftItems`   | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>[] | `[]`          |
| `rightItems`  | [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>[] | `[]`          |
| `contextMenu` | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]     | `[]`          |

#### Defined in

[src/model/workbench/statusBar.tsx:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L44)

## Properties

### contextMenu

• **contextMenu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IStatusBar](../interfaces/molecule.model.IStatusBar).[contextMenu](../interfaces/molecule.model.IStatusBar#contextmenu)

#### Defined in

[src/model/workbench/statusBar.tsx:42](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L42)

---

### leftItems

• **leftItems**: [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>[] = `[]`

#### Implementation of

[IStatusBar](../interfaces/molecule.model.IStatusBar).[leftItems](../interfaces/molecule.model.IStatusBar#leftitems)

#### Defined in

[src/model/workbench/statusBar.tsx:40](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L40)

---

### rightItems

• **rightItems**: [`IStatusBarItem`](../interfaces/molecule.model.IStatusBarItem)<`any`\>[] = `[]`

#### Implementation of

[IStatusBar](../interfaces/molecule.model.IStatusBar).[rightItems](../interfaces/molecule.model.IStatusBar#rightitems)

#### Defined in

[src/model/workbench/statusBar.tsx:41](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/statusBar.tsx#L41)
