---
id: 'molecule.model.IEditor'
title: 'Interface: IEditor'
sidebar_label: 'IEditor'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[model](../namespaces/molecule.model).IEditor

## Implemented by

-   [`EditorModel`](../classes/molecule.model.EditorModel)

## Properties

### current

• `Optional` **current**: `null` \| [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>

Current editor group

#### Defined in

[model/workbench/editor.ts:62](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L62)

---

### editorOptions

• `Optional` **editorOptions**: [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions)

Built-in editor options, there is main apply it to monaco-editor

#### Defined in

[model/workbench/editor.ts:74](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L74)

---

### entry

• `Optional` **entry**: `ReactNode`

The welcome page of editor bench

#### Defined in

[model/workbench/editor.ts:70](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L70)

---

### groups

• `Optional` **groups**: [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>[]

Editor Groups

#### Defined in

[model/workbench/editor.ts:66](https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/editor.ts#L66)
