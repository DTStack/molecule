---
id: 'molecule.component.ITreeProps'
title: 'Interface: ITreeProps'
sidebar_label: 'ITreeProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITreeProps

## Properties

### activeKey

• `Optional` **activeKey**: `UniqueId`

#### Defined in

[components/tree/index.tsx:66](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L66)

---

### className

• `Optional` **className**: `string`

#### Defined in

[components/tree/index.tsx:62](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L62)

---

### data

• `Optional` **data**: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[]

#### Defined in

[components/tree/index.tsx:61](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L61)

---

### draggable

• `Optional` **draggable**: `boolean`

#### Defined in

[components/tree/index.tsx:63](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L63)

---

### expandKeys

• `Optional` **expandKeys**: `UniqueId`[]

#### Defined in

[components/tree/index.tsx:64](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L64)

---

### loadedKeys

• `Optional` **loadedKeys**: `string`[]

#### Defined in

[components/tree/index.tsx:65](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L65)

## Methods

### onDropTree

▸ `Optional` **onDropTree**(`source`, `target`): `void`

#### Parameters

| Name     | Type                                                                  |
| :------- | :-------------------------------------------------------------------- |
| `source` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |
| `target` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |

#### Returns

`void`

#### Defined in

[components/tree/index.tsx:75](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L75)

---

### onExpand

▸ `Optional` **onExpand**(`expandedKeys`, `node`): `void`

#### Parameters

| Name           | Type                                                                  |
| :------------- | :-------------------------------------------------------------------- |
| `expandedKeys` | `Key`[]                                                               |
| `node`         | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |

#### Returns

`void`

#### Defined in

[components/tree/index.tsx:67](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L67)

---

### onLoadData

▸ `Optional` **onLoadData**(`node`): `Promise`<`void`\>

#### Parameters

| Name   | Type                                                                  |
| :----- | :-------------------------------------------------------------------- |
| `node` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[components/tree/index.tsx:76](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L76)

---

### onRightClick

▸ `Optional` **onRightClick**(`e`, `node`): `void`

#### Parameters

| Name   | Type                                                                  |
| :----- | :-------------------------------------------------------------------- |
| `e`    | `MouseEvent`<`HTMLDivElement`, `MouseEvent`\>                         |
| `node` | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |

#### Returns

`void`

#### Defined in

[components/tree/index.tsx:77](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L77)

---

### onSelect

▸ `Optional` **onSelect**(`node`, `isUpdate?`): `void`

#### Parameters

| Name        | Type                                                                  |
| :---------- | :-------------------------------------------------------------------- |
| `node`      | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |
| `isUpdate?` | `any`                                                                 |

#### Returns

`void`

#### Defined in

[components/tree/index.tsx:68](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L68)

---

### onTreeClick

▸ `Optional` **onTreeClick**(): `void`

#### Returns

`void`

#### Defined in

[components/tree/index.tsx:69](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L69)

---

### renderTitle

▸ `Optional` **renderTitle**(`node`, `index`, `isLeaf`): `string` \| `Element`

#### Parameters

| Name     | Type                                                                  |
| :------- | :-------------------------------------------------------------------- |
| `node`   | [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\> |
| `index`  | `number`                                                              |
| `isLeaf` | `boolean`                                                             |

#### Returns

`string` \| `Element`

#### Defined in

[components/tree/index.tsx:70](https://github.com/DTStack/molecule/blob/927b7d39/src/components/tree/index.tsx#L70)
