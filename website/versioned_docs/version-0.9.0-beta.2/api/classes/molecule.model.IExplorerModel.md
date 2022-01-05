---
id: 'molecule.model.IExplorerModel'
title: 'Class: IExplorerModel'
sidebar_label: 'IExplorerModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IExplorerModel

## Implements

-   [`IExplorer`](../interfaces/molecule.model.IExplorer)

## Constructors

### constructor

• **new IExplorerModel**(`data?`, `headerToolBar?`)

#### Parameters

| Name             | Type                                                                                  | Default value |
| :--------------- | :------------------------------------------------------------------------------------ | :------------ |
| `data`           | [`IExplorerPanelItem`](../interfaces/molecule.model.IExplorerPanelItem)[]             | `[]`          |
| `headerToolBar?` | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\> | `undefined`   |

#### Defined in

[src/model/workbench/explorer/explorer.tsx:47](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L47)

## Properties

### data

• **data**: [`IExplorerPanelItem`](../interfaces/molecule.model.IExplorerPanelItem)[]

#### Implementation of

[IExplorer](../interfaces/molecule.model.IExplorer).[data](../interfaces/molecule.model.IExplorer#data)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:44](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L44)

---

### headerToolBar

• `Optional` **headerToolBar**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>

#### Implementation of

[IExplorer](../interfaces/molecule.model.IExplorer).[headerToolBar](../interfaces/molecule.model.IExplorer#headertoolbar)

#### Defined in

[src/model/workbench/explorer/explorer.tsx:45](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/explorer/explorer.tsx#L45)
