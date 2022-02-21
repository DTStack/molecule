---
id: 'molecule.IMenuBarController'
title: 'Interface: IMenuBarController'
sidebar_label: 'IMenuBarController'
custom_edit_url: null
---

[molecule](../namespaces/molecule).IMenuBarController

## Hierarchy

-   `Partial`<[`Controller`](../classes/molecule.react.Controller)\>

    ↳ **`IMenuBarController`**

## Methods

### count

▸ `Optional` **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

Partial.count

#### Defined in

[src/common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L28)

---

### emit

▸ `Optional` **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Inherited from

Partial.emit

#### Defined in

[src/common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L20)

---

### getMenuBarDataByMode

▸ `Optional` **getMenuBarDataByMode**(`mode`, `menuData`): [`IMenuBarItem`](molecule.model.IMenuBarItem)[]

#### Parameters

| Name       | Type                                            |
| :--------- | :---------------------------------------------- |
| `mode`     | `"horizontal"` \| `"vertical"`                  |
| `menuData` | [`IMenuBarItem`](molecule.model.IMenuBarItem)[] |

#### Returns

[`IMenuBarItem`](molecule.model.IMenuBarItem)[]

#### Defined in

[src/controller/menuBar.ts:32](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L32)

---

### initView

▸ `Optional` `Abstract` **initView**(): `void`

#### Returns

`void`

#### Inherited from

Partial.initView

#### Defined in

[src/react/controller.ts:4](https://github.com/DTStack/molecule/blob/b5324fcf/src/react/controller.ts#L4)

---

### onClick

▸ **onClick**(`event`, `item`): `void`

#### Parameters

| Name    | Type                                          |
| :------ | :-------------------------------------------- |
| `event` | `MouseEvent`<`any`, `any`\>                   |
| `item`  | [`IMenuBarItem`](molecule.model.IMenuBarItem) |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:25](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L25)

---

### onSelect

▸ `Optional` **onSelect**(`key`, `item?`): `void`

#### Parameters

| Name    | Type                                                  |
| :------ | :---------------------------------------------------- |
| `key`   | `UniqueId`                                            |
| `item?` | [`IActivityBarItem`](molecule.model.IActivityBarItem) |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:24](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L24)

---

### subscribe

▸ `Optional` **subscribe**(`name`, `callback`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `callback` | `Function`             | Callback function |

#### Returns

`void`

#### Inherited from

Partial.subscribe

#### Defined in

[src/common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L11)

---

### unsubscribe

▸ `Optional` **unsubscribe**(`name`): `void`

Unsubscribe the specific event

#### Parameters

| Name   | Type  | Description    |
| :----- | :---- | :------------- |
| `name` | `any` | The event name |

#### Returns

`void`

#### Inherited from

Partial.unsubscribe

#### Defined in

[src/common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/b5324fcf/src/common/event/eventBus.ts#L37)

---

### updateActivityBar

▸ `Optional` **updateActivityBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:29](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L29)

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

[src/controller/menuBar.ts:26](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L26)

---

### updateMenuBar

▸ `Optional` **updateMenuBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:28](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L28)

---

### updateMenuBarMode

▸ `Optional` **updateMenuBarMode**(`mode`): `void`

#### Parameters

| Name   | Type                           |
| :----- | :----------------------------- |
| `mode` | `"horizontal"` \| `"vertical"` |

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:31](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L31)

---

### updateSideBar

▸ `Optional` **updateSideBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:30](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L30)

---

### updateStatusBar

▸ `Optional` **updateStatusBar**(): `void`

#### Returns

`void`

#### Defined in

[src/controller/menuBar.ts:27](https://github.com/DTStack/molecule/blob/b5324fcf/src/controller/menuBar.ts#L27)
