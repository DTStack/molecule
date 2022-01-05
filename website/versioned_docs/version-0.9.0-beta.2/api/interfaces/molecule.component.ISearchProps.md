---
id: 'molecule.component.ISearchProps'
title: 'Interface: ISearchProps'
sidebar_label: 'ISearchProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ISearchProps

## Hierarchy

-   `ComponentProps`<`any`\>

    ↳ **`ISearchProps`**

## Properties

### addons

• `Optional` **addons**: (`undefined` \| [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\>[])[]

#### Defined in

[src/components/search/index.tsx:22](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L22)

---

### className

• `Optional` **className**: `string`

#### Defined in

[src/components/search/index.tsx:19](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L19)

---

### placeholders

• `Optional` **placeholders**: `string`[]

#### Defined in

[src/components/search/index.tsx:21](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L21)

---

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[src/components/search/index.tsx:18](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L18)

---

### validationInfo

• `Optional` **validationInfo**: `string` \| { `text`: `string` ; `type`: `"warning"` \| `"info"` \| `"error"` }

#### Defined in

[src/components/search/index.tsx:23](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L23)

---

### values

• `Optional` **values**: `SearchValues`

#### Defined in

[src/components/search/index.tsx:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L20)

## Methods

### onAddonClick

▸ `Optional` **onAddonClick**(`addon`): `void`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `addon` | `any` |

#### Returns

`void`

#### Defined in

[src/components/search/index.tsx:24](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L24)

---

### onButtonClick

▸ `Optional` **onButtonClick**(`status`): `void`

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `status` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/search/index.tsx:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L25)

---

### onChange

▸ `Optional` **onChange**(`value?`): `void`

onChange only oberseves the values of inputs

first value is from query input

second value is from replace input

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `value?` | `SearchValues` |

#### Returns

`void`

#### Defined in

[src/components/search/index.tsx:33](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L33)

---

### onSearch

▸ `Optional` **onSearch**(`value?`): `void`

onSearch always be triggered behind onChange or onClick

#### Parameters

| Name     | Type           |
| :------- | :------------- |
| `value?` | `SearchValues` |

#### Returns

`void`

#### Defined in

[src/components/search/index.tsx:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/components/search/index.tsx#L37)
