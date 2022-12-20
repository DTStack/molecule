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

• **new IExplorerModel**(`data?`, `headerToolBar?`, `activePanelKeys?`)

#### Parameters

| Name               | Type                                                                                  | Default value |
| :----------------- | :------------------------------------------------------------------------------------ | :------------ |
| `data`             | [`IExplorerPanelItem`](../interfaces/molecule.model.IExplorerPanelItem)[]             | `[]`          |
| `headerToolBar?`   | [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\> | `undefined`   |
| `activePanelKeys?` | `UniqueId`[]                                                                          | `undefined`   |

#### Defined in

[model/workbench/explorer/explorer.tsx:50](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L50)

## Properties

### activePanelKeys

• `Optional` **activePanelKeys**: `UniqueId`[]

#### Implementation of

[IExplorer](../interfaces/molecule.model.IExplorer).[activePanelKeys](../interfaces/molecule.model.IExplorer#activepanelkeys)

#### Defined in

[model/workbench/explorer/explorer.tsx:48](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L48)

---

### data

• **data**: [`IExplorerPanelItem`](../interfaces/molecule.model.IExplorerPanelItem)[]

#### Implementation of

[IExplorer](../interfaces/molecule.model.IExplorer).[data](../interfaces/molecule.model.IExplorer#data)

#### Defined in

[model/workbench/explorer/explorer.tsx:46](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L46)

---

### headerToolBar

• `Optional` **headerToolBar**: [`IActionBarItemProps`](../interfaces/molecule.component.IActionBarItemProps)<`any`\>

#### Implementation of

[IExplorer](../interfaces/molecule.model.IExplorer).[headerToolBar](../interfaces/molecule.model.IExplorer#headertoolbar)

#### Defined in

[model/workbench/explorer/explorer.tsx:47](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/explorer/explorer.tsx#L47)
