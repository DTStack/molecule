---
id: 'molecule.component.IScrollbarProps'
title: 'Interface: IScrollbarProps'
sidebar_label: 'IScrollbarProps'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[component](../namespaces/molecule.component).IScrollbarProps

## Properties

### className

• `Optional` **className**: `string`

#### Defined in

[components/scrollBar/index.tsx:35](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L35)

---

### direction

• `Optional` **direction**: [`DirectionKind`](../enums/molecule.component.DirectionKind)

#### Defined in

[components/scrollBar/index.tsx:36](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L36)

---

### inactiveHidden

• `Optional` **inactiveHidden**: `boolean`

#### Defined in

[components/scrollBar/index.tsx:32](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L32)

---

### isShowShadow

• `Optional` **isShowShadow**: `boolean`

#### Defined in

[components/scrollBar/index.tsx:37](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L37)

---

### style

• `Optional` **style**: `CSSProperties`

#### Defined in

[components/scrollBar/index.tsx:33](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L33)

---

### trackStyle

• `Optional` **trackStyle**: `CSSProperties`

#### Defined in

[components/scrollBar/index.tsx:34](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L34)

## Methods

### onScroll

▸ `Optional` **onScroll**(`evt`, `e`): `void`

#### Parameters

| Name  | Type                                                   |
| :---- | :----------------------------------------------------- |
| `evt` | [`IScrollEvent`](molecule.component.IScrollEvent)      |
| `e`   | `MouseEvent` \| `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[components/scrollBar/index.tsx:38](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L38)

---

### onScrollEnd

▸ `Optional` **onScrollEnd**(`evt`, `e`): `void`

#### Parameters

| Name  | Type                                                   |
| :---- | :----------------------------------------------------- |
| `evt` | [`IScrollEvent`](molecule.component.IScrollEvent)      |
| `e`   | `MouseEvent` \| `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[components/scrollBar/index.tsx:43](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L43)

---

### onScrollStart

▸ `Optional` **onScrollStart**(`evt`, `e`): `void`

#### Parameters

| Name  | Type                                                   |
| :---- | :----------------------------------------------------- |
| `evt` | [`IScrollEvent`](molecule.component.IScrollEvent)      |
| `e`   | `MouseEvent` \| `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Defined in

[components/scrollBar/index.tsx:39](https://github.com/DTStack/molecule/blob/927b7d39/src/components/scrollBar/index.tsx#L39)
