---
id: 'molecule.component.IMonacoEditorProps'
title: 'Interface: IMonacoEditorProps'
sidebar_label: 'IMonacoEditorProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IMonacoEditorProps

## Hierarchy

-   `ComponentProps`<`any`\>

    ↳ **`IMonacoEditorProps`**

## Properties

### options

• `Optional` **options**: `IStandaloneEditorConstructionOptions`

The option of monaco editor

#### Defined in

[src/components/monaco/index.tsx:16](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/monaco/index.tsx#L16)

---

### override

• `Optional` **override**: `IEditorOverrideServices`

The override for monaco editor

#### Defined in

[src/components/monaco/index.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/monaco/index.tsx#L20)

## Methods

### editorInstanceRef

▸ `Optional` **editorInstanceRef**(`instance`): `void`

#### Parameters

| Name       | Type                    |
| :--------- | :---------------------- |
| `instance` | `IStandaloneCodeEditor` |

#### Returns

`void`

#### Defined in

[src/components/monaco/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/monaco/index.tsx#L21)

---

### onChangeEditorProps

▸ `Optional` **onChangeEditorProps**(`props`, `nextProps`): `void`

#### Parameters

| Name        | Type                                                          |
| :---------- | :------------------------------------------------------------ |
| `props`     | [`IMonacoEditorProps`](molecule.component.IMonacoEditorProps) |
| `nextProps` | [`IMonacoEditorProps`](molecule.component.IMonacoEditorProps) |

#### Returns

`void`

#### Defined in

[src/components/monaco/index.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/monaco/index.tsx#L22)
