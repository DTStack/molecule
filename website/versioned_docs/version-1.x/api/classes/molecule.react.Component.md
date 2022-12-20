---
id: 'molecule.react.Component'
title: 'Class: Component<S>'
sidebar_label: 'Component'
custom_edit_url: null
---

[molecule](../namespaces/molecule).[react](../namespaces/molecule.react).Component

## Type parameters

| Name | Type  |
| :--- | :---- |
| `S`  | `any` |

## Hierarchy

-   [`GlobalEvent`](molecule.event.GlobalEvent)

    ↳ **`Component`**

    ↳↳ [`LocaleService`](molecule.LocaleService)

    ↳↳ [`IActivityBarService`](../interfaces/molecule.IActivityBarService)

    ↳↳ [`ActivityBarService`](molecule.ActivityBarService)

    ↳↳ [`IAuxiliaryBarService`](../interfaces/molecule.IAuxiliaryBarService)

    ↳↳ [`AuxiliaryBarService`](molecule.AuxiliaryBarService)

    ↳↳ [`IMenuBarService`](../interfaces/molecule.IMenuBarService)

    ↳↳ [`MenuBarService`](molecule.MenuBarService)

    ↳↳ [`ISidebarService`](../interfaces/molecule.ISidebarService)

    ↳↳ [`SidebarService`](molecule.SidebarService)

    ↳↳ [`IEditorService`](../interfaces/molecule.IEditorService)

    ↳↳ [`EditorService`](molecule.EditorService)

    ↳↳ [`IStatusBarService`](../interfaces/molecule.IStatusBarService)

    ↳↳ [`StatusBarService`](molecule.StatusBarService)

    ↳↳ [`IExplorerService`](../interfaces/molecule.IExplorerService)

    ↳↳ [`ExplorerService`](molecule.ExplorerService)

    ↳↳ [`IFolderTreeService`](../interfaces/molecule.IFolderTreeService)

    ↳↳ [`FolderTreeService`](molecule.FolderTreeService)

    ↳↳ [`IEditorTreeService`](../interfaces/molecule.IEditorTreeService)

    ↳↳ [`EditorTreeService`](molecule.EditorTreeService)

    ↳↳ [`ISearchService`](../interfaces/molecule.ISearchService)

    ↳↳ [`SearchService`](molecule.SearchService)

    ↳↳ [`IPanelService`](../interfaces/molecule.IPanelService)

    ↳↳ [`PanelService`](molecule.PanelService)

    ↳↳ [`ILayoutService`](../interfaces/molecule.ILayoutService)

    ↳↳ [`LayoutService`](molecule.LayoutService)

    ↳↳ [`INotificationService`](../interfaces/molecule.INotificationService)

    ↳↳ [`NotificationService`](molecule.NotificationService)

    ↳↳ [`IProblemsService`](../interfaces/molecule.IProblemsService)

    ↳↳ [`ProblemsService`](molecule.ProblemsService)

## Implements

-   [`IComponent`](../interfaces/molecule.react.IComponent)<`S`\>

## Constructors

### constructor

• **new Component**<`S`\>()

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `S`  | `any` |

#### Overrides

[GlobalEvent](molecule.event.GlobalEvent).[constructor](molecule.event.GlobalEvent#constructor)

#### Defined in

[react/component.ts:47](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L47)

## Properties

### \_event

• `Private` **\_event**: [`EventEmitter`](molecule.event.EventEmitter)

#### Defined in

[react/component.ts:45](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L45)

---

### state

• `Protected` `Abstract` **state**: `S`

#### Defined in

[react/component.ts:44](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L44)

## Methods

### count

▸ **count**(`name`): `number`

Count the service event

#### Parameters

| Name   | Type     | Description |
| :----- | :------- | :---------- |
| `name` | `string` | Event name  |

#### Returns

`number`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[count](molecule.event.GlobalEvent#count)

#### Defined in

[common/event/eventBus.ts:28](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L28)

---

### emit

▸ **emit**(`name`, ...`args`): `void`

Emit the service event

#### Parameters

| Name      | Type     | Description |
| :-------- | :------- | :---------- |
| `name`    | `string` | Event name  |
| `...args` | `any`    | Arguments   |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[emit](molecule.event.GlobalEvent#emit)

#### Defined in

[common/event/eventBus.ts:20](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L20)

---

### forceUpdate

▸ **forceUpdate**(): `void`

Force to update the Component

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[forceUpdate](../interfaces/molecule.react.IComponent#forceupdate)

#### Defined in

[react/component.ts:81](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L81)

---

### getState

▸ **getState**(): `S`

Get the Component state

#### Returns

`S`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[getState](../interfaces/molecule.react.IComponent#getstate)

#### Defined in

[react/component.ts:85](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L85)

---

### onUpdateState

▸ **onUpdateState**(`listener`): `void`

Listen to the Component state update event

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `listener` | (`prevState`: `S`, `nextState`: `S`) => `void` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[onUpdateState](../interfaces/molecule.react.IComponent#onupdatestate)

#### Defined in

[react/component.ts:73](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L73)

---

### removeOnUpdateState

▸ **removeOnUpdateState**(`listener?`): `void`

Remove the Component update event listening, default is remove all,
also you can remove one by pass the listener

#### Parameters

| Name        | Type       |
| :---------- | :--------- |
| `listener?` | `Function` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[removeOnUpdateState](../interfaces/molecule.react.IComponent#removeonupdatestate)

#### Defined in

[react/component.ts:77](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L77)

---

### render

▸ **render**(`nextState?`): `void`

Initiative notify the component to render the view by the state

#### Parameters

| Name         | Type |
| :----------- | :--- |
| `nextState?` | `S`  |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[render](../interfaces/molecule.react.IComponent#render)

#### Defined in

[react/component.ts:69](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L69)

---

### setState

▸ **setState**(`values`, `callback?`): `void`

Set the state values, and notify the view component to re render

#### Parameters

| Name        | Type                                           | Description                |
| :---------- | :--------------------------------------------- | :------------------------- |
| `values`    | `Partial`<`S`\>                                | update target state values |
| `callback?` | (`prevState`: `S`, `nextState`: `S`) => `void` | -                          |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/molecule.react.IComponent).[setState](../interfaces/molecule.react.IComponent#setstate)

#### Defined in

[react/component.ts:56](https://github.com/DTStack/molecule/blob/927b7d39/src/react/component.ts#L56)

---

### subscribe

▸ **subscribe**(`name`, `listener`): `void`

Subscribe the service event

#### Parameters

| Name       | Type                   | Description       |
| :--------- | :--------------------- | :---------------- |
| `name`     | `string` \| `string`[] | Event name        |
| `listener` | `Function`             | Listener function |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[subscribe](molecule.event.GlobalEvent#subscribe)

#### Defined in

[common/event/eventBus.ts:11](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L11)

---

### unsubscribe

▸ **unsubscribe**(`name`, `listener?`): `void`

Unsubscribe the specific event and the listener function

#### Parameters

| Name        | Type       | Description                                                                 |
| :---------- | :--------- | :-------------------------------------------------------------------------- |
| `name`      | `any`      | The event name                                                              |
| `listener?` | `Function` | optional, it unsubscribes events via name if not pass the listener function |

#### Returns

`void`

#### Inherited from

[GlobalEvent](molecule.event.GlobalEvent).[unsubscribe](molecule.event.GlobalEvent#unsubscribe)

#### Defined in

[common/event/eventBus.ts:37](https://github.com/DTStack/molecule/blob/927b7d39/src/common/event/eventBus.ts#L37)
