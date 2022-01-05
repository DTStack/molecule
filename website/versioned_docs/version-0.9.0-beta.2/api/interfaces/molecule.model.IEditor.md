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

[src/model/workbench/editor.ts:61](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L61)

---

### editorOptions

• `Optional` **editorOptions**: [`IEditorOptions`](../namespaces/molecule.model#ieditoroptions)

Built-in editor options, there is main apply it to monaco-editor

#### Defined in

[src/model/workbench/editor.ts:73](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L73)

---

### entry

• `Optional` **entry**: `ReactNode`

The welcome page of editor bench

#### Defined in

[src/model/workbench/editor.ts:69](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L69)

---

### groups

• `Optional` **groups**: [`IEditorGroup`](molecule.model.IEditorGroup)<`any`, `any`\>[]

Editor Groups

#### Defined in

[src/model/workbench/editor.ts:65](https://github.com/DTStack/molecule/blob/b5324fcf/src/model/workbench/editor.ts#L65)
