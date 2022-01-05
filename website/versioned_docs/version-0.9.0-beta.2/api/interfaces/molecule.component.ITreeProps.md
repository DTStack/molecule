---
id: 'molecule.component.ITreeProps'
title: 'Interface: ITreeProps'
sidebar_label: 'ITreeProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ITreeProps

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

[src/components/tree/index.tsx:56](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L56)

---

### data

• `Optional` **data**: [`ITreeNodeItemProps`](molecule.component.ITreeNodeItemProps)<`any`\>[]

#### Defined in

[src/components/tree/index.tsx:55](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L55)

---

### draggable

• `Optional` **draggable**: `boolean`

#### Defined in

[src/components/tree/index.tsx:57](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L57)

---

### expandKeys

• `Optional` **expandKeys**: `string`[]

#### Defined in

[src/components/tree/index.tsx:58](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L58)

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

[src/components/tree/index.tsx:67](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L67)

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

[src/components/tree/index.tsx:59](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L59)

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

[src/components/tree/index.tsx:68](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L68)

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

[src/components/tree/index.tsx:69](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L69)

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

[src/components/tree/index.tsx:60](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L60)

---

### onTreeClick

▸ `Optional` **onTreeClick**(): `void`

#### Returns

`void`

#### Defined in

[src/components/tree/index.tsx:61](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L61)

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

[src/components/tree/index.tsx:62](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/tree/index.tsx#L62)
