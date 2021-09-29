---
id: 'molecule.IStatusBarController'
title: 'Interface: IStatusBarController'
sidebar_label: 'IStatusBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IStatusBarController

## Methods

### onClick

▸ `Optional` **onClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>              |
| `item` | [`IStatusBarItem`](molecule.IStatusBarItem)<`any`\> |

#### Returns

`void`

#### Defined in

[src/controller/statusBar.tsx:10](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/statusBar.tsx#L10)

---

### onContextMenuClick

▸ `Optional` **onContextMenuClick**(`e`, `item`): `void`

#### Parameters

| Name   | Type                                                                 |
| :----- | :------------------------------------------------------------------- |
| `e`    | `MouseEvent`<`Element`, `MouseEvent`\>                               |
| `item` | `undefined` \| [`IMenuItemProps`](molecule.component.IMenuItemProps) |

#### Returns

`void`

#### Defined in

[src/controller/statusBar.tsx:11](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/statusBar.tsx#L11)
