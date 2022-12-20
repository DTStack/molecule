---
id: 'molecule.model.EditorModel'
title: 'Class: EditorModel'
sidebar_label: 'EditorModel'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).EditorModel

## Implements

-   [`IEditor`](../interfaces/molecule.model.IEditor)

## Constructors

### constructor

• **new EditorModel**(`current?`, `groups?`, `entry`, `editorOptions?`)

#### Parameters

| Name            | Type                                                                                 | Default value |
| :-------------- | :----------------------------------------------------------------------------------- | :------------ |
| `current`       | `null` \| [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\> | `null`        |
| `groups`        | [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>[]         | `[]`          |
| `entry`         | `ReactNode`                                                                          | `undefined`   |
| `editorOptions` | [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions)                      | `{}`          |

#### Defined in

[model/workbench/editor.ts:111](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L111)

## Properties

### current

• **current**: `null` \| [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>

Current editor group

#### Implementation of

[IEditor](../interfaces/molecule.model.IEditor).[current](../interfaces/molecule.model.IEditor#current)

#### Defined in

[model/workbench/editor.ts:106](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L106)

---

### editorOptions

• **editorOptions**: [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions)

Built-in editor options, there is main apply it to monaco-editor

#### Implementation of

[IEditor](../interfaces/molecule.model.IEditor).[editorOptions](../interfaces/molecule.model.IEditor#editoroptions)

#### Defined in

[model/workbench/editor.ts:109](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L109)

---

### entry

• **entry**: `ReactNode`

The welcome page of editor bench

#### Implementation of

[IEditor](../interfaces/molecule.model.IEditor).[entry](../interfaces/molecule.model.IEditor#entry)

#### Defined in

[model/workbench/editor.ts:108](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L108)

---

### groups

• **groups**: [`IEditorGroup`](../interfaces/molecule.model.IEditorGroup)<`any`, `any`\>[]

Editor Groups

#### Implementation of

[IEditor](../interfaces/molecule.model.IEditor).[groups](../interfaces/molecule.model.IEditor#groups)

#### Defined in

[model/workbench/editor.ts:107](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L107)
