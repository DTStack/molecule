---
id: 'molecule.IMenuBarController'
title: 'Interface: IMenuBarController'
sidebar_label: 'IMenuBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IMenuBarController

## Methods

### onClick

▸ **onClick**(`event`, `item`): `void`

#### Parameters

| Name    | Type                        |
| :------ | :-------------------------- |
| `event` | `MouseEvent`<`any`, `any`\> |
| `item`  | `IMenuBarItem`              |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L34)

---

### onSelect

▸ `Optional` **onSelect**(`key`, `item?`): `void`

#### Parameters

| Name    | Type                                            |
| :------ | :---------------------------------------------- |
| `key`   | `string`                                        |
| `item?` | [`IActivityBarItem`](molecule.IActivityBarItem) |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:33](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L33)

---

### updateActivityBar

▸ `Optional` **updateActivityBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L38)

---

### updateFocusinEle

▸ `Optional` **updateFocusinEle**(`ele`): `void`

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `ele` | `null` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:35](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L35)

---

### updateMenuBar

▸ `Optional` **updateMenuBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:37](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L37)

---

### updateSideBar

▸ `Optional` **updateSideBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L39)

---

### updateStatusBar

▸ `Optional` **updateStatusBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:36](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/menuBar.ts#L36)
