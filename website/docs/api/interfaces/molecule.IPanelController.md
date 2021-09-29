---
id: 'molecule.IPanelController'
title: 'Interface: IPanelController'
sidebar_label: 'IPanelController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IPanelController

## Methods

### onClose

▸ `Optional` **onClose**(`key?`): `void`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`void`

#### Defined in

[src/controller/panel.tsx:18](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/panel.tsx#L18)

---

### onTabChange

▸ `Optional` **onTabChange**(`key`): `void`

#### Parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `key` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

[src/controller/panel.tsx:16](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/panel.tsx#L16)

---

### onToolbarClick

▸ `Optional` **onToolbarClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                                    |
| :----- | :---------------------------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                                  |
| `item` | [`IActionBarItemProps`](molecule.component.IActionBarItemProps)<`any`\> |

#### Returns

`void`

#### Defined in

[src/controller/panel.tsx:17](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/panel.tsx#L17)
