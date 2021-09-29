---
id: 'molecule.IActivityBarController'
title: 'Interface: IActivityBarController'
sidebar_label: 'IActivityBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IActivityBarController

## Methods

### onChange

▸ `Optional` **onChange**(`prevSelected?`, `nextSelected?`): `void`

Called when activity bar item which is not global is changed

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `prevSelected?` | `string` |
| `nextSelected?` | `string` |

#### Returns

`void`

#### Defined in

[src/controller/activityBar.ts:38](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/activityBar.ts#L38)

---

### onClick

▸ `Optional` **onClick**(`selectedKey`, `selectedNode`): `void`

Called when activity bar item is clicked

#### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `selectedKey`  | `string`                                        |
| `selectedNode` | [`IActivityBarItem`](molecule.IActivityBarItem) |

#### Returns

`void`

#### Defined in

[src/controller/activityBar.ts:34](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/activityBar.ts#L34)

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

[src/controller/activityBar.ts:39](https://github.com/DTStack/molecule/blob/1b0aa04/src/controller/activityBar.ts#L39)
