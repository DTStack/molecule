---
id: 'molecule.component.ISplitProps'
title: 'Interface: ISplitProps'
sidebar_label: 'ISplitProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).ISplitProps

## Hierarchy

-   `HTMLElementProps`

    ↳ **`ISplitProps`**

## Properties

### allowResize

• `Optional` **allowResize**: `boolean` \| `boolean`[]

Should allowed to resized

default is true

#### Defined in

[components/split/SplitPane.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L37)

---

### children

• **children**: `Element`[]

#### Defined in

[components/split/SplitPane.tsx:31](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L31)

---

### className

• `Optional` **className**: `string`

#### Overrides

HTMLElementProps.className

#### Defined in

[components/split/SplitPane.tsx:55](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L55)

---

### paneClassName

• `Optional` **paneClassName**: `string`

#### Defined in

[components/split/SplitPane.tsx:57](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L57)

---

### resizerSize

• `Optional` **resizerSize**: `number`

Specify the size fo resizer

defualt size is 4px

#### Defined in

[components/split/SplitPane.tsx:63](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L63)

---

### role

• `Optional` **role**: `string`

#### Inherited from

HTMLElementProps.role

#### Defined in

[common/types.ts:5](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L5)

---

### sashClassName

• `Optional` **sashClassName**: `string`

#### Defined in

[components/split/SplitPane.tsx:56](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L56)

---

### showSashes

• `Optional` **showSashes**: `boolean` \| `boolean`[]

Should show the sashes

default is true

#### Defined in

[components/split/SplitPane.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L43)

---

### sizes

• **sizes**: (`string` \| `number`)[]

Only support controlled mode, so it's required

#### Defined in

[components/split/SplitPane.tsx:53](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L53)

---

### split

• `Optional` **split**: `"horizontal"` \| `"vertical"`

How to split the space

default is vertical

#### Defined in

[components/split/SplitPane.tsx:49](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L49)

---

### style

• `Optional` **style**: `CSSProperties`

#### Inherited from

HTMLElementProps.style

#### Defined in

[common/types.ts:3](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L3)

---

### title

• `Optional` **title**: `string`

#### Inherited from

HTMLElementProps.title

#### Defined in

[common/types.ts:2](https://github.com/DTStack/molecule/blob/927b7d39/src/common/types.ts#L2)

## Methods

### onChange

▸ **onChange**(`sizes`): `void`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `sizes` | `number`[] |

#### Returns

`void`

#### Defined in

[components/split/SplitPane.tsx:54](https://github.com/DTStack/molecule/blob/927b7d39/src/components/split/SplitPane.tsx#L54)
