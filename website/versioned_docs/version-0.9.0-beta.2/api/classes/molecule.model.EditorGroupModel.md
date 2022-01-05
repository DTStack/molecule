---
id: 'molecule.model.EditorGroupModel'
title: 'Class: EditorGroupModel<E, T>'
sidebar_label: 'EditorGroupModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).EditorGroupModel

## Type parameters

| Name | Type  |
| :--- | :---- |
| `E`  | `any` |
| `T`  | `any` |

## Implements

-   [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`E`, `T`\>

## Constructors

### constructor

• **new EditorGroupModel**<`E`, `T`\>(`id`, `tab`, `activeTab`, `data`, `actions?`, `menu?`, `editorInstance?`)

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `E`  | `any` |
| `T`  | `any` |

#### Parameters

| Name              | Type                                                                        | Default value |
| :---------------- | :-------------------------------------------------------------------------- | :------------ |
| `id`              | `UniqueId`                                                                  | `undefined`   |
| `tab`             | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\>               | `undefined`   |
| `activeTab`       | `undefined` \| `UniqueId`                                                   | `undefined`   |
| `data`            | [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\>[]             | `undefined`   |
| `actions`         | [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[] | `[]`          |
| `menu`            | [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]       | `[]`          |
| `editorInstance?` | `E`                                                                         | `undefined`   |

#### Defined in

[src/model/workbench/editor.ts:85](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L85)

## Properties

### actions

• **actions**: [`IEditorActionsProps`](../interfaces/molecule.model.IEditorActionsProps)[]

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[actions](../interfaces/molecule.model.IEditorGroup#actions)

#### Defined in

[src/model/workbench/editor.ts:80](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L80)

---

### activeTab

• **activeTab**: `undefined` \| `UniqueId`

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[activeTab](../interfaces/molecule.model.IEditorGroup#activetab)

#### Defined in

[src/model/workbench/editor.ts:83](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L83)

---

### data

• **data**: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\>[]

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[data](../interfaces/molecule.model.IEditorGroup#data)

#### Defined in

[src/model/workbench/editor.ts:79](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L79)

---

### editorInstance

• **editorInstance**: `undefined` \| `E`

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[editorInstance](../interfaces/molecule.model.IEditorGroup#editorinstance)

#### Defined in

[src/model/workbench/editor.ts:82](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L82)

---

### id

• **id**: `UniqueId`

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[id](../interfaces/molecule.model.IEditorGroup#id)

#### Defined in

[src/model/workbench/editor.ts:77](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L77)

---

### menu

• **menu**: [`IMenuItemProps`](../interfaces/molecule.component.IMenuItemProps)[]

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[menu](../interfaces/molecule.model.IEditorGroup#menu)

#### Defined in

[src/model/workbench/editor.ts:81](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L81)

---

### tab

• **tab**: [`IEditorTab`](../interfaces/molecule.model.IEditorTab)<`T`\>

Current editor group tab

#### Implementation of

[IEditorGroup](../interfaces/molecule.model.IEditorGroup).[tab](../interfaces/molecule.model.IEditorGroup#tab)

#### Defined in

[src/model/workbench/editor.ts:78](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L78)
