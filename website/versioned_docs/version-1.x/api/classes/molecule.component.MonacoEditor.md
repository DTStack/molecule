---
id: 'molecule.component.MonacoEditor'
title: 'Class: MonacoEditor'
sidebar_label: 'MonacoEditor'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).MonacoEditor

## Hierarchy

-   `PureComponent`<[`IMonacoEditorProps`](../interfaces/molecule.component.IMonacoEditorProps)\>

    ↳ **`MonacoEditor`**

## Constructors

### constructor

• **new MonacoEditor**(`props`)

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `props` | `any` |

#### Overrides

PureComponent&lt;IMonacoEditorProps\&gt;.constructor

#### Defined in

[components/monaco/index.tsx:40](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L40)

## Properties

### monacoDom

• `Private` **monacoDom**: `HTMLDivElement`

The dom element of editor container

#### Defined in

[components/monaco/index.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L36)

---

### monacoInstance

• `Private` **monacoInstance**: `undefined` \| `IStandaloneCodeEditor`

The instance of monaco

#### Defined in

[components/monaco/index.tsx:32](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L32)

---

### monacoService

• `Private` `Readonly` **monacoService**: `IMonacoService`

#### Defined in

[components/monaco/index.tsx:38](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L38)

## Methods

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

PureComponent.componentDidMount

#### Defined in

[components/monaco/index.tsx:45](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L45)

---

### componentDidUpdate

▸ **componentDidUpdate**(`prevProps`): `void`

#### Parameters

| Name        | Type  |
| :---------- | :---- |
| `prevProps` | `any` |

#### Returns

`void`

#### Overrides

PureComponent.componentDidUpdate

#### Defined in

[components/monaco/index.tsx:55](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L55)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

PureComponent.render

#### Defined in

[components/monaco/index.tsx:62](https://github.com/DTStack/molecule/blob/927b7d39/src/components/monaco/index.tsx#L62)
