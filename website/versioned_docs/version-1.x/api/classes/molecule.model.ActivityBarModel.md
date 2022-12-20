---
id: 'molecule.model.ActivityBarModel'
title: 'Class: ActivityBarModel'
sidebar_label: 'ActivityBarModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).ActivityBarModel

## Implements

-   [`IActivityBar`](../interfaces/molecule.model.IActivityBar)

## Constructors

### constructor

• **new ActivityBarModel**(`data?`, `contextMenu?`, `selected?`)

#### Parameters

| Name          | Type                                                                              | Default value |
| :------------ | :-------------------------------------------------------------------------------- | :------------ |
| `data`        | [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem)[]             | `[]`          |
| `contextMenu` | [`IActivityMenuItemProps`](../interfaces/molecule.model.IActivityMenuItemProps)[] | `[]`          |
| `selected`    | `UniqueId`                                                                        | `''`          |

#### Defined in

[model/workbench/activityBar.ts:45](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/activityBar.ts#L45)

## Properties

### contextMenu

• **contextMenu**: [`IActivityMenuItemProps`](../interfaces/molecule.model.IActivityMenuItemProps)[]

#### Implementation of

[IActivityBar](../interfaces/molecule.model.IActivityBar).[contextMenu](../interfaces/molecule.model.IActivityBar#contextmenu)

#### Defined in

[model/workbench/activityBar.ts:43](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/activityBar.ts#L43)

---

### data

• **data**: [`IActivityBarItem`](../interfaces/molecule.model.IActivityBarItem)[]

#### Implementation of

[IActivityBar](../interfaces/molecule.model.IActivityBar).[data](../interfaces/molecule.model.IActivityBar#data)

#### Defined in

[model/workbench/activityBar.ts:42](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/activityBar.ts#L42)

---

### selected

• **selected**: `UniqueId`

#### Implementation of

[IActivityBar](../interfaces/molecule.model.IActivityBar).[selected](../interfaces/molecule.model.IActivityBar#selected)

#### Defined in

[model/workbench/activityBar.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/activityBar.ts#L44)
