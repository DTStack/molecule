---
id: 'molecule.model.SidebarModel'
title: 'Class: SidebarModel'
sidebar_label: 'SidebarModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).SidebarModel

## Implements

-   [`ISidebar`](../interfaces/molecule.model.ISidebar)

## Constructors

### constructor

• **new SidebarModel**(`panes?`, `selected?`)

#### Parameters

| Name       | Type                                                          | Default value |
| :--------- | :------------------------------------------------------------ | :------------ |
| `panes`    | [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane)[] | `[]`          |
| `selected` | `UniqueId`                                                    | `''`          |

#### Defined in

[src/model/workbench/sidebar.ts:18](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/sidebar.ts#L18)

## Properties

### current

• **current**: `UniqueId`

#### Implementation of

[ISidebar](../interfaces/molecule.model.ISidebar).[current](../interfaces/molecule.model.ISidebar#current)

#### Defined in

[src/model/workbench/sidebar.ts:15](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/sidebar.ts#L15)

---

### panes

• **panes**: [`ISidebarPane`](../interfaces/molecule.model.ISidebarPane)[]

#### Implementation of

[ISidebar](../interfaces/molecule.model.ISidebar).[panes](../interfaces/molecule.model.ISidebar#panes)

#### Defined in

[src/model/workbench/sidebar.ts:16](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/sidebar.ts#L16)
